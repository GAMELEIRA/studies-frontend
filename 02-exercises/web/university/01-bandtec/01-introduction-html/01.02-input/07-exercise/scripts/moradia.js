const showMessages = () => {
    const parent = document.getElementById('phrases');
    const messageOne = document.createElement('p');
    const messageTwo = document.createElement('p');
    const street = document.getElementById('street').value;
    const numberHome = document.getElementById('number-home').value;
    messageOne.textContent = `Seu logradouro é ${street}`;
    messageTwo.textContent = `O número do seu logradouro é ${numberHome}`;
    parent.appendChild(messageOne);
    parent.appendChild(messageTwo);
}