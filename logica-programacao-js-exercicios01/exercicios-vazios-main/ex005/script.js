/* Pergunte ao usuário dois valores e exiba a soma deles. */
let x = 1

function um(){
    return x = 1
}

function tentativas(){
    return x++
}

let num_um = Number(prompt("Digite um número"))
while(isNaN(num_um)){
    num_um = Number(prompt(`${tentativas()}° erro`))
}

um()

let num_dois = Number(prompt("Digite um número"))
while(isNaN(num_dois)){
    num_dois = Number(prompt(`${tentativas()}° erro`))
}

const soma = num_um + num_dois

alert(`A soma dos números é igual a ${soma}`);

