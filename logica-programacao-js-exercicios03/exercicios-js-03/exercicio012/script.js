//Receba uma palavra e verifique se ela é  "JavaScript" . Caso seja, exiba  "Você escolheu a linguagem correta!" , caso contrário,  "Escolha outra linguagem" .
//Requisito Use um operador de comparação e o operador ternário para exibir a mensagem

let frase = prompt(`Digite o nome completo da linguagem com "JS:`)

let resposta = (frase.toLocaleUpperCase() == 'JAVASCRIPT')? "Você escolheu a linguagem correta!" : "Escolha outra linguagem"

console.log(resposta)