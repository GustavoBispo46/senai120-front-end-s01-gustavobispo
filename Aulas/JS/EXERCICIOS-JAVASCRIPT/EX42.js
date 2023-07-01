let diaSemana = 7;
let mensagem;

switch(diaSemana){  
    case 1: 
    mensagem = "Hoje é Domingo"    
    break;
    case 2:
        mensagem = "Hoje é Segunda - dia útil"
    break;    
    case 3:
        mensagem = "Hoje é Terça - dia útil"
    break;    
    case 4:
        mensagem = "Hoje é Quarta - dia útil"
    break;    
    case 5:
        mensagem = "Hoje é Quinta - dia útil"
    break;    
    case 6:
        mensagem = "Hoje é Sexta - dia útil"
    break;    

    case 7:
    mensagem = "Hoje é Sábado"
    break;
    default:
        mensagem = "Dia inválido"
}
console.log(diaSemana);
console.log(mensagem);
