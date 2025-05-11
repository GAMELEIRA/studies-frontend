const showMessage = (name, frequency) => {
    const element = document.getElementById('response');
    const elementChild = document.createElement('div');
    const statusbar = document.getElementById('status-bar');
    elementChild.innerHTML = `<p>Olá, ${name}! Sua frequência foi de <span id='frequency'>${frequency}%</span></p>`;
    elementChild.id = 'phrase';
    element.appendChild(elementChild);
    statusbar.style = `width: ${frequency}%; height: 20px;`;
}

const calculateAttendance = (quantityClass, quantityFouls) => quantityClass - quantityFouls;

const calculateFrequency = (quantityClass, attendance) => attendance / quantityClass * 100;

const getFrequency = () => {
    const nameStudent = document.getElementById('name-student').value;
    const quantityClass = Number(document.getElementById('quantity-class').value);
    const quantityFouls = Number(document.getElementById('quantity-fouls').value);
    const attendance = calculateAttendance(quantityClass, quantityFouls);
    const frequency = calculateFrequency(quantityClass, attendance);

    showMessage(nameStudent, frequency);
}