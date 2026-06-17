//Média Simples de 4 Valores
//Pergunte ao usuário quatro valores. Exiba a média simples deles

let acumulador = 0
let y = 0
let entrada = 0

for(let x = 1; x<5; x++){
    entrada = Number(prompt(`Digite o ${x}° número`))
    acumulador += entrada
    y++
}

let mediaSimples = acumulador / y

alert(`A media simples dos ${y} números digitados é ${mediaSimples}`)