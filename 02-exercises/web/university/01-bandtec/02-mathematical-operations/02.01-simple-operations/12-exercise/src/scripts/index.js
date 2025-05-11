const calculateINSS = (wage = 0) => wage * 0.10;

const calculateIncomeTax = (wage = 0) => wage * 0.20;

const calculateUnionTax = (wage = 0) => wage / 30;

const applyDiscounts = (wage = 0, discounts = []) => {
   const totalDiscounts = discounts.reduce((previousValue, currentValue) => previousValue += currentValue);
   return wage - totalDiscounts; 
} 

const showMessage = (wage = 0, netWage = 0) => {
    alert(`Apesar de seu bruto ser R$ ${wage}, após os descontos, você receberá somente R$ ${netWage.toFixed(2)}`);
}

const calculateDiscounts = () => {
    const wage = document.getElementById('wage').value;
    const inss = calculateINSS(wage);
    const incomeTax =  calculateIncomeTax(wage);
    const unionTax = calculateUnionTax(wage);
    const discounts = [inss, incomeTax, unionTax];
    const netWage = applyDiscounts(wage, discounts);
    showMessage(wage, netWage);
}