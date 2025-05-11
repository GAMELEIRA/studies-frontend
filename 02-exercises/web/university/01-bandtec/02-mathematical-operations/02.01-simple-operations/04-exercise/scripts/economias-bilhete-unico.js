const calculateAvarege = (valueTicket, quantityTravels, discount) => valueTicket * quantityTravels * discount;

const showMessage = (avarege) => {
    const message = `Você economizará R$ ${avarege} por mês`;
    alert(message);
}

const calculateSavings = () => {
    const valueTicket = Number(document.getElementById('value-ticket').value);
    const quantityTravels = Number(document.getElementById('quantity-travels').value);
    const discount = 0.5;
    const avarege = calculateAvarege(valueTicket, quantityTravels, discount);
    showMessage(avarege);
}