let nome1 = prompt("Digite seu nome");
alert("Olá"+nome1 + ", seja bem-vindo")

let n1= Number(prompt("digite o 1 número"))
let n2= Number(prompt("digite o 2 número"))

alert(n1+n2)

let digiteSenha = prompt("Digite senha")
let senha = "1234"

while (senha != digiteSenha){
    digiteSenha = prompt ("Digite a senha novamente")
}

let capNome = document.querySelector('#nome');
let nome

let i = 1;

while (i<=3){
    nome = prompt("Digite seu Nome");
    capNome.innerHTML += "<br>"+nome
    i++
}