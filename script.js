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