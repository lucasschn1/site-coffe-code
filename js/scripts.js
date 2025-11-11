/* 
   ----------------------
   Animação de 'Produtos'
   ----------------------
*/

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

/* 
   -------------------
   Carregar menu.html 
   -------------------
*/

async function carregarMenu() { 
    try {
        const resposta = await fetch('menu.html');

        // Vertificar requisição do Menu
        if (!resposta.ok) {
            throw new Error(`Erro ao carregar Menu: ${resposta}`);
        }

        const menuHtml = await resposta.text();
        const elementoMenu = document.getElementById('menu-principal');

        // Verificar se o elemento existe
        if (!elementoMenu) {
            throw new Error("Elemento 'menu-principal' não encontrado");
        }

        elementoMenu.innerHTML = menuHtml;

    } catch (erro) {
        console.error("Erro ao carregar o menu", erro);
    }
}

document.addEventListener('DOMContentLoaded', carregarMenu);


/* 
   -----------------------------------
   formatar/Validar número de telefone  
   -----------------------------------
*/

function formatarTelefone(event) { 
    let telefone = event.target.value.replace(/\D+/g, "");

    telefone = telefone.substring(0,11); // Números de até 11 digitos

    let telefoneFormatado = "";

    if (telefone.length  > 0) {
        telefoneFormatado = "(" + telefone.substring(0,2);
    }
    
    if (telefone.length  > 2) {
        telefoneFormatado += ") " + telefone.substring(2,7);
    }

    if (telefone.length > 7) {
        telefoneFormatado += "-" + telefone.substring(7);  
    }

    event.target.value = telefoneFormatado
}

