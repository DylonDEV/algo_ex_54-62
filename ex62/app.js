const inputNumero = document.getElementById('input-numero');
const btnCalcular = document.getElementById('btn-calcular');
const resultadoContainer = document.getElementById('resultado-container');

btnCalcular.addEventListener('click', function() {
    resultadoContainer.innerHTML = '';
    inputNumero.classList.remove('is-invalid');

    const valorInput = inputNumero.value;
    const numero = parseFloat(valorInput);

    if (isNaN(numero) || numero <= 0) {
        inputNumero.classList.add('is-invalid');
        resultadoContainer.innerHTML = `<p class="text-danger m-0">Erro: Por favor, digite um número positivo e maior que zero.</p>`;
        return;
    }

    let resultadoHTML;

    if (numero % 2 === 0) {
        const quadrado = numero ** 2;
        const cubo = numero ** 3;
        const setima = numero ** 7;

        resultadoHTML = `
            <p class="m-0">O número digitado foi <strong>${numero}</strong> (Par).</p>
            <hr>
            <p class="m-0">Seu valor elevado ao quadrado é <strong>${quadrado}</strong>.</p>
            <p class="m-0">Seu valor elevado ao cubo é <strong>${cubo}</strong>.</p>
            <p class="m-0">Seu valor elevado à sétima é <strong>${setima}</strong>.</p>
        `;
    } else {
        const raizQuadrada = Math.sqrt(numero);
        const raizCubica = Math.cbrt(numero);
        const raizSetima = numero ** (1/7);

        resultadoHTML = `
            <p class="m-0">O número digitado foi <strong>${numero}</strong> (Ímpar).</p>
            <hr>
            <p class="m-0">Sua raiz quadrada é <strong>${raizQuadrada.toFixed(4)}</strong>.</p>
            <p class="m-0">Sua raiz cúbica é <strong>${raizCubica.toFixed(4)}</strong>.</p>
            <p class="m-0">Sua raiz sétima é <strong>${raizSetima.toFixed(4)}</strong>.</p>
        `;
    }

    resultadoContainer.innerHTML = resultadoHTML;
});