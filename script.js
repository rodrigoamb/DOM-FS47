const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const operacao = document.querySelector("#operacoes");
const btnCalcular = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

function calcular() {
  let resultadoDaOperacao;

  if (operacao.value === "+") {
    resultadoDaOperacao = Number(inputNum1.value) + Number(inputNum2.value);
  }

  if (operacao.value === "-") {
    resultadoDaOperacao = Number(inputNum1.value) - Number(inputNum2.value);
  }

  if (operacao.value === "*") {
    resultadoDaOperacao = Number(inputNum1.value) * Number(inputNum2.value);
  }

  if (operacao.value === "/") {
    resultadoDaOperacao = Number(inputNum1.value) / Number(inputNum2.value);
  }

  resultado.textContent = `O resultado é: ${resultadoDaOperacao}`;
}
