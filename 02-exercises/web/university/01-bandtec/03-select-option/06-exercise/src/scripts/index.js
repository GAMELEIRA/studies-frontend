const showPicture = () => {
  const imageElement = document.getElementById('season');
  const seasonSelected = document.getElementById('season-selected').value;
  if (seasonSelected === 'summer') {
    imageElement.src = './src/assets/images/summer.png';
  } else if (seasonSelected === 'winter') {
    imageElement.src = './src/assets/images/winter.png';
  } else if (seasonSelected === 'fall') {
    imageElement.src = './src/assets/images/fall.png';
  } else if (seasonSelected === 'spring') {
    imageElement.src = './src/assets/images/spring.png';
  }
  imageElement.alt = 'Season';
};
