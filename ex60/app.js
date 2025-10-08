const inputCatetoA = document.getElementById('cateto-a');
const inputCatetoB = document.getElementById('cateto-b');
const btnCalcular = document.getElementById('btn-calcular');
const resultadoArea = document.getElementById('resultado-area');
const resultadoHipotenusa = document.getElementById('resultado-hipotenusa');
const inputs = [inputCatetoA, inputCatetoB];

function validarInput(inputElement) {
    const valor = parseFloat(inputElement.value);
    if (!isNaN(valor) && valor > 0) {
        inputElement.classList.remove('is-invalid');
        return true;
    } else {
        inputElement.classList.add('is-invalid');
        return false;
    }
}

btnCalcular.addEventListener('click', function() {
    resultadoArea.innerHTML = '';
    resultadoHipotenusa.innerHTML = '';

    const catetoAValido = validarInput(inputCatetoA);
    const catetoBValido = validarInput(inputCatetoB);

    if (!catetoAValido || !catetoBValido) {
        resultadoArea.innerHTML = `<span class="text-danger">Insira valores positivos válidos para os catetos.</span>`;
        return;
    }

    const catetoA = parseFloat(inputCatetoA.value);
    const catetoB = parseFloat(inputCatetoB.value);

    const area = (catetoA * catetoB) / 2;
    const hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));

    resultadoArea.innerHTML = `Área: <strong class="text-primary">${area.toFixed(2)}</strong>`;
    resultadoHipotenusa.innerHTML = `Hipotenusa: <strong class="text-primary">${hipotenusa.toFixed(2)}</strong>`;
});