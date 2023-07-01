let numero = 24

if (numero % 4 === 0 && numero % 6 === 0 && numero % 9 !== 0) {
  console.log("O número é divisível por 4 e por 6, mas não é divisível por 9.");
} else {
  console.log("O número não atende aos critérios de divisibilidade.");
}