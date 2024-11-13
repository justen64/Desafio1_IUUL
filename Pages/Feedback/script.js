function exibirDados() {
  const contatos = JSON.parse(localStorage.getItem("contatoMensagens")) || [];
  const listaContatos = document.getElementById("listaContatos");
  listaContatos.innerHTML = "";

  const template = document.getElementById("templateContato").content;

  contatos.forEach((contato, index) => {
    const contatoElement = document.importNode(template, true);

    contatoElement.querySelector(".nome").textContent = contato.nome;
    contatoElement.querySelector(".email").textContent = contato.email;
    contatoElement.querySelector(".mensagemTexto").textContent = contato.mensagem;

    contatoElement.querySelector(".deletarMensagem").onclick = () =>
      deletarMensagem(index);

    listaContatos.appendChild(contatoElement);
  });
}

function deletarTodasMensagens() {
  localStorage.removeItem("contatoMensagens");
  exibirDados();
}

function deletarMensagem(index) {
  const mensagens = JSON.parse(localStorage.getItem("contatoMensagens")) || [];
  mensagens.splice(index, 1);
  localStorage.setItem("contatoMensagens", JSON.stringify(mensagens));
  exibirDados();
}

document
  .getElementById("deletarTodas")
  .addEventListener("click", deletarTodasMensagens);

document.addEventListener("DOMContentLoaded", exibirDados);
