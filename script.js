let lista = [];

function addProduto(nome) {
  lista.push(nome);
  document.getElementById("lista").value = lista.join(", ");
}

function enviarCotacao(event) {
  event.preventDefault();
  alert("Pedido enviado! Vamos contactar-te via WhatsApp.");
}
