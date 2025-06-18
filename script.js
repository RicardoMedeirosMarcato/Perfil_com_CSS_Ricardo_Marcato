function alterarEstilo() {
  const paragrafo = document.querySelector('.about p');
  paragrafo.style.color = 'darkgreen';
  paragrafo.style.fontSize = '20px';
  paragrafo.style.fontWeight = 'bold';
  paragrafo.style.backgroundColor = '#dff9fb';
  paragrafo.innerText = "Estilo modificado com JavaScript!";
}

function mostrarDataHora() {
  const agora = new Date();
  const formatado = agora.toLocaleString('pt-BR');
  document.getElementById("dataHora").innerText = `Data e hora atual: ${formatado}`;
}

let imagemAtual = 1;
function trocarImagem() {
  const img = document.querySelector('.profile-img');
  if (imagemAtual === 1) {
    img.src = 'foto2.jpeg';
    imagemAtual = 2;
  } else {
    img.src = 'foto1.jpeg';
    imagemAtual = 1;
  }
}
