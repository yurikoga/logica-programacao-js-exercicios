//Receba um número e determine se ele é positivo, negativo ou zero.
//Requisito Use operadores relacionais e o operador ternário para a classificação

let num = Number(prompt(`Digite um número:`))

let tipagem = num >= 1? `Postivo`: num <= -1? `Negativo`:`Zero`

alert(tipagem)