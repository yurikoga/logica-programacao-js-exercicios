//Peça ao usuário que digite uma frase ou palavra. Depois, exiba o texto com todas as letras em maiúsculas.

let x = 1

let texto = prompt("Digite uma frase com o 'CapsLock' ativado:")
while(texto === null || texto.trim() === ""){
    texto = prompt(`${x}°Tentativa\nDigite uma frase com o 'CapsLock' ativado:`)
    x++
}

const textoConvertido = texto.toLocaleLowerCase();

alert(`Seu texto passou pelo método\n'toLocaleLowerCase()'\n\n${textoConvertido}`)