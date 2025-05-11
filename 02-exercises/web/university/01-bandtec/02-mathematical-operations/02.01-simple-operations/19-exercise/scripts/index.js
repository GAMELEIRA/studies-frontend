const calculateAssistance = (quantityChildrens = 0, valueByChildren = 0) =>
  quantityChildrens * valueByChildren;

const showMessage = (assistances = []) => {
  const element = document.getElementById("message");
  const total = assistances.reduce(
    (prev, current) => prev.value + current.value
  );
  element.innerText = `Você tem ${assistances[0].quantityChildrens} filhos menores de 10 anos e ${assistances[1].quantityChildrens} filhos a partir de 10 anos, logo, seu "Auxílio Filhos" será de R$ ${total}`;
};

const requestCalculateAssistance = () => {
  const childrenQuantityLessThanTenYears = document.getElementById(
    "children-quantity-less-than-ten-years"
  ).value;
  const childrenQuantityMoreThanTenYears = document.getElementById(
    "children-quantity-more-than-ten-years"
  ).value;
  const valueByChildrenLessThanTenYears = 30;
  const valueByChildrenMoreThanTenYears = 20;
  const assistanceLessThanTenYears = calculateAssistance(
    childrenQuantityLessThanTenYears,
    valueByChildrenLessThanTenYears
  );
  const assistanceMoreThanTenYears = calculateAssistance(
    childrenQuantityMoreThanTenYears,
    valueByChildrenMoreThanTenYears
  );
  const assistances = [
    {
      quantityChildrens: childrenQuantityLessThanTenYears,
      value: assistanceLessThanTenYears,
    },
    {
      quantityChildrens: childrenQuantityMoreThanTenYears,
      value: assistanceMoreThanTenYears,
    },
  ];
  showMessage(assistances);
};
