const showMessage = (price = 0) => {
  alert(`Isso custa R$ ${price}`);
};

const requestSeePrice = () => {
  const products = [
    {
      name: 'Leite',
      price: 4.99,
    },
    {
      name: 'Carne',
      price: 40.89,
    },
    {
      name: 'Farinha',
      price: 9.99,
    },
    {
      name: 'Feijão',
      price: 5.99,
    },
  ];
  const product = document.getElementById('product').value;
  const selectedProduct = products.find((item) => item.name === product);
  showMessage(selectedProduct.price);
};
