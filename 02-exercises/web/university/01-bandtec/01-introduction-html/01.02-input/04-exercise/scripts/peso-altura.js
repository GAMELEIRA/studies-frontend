const showData = () => {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const phrase = `Você pesa ${weight} e tem ${height} de altura`;
    alert(phrase);
}