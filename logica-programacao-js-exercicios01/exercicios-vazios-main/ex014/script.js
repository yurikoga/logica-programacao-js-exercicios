
exercicio()
function exercicio() {

    let x = 1

    function tentativas() {
        return x++
    } // função que é chamada incrementando o x para mais um e retornando o valor já incrementado

    let entrada = prompt("Digite o medida da lateral do auqdrado\nse tiver casas decimais use o '.'(ponto-final) ")
    while (isNaN(Number(entrada)) || entrada.trim() == "") {
        entrada = prompt(`${tentativas()}° erro`)
    }

    const area = entrada * 2
    const resultadoFormatado = area.toFixed(3); //limita o número de casas decimais

    alert(`A Area do quadrado é igual a ${resultadoFormatado}m²\n(O ponto-final representa a vírgula)`);

}
