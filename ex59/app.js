const inputNumero = document.getElementById('input-numero');
const btnCalcular = document.getElementById('btn-calcular');
const resultadoTexto = document.getElementById('resultado-texto');

btnCalcular.addEventListener('click', function() {
    resultadoTexto.innerHTML = '';
    resultadoTexto.className = 'h4 fw-normal';
    inputNumero.classList.remove('is-invalid');

    const valorInput = inputNumero.value;

    if (valorInput.trim() === '') {
        inputNumero.classList.add('is-invalid');
        resultadoTexto.innerHTML = `<span class="text-danger">Por favor, digite um número.</span>`;
        return;
    }

    const numero = parseInt(valorInput);

    if (isNaN(numero)) {
        inputNumero.classList.add('is-invalid');
        resultadoTexto.innerHTML = `<span class="text-danger">Entrada inválida. Digite um número inteiro.</span>`;
        return;
    }

    let resultadoFinal;

    if (numero % 2 === 0) {
        const quadrado = Math.pow(numero, 2);
        resultadoTexto.classList.add('text-primary');
        resultadoFinal = `O número ${numero} (Par) ao quadrado é <strong>${quadrado}</strong>.`;
    } else {
        const cubo = Math.pow(numero, 3);
        resultadoTexto.classList.add('text-info-emphasis');
        resultadoFinal = `O número ${numero} (Ímpar) ao cubo é <strong>${cubo}</strong>.`;
    }

    resultadoTexto.innerHTML = resultadoFinal;
});