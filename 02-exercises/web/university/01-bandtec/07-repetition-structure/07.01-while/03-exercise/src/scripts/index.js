const listOfPhrases = () => {
    const element = document.getElementById('container-list-phrases');
    let count = 1;
    while (count < 8) {
        const elementChild = document.createElement('p');
        elementChild.textContent = `${count}. Tomei vacina!`;
        element.appendChild(elementChild);
        count++;
    }
}