const amigo = document.getElementById('amigo');
const amigoSorteado = document.getElementById('resultado');
const listaAmigos = document.getElementById('listaAmigos');
let amigos = [];

function adicionarAmigo() {
    if(amigo.value === '') {
        alert('Por favor, insira um nome.')
    }
    else {
        amigos.push(amigo.value);
        amigo.value = '';
        atualizarLista();
    }
}

function atualizarLista() {
    listaAmigos.innerHTML = '';
    amigos.forEach(a => {
        const amigoItem = document.createElement('li');
        amigoItem.innerHTML = a;
        listaAmigos.appendChild(amigoItem);
    })
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert('Não há amigos para serem sorteados.');
    }
    else {
        const indexSorteado = Math.floor(Math.random() * amigos.length);
        const nome = amigos[indexSorteado];
        amigoSorteado.innerHTML = `Seu amigo secreto é ${nome}!`;
        listaAmigos.innerHTML = '';
        amigos = [];
    }
}
