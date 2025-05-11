const calculateAverage = (divider, dividend) => divider / dividend;

const getAverage = () => {
    const firstGrade = Number(document.getElementById('first-grade').value);
    const secondGrade = Number(document.getElementById('second-grade').value);
    const thirdGrade = Number(document.getElementById('third-grade').value);
    const grades = [firstGrade, secondGrade, thirdGrade];
    const total = grades.reduce((previousValue, currentValue) =>  previousValue + currentValue);
    const average = calculateAverage(total, grades.length);
    showAverage(average);
}

const showAverage = (average) => {
    if (average <= 9.4) {
        alert(`Sua média foi de ${average}`);
    } else {
        alert(`Parabéns, você é fora de série! Sua média foi de ${average}!`);
    }
}