const tranformSsj = (sayajin = 0, strength = 0) => {
  const sayajinOne = 50;
  const sayajinTwo = 100;
  const sayajinThree = 200;

  switch (sayajin) {
    case 1:
      return {
        name: 'SSJ',
        ki: sayajinOne * strength,
      };
    case 2:
      return {
        name: 'SSJ2',
        ki: sayajinTwo * strength,
      };
    case 3:
      return {
        name: 'SSJ3',
        ki: sayajinThree * strength,
      };
    default:
      return {
        name: 'undefined',
        ki: strength,
      };
  }
};

const showMessage = (sayajin) => {
  const element = document.getElementById('message');
  element.innerText = `Após se transformar em ${sayajin.name}, o ki desse Sayajin passa a ser de ${sayajin.ki}`;
};

const requestTranformSsj = (type = 0) => {
  const strength = Number(document.getElementById('strength').value);
  const sayajin = tranformSsj(type, strength);
  showMessage(sayajin);
};
