let idade = 17
        // >= significa a partir
if (idade >= 18) {
    console.log("Você tem idade para dirigir");
}
else{
    console.log("Você não tem idade para dirigir");
}
        //< significa menores que
if (idade < 16){
    console.log("Você tem idade para votar");
}                  //&& significa ou
else if (idade >= 16 && idade <= 60) {
    console.log("Você é obrigado a votar");
}
else{
    console.log("Você não é obrigado a votar");
}

let senha = 1234
                // || significa ou
if(senha ==1234 || senha ==4321){
    console.log("Senha correta");
}
else{
    console.log("Senha incorreta");
}

let email = "SeNaIALmiraNTe@gmail.com"

email = email.toLocaleLowerCase()

if(email == "senaialmirante@gmail.com" ) {
    console.log("E-mail válido");
}
else{
    console.log("E-mail inválido");
}