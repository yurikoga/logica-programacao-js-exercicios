//Conversão para Real
//Pergunte ao usuário um valor em dólares. Exiba o valor convertido em reais (utilize uma taxa de câmbio fixa, por exemplo, 5.30.

exercicio()
function exercicio() {

    let x = 1

    function contadorTentativas() {
        return x++
    } // Soma 1 e DEPOIS retorna o resultado, ou seja, a primeira vez que a função é chamada, ela retorna 2, a segunda vez retorna 3 e assim por diante

    let entrada = prompt("Digite um número em dólares\nCaso tenha casas decimais coloque '.' (ponto-final) no lugar da vírgula\nEx: 5,30 = 5.30")

    while (isNaN(Number(entrada)) || entrada.trim() === "" ) {
        entrada = prompt(`${contadorTentativas()}° erro`)
    }
    // o metodo .trim() é utilizado para retirar os espaços em branco do início e do fim da string, caso o usuário digite apenas espaços, o programa irá solicitar novamente a entrada

    //Dolar para real
    const resultadoConversao = entrada * 5.30

    //Real para Dolar
    //const resultadoConversao = entrada * 0.20 

    alert(`O Valor de ${entrada} Dólares equivale a ${resultadoConversao.toFixed(2)}`);

}
