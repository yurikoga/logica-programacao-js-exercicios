//Receba o peso e a altura de uma pessoa e calcule o IMC (peso / altura²). 
//Classifique o IMC em:  "Abaixo do peso"  IMC < 18.5,  "Peso normal"  18.5 || 24.9,  "Sobrepeso"  25 || 29.9, ou  "Obesidade"  IMC > 30. Requisito Use operadores aritméticos, relacionais e o operador ternário

let lista = document.querySelector("#listagem")

let peso = Number(prompt(`Digite seu peso:`))
let altura = Number(prompt(`Digite sua altura:`))

let imc = peso / (altura**2)

for(let repeticao=1; repeticao < 5;repeticao++ ){
    let classificacao = imc < 18.5 ? `Abaixo do peso`: imc >= 18.5 && imc <= 24.9? `Peso Normal`: imc >= 25 && imc <= 29.9 ? `Sobrepeso`:`Obesidade`

    lista.innerHTML += `${imc.toFixed(2)} ${classificacao}<br>`

    /* console.log(`${imc.toFixed(2)} ${classificacao}`) */

    imc += repeticao + 5
}
