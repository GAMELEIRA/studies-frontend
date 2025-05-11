const goToTheParty = () => {
    const years = Number(document.getElementById('years').value);
    if (years >= 18) {
        alert('#partiuFesta');
    } else {
        alert('Pedir permissão pro responsável');
    }
}