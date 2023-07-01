function primeiroCodigo(){
    console.log("Hello World");
}
primeiroCodigo()

function dadosPessoais(nome, idade){
        let texto = `Ola ${nome}, voce tem ${idade} anos de idade`;
        return texto;
}
let nome = "Gustavo";
let idade = 16;
console.log(dadosPessoais(nome, idade));

function somar(n1, n2){
    return n1+n2;
}
console.log(somar(10,15));
console.log(7,20);


function soma(numero1, numero2){
    return numero1 + numero2;
}
let numero1 = 10;
let numero2 = 10;
console.log(soma(numero1, numero2));



function subtracao(n1,n2){
    return n1 - n2;
}
let n1 = 15;
let n2 = 5;
console.log(subtracao(n1,n2));

function divisao (nu1,nu2){
    return nu1 / nu2;
}
let nu1 = 12;
let nu2 = 6;
console.log(divisao(nu1,nu2));

function multiplicacao (number1, number2){
    return number1 * number2;
}
let number1 = 5;
let number2 = 4;
console.log(multiplicacao(number1, number2));

function verificaPar (numero){
    let resultado = ""
    if(numero %2 === 0){
        resultado = "Par"
        return resultado;
    }
    else ( resultado = "Impar")
    return resultado;
}
console.log(verificaPar(7));

let numeros = [13,20,22,23,24,19,7,17]
function maiorNumero(array){
    let maior = 0;
    for(let i = 0; i < array.length; i++){
        if( maior <array [i]){
            maior = array[i];
        }
    }
    return maior;
}
console.log(maiorNumero(numeros));

function numeroAleatorio(){
    return Math.floor(Math.random() * 100);
}
console.log(numeroAleatorio());