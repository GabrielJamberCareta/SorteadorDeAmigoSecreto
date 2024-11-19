function comprar() {
    // Verificar tipo do ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso');

    // Quantidade de ingressos
    let qtd = parseInt(document.getElementById('qtd').value);

    // Estão disponiveis?

    if (tipoIngresso.value == 'pista') {
        comprarPista(qtd);
    } else if (tipoIngresso.value == 'superior') {
        comprarSuperior(qtd);
    } else if (tipoIngresso.value == 'inferior') {
        comprarInferior(qtd);
    }

}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade Indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade Indisponível para tipo Superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade Indisponível para tipo Inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}