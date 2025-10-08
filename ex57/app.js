// 1. Seleciona todos os elementos do HTML
const inputs = [
    document.getElementById('input-nota1'),
    document.getElementById('input-nota2'),
    document.getElementById('input-nota3'),
    document.getElementById('input-nota4')
];
const btnCalcular = document.getElementById('btn-calcular');
const resultadoTexto = document.getElementById('resultado-texto');

const PESOS = [3, 5, 6, 6];
const SOMA_PESOS = PESOS.reduce((acc, peso) => acc + peso, 0); // Soma todos os pesos (resultado: 20)

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
    const notas = [];

    inputs.forEach(input => {
        if (!validarNota(input)) {
            todasNotasValidas = false;
        }
        notas.push(parseFloat(input.value));
    });

    if (!todasNotasValidas) {
        resultadoTexto.innerHTML = `<span class="text-danger">Corrija as notas inválidas (devem ser de 0 a 10).</span>`;
        return;
    }

    let somaPonderada = 0;
    for (let i = 0; i < notas.length; i++) {
        somaPonderada += notas[i] * PESOS[i];
    }
    const mediaPonderada = somaPonderada / SOMA_PESOS;

    let status;
    let corClasse;

    if (mediaPonderada > 6.00) {
        status = 'Aprovado';
        corClasse = 'text-success'; 
    } else {
        status = 'Reprovado';
        corClasse = 'text-danger'; 
    }

    resultadoTexto.classList.add(corClasse, 'fw-bold');
    resultadoTexto.innerHTML = `Média Ponderada: ${mediaPonderada.toFixed(2)} - ${status}`;
});