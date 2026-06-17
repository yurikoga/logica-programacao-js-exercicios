//Receba a idade de uma pessoa e verifique se ela pode tirar carteira de habilitação (idade mínima de 18 anos).
// Use um operador relacional e o operador ternário para retornar "Pode tirar habilitação"  ou  "Não pode tirar habilitação" .

let idade = Number(prompt(`Digite sua idade`))

let permissao = idade >= 18 ? `Pode tirar habilitação`:`Não pode tirar habilitação`

alert(permissao)