const showResponse = (typeMessage) => {
    const parent = document.getElementById('response');
    const childText = document.createElement('p');
    const grade = document.getElementById('grade').value;
    const childImage = document.createElement('img');
    childImage.setAttribute('width', '700px');

    if (typeMessage === 1) {
        childText.textContent = `Muito bem, que neto inteligente, porque tirou ${grade}`;
        childImage.src = 'images/grandma.png';
    } else if (typeMessage === 2) {
        childText.textContent = `Não fez mais que tua obrigação com essa nota ${grade}`;
        childImage.src = 'images/mother.png';
    }
    parent.appendChild(childText);
    parent.appendChild(childImage);
}