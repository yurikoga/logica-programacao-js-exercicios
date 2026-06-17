// Área do Triângulo
// Pergunte ao usuário a base e a altura de um triângulo. Exiba a área desse triângulo.


exercicio()
function exercicio() {

    let x = 1

    function tentativas() {
        return x++
    } // função que é chamada incrementando o x para mais um e retornando o valor já incrementado

    function redefinindoContador(){
        x=1
    }

    let entrada = prompt("Digite a primeira medida\nse tiver casas decimais use o '.'(ponto-final) ")
    while (isNaN(Number(entrada)) || entrada.trim() == "") {
        entrada = prompt(`${tentativas()}° erro`)
    }

    redefinindoContador()

    let entrada_02 = prompt("Digite a segunda medida\nse tiver casas decimais use o '.'(ponto-final) ")
    while (isNaN(Number(entrada_02)) || entrada_02.trim() == "") {
        entrada_02 = prompt(`${tentativas()}° erro`)
    }

    const area = (entrada * entrada_02) / 2
    const resultadoFormatado = area.toFixed(3); //limita o número de casas decimais

    alert(`A Area do triangulo é igual a ${resultadoFormatado}m²\n(O ponto-final representa a vírgula)`);

}
