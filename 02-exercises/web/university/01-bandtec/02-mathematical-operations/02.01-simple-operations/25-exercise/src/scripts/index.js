const wichMessage = (id) => {
  const messages = [
    'Pare! Aguarde o verde!', 
    'Só diga se estiver perto e rápido.',
    'Siga ;)'
  ];

  switch (id) { 
    case 'red-light':
      return messages[0];
    case 'yellow-light':
      return messages[1];
    case 'green-light':
      return messages[2];
    default:
      return 'Invalido';
  }
}

const assembleMessage = (id, message) => {
  switch (id) { 
    case 'red-light':
      return `<p id='red-message'>${message}</p>`;
    case 'yellow-light':
      return `<p id='yellow-message'>${message}</p>`;
    case 'green-light':
      return `<p id='green-message'>${message}</p>`;
    default:
      return 'Invalido';
  }
}

const showMessage = (id) => {
  const messageElement = document.getElementById('message');
  const message = wichMessage(id); 
  messageElement.innerHTML = assembleMessage(id, message);
}
