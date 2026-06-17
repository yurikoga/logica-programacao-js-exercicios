//Solicite ao usuário que digite uma frase ou palavra. Exiba o texto com todas as letras em minúsculas.

let x = 1

let texto = prompt("Digite uma frase com letras minusculas")
while(texto === null || texto.trim() === ""){
    texto = prompt(`${x}°Tentativa\nDigite uma frase com letras minusculas`)
    x++
}

const textoConvertido = texto.toLocaleUpperCase()

alert(`Seu texto passou pelo método\n'toLocaleUpperCase()'\n\n${textoConvertido}`)