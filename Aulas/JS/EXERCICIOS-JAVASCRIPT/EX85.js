let numeros = [10,11,12,13,14,15,16,17,18,19,20]
let temp = 0;

for (let i = 0; i<(numeros.length-1) /2; i++){
    temp = numeros[i];
    numeros[i] = numeros[(numeros.length -1)-i];
    numeros[(numeros.length -1)-i]=temp;
}
console.log("Invertido fica:"+ numeros);