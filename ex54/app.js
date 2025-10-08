const inputNumero = document.getElementById('input-numero');
const btnVerificar = document.getElementById('btn-verificar');
const resultadoElemento = document.getElementById('resultado');

btnVerificar.addEventListener('click', function() {
    const numeroStr = inputNumero.value;

    if (numeroStr.trim() === '') {
        resultadoElemento.textContent = 'Digite um número.';
        resultadoElemento.classList.remove('text-success', 'text-danger');
        return;
    }

    const numero = parseInt(numeroStr);

    if (isNaN(numero)) {
        resultadoElemento.textContent = 'Valor inválido.';
        resultadoElemento.classList.remove('text-success', 'text-danger');
        return;
    }

    if (numero % 2 === 0) {
        resultadoElemento.textContent = numero;
        resultadoElemento.classList.add('text-success');
        resultadoElemento.classList.remove('text-danger');
    } else {
        resultadoElemento.textContent = numero;
       resultadoElemento.classList.add('text-danger');
        resultadoElemento.classList.remove('text-success');
    }
});