import { Gender } from "../enums/gender.js";

const calculateValue = (yearsOld, retirement) => retirement - yearsOld;

const showMessage = (result, gender) => {
    const parent = document.getElementById('messages');
    const message = document.createElement('p');
    message.textContent = `Você irá aposentar com ${result} anos.`; 
    message.className = (gender === Gender.MASCULINE)? message.className = 'primary-text': message.className = 'second-text';
    parent.appendChild(message);
}
export const calculateRetirement = (gender) => {
    const man = 70;
    const woman = 60;
    const yearsOld = Number(document.getElementById('yearsOld').value);
    let result = 0;

    if (gender === Gender.MASCULINE) {
        if (yearsOld < 70) {
            result = calculateValue(yearsOld, man)
        }
    } else {
        if (yearsOld < 60) {
            result = calculateValue(yearsOld, woman)
        }
    }
    showMessage(result, gender);
}

window.calculateRetirement = calculateRetirement;
