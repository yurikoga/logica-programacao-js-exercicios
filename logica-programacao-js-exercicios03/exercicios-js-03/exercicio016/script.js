//Receba a idade de uma pessoa e determine se ela é maior de idade considerando duas regiões diferentes (por exemplo, Brasil, onde a maioridade é 18, e EUA, onde é 21).
//Requisito Use operadores relacionais e o operador ternário para exibir se é maior de idade em cada região

const declaraçãoMaioridade = document.querySelector('#declaracao')

const pais = prompt(`Você é do Brasil ou dos Eua?`)
const idade = Number(prompt(`Digite sua idade:`))

if(pais == 'Brasil'){
    let maioridadeBrasil = idade >= 18 ?  'Maioridade no Brasil':'Não atingiu a maioridade no Brasil'
    declaraçãoMaioridade.innerHTML = maioridadeBrasil
}else if(pais == 'Eua'){
    let maioridadeEua = idade >= 21? 'Maioridade no Eua':'Não atingiu a maioridade no Eua'
    declaraçãoMaioridade.innerHTML = maioridadeEua
}else{
    declaraçãoMaioridade.innerHTML = 'Tente Novamente, F5'
}

