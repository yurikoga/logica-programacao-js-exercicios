//Classificação de Nota Escolar
//Receba uma nota de 0 a 10 e exiba  "Excelente"  (nota  9),  "Bom"  (nota entre 7 e 8),  "Regular"  (nota entre 5 e 6), ou  "Insuficiente"  (nota abaixo de 5).
//Requisito Use operadores relacionais e o operador ternário para a classificação.

let nota = Number(prompt(`Digite a nota escolar:`))

let boletim = nota >= 9? `Excelente`:nota >= 7 && nota <= 8? `Bom`: nota >= 5 && nota <= 6? `Regular`: `Insulficiente`

console.log(boletim)