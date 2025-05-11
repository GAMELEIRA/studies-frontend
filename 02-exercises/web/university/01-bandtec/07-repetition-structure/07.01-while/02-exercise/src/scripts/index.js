const listOfPhrases = () => {
    const element = document.getElementById('container-list-phrases');
    let count = 0;
    while (count < 7) {
        const elementChild = document.createElement('p');
        elementChild.textContent = 'Tomei vacina!';
        element.appendChild(elementChild);
        count++;
    }
}