const calculateAvarege = (scores) => {
    const totalScore = (scores.reduce((acc, value) => {
        return acc + value;
    } ));
    return totalScore / scores.length; 
} 

const getScore = () => {
    const scores = [];
    const quantityScores = 2;
    for(let i = 1; i <= quantityScores; i++) {
        scores.push(Number(prompt(`Informe a nota ${i}`)));
    }
    calculateAvarege(scores);
    alert(`Sua média foi de ${calculateAvarege(scores)}`);
}

getScore();