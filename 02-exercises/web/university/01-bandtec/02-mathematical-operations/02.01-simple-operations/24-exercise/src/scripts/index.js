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
  const elementImg = document.getElementById('message-img');
  const elementText = document.getElementById('message-txt');
  let src;

  if (sayajin.name === 'SSJ') {
    src = './src/assets/images/ssj1.png';
  } else if (sayajin.name === 'SSJ2') {
    src = './src/assets/images/ssj2.png';
  } else if (sayajin.name === 'SSJ3') {
    src = './src/assets/images/ssj3.png';
  }
  elementImg.src = src;
  elementText.innerText = `Após se transformar em ${sayajin.name}, o ki desse Sayajin passa a ser de ${sayajin.ki}`;
};

const requestTranformSsj = (type = 0) => {
  const strength = Number(document.getElementById('strength').value);
  const sayajin = tranformSsj(type, strength);
  showMessage(sayajin);
};
