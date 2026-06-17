/* Pergunte ao usuário um número. Exiba o número que vem antes dele. */

let num_user;
let menos_um;

while (true) {
    num_user = Number(prompt("Digitte um número maior que zero"));
    if (num_user > 0) {
        menos_um = num_user - 1;
        break;
    }
}

alert(`O numero antecessor de ${num_user} é ${menos_um}`);