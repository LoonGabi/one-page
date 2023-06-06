// Obtém o elemento que deseja alterar a cor
var elemento = document.getElementById("seu-elemento");

const nav = document.querySelector(".header");

// Adiciona um evento de rolagem ao objeto window
window.addEventListener("scroll", function() {
    // Obtém a posição vertical atual do usuário
    var posicaoScroll = window.scrollY;

    // Define a posição em que deseja que a cor seja aplicada
    var posicaoLimite = 100; // Exemplo: 200 pixels

    // Verifica se a posição de rolagem é maior que a posição limite
    if (posicaoScroll > posicaoLimite) {
        // Aplica a cor desejada ao elemento
        nav.style.backgroundColor = "#fff"; // Exemplo: vermelho
        nav.style.width = "100vw";
    } else {
        // Remove a cor do nav (volta ao estado inicial)
        nav.style.backgroundColor = ""; // Retorna à cor padrão ou vazio para remover qualquer cor definida
    }
});





