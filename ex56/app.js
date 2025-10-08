// 1. Seleciona os elementos do HTML
const inputNota1 = document.getElementById('input-nota1');
const inputNota2 = document.getElementById('input-nota2');
const btnCalcular = document.getElementById('btn-calcular');
const resultadoTexto = document.getElementById('resultado-texto');

function validarNota(inputElement) {
    const valor = parseFloat(inputElement.value);

    if (!isNaN(valor) && valor >= 0 && valor <= 10) {
        inputElement.classList.add('is-valid');
        inputElement.classList.remove('is-invalid');
        return true;
    } else {
        inputElement.classList.add('is-invalid');
        inputElement.classList.remove('is-valid');
        return false;
    }
}

btnCalcular.addEventListener('click', function() {
    const nota1Valida = validarNota(inputNota1);
    const nota2Valida = validarNota(inputNota2);

    resultadoTexto.innerHTML = '';
    resultadoTexto.className = 'h4 fw-normal'; 

    if (!nota1Valida || !nota2Valida) {
        resultadoTexto.innerHTML = `<span class="text-danger">Corrija as notas inválidas.</span>`;
        return;
    }

    const nota1 = parseFloat(inputNota1.value);
    const nota2 = parseFloat(inputNota2.value);
    const media = (nota1 + nota2) / 2;

    let status;
    let corClasse;

    if (media >= 7) {
        status = 'Aprovado';
        corClasse = 'text-success'; 
    } else if (media < 5) {
        status = 'Reprovado';
        corClasse = 'text-danger'; 
    } else {
        status = 'Recuperação';
        corClasse = 'text-warning'; 
    }

    resultadoTexto.classList.add(corClasse, 'fw-bold');
    resultadoTexto.innerHTML = `Média: ${media.toFixed(1)} - ${status}`;
});