function responder(resposta) {
  if (resposta === "claro") {
    mostrarAlerta("hihi,te mostrar agora");
  } else if (resposta === "nao") {
    mostrarAlerta('"Vai ver mesmo assim kkkkkkkkkkk');
  }

  document.getElementById("mensagemFinal").textContent =
    "Prepare-se para a surpresa... 💌";

  setTimeout(() => {
    window.location.href = "video.html"; //link personalizado
  }, 6000);
}

function mostrarAlerta(mensagem) {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");

  alertMessage.textContent = mensagem;
  alertBox.style.display = "flex";

  setTimeout(() => {
    alertBox.style.display = "none";
  }, 5000); // some após 5 segundos
}
