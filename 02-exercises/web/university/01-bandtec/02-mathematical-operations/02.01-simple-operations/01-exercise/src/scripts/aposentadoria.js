import { Gender } from "../enums/gender.js";

const calculateValue = (yearsOld, retirement) => retirement - yearsOld;

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
    alert(`Você irá aposentar com ${result} anos.`);
}

window.calculateRetirement = calculateRetirement;
