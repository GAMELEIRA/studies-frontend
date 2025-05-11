const showClub = () => {
  const clubSelected = document.getElementById('clubs').value;
  const clubImage = document.getElementById('club');
  if (clubSelected === 'corinthians') {
    clubImage.src = './src/assets/images/corinthians.png';
  } else if (clubSelected === 'sao-paulo') {
    clubImage.src = './src/assets/images/sao-paulo.png';
  } else if (clubSelected === 'palmeiras') {
    clubImage.src = './src/assets/images/palmeiras.png';
  } else if (clubSelected === 'santos') {
    clubImage.src = './src/assets/images/santos.png';
  }
  clubImage.alt = 'Logo do Clube';
};
