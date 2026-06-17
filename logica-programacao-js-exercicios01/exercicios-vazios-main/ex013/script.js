//Troca de Valores
//Pergunte ao usuário dois valores e exiba esses valores trocados.

exercicio()
function exercicio() {

    let x = 1

    function contadorTentativas() {
        return x++
    } // Soma 1 e DEPOIS retorna o resultado, ou seja, a primeira vez que a função é chamada, ela retorna 2, a segunda vez retorna 3 e assim por diante

    function redefinindoContador(){
        x = 1
    }

    let entrada = prompt("Digite um número")
    while (isNaN(Number(entrada)) || entrada.trim() === "" ) {
        entrada = prompt(`${contadorTentativas()}° erro`)
    }

    redefinindoContador()

    let entrada_02 = prompt("Digite outro número")
    while (isNaN(Number(entrada_02)) || entrada_02.trim() === "" ) {
        entrada_02 = prompt(`${contadorTentativas()}° erro`)
    }

    if(entrada == entrada_02){
        alert("Sério que vc digitou dois numeros iguais?")
        return exercicio()
    }else{
        alert(`Você digitou ${entrada} e ${entrada_02}\nmas eu vou trocar`);
        let temp = entrada
        entrada = entrada_02
        entrada_02 = temp
        alert(`Você digitou ${entrada} e ${entrada_02}\nmas eu vou trocar`);
    }

}
