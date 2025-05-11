const fruits = [
  'Banana',
  'Maçã',
  'Laranja',
  'Uva',
  'Abacaxi',
  'Morango',
  'Manga',
  'Pêssego',
  'Cereja',
  'Goiaba',
  'Pera',
  'Melão',
  'Mamão',
  'Tangerina',
  'Melancia',
  'Papaya',
  'Mandarina',
  'Açaí',
  'Melância',
  'Nectarina',
  'Citrico',
  'Mango',
  'Mamão',
];

const findFruit = (fruit) => fruits.find((f) => f === fruit);

const showMessage = (resultFruit) => {
  const doc = document.getElementById('message');
  doc.innerHTML = resultFruit.exists
    ? `<p>A fruta ${resultFruit.name} existe na lista</p>`
    : `<p>Não existe a fruta ${resultFruit.name} na lista</p>`;
};

const requestSearchFruits = () => {
  const fruit = document.getElementById('fruit').value;
  const foundFruit = findFruit(fruit);
  const resultFruit = {
    name: foundFruit ? foundFruit : fruit,
    exists: foundFruit ? true : false,
  };
  showMessage(resultFruit);
};
