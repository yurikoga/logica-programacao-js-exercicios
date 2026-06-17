
exercicio()
function exercicio() {

    let x = 1

    function tentativas() {
        return x++
    }

    let entrada = prompt("Digite um número para saber sua tabuada completa\n(De 0 até 10")
    while (isNaN(Number(entrada)) || entrada.trim() == "") {
        entrada = prompt(`${tentativas()}° erro`)
    }

    let num = Number(entrada)
    let acumuladorHTML = ""
    
    for(let x=0; x <= 10; x++){
        let resul = entrada*x
        acumuladorHTML += `${x} * ${num} = ${resul}<br>`
    }
    
    document.getElementById("resultado").innerHTML = acumuladorHTML

}
