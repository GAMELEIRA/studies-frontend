const changeHumor = (humor) => {
    const element = document.getElementById('message');
    if (humor === 1) {
        element.className = 'cold-person';
    } else if (humor === 2) {
        element.className = 'friendly-person';
    } else if (humor === 3) {
        element.className = 'angry-person';
    }
}