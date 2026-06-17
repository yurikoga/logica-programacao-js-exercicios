//Peça ao usuário que insira seu primeiro nome. Exiba o nome em letras maiúsculas e, em seguida, mostre a quantidade de letras que ele possui.

/* let nome = prompt("Digite seu primeiro nome com o 'CapsLock' ativado :")

let nomeMinusculo = nome.toLocaleUpperCase()

let contagem = nomeMinusculo.replace(/\s/g,"")
let contLetras = contagem.length

alert(`Olá ${nome}!\nNome em letras maiúscula: ${nomeMinusculo}\nQuantidade de letras: ${contLetras}`) */

let nome = prompt("Digite seu primeiro nome com o 'CapsLock' ativado :")
alert(`${nome.toLocaleUpperCase()} ${nome.replace(/\s/g,"").length}`)