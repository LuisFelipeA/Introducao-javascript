var numeroAtual = document.getElementById("numeroAtual");  //chama o id que mostra o numero atual
var numero = 0;  //variavel que ira substituir a atual

function increment(){
    numero = numero + 1;
    numeroAtual.innerHTML = numero;  //vai substituir o valor que esta no html
}

function decrement(){
    numero = numero - 1;
    numeroAtual.innerHTML = numero;
}