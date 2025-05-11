const calculateIMCMan = (weight, height) => weight / Math.pow(height, 2);

const calculateIMCWoman = (weight, height) => {
    const imc = weight / Math.pow(height, 2);
    return imc - imc * 0.10;
} 

const showMessage = (imc) => {
    alert(`Seu IMC é de ${imc.toFixed(2)}`)
}

const getIMC = (gender) => {
    const weight = Number(document.getElementById('weight').value);
    const height = Number(document.getElementById('height').value);
    let imc; 

    switch (gender) {
        case 'man':
            imc = calculateIMCMan(weight, height);
            break;
        case 'woman': 
            imc = calculateIMCWoman(weight, height);
            break;
        default: 
            alert('Genero não identificado!');
    }
    showMessage(imc);
}