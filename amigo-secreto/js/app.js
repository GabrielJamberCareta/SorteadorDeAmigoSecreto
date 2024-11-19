let amigos = [];
let amigo = document.getElementById('nome-amigo');
let amigosIncluidos = document.getElementById('lista-amigos');
let listaSorteio = document.getElementById('lista-sorteio');

function adicionar() {
    if (amigo.value === '') {
        alert('Informe o nome do amigo');
        return;
    }

    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!')
        return;
    }

    amigos.push(amigo.value);

    if (amigosIncluidos.textContent == '') {
        amigosIncluidos.textContent = amigo.value;
    } else {
        amigosIncluidos.textContent += `, ${amigo.value}`;
    }

    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos');
        return;
    }

    embaralha(amigos);
    
    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            listaSorteio.innerHTML += `${amigos[i]} --> ${amigos[0]} <br>`
        } else {
            listaSorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]} <br>`
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigosIncluidos.textContent = '';
    listaSorteio.innerHTML = '';
}