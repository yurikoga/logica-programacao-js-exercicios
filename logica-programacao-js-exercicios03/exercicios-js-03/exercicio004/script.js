//Escreva um programa que compara as idades de duas pessoas e exibe quem é mais velho ou se têm a mesma idade.
//Requisito Use operadores relacionais e o operador ternário para a comparação.

let primeiraIdade = Number(prompt(`Digite a idade da primeira Pessoa`))
let segundaIdade = Number(prompt(`Digite a idade da segunda Pessoa`))

let mensagem = primeiraIdade == segundaIdade ? "Ambos tem a mesma idade": primeiraIdade > segundaIdade? "Primeiro é mais velho":"Segundo é mais velho"

alert(mensagem)