const calculateAssistance = (quantityChildrens = 0, valueByChildren = 0) =>
  quantityChildrens * valueByChildren;

const showMessage = (quantityChildrens = 0, value = 0) => {
  const element = document.getElementById("message");
  element.innerHTML = `Você tem ${quantityChildrens} filhos, logo, seu "Auxílio Filhos" será de R$${value}`;
};

const requestCalculateAssistance = () => {
  const childrenQuantity = document.getElementById("children-quantity").value;
  const valueByChildren = 25;
  const assistance = calculateAssistance(childrenQuantity, valueByChildren);
  showMessage(childrenQuantity, assistance);
};
