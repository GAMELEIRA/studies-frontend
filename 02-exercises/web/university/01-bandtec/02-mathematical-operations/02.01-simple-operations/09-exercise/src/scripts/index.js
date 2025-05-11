const calculateQuantityTotalLiters = (liters) => liters.reduce((prevousValue, currentValue) => prevousValue + currentValue);

const calculateTotalWaterCosts = (totalLitersCosts, litersPerMinute) => totalLitersCosts * litersPerMinute;

const showMessage = (totalWaterCosts) => {
    alert(`Suas 3 torneiras, juntas, desperdiçaram ${totalWaterCosts} litros de água`);
}

const calculateWaterCosts = () => {
    const quantityDripsTapOne = Number(document.getElementById('quantity-drips-tap-one').value);
    const quantityDripsTapTwo = Number(document.getElementById('quantity-drips-tap-two').value);
    const quantityDripsTapThree = Number(document.getElementById('quantity-drips-tap-three').value);
    const totalLitersCosts = calculateQuantityTotalLiters([quantityDripsTapOne, quantityDripsTapTwo, quantityDripsTapThree]);
    const litersPerMinute = 15;
    const totalWaterCosts = calculateTotalWaterCosts(totalLitersCosts, litersPerMinute);
    showMessage(totalWaterCosts);
}