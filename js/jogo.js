function responder(resposta) {
  if (resposta === "claro") {
    mostrarAlerta("hihi,e é claro que eu gosto de você,ramy! 😍");
  } else if (resposta === "sim") {
    mostrarAlerta('"Sim"? besta kkkkkkkkk');
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
