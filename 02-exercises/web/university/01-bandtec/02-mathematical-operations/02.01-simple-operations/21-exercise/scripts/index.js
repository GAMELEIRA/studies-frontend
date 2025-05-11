const confirmSalary = () => {
  const salary = document.getElementById('gross-salary').value;
  alert(`Grana Atual: R$ ${salary}`);
};

const selectBill = (type) => {
  if (type === 1) {
    return 100;
  } else if (type === 2) {
    return 500;
  }
};

const payBill = (type) => {
  const salary = Number(document.getElementById('gross-salary').value);
  alert(`Grana Atual: R$ ${salary - selectBill(type)}`);
};

const winMoney = () => {
  const salary = Number(document.getElementById('gross-salary').value);
  const cash = 2000;
  alert(`Grana Atual: R$ ${salary + cash}`);
};
