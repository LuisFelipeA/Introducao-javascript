function numerosPares(array) {    //criar funcao e entre parentes os valores que ira usar
    let numPares = [];   //criar lista vazia
    for(let i = 0; i < array.length; i++) {   //repetir enquanto variavel i for menor que comprimento da array. Cada vez que repetir, i = i + 1 (i++)
        if(array[i] % 2 === 0) {   //se o resto da divisao por 2 de numero na posicao i de array for igual a 0
            numPares.push(array[i]);  //add o numero na lista numPares
        }
        else{
            console.log(`${array[i]} não é par`);  //se não for igual a zero, mostrar o valor e a mensagem que não é par
        }
    }
    console.log(numPares); //mostra a lista de numeros pares
}

let numeros = [1, 2, 4, 5, 7, 8];   //array que sera usada

numerosPares(numeros);   //chama a funcao e mostra qual array vai ser usada