
exercicio()
function exercicio() {

    let x = 1

    function um() {
        return x = 1
    }

    function tentativas() {
        return x++
    }

    let num_um = Number(prompt("Digite um número"))
    while (isNaN(num_um)) {
        num_um = Number(prompt(`${tentativas()}° erro`))
    }

    um()

    let num_dois = Number(prompt("Digite um número"))
    while (isNaN(num_dois)) {
        num_dois = Number(prompt(`${tentativas()}° erro`))
    }

    const divisao = num_um / num_dois


    if (num_dois == 0 && num_um == 0) {
        alert("Aí se me quebra. 0/0 não!")
        return exercicio()
    } else if (num_dois == 0) {
        alert("Não é possível dividir por zero")
        return exercicio()
    }

    alert(`A divisão dos números é igual a ${divisao}`);

}
