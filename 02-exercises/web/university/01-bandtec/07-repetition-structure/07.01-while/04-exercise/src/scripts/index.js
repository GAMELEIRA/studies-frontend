const showPairs = () => {
    const element = document.getElementById('container-list-pairs');
    let count = 0;
    while (count <= 100) {
        const elementChild = document.createElement('p');
        elementChild.textContent = count;
        element.appendChild(elementChild);
        count += 2;
    }
}