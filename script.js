// Seleciona o carrinho e os itens do carrinho
// Função para ativar o modo escuro e salvar a preferência no localStorage
function botaodarkmode() {
    const TOGGLE = document.getElementById("toggle"); // Seleciona o botão de alternância
    let theme = localStorage.getItem("theme"); // Obtém o tema salvo no localStorage

    // Se o tema salvo for "dark", aplica a classe ao <html>
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    }

    // Adiciona um evento de clique ao botão
    TOGGLE.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark"); // Alterna entre modo escuro e claro

        // Atualiza a preferência no localStorage
        theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", theme);
    });
}

// Chama a função ao carregar o script
botaodarkmode();

let cart = [];
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("carrinhoModal");
const cartList = document.getElementById("carrinho");
const total = document.getElementById("total");

// Atualiza o contador de itens no carrinho
function updateCartCount() {
    cartCount.textContent = cart.length;
    updateTotal();
}

// Atualiza o valor total do carrinho
function updateTotal() {
    let totalValue = 0;
    cart.forEach(item => {
        totalValue += item.price;
    });
    total.textContent = `Total: R$ ${totalValue.toFixed(2)}`;
}

// Função para adicionar um item ao carrinho
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
    alert(`${name} foi adicionado ao carrinho.`);
}

// Função para exibir os itens no carrinho
function showCart() {
    cartList.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });
    cartModal.style.display = 'block';
}

// Função para fechar o carrinho
function closeCart() {
    cartModal.style.display = 'none';
}

// Função para fechar o carrinho ao clicar fora da janela
window.onclick = function(event) {
    if (event.target === cartModal) {
        closeCart();
    }
}

// Atribuindo eventos de adicionar ao carrinho nos botões
document.querySelectorAll('.pedir').forEach((button, index) => {
    button.addEventListener('click', () => {
        const itemName = button.previousElementSibling.previousElementSibling.textContent;
        const itemPrice = parseFloat(button.previousElementSibling.querySelector('span').textContent.replace('R$', '').trim());
        addToCart(itemName, itemPrice);
    });
});

// Atribuindo evento para abrir o modal do carrinho
document.getElementById('openCart').addEventListener('click', showCart);

// Atribuindo evento para fechar o carrinho
document.querySelector('#carrinhoModal button').addEventListener('click', closeCart);