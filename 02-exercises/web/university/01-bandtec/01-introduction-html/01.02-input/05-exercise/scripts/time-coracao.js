const showMessage = () => {
    const club = document.getElementById('club').value;
    const quantityWorldCups = document.getElementById('quantity-world-cups').value;
    const phrase = `O time ${club} tem ${quantityWorldCups} mundiais da FIFA`; 
    alert(phrase);
}