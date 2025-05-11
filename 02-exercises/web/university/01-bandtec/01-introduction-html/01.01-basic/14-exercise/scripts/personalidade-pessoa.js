let style = 'without-people';
const hiddenPeople = () => {
    document.getElementById('people').className = style;
}

const showPeople = () => {
    document.getElementById('people').className = '';
}