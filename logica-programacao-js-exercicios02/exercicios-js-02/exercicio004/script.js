//Peça ao usuário que digite um nome completo. Exiba o número total de letras.

//usando split e join
/* let x = 1

let nomeCompleto = prompt("Digite seu nome completo no campo abaixo:")
while(nomeCompleto === null || nomeCompleto.trim() === ""){
    nomeCompleto = prompt("Digite seu nome completo no campo abaixo:")
    x++
}

let nomeSemEspaco = nomeCompleto.split(" ").join("")

let tamanhoNome = nomeSemEspaco.length

alert(`Olá, ${nomeCompleto}, o seu nome tem o total de ${tamanhoNome} letras`) */


//usando replace e REGEX
let x = 1

let nomeCompleto = prompt("Digite seu nome completo no campo abaixo:")
while(nomeCompleto === null || nomeCompleto.trim() === ""){
    nomeCompleto = prompt("Digite seu nome completo no campo abaixo:")
    x++
}

const nomeSemEspaco = nomeCompleto.replace(/\s/g, "")

alert(nomeCompleto.replace(/\s/g, ""))
/* const tamanhoNome = nomeSemEspaco.length

alert(`Olá, ${nomeCompleto}, o seu nome tem o total de ${tamanhoNome} letras`) */