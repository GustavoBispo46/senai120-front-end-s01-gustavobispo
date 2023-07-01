let numeros = [4,20,30,10]
let i= 0;
let max= 0;

while(i <numeros.length){
    if (max < numeros[i]){
        max = numeros[i];
    }
    i++
}
console.log(max);