
exercicio()
function exercicio() {

    let x = 1

    function tentativas() {
        return x++
    } // função que é chamada incrementando o x para mais um e retornando o valor já incrementado

    function redefinindoContador(){
        x=1
    }

    let entrada = prompt("Digite o medida da primeira lateral do quadrado\nse tiver casas decimais use o '.'(ponto-final) ")
    while (isNaN(Number(entrada)) || entrada.trim() == "") {
        entrada = prompt(`${tentativas()}° erro`)
    }

    redefinindoContador()

    let entrada_02 = prompt("Digite o medida da segunda lateral do quadrado\nse tiver casas decimais use o '.'(ponto-final) ")
    while (isNaN(Number(entrada_02)) || entrada_02.trim() == "") {
        entrada_02 = prompt(`${tentativas()}° erro`)
    }

    const area = entrada * entrada_02
    const resultadoFormatado = area.toFixed(3); //limita o número de casas decimais

    alert(`A Area do retangulo é igual a ${resultadoFormatado}m²\n(O ponto-final representa a vírgula)`);

}
