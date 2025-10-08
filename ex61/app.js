const inputNumero = document.getElementById('input-numero');
const btnVerificar = document.getElementById('btn-verificar');
const resultadoTexto = document.getElementById('resultado-texto');

btnVerificar.addEventListener('click', function() {
    resultadoTexto.textContent = '';
    resultadoTexto.className = 'display-4 fw-bold';
    inputNumero.classList.remove('is-invalid');

    const valorInput = inputNumero.value;

    if (valorInput.trim() === '') {
        inputNumero.classList.add('is-invalid');
        return;
    }

    const numero = parseInt(valorInput);

    if (isNaN(numero)) {
        inputNumero.classList.add('is-invalid');
        resultadoTexto.textContent = 'Inválido';
        resultadoTexto.classList.add('text-danger');
        return;
    }

    if (numero % 2 === 0) {
        resultadoTexto.textContent = 'Par';
        resultadoTexto.classList.add('text-success');
    } else {
        resultadoTexto.textContent = 'Ímpar';
        resultadoTexto.classList.add('text-primary');
    }
});