const trophysCorinthians = 2;
const trophysSaoPaulo = 3;
const trophysPalmeiras = 0;
const trophysSantos = 2;
let buttonHide = true;
let buttonShow = false;
let clubSelected = '';

console.log(document.getElementById('showShields'));

document.getElementById('showShields').classList.add('element-visibilty-hidden');

const showTrophys = (club) => {
    const trophy = selectedClub(club);
    if (trophy) {
        for(let i = 0; i < trophy; i++) {
            addTrophys();
        }
    } else {
        addWhitoutTrophys();
    }
}
const selectedClub = (club) => {
    if (club === 1) {
        clubSelected = 'trophysCorinthians';
        return trophysCorinthians;
    } else if (club === 2) {    
        clubSelected = 'trophysPalmeiras';
        return trophysPalmeiras;
    } else if (club === 3) {
        clubSelected = 'trophysSantos';
        return trophysSantos;
    } else if (club === 4) {
        clubSelected = 'trophysSaoPaulo';
        return trophysSaoPaulo;
    } else {
        return 0;
    }
}

const addTrophys = () => {
    const fatherElement = document.getElementById(clubSelected);
    const childElement = document.createElement('img');
    childElement.src = 'images/trofeu-mundial-clubes.png';
    childElement.className = 'trophy';
    fatherElement.appendChild(childElement);
}

const addWhitoutTrophys = () => {
    const fatherElement = document.getElementById(clubSelected);
    const childElement = document.createElement('img');
    childElement.src = 'images/mondial-palmeiras.png';
    childElement.className = 'trophy';
    fatherElement.appendChild(childElement);
}

const resetProgram = () => {
    window.location.href = window.location.href;
} 

const hideShields = () => {
    const trophyElements = document.getElementsByClassName('trophy');
    const clubsElements = document.getElementsByClassName('clubs');

    let i = trophyElements.length;
    let a = clubsElements.length;
    while (i > 0) {
        i--;
        trophyElements[i].classList.add('element-visibilty-hidden');
    }
    while (a > 0) {
        a--;
        clubsElements[a].classList.add('element-visibilty-hidden');
    }
    setButton();
}

const showShields = () => {
    const trophyElements = document.getElementsByClassName('trophy');
    const clubsElements = document.getElementsByClassName('clubs');

    let i = trophyElements.length;
    let a = clubsElements.length;
    while (i > 0) {
        i--;
        trophyElements[i].classList.remove('element-visibilty-hidden');
        trophyElements[i].classList.toggle('element-visibilty-visible');
    }
    while (a > 0) {
        a--;
        clubsElements[a].classList.remove('element-visibilty-hidden');
        clubsElements[a].classList.add('element-visibilty-visible');
    }
    setButton();    
}

const setButton = () => {
    const button1 = document.getElementById('hideShields');
    const button2 = document.getElementById('showShields');
    console.log(button1.checkVisibility(), button2.checkVisibility());
    
    if (buttonHide && !buttonShow) {
        button1.classList.remove('element-visibilty-visible');
        button2.classList.remove('element-visibilty-hidden');
        button1.classList.add('element-visibilty-hidden');
        button2.classList.add('element-visibilty-visible');
        buttonShow = true;
        buttonHide = false;
    } else if (!buttonHide && buttonShow) {
        button1.classList.remove('element-visibilty-hidden');
        button2.classList.remove('element-visibilty-visible');
        button1.classList.add('element-visibilty-visible');
        button2.classList.add('element-visibilty-hidden');
        buttonShow = false;
        buttonHide = true;
    }
}