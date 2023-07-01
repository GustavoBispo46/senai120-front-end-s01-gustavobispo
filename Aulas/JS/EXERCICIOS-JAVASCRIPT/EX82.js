let array = [10,15,20];
let maiorNumero = array[0];

for(let i =1; i<array.length; i++){
    if(array[i]> maiorNumero) {
        maiorNumero = array[i];
    }
}
console.log("O maior número é:" + maiorNumero);