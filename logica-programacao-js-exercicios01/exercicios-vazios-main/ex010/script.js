exercicio()
function exercicio() {

    let x = 1

    function contadorTentativas() {
        return x++
    } // função que é chamada incrementando o x para mais um e retornando o valor já incrementado

    let entrada = prompt("Digite um número, caso tenha casas decimais coloque '.' (ponto-final) no lugar da vírgula")
    while (isNaN(Number(entrada)) || entrada.trim() === "" ) {
        entrada = prompt(`${contadorTentativas()}° erro`)
    }
    // o metodo .trim() é utilizado para retirar os espaços em branco do início e do fim da string, caso o usuário digite apenas espaços, o programa irá solicitar novamente a entrada

    const metd = entrada / 2

    alert(`A metade de ${entrada} = ${metd}`);

}
