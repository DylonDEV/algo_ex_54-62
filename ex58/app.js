const inputNota1 = document.getElementById('input-nota1');
const inputNota2 = document.getElementById('input-nota2');
const inputNota3 = document.getElementById('input-nota3');
const btnCalcular = document.getElementById('btn-calcular');
const resultadoTexto = document.getElementById('resultado-texto');
const inputs = [inputNota1, inputNota2, inputNota3];

function validarNota(inputElement) {
    const valor = parseFloat(inputElement.value);
    if (!isNaN(valor) && valor >= 0 && valor <= 10) {
        inputElement.classList.remove('is-invalid');
        return true;
    } else {
        inputElement.classList.add('is-invalid');
        return false;
    }
}

btnCalcular.addEventListener('click', function() {
    resultadoTexto.innerHTML = '';
    resultadoTexto.className = 'h4 fw-normal';

    let todasNotasValidas = true;
    inputs.forEach(input => {
        if (!validarNota(input)) {
            todasNotasValidas = false;
        }
    });

    if (!todasNotasValidas) {
        resultadoTexto.innerHTML = `<span class="text-danger">Corrija as notas inválidas (devem ser de 0 a 10).</span>`;
        return;
    }

    const nota1 = parseFloat(inputNota1.value);
    const nota2 = parseFloat(inputNota2.value);
    const nota3 = parseFloat(inputNota3.value);

    const media = (nota1 + nota2 + nota3) / 3;

    let status;
    let corClasse;

    if (media >= 7.50) {
        status = 'Aprovado';
        corClasse = 'text-success';
    } else {
        status = 'Reprovado';
        corClasse = 'text-danger';
    }

    resultadoTexto.classList.add(corClasse, 'fw-bold');
    resultadoTexto.innerHTML = `Média: ${media.toFixed(2)} - ${status}`;
});