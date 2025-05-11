const sum = (numberOne, numberTwo) => numberOne + numberTwo;

const subtraction = (numberOne, numberTwo) => numberOne - numberTwo;

const multiplication = (numberOne, numberTwo) => numberOne * numberTwo;

const division = (numberOne, numberTwo) => numberOne / numberTwo;

const showMessages = (numberOne, numberTwo, resultSum, resultSubtraction, resultMultiplication, resultDivision) => {
    alert(`A soma entre ${numberOne} e ${numberTwo} é ${resultSum}`);
    alert(`A diferença entre ${numberOne} e ${numberTwo} é ${resultSubtraction}`);
    alert(`O produto entre ${numberOne} e ${numberTwo} é ${resultMultiplication}`);
    alert(`A razão entre ${numberOne} e ${numberTwo} é ${resultDivision}`);
}

const calculate = () => {
    const numberOne = Number(document.getElementById('number-one').value);
    const numberTwo = Number(document.getElementById('number-two').value);
    const resultSum = sum(numberOne, numberTwo);
    const resultSubtraction = subtraction(numberOne, numberTwo);
    const resultMultiplication = multiplication(numberOne, numberTwo);
    const resultDivision = division(numberOne, numberTwo);
    showMessages(numberOne, numberTwo, resultSum, resultSubtraction, resultMultiplication, resultDivision);
}