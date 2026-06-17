//Peça ao usuário que insira três valores monetários. Calcule a média desses valores e exiba o resultado formatado em moeda brasileira R$

let contadorUser = 3
let acumulador = 0

for (let comparativo = 1; comparativo <= contadorUser; comparativo++) {
    let valor = prompt(`Digite o ${comparativo} valor monetário:\nUse (ponto-final) no lugar sa (vígula)`)
    while (isNaN(parseFloat(valor)) || valor.trim() === "") {
        valor = prompt(`Digitação errada. Digite novamente:\nUse (ponto-final) no lugar sa (vígula)`)
    }
    const valorObtido = parseFloat(valor)
    acumulador += valorObtido
}

const media = acumulador / contadorUser

const numeroFormatado = media.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

alert(`A Média simples do três valores monetários foi de:\n${numeroFormatado}`)