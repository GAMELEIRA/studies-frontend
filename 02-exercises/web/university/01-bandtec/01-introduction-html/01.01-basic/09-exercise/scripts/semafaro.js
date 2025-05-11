const messageOne = 'Pare e aguarde!';
const messageTwo = 'Pense se pode seguir ou se deve parar!';
const messageTree = 'Pode seguir adiante :)';
const showMessage = (typeOfMessage) => {
    const doc = document.getElementById('message');
    if (typeOfMessage === 1) {
        doc.innerHTML = `<p>${messageOne}</p>`;
    } else if (typeOfMessage === 2) {
        doc.innerHTML = `<p>${messageTwo}</p>`;
    } else {
        doc.innerHTML = `<p>${messageTree}</p>`;
    }
}