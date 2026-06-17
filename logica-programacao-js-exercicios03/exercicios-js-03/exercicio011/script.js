//Receba o valor total da compra e um código de desconto. Se o código for "DESC10" , aplique um desconto de 10%, caso contrário, mantenha o valor original.
//Requisito Use operadores relacionais e o operador ternário para calcular e exibir o preço final.

let valorTotal = Number(prompt(`Digite o valor total da compra:`))
let desc = prompt(`Digite o código do desconto:`)

let aplicacao = (desc.toLocaleUpperCase() == 'DESC10')? valorTotal * 0.90 : valorTotal

console.log(aplicacao)