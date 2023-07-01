let altura = 1.75;
let peso = 78;

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("Você está abaixo do peso.");
} else if (imc < 25) {
  console.log("Seu peso está normal.");
} else if (imc < 30) {
  console.log("Você está acima do peso.");
} else {
  console.log("Você está obeso.");
}