// 1. Seleciona os elementos do HTML
const inputNumero1 = document.getElementById('input-numero1');
const inputNumero2 = document.getElementById('input-numero2');
const btnComparar = document.getElementById('btn-comparar');
const resultadoTexto = document.getElementById('resultado-texto');


btnComparar.addEventListener('click', function() {
    
    const valor1 = inputNumero1.value;
    const valor2 = inputNumero2.value;

    
    if (valor1.trim() === '' || valor2.trim() === '') {
        resultadoTexto.innerHTML = `<span class="text-danger">Por favor, preencha os dois campos.</span>`;
        return;
    }

    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

   
    if (isNaN(num1) || isNaN(num2)) {
        resultadoTexto.innerHTML = `<span class="text-danger">Valores inválidos. Digite apenas números.</span>`;
        return;
    }

   
    let maiorNumero;
    let textoFinal = `Os números digitados foram ${num1} e ${num2}. `;

    if (num1 > num2) {
        maiorNumero = num1;
        textoFinal += `O maior número é <span class="maior-numero">${maiorNumero}</span>.`;
    } else if (num2 > num1) {
        maiorNumero = num2;
        textoFinal += `O maior número é <span class="maior-numero">${maiorNumero}</span>.`;
    } else {
        textoFinal = `Os números digitados são iguais: ${num1}.`;
    }
    
   
    resultadoTexto.innerHTML = textoFinal;
});