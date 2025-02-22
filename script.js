function botaodarkmode(){
const TOGGLE = document.getElementById("toggle");
const THEME = window.localStorage.getItem("theme");

if (THEME === "dark") document.body.classList.add("light");
TOGGLE.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (THEME === "dark") {
        window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
    });
}; 
botaodarkmode();

let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})



// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    // Cria um objeto do item
    const item = { nome, preco };
    
    // Adiciona o item no array do carrinho
    carrinho.push(item);
    
    // Atualiza a exibição do carrinho
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoElement = document.getElementById("carrinho");
    const totalElement = document.getElementById("total");
    const cartCount = document.getElementById("cartCount");

    // Limpa a lista do carrinho
    carrinhoElement.innerHTML = "";

    // Adiciona cada item do carrinho à lista
    let total = 0;
    carrinho.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoElement.appendChild(li);
        total += item.preco;
    });

    // Atualiza o total
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

    // Atualiza a quantidade de itens no carrinho
    cartCount.textContent = carrinho.length;
}

// Exibe o carrinho quando o ícone de carrinho for clicado
document.getElementById("openCart").addEventListener("click", function () {
    const carrinhoModal = document.getElementById("carrinhoModal");
    carrinhoModal.style.display = "block";
});

// Função para fechar o carrinho
function fecharCarrinho() {
    const carrinhoModal = document.getElementById("carrinhoModal");
    carrinhoModal.style.display = "none";
}

// Adiciona evento para os botões de "pedir agora"
document.querySelectorAll(".pedir").forEach(botao => {
    botao.addEventListener("click", () => {
        const nome = botao.getAttribute("data-nome");
        const preco = parseFloat(botao.getAttribute("data-preco"));
        adicionarAoCarrinho(nome, preco);
    });
});