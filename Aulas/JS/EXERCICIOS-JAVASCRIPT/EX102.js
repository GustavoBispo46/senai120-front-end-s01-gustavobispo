let n1 = prompt(("Digite o número que deseja"))
function verificador(n1){
    let resultado = "T"
    if(n1 %2 === 0){
        resultado = "True"
        return resultado;
    }
    else (resultado = "False")
    return resultado;
}
alert(verificador(n1))