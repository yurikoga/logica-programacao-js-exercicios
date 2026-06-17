//Receba o preço de um produto e classifique-o como  "Barato"  (menos de 20),  "Médio"  (entre 20 e 100) ou  "Caro"  (acima de 100).
//Requisito: Use operadores relacionais e o operador ternário para a classificação.

const valor = Number(prompt(`Digite o valor do produto`))

const classicacao = valor < 20? `Barato`:valor >= 20 && valor <=100? `Até que está OK`:`Caro`

console.log(`O produto... É ${classicacao}`)