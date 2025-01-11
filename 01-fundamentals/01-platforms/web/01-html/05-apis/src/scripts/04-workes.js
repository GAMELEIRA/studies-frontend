let i = 0;

function timedCount() {
  i = i + 1;
  //postMessage PARA ENVIAR MENSAGENS ENTRE O WEB WORKER E A PAGINA PRINCIPAL
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();