//Salário com Bônus
//Pergunte ao usuário o valor de um salário e o valor de um bônus. Exiba o valor total com o bônus incluído

let x = 1

function acumuladorTentativas(){
    return x++
}

function resetTentativas(){
    x = 1
}

let salario = prompt("Digite o valor do seu sálario")
while (isNaN(Number(salario)) || salario.trim() === "") {
    salario = prompt(`${acumuladorTentativas()}° tentativa`)
}

resetTentativas()

let bonus = prompt("Digite o valor do seu bônus")
while (isNaN(Number(bonus)) || bonus.trim() === "") {
    bonus = prompt(`${acumuladorTentativas()}° tentativa`)
}

let sasalario = Number(salario) 
let bobonus = Number(bonus)
let total = sasalario + bobonus

alert(`A soma do seu bônus:${bobonus} + o seu salário:${sasalario} = ${total}`)