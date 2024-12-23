// Função para iniciar a magia ao clicar no botão na tela inicial
function iniciarMagia() {
  document.getElementById('inicio').classList.add('hidden'); // Esconde a tela inicial
  document.getElementById('chocotone-message').classList.remove('hidden'); // Mostra a mensagem do chocotone
}

// Função para mostrar o cartão de Natal ao clicar no chocotone
function mostrarCartao() {
  document.getElementById('chocotone-message').classList.add('hidden'); // Esconde o chocotone
  document.getElementById('cartao-natal').classList.remove('hidden'); // Mostra o cartão de Natal
}

// Função para mostrar a mensagem da magia do Natal ao clicar no cartão
function mostrarMagiaNatal() {
  document.getElementById('cartao-natal').classList.add('hidden'); // Esconde o cartão
  document.getElementById('magia-natal').classList.remove('hidden'); // Mostra a magia do Natal
}

// Função para mostrar a cantada boba ao clicar na mensagem da magia do Natal
function mostrarCantadaBoba() {
  document.getElementById('magia-natal').classList.add('hidden'); // Esconde a magia do Natal
  document.getElementById('cantada-boba').classList.remove('hidden'); // Mostra a cantada boba
}

// Função para mostrar a mensagem final ao clicar na cantada boba
function mostrarMensagemFinal() {
  document.getElementById('cantada-boba').classList.add('hidden'); // Esconde a cantada boba
  document.getElementById('final').classList.remove('hidden'); // Mostra a mensagem final
}
