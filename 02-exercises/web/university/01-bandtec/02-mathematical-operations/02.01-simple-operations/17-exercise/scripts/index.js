const calculateContributions = (values = [], currencyValue = 0) => {
  values.map((person) => {
    person.valueContribution = person.savings * currencyValue;
  });
};

const showMessage = (contributions = []) => {
  let message = "";
  const element = document.getElementById("messages");
  contributions.map((person) => {
    message += `O ${person.name} economizou R$ ${person.valueContribution} pois fez ${person.savings} depósitos\n`;
  });
  element.innerText = message;
};

const requestCalculateSavings = () => {
  const contributionHuguinho = {
    name: "Huguinho",
    savings: Number(document.getElementById("contribution-huguinho").value),
    valueContribution: 0,
  };
  const contributionZezinho = {
    name: "Zezinho",
    savings: Number(document.getElementById("contribution-zezinho").value),
    valueContribution: 0,
  };
  const contributionLuizinho = {
    name: "Luizinho",
    savings: Number(document.getElementById("contribution-luizinho").value),
    valueContribution: 0,
  };
  const currencyValue = 0.5;

  const contributions = [
    contributionHuguinho,
    contributionLuizinho,
    contributionZezinho,
  ];
  calculateContributions(contributions, currencyValue);
  showMessage(contributions);
};
