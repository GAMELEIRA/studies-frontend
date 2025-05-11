const changePizza = (pizza) => {
    const element = document.getElementById('pizza');
    element.style = 'visibility: visible';
    if (pizza === 1) {
        element.src = 'images/pizza-8-pedacos.png';
    } else if (pizza === 2) {
        element.src = 'images/pizza-6-pedacos.png';
    } else if (pizza === 3) {
        element.src = 'images/pizza-4-pedacos.png';
    } else {
        element.src = 'images/restos-pizza.png';
    }
}