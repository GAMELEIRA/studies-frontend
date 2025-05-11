const calculateQuantityDrinks = (quantityDays, quantityDrinksOnDay) => quantityDays * quantityDrinksOnDay;

const showResult = (quantityDrinksOnYear) => {
    if (quantityDrinksOnYear > 500) {
        alert('Cuidado com as diabetes');
    } else {
        alert(`A quantidade de refris bebidos no ano ${quantityDrinksOnYear}`);
    }
}

const calculateDrinksForTheYear = () => {
    const quantityDays = 365;
    const quantityDrinksOnDay = document.getElementById('drinks').value;
    const quantityDrinksOnYear = calculateQuantityDrinks(quantityDays, quantityDrinksOnDay);
    showResult(quantityDrinksOnYear);
}