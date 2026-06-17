//Receba a quantidade de horas (0-23) e determine se é manhã (5-11), tarde (12-17), noite (18-23) ou madrugada (0-4).
//Requisito Use operadores relacionais e o operador ternário para exibir o período do dia


/* let hora = Number(prompt(`Modelo do Relógio: HH:MM\nDigite apenas as horas 'HH':`))

let periodo = hora <= 4 || hora == 24? `madrugada`: hora <= 11? `Manhã`: hora <= 17? `Tarde`: `Noite`

alert(periodo) */


let lista = document.querySelector("#listagem")

let hora = Number(prompt(`Modelo do Relógio: HH:MM\nDigite apenas as horas 'HH':`))

for(let tempo = 0; tempo <= hora; tempo++){
    let periodo = tempo <= 4 || tempo == 24? `madrugada`: tempo <= 11? `Manhã`: tempo <= 17? `Tarde`: `Noite`

    lista.innerHTML += `${tempo} ${periodo}<br>`
}

