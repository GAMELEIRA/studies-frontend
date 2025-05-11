const calculateAverage = (quantityPeople, valuePizza) => quantityPeople / valuePizza;

const showMessage = (average) => {
    const element = document.getElementById('message');
    const elementChild = document.createElement('p');
    elementChild.id = 'response';
    if (average < 20) {
        elementChild.innerHTML = `<strong><i>Diaaaa de Pizzzaaa! Cada amigo vai pagar R$ ${average} pela pizza.</i></strong>`;
    } else {
        elementChild.innerHTML =`<strong><i>Deu ruim! Pizza muito cara! Cada amigo teria que pagar R$ ${average} pela pizza.</i></strong>`;
    }
    element.appendChild(elementChild);
} 

const eatPizza = () => {
    const valuePizza = Number(document.getElementById('value-pizza').value);
    const quantityPeople = Number(document.getElementById('quantity-people').value);
    const average = calculateAverage(valuePizza, quantityPeople);
    showMessage(average);
}
