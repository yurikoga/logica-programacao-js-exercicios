//Receba três notas e calcule a média final. Exiba se o aluno foi aprovado ou reprovado considerando a média mínima 6.
//Requisito Use operadores aritméticos e o operador ternário para o resultado.

let notas = 0

for(let x = 0; x<3; x++){
    notas += Number(prompt(`Digite a ${x+1}° nota:`))
}

let media = notas/3

let boletim = media >= 6? `Aprovado`:`Reprovado`

alert(`media: ${media.toFixed(1)} | ${boletim}`)

