function iniciarMagia() {
  document.getElementById('inicio').classList.add('hidden'); // Esconde a tela inicial
  document.getElementById('chocotone-message').classList.remove('hidden'); // Mostra chocotone e frase
}

function mostrarCartao() {
  document.getElementById('chocotone-message').classList.add('hidden'); // Esconde chocotone
  document.getElementById('cartao-natal').classList.remove('hidden'); // Mostra cartão
}

function mostrarMagiaNatal() {
  document.getElementById('magia-natal').classList.remove('hidden'); // Mostra a frase de magia do Natal
  document.getElementById('cartao-natal').onclick = mostrarCantadaBoba; // Atualiza clique para próxima etapa
}

function mostrarCantadaBoba() {
  document.getElementById('cartao-natal').classList.add('hidden'); // Esconde frase da magia do Natal
  document.getElementById('cantada-boba').classList.remove('hidden'); // Mostra a cantada boba
}

function mostrarMensagemFinal() {
  document.getElementById('cantada-boba').classList.add('hidden'); // Esconde cantada boba
  document.getElementById('final').classList.remove('hidden'); // Mostra mensagem final
}
