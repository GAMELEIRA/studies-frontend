const showMessage = () => {
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value; 
    const phrase = `Você nasceu na cidade de <b>${city}</b> em <u>${date}</u>`;
    const element = document.getElementById('phrase');
    element.innerHTML = phrase;
}