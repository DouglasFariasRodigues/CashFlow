const form = document.getElementById('transaction-form');
const descInput = document.getElementById('description');
const valueInput = document.getElementById('amount');

descInput.textContent = 'Descrição:';

tbody.innerHTML = "";
tbody.innerHTML = `
    <tr>
        <td>${descInput.value}</td>
        <td>${valueInput.value}</td>
    </tr>
`;

form.addEventListener('submit', function(event) {
    event.preventDefault();
    

    const textoDigitado = descInput.value;
    form.reset();
})