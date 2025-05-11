const calculateAverage = (scores = []) => {
  const sum = scores.reduce((acc, curr) => acc + curr);
  const average = sum;
  return average;
};

const showMessage = (name, average) => {
  const element = document.getElementById("response");
  element.innerText = `A média de ${name} será de ${average} pontos.`;
};

const requestCalculteAverage = () => {
  const scoreContinue = document.getElementById("score-continue").value;
  const scoreSemiAnnual = document.getElementById("score-semi-annual").value;
  const name = document.getElementById("name").value;
  const scores = [
    parseInt(scoreContinue) * 0.4,
    parseInt(scoreSemiAnnual) * 0.6,
  ];
  const average = calculateAverage(scores);
  showMessage(name, average);
};
