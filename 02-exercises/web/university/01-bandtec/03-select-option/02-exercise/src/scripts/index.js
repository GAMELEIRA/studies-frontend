const showMessage = (message = '') => {
  alert(message);
};
const requestSeeEntertainment = () => {
  const movies = [
    {
      type: 'Cinema',
      message: 'Assistir a filme "Marley & Eu"',
    },
    {
      type: 'Teatro',
      message: 'Assistir a peça "O Fantasma da Ópera"',
    },
    {
      type: 'Parque',
      message: ' Ir ao parque "Hopi Hari"',
    },
    {
      type: 'Show',
      message: 'Ouvir o show da "Lady Gaga"',
    },
  ];
  const type = document.getElementById('entertainment').value;
  const foundMovies = movies.find((movie) => movie.type === type);
  showMessage(foundMovies.message);
};
