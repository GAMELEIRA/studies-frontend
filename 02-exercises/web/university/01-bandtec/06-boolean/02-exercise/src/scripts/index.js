const showMessage = (message) => {
    const element = document.getElementById('response');
    element.innerHTML = message;
}

const analyzeSport = () => {
    const heightUser =  Number(document.getElementById('height-user').value);
    console.log(heightUser);
    if (heightUser < 1.50) {
        showMessage('Pode tentar ser piloto(a) de corrida');
    } else if (heightUser < 1.60) {
        showMessage('Pode tentar ser velejador(a)');
    } else if (heightUser >= 1.60 || heightUser < 1.80) {
        showMessage('Pode tentar ser jogador de futebol ou handbol');
    } else {
        showMessage('Seja o que você quiser!');
    }
}