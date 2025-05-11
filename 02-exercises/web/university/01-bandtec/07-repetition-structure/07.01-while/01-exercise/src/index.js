const listOfNumbers = () => {
    let count = 0;
    while(count <= 15) { 
        const element = document.getElementById('list-of-numbers');
        const elementChild = document.createElement('div');
        elementChild.innerText = count++;
        element.appendChild(elementChild);
    }
}