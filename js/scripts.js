// Animação de 'Produtos'

function alternarInformacoes() {
    // AÇÃO DO CLICK
    this.classList.toggle('ativo');
}

function configurarCards() {
    // CONFIGURAÇÃO DOS EVENTOS
    let cardCafe = document.querySelectorAll('.cafe');
    cardCafe.forEach(function(card) {
        card.addEventListener('click', alternarInformacoes);
    });
}

document.addEventListener('DOMContentLoaded', configurarCards);