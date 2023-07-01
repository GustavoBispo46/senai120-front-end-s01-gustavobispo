const valorInput1 = document.getElementById("valor1"),
    valorInput2 = document.getElementById("valor2"),
    botaodeCalcular = document.getElementById("btnSomar"),
    botaoReset = document.getElementById("btnReset"),
    operacoes = document.getElementById("operacoes"),
    result = document.getElementById("resultado");


function calcular() {
    let valor1 = Number(valorInput1.value),
        valor2 = Number(valorInput2.value);
    result.value = valor1 + valor2;

}