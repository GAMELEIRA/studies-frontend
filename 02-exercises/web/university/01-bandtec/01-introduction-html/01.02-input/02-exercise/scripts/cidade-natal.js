const showMessage = () => {
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value; 
    const phrase = `Você nasceu na cidade de ${city} em ${date}`;
    const element = document.getElementById('phrase');
    element.textContent = phrase;
}