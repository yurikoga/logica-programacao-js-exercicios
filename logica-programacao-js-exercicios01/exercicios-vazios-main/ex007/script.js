
exercicio()
function exercicio() {

    let x = 1

    function um() {
        return x = 1
    }

    function tentativas() {
        return x++
    } // função que é chamada incrementando o x para mais um e retornando o valor já incrementado

    let num_um = Number(prompt("Digite um número, se tiver casas decimais use o '.'(ponto-final) "))
    while (isNaN(num_um)) {
        num_um = Number(prompt(`${tentativas()}° erro`))
    }

    um()

    let num_dois = Number(prompt("Digite outro número, se tiver casas decimais use o '.'(ponto-final) "))
    while (isNaN(num_dois)) {
        num_dois = Number(prompt(`${tentativas()}° erro`))
    }

    const multi = num_um * num_dois
    const resultadoFormatado = multi.toFixed(2); //limita o número de casas decimais

    alert(`A multiplicação dos números é igual a ${resultadoFormatado}`);

}
