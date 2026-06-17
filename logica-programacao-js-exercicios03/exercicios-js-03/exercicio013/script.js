//Receba um nome e verifique se ele tem mais de 5 caracteres.
//Requisito: Use a propriedade  .length  e o operador ternário para retornar "Nome longo"  ou  "Nome curto" .

let nome = prompt(`Digite um nome`)

let tamanhoDefinido = nome.length <= 5? `Nome curto`:`Nome longo`

console.log(tamanhoDefinido)