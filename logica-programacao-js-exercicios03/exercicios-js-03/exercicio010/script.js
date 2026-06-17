//Escreva um programa que recebe um número e verifica se ele é par ou ímpar.
//Requisito Use o operador de resto  %  e o operador ternário para retornar "Par"  ou  "Ímpar" .

let num = Number(prompt(`Digite um número:`))

let resto = num%2

let estatus = resto == 0? `Par`:`Ímpar`

alert(estatus)