exercicio()
function exercicio() {

    let x = 1

    function contadorTentativas() {
        return x++
    } // Soma 1 e DEPOIS retorna o resultado, ou seja, a primeira vez que a função é chamada, ela retorna 2, a segunda vez retorna 3 e assim por diante

    let entrada = prompt("Digite um número em Reais\nCaso tenha casas decimais coloque '.' (ponto-final) no lugar da vírgula\nEx: 0,20 = 0.20")

    while (isNaN(Number(entrada)) || entrada.trim() === "" ) {
        entrada = prompt(`${contadorTentativas()}° erro`)
    }
    // o metodo .trim() é utilizado para retirar os espaços em branco do início e do fim da string, caso o usuário digite apenas espaços, o programa irá solicitar novamente a entrada


    //Real para Dolar
    const resultadoConversao = entrada * 0.20 

    alert(`O Valor de ${entrada} Reais equivale a ${resultadoConversao.toFixed(2)} Dólares`);

}
