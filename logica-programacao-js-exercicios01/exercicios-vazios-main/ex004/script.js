/* Pergunte ao usuário um número. Exiba o número que vem depois dele. */

let num_user;
let mais_um;

while (true) {
    num_user = Number(prompt("Digitte um número maior que zero"));

    if (num_user > 0) {
        mais_um = num_user + 1;
        break;
    }
}

alert(`O numero sucessor de ${num_user} é ${mais_um}`);