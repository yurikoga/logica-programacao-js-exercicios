// Peça ao usuário que digite um valor numérico. Em seguida, exiba esse valor formatado como moeda brasileira R$, incluindo o símbolo, a vírgula para casas decimais e o ponto para separar as casas de milhar.

let valorNum = prompt("Digite um valor númerico\nNo lugar da ','(vírgula) use '.'(ponto-final)")

while(isNaN(Number(valorNum)) || valorNum.trim() === ""){
    valorNum = prompt("Digite novamente um valor númerico\n|No lugar da ','(vírgula) use '.'(ponto-final)|")
}

let num = Number(valorNum)

let texto = num.toLocaleString('pt-BR', {
    style:'currency',
    currency:'BRL'
})

alert(`O número formatado de maneira apropriada em REAIS fica:\n\n${texto}`)



//metodo aprendido = toLocaleString() usado para converter um número em uma string, usando a formatação local. Ele pode ser útil para exibir números de forma mais legível, como por exemplo, adicionando separadores de milhar ou formatando a moeda de acordo com a localidade do usuário.