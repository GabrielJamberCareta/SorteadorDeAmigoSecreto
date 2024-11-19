function sortear() {
let quantidade = parseInt(document.getElementById('quantidade').value);
let de = parseInt(document.getElementById('de').value);
let ate = parseInt(document.getElementById('ate').value);
let sorteados = [];
let numero;

if (de >= ate) {
    alert(`Capo "Do número" deve ser inferior ao campo "Até o número". Verifique!`);
    return;
}

if (quantidade > (ate - de + 1)) {
    alert(`Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!`);
    return;
}


if(de >= ate) {
    alert(`Não é possivel utilizar o operador DE pois ele é maior que o operador ATE`);
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';  

    } else {
        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);
        
            while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            };
    
            sorteados.push(numero);
            alterarStatusBotao();
        };
    
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    };
};

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}