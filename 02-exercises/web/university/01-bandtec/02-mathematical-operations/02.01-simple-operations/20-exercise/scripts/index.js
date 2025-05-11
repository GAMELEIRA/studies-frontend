const calculateWage = (wageBase = 0) => (wageBase += wageBase * 0.1);

const calculateQuantitStayers = (stayers = 0) => ++stayers;

const calculateOutside = (outsides = 0) => --outsides;

const showMessage = (igor = {}) => {
  alert(`O salário de Igor é ${igor.wage.toFixed(2)}.`);
  alert(
    `A quantidade de ficantes de Igor é ${igor.quantitStayers.toFixed(2)}.`
  );
  alert(`A quantidade de foras de Igor é ${igor.outside.toFixed(2)}.`);
};

const requestCalculateEnvy = () => {
  const wageBrother = Number(document.getElementById("wage-brother").value);
  const quantitStayersBrother = Number(
    document.getElementById("quantity-stayers-brother").value
  );
  const outsideBrother = Number(
    document.getElementById("outside-brother").value
  );
  const igor = {
    wage: calculateWage(wageBrother),
    quantitStayers: calculateQuantitStayers(quantitStayersBrother),
    outside: calculateOutside(outsideBrother),
  };
  showMessage(igor);
};
