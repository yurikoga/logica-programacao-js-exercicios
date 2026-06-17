//Escreva um programa que recebe a idade de uma pessoa e verifica se ela é maior de idade 18 anos ou mais).
//Requisito Use um operador relacional e o operador ternário para retornar "Maior de idade"  ou  "Menor de idade" .

let idadeUser = Number(prompt(`Digite sua idade:`))

if(idadeUser > 18){
    alert(`Maior de idade`)
}else{
    alert(`Menor de idade`)
}