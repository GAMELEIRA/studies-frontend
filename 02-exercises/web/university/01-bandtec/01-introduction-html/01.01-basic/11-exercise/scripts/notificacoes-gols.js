const squadOne = 'Brasil';
const squadTwo = 'Alemanha';
let squadSelected = '';

const showGol = (squad) => {
    const element = document.createElement('p');
    squadSelected = (squad === 1)? `Gol do ${squadOne}`: ` Gol da ${squadTwo}`;
    const newContent = document.createTextNode(squadSelected);
    element.appendChild(newContent);
    const currentDiv = document.getElementById('golsNotifications');
    document.body.insertBefore(element, currentDiv);
}