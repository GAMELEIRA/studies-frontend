const calculateCaloriesOfFood = (quantityCalories = 0, quantityFood = 0) => quantityCalories * quantityFood;

const calculateCaloriesLose = (minutesExercising = 0, quantityCalories = 0) => minutesExercising * quantityCalories;

const sumTotalCaloriesConsumed = (calories = []) => calories.reduce((previousValue, currentValue) => previousValue + currentValue);

const someTotalCaloriesLose = (calories = []) => calories.reduce((previousValue, currentValue) => previousValue + currentValue);

const calculateCaloriesOnDay = (quantityCaloriesConsumed = 0, quantityCaloriesLose = 0) => quantityCaloriesConsumed - quantityCaloriesLose;

const showMessage = (quantityCaloriesOnDay = 0) => {
    const messageElement = document.getElementById('message');
    const photoElement = document.getElementById('photo');
    photoElement.src = `./src/assets/images/calculadora.png`;
    messageElement.innerText = `Entre calorias que ganhou e perdeu, seu saldo de calorias no dia é de ${quantityCaloriesOnDay}`;
}

const getCaloriesOnDay = () => {
    const quantityBreads = Number(document.getElementById('quantity-breds').value);
    const quantityCones = Number(document.getElementById('quantity-cone').value);
    const minutesWalk = Number(document.getElementById('minutes-walk').value);
    const minutesWorkingOut = Number(document.getElementById('minutes-working-out').value);
    const caloriesBreads = 100;
    const caloriesCone = 300;
    const loseCaloriesWalking = 50;
    const loseCaloriesWorkingOut = 30;
    const caloriesTotalBreadsConsumed = calculateCaloriesOfFood(quantityBreads, caloriesBreads);
    const caloriesTotalConeConsumed = calculateCaloriesOfFood(quantityCones, caloriesCone);
    const caloriesConsumed = [caloriesTotalBreadsConsumed, caloriesTotalConeConsumed];
    const totalCaloriesConsumed = sumTotalCaloriesConsumed(caloriesConsumed);
    const caloriesLoseWithWalking = calculateCaloriesLose(minutesWalk, loseCaloriesWalking);
    const caloriesLoseWithWorkingOut = calculateCaloriesLose(minutesWorkingOut, loseCaloriesWorkingOut);
    const caloriesLose = [caloriesLoseWithWalking, caloriesLoseWithWorkingOut];
    const totalCaloriesLose = someTotalCaloriesLose(caloriesLose);
    const quantityCaloriesOnDay = calculateCaloriesOnDay(totalCaloriesConsumed, totalCaloriesLose);
    showMessage(quantityCaloriesOnDay);
}