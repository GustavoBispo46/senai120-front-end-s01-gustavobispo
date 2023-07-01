let num = 6;
let soma = 0;

for (let i = 1; i < num; i++) {

    if (num % i === 0) {
        soma += i
    }

}

if (num === soma) {
    console.log(`${num} é um número perfeito`);
} else {
    console.log(`${num} não é um número perfeito`);
}