let lista = [4,5,3,7,8,2];
let maiorNumero = [0];

for(let i =1; i<lista.length; i++){
    if(lista[i]> maiorNumero) {
        maiorNumero = lista[i];
    }
}
console.log("O maior número é:" + maiorNumero);