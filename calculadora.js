const inputNum1 = document.querySelector("#num1");
const inputNum2 = document.querySelector("#num2");
const inputNum3 = document.querySelector("#num3");
const inputNum4 = document.querySelector("#num4");
const resultado = document.querySelector("#resultado");

function calcular(operacao) {
  console.log(operacao);

  if (!inputNum1.value || !inputNum2.value) {
    resultado.textContent =
      "O primeiro e o segundo campo devem ser preenchidos";

    inputNum1.value = "";
    inputNum2.value = "";
    inputNum3.value = "";
    inputNum4.value = "";

    return;
  }

  switch (operacao) {
    case "somar":
      resultado.textContent = `O resultado da soma é: ${
        Number(inputNum1.value) +
        Number(inputNum2.value) +
        Number(inputNum3.value) +
        Number(inputNum4.value)
      }`;

      break;

    case "subtrair":
      resultado.textContent = `O resultado da subtração é: ${
        Number(inputNum1.value) -
        Number(inputNum2.value) -
        Number(inputNum3.value) -
        Number(inputNum4.value)
      }`;
      break;

    case "multiplicar":
      if (!inputNum3.value && !inputNum4.value) {
        resultado.textContent = `O resultado da multiplicação é: ${
          Number(inputNum1.value) * Number(inputNum2.value)
        }`;

        return;
      }

      if (inputNum3.value && !inputNum4.value) {
        resultado.textContent = `O resultado da multiplicação é: ${
          Number(inputNum1.value) *
          Number(inputNum2.value) *
          Number(inputNum3.value)
        }`;
        return;
      }

      if (!inputNum3.value && inputNum4.value) {
        resultado.textContent = `O resultado da multiplicação é: ${
          Number(inputNum1.value) *
          Number(inputNum2.value) *
          Number(inputNum4.value)
        }`;
        return;
      }

      resultado.textContent = `O resultado da multiplicação é: ${
        Number(inputNum1.value) *
        Number(inputNum2.value) *
        Number(inputNum3.value) *
        Number(inputNum4.value)
      }`;
      break;

    case "dividir":
      if (!inputNum3.value && !inputNum4.value) {
        resultado.textContent = `O resultado da divisão é: ${
          Number(inputNum1.value) / Number(inputNum2.value)
        }`;

        return;
      }

      if (inputNum3.value && !inputNum4.value) {
        resultado.textContent = `O resultado da divisão é: ${
          (Number(inputNum1.value) + Number(inputNum2.value)) /
          Number(inputNum3.value)
        }`;
        return;
      }

      if (!inputNum3.value && inputNum4.value) {
        resultado.textContent = `O resultado da divisão é: ${
          (Number(inputNum1.value) + Number(inputNum2.value)) /
          Number(inputNum4.value)
        }`;
        return;
      }

      resultado.textContent = `O resultado da divisão é: ${
        (Number(inputNum1.value) +
          Number(inputNum2.value) +
          Number(inputNum3.value)) /
        Number(inputNum4.value)
      }`;
      break;

    default:
      break;
  }
}
