
exercicio()
function exercicio() {

    let x = 1

    function resetarContador() {
        return x = 1
    }

    function contadorTentativas() {
        return x++
    } // função que é chamada incrementando o x para mais um e retornando o valor já incrementado

    let num_um = Number(prompt("Digite um número"))
    while (isNaN(num_um)) {
        num_um = Number(prompt(`${contadorTentativas()}° erro`))
    }

    resetarContador()

    let num_dois = Number(prompt("Digite outro número"))
    while (isNaN(num_dois)) {
        num_dois = Number(prompt(`${contadorTentativas()}° erro`))
    }

    const sub = num_um - num_dois

    alert(`A subtração dos números ${num_um} - ${num_dois} = ${sub}`);

}
