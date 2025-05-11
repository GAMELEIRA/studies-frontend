const calculateAverage = (quantityPeople, valuePizza) => quantityPeople / valuePizza;

const showMessage = (average) => {
    if (average < 20) {
        alert(`Diaaaa de Pizzzaaa! Cada amigo vai pagar R$ ${average} pela pizza.`);
    } else {
        alert(`Deu ruim! Pizza muito cara! Cada amigo teria que pagar R$ ${average} pela pizza.`);
    }
} 

const eatPizza = () => {
    const valuePizza = Number(document.getElementById('value-pizza').value);
    const quantityPeople = Number(document.getElementById('quantity-people').value);
    const average = calculateAverage(valuePizza, quantityPeople);
    showMessage(average);
}
