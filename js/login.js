function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const senhaCorreta = "Ραμίλλυ";
  const erro = document.getElementById("mensagemErro");

  if (senha === senhaCorreta) {
    window.location.href = "index.html";
  } else {
    erro.textContent = "Senha incorreta. Tente novamente 💔";
  }
}
