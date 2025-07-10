function responder(resposta) {
  if (resposta === "nao") {
    // Clicou em "Não", não faz nada
    return;
  }

  if (resposta === "claro") {
    const senha = prompt("Digite a senha:");

    if (senha === "Ραμίλλυ") {
      mostrarAlerta("hihi, te mostrar agora");

      document.getElementById("mensagemFinal").textContent =
        "Prepare-se para a surpresa... 💌";

      setTimeout(() => {
        window.location.href = "video.html"; // link da surpresa
      }, 6000);
    } else {
      mostrarAlerta("Como errou a senha???");
    }
  }
}

function mostrarAlerta(mensagem) {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");

  alertMessage.textContent = mensagem;
  alertBox.style.display = "flex";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 5000); // esconde após 5 segundos
}
