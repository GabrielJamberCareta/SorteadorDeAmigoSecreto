// const id1 = document.getElementById('game-1a');
// const id2 = document.getElementById('game-2a');
// const id3 = document.getElementById('game-3a');

// function alterarStatus() {
//     if (id3.classList.contains('dashboard__item__button--return')) {
//         id3.classList.remove('dashboard__item__button--return');
//         id3.innerHTML = '<a onclick="alterarStatus(3)" id="game-3a" class="dashboard__item__button">Alugar</a>';
//     } else if (id3.classList.contains('dashboard__item__button')) {
//         id3.classList.add('dashboard__item__button--return');
//         id3.innerHTML = '<a onclick="alterarStatus(3)" id="game-3a" class="dashboard__item__button dashboard__item__button--return">Devolver</a>';
//     }
// }

// function alterarStatus(button) {
//     // Alterna a classe e o texto do botão
//     if (button.classList.contains('dashboard__item__button--return')) {
//         button.classList.remove('dashboard__item__button--return');
//         button.textContent = 'Alugar';
//     } else {
//         button.classList.add('dashboard__item__button--return');
//         button.textContent = 'Devolver';
//     }
// }

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    if(confirm("Você tem certeza que deseja realizar essa ação?")) {
        alert('Ação Confirmada!');

        if(imagem.classList.contains('dashboard__item__img--retend')) {
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--retend');
            botao.textContent = 'Alugar';
           
        } else {
            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--retend');
            botao.textContent = 'Devolver';
            console.log(`Jogo Alugado`);
        }

    } else {
        alert('Ação Cancelada!')
    }
}