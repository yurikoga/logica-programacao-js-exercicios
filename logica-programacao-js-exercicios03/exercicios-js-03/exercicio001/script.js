//Receba a idade de uma pessoa e determine se ela pode entrar em um show restrito para maiores de 16 anos.
//Requisito Use operadores relacionais e o operador ternário para retornar "Pode entrar"  ou  "Não pode entrar" 

let tentativa = 1

verificacaoIdade()
function verificacaoIdade(){
    let idade = prompt(`Digite sua idade:`)
    tentativa++
    while(isNaN(Number(idade)) || idade.trim() === ""){
        idade = prompt(`Digite sua idade pela ${tentativa}°vez:`)
        tentativa++
    }

    if(idade > 16){
        alert(`Pode entrar`)
        ateLogo()
    }else{
        alert(`Não pode entrar`)
        alert(`Tente Novamente`)
        return verificacaoIdade()
    }
}

function ateLogo(){
    alert(`Aproveite o show!`)
    let decisao = prompt(`Deseja repetir?\ns - sim\nn - não`)
    if(decisao == "s"){
        return verificacaoIdade()
    }else{
        alert(`Vai repetir sim!`)
        return verificacaoIdade()
    }
}