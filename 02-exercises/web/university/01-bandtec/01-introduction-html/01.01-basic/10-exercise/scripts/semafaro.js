const messageOne = 'Pare e aguarde!';
const messageTwo = 'Pense se pode seguir ou se deve parar!';
const messageTree = 'Pode seguir adiante :)';
const showMessage = (typeOfMessage) => {
    const doc = document.getElementById('message');
    if (typeOfMessage === 1) {
        doc.innerHTML = `<p id='first-message'>${messageOne}</p>`;
    } else if (typeOfMessage === 2) {
        doc.innerHTML = `<p id='two-message'>${messageTwo}</p>`;
    } else {
        doc.innerHTML = `<p id='tree-message'>${messageTree}</p>`;
    }
}