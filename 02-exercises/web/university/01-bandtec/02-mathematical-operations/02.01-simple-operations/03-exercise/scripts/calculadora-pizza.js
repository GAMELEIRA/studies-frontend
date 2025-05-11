const showMessage = (average, quantityPeople) => {
    const message = `Cada um dos ${quantityPeople} amigos vai pagar R$ ${average}`;
    alert(message);
}

const calculateAverage = () => {
    const valuePizza = Number(document.getElementById('value-pizza').value);
    const quantityPeople = Number(document.getElementById('quantity-people').value);
    const average = valuePizza / quantityPeople;
    showMessage(average, quantityPeople);
}