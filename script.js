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


var listaProdutos = [
    // {} chave/nomeVariavel: valor
    { img: "smartv.png", titulo: "tv", descricao: "tv 50 polegas, samsung smartv luz de led", preco: 2000 },
    { img: "smartv.png", titulo: "tv led", descricao: "tv 40 polegas, samsung smartv luz de led", preco: 1500 },
    { img: "smartv.png", titulo: "tv sobre", descricao: "tv 20 polegas, samsung smartv luz de led", preco: 1000 }
]

var listaCarrinho = [];

function exibirCarrinho(){
    for (var i = 0; i < listaCarrinho.length; i++) {
        // armazenando a TAG HTML <div id="carrinho"></div> dentro de uma variavel
        // id = identificador (CPF)
        var ulListaCarrinho = document.getElementById("carrinho");

        // innerHTML -> propriedade que EDITA O HTML
        // += -> sua funcionalidade é criar um novo item <li> ao inves de substituir o anterior
        ulListaCarrinho.innerHTML += `<li>
                                        <p>${listaCarrinho[i].titulo}</p>
                                        <p style="color: green"> ${listaCarrinho[i].preco}</p>
                                      </li>
                                    `;
    }
}


function addCarrinho(index){
    // buscando UM elemento dentro do array pela sua POSICAO
    // listaProdutos[index]
    
    // push -> adiciona um elemento no final do array
    listaCarrinho.push(listaProdutos[index]);
    exibirCarrinho();
 }

 function exibirLista() {
    for (var i = 0; i < listaProdutos.length; i++) {
        // armazenando a TAG HTML <div id="lista"></div> dentro de uma variavel
        // id = identificador (CPF)
        var ulListaProdutos = document.getElementById("lista");

        // innerHTML -> propriedade que EDITA O HTML
        // += -> sua funcionalidade é criar um novo item <li> ao inves de substituir o anterior
        ulListaProdutos.innerHTML += `<li>
                                        <img src="${listaProdutos[i].img}">    
                                        <h1>${listaProdutos[i].titulo}</h1>
                                        <p>${listaProdutos[i].descricao} </p>
                                        <p style="color: gray; text-decoration: line-through;"> ${listaProdutos[i].preco * 2}</p>
                                        <p style="color: green"> ${listaProdutos[i].preco}</p>
                                        <button onclick="addCarrinho(${i})" style="background-color: green; color: white; border-radius: 5px; padding: 10px">adicionar ao carrinho</button>
                                      </li>
                                    `
    }
}
