const showWelcome = (message) => {
    if (message === 1) {
        alert('Boas Vindas!');
    } else if (message === 2) {
        document.getElementById('messageWelcome').innerText = 'Boas Vindas!';
    }
}