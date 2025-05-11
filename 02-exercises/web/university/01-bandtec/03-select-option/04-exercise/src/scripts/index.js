const factoryPhrase = (phraseOne, phraseTwo) => ({
  phraseOne,
  phraseTwo,
});

const showGoodPhrase = () => {
  const phrases = [
    factoryPhrase('Onde houver ódio', 'que eu leve o amor'),
    factoryPhrase('Onde houver ofensa', 'que eu leve o perdão'),
    factoryPhrase('Onde houver discórdia', ' que eu leve a união'),
    factoryPhrase('Onde houver dúvidas', 'que eu leve a fé'),
  ];
  const phraseSelected = document.getElementById('phrase').value;
  const phraseContinue = phrases.find(
    (phrase) => phrase.phraseOne === phraseSelected
  );
  alert(phraseContinue.phraseTwo);
};
