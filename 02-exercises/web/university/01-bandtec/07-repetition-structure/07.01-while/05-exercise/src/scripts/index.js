const showNumbers = () => {
    const element = document.getElementById('container-list-numbers');
    let count = 1;
    while (count <= 30) {
        if (!(count === 3 || count === 4 || count === 7 || count === 10 || count === 12)) {
            const elementChild = document.createElement('p');
            elementChild.textContent = count;
            element.appendChild(elementChild);
        }
        count++;
    }
}