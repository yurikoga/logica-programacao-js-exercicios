//Receba a temperatura em graus Celsius e determine se o clima está  "Frio"  (abaixo de 15°C),  "Agradável"  (entre 15°C e 25°C) ou  "Quente"  (acima de 25°C).
//Requisito Use operadores relacionais e o operador ternário para a classificação

let temperatura = Number(prompt(`Digite a temperatura em celcius:`))

let clima = temperatura < 15? `Frio`: temperatura >= 15 && temperatura <= 25? `Agradável` : `Quente`

console.log(clima)