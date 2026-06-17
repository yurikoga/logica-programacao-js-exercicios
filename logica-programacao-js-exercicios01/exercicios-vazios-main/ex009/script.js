
exercicio()
function exercicio() {

    let x = 1

    function contadorTentativas() {
        return x++
    } // função que é chamada incrementando o x para mais um e retornando o valor já incrementado

    let num_um = Number(prompt("Digite um número"))
    while (isNaN(num_um)) {
        num_um = Number(prompt(`${contadorTentativas()}° erro`))
    }

    const dobro = num_um * 2

    alert(`O Dobro de ${num_um} = ${dobro}`);

}
