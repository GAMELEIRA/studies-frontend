const calculateAmount = (value, quantityMonths) => value * quantityMonths; 

const convertMonthsForYears = (years) => 12 * years;

const showFuture = () => {
    const years = convertMonthsForYears(3);
    const semiAnnual = 6;
    const quantityValue = document.getElementById('amount-invested').value;
    const quantityMounthYears = calculateAmount(quantityValue, years);
    const quantityMounthSemiAnnual= calculateAmount(quantityValue, semiAnnual);
    const parent = document.getElementById('results');
    parent.innerHTML = `
    <div>
        <div>
            <img src='images/pouco-dinheiro.png' width='700px'>
            <p>Em 6 meses vocé terá R$ ${quantityMounthSemiAnnual}</p>
        </div>
        <div>
            <img src='images/muito-dinheiro.png' width='700px'>
            <p>Em 3 anos vocé terá R$ ${quantityMounthYears}</p>
        </div>
    </div>
    `;
}

