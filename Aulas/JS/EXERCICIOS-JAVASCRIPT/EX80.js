let string = "Bom dia";
let stringInvertida = "";

for(let i =string.length - 1; i >= 0; i--){
    stringInvertida += string[i];
}

console.log("String normal:"+ string);
console.log("String Invertida"+ stringInvertida);