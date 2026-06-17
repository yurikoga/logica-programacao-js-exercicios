//Receba uma temperatura e uma unidade ("C" para Celsius e "F" para Fahrenheit) e converta a temperatura para a unidade oposta.
//Requisito Use operadores aritméticos e o operador ternário para a conversão correta

const unidade = prompt(`Digite a unidade 'C' / 'F':`)
const temperatura = Number(prompt(`Digite a temperatura:`))

const temperaturaAlterada = unidade.toLocaleUpperCase() == 'C'?((temperatura*1.8)+32).toFixed(2) + "°F" : unidade.toLocaleUpperCase() =='F'?((temperatura-32)/1.8).toFixed(2) + "°C":`tente novamente!`

console.log(temperaturaAlterada)