// Você pode personalizar as respostas corretas aqui
const correctAnswers = {
  love: ["sim", "claro", "amo", "com certeza", "obvio"],
  date: ["01/01/2000"], // Substitua pela sua data especial
  nickname: ["amor", "vida", "fofa", "princesa"], // Substitua pelos seus apelidos
};

function checkLoveAnswer() {
  const answer = document.getElementById("love-question").value.toLowerCase();
  const response = document.getElementById("love-response");

  if (correctAnswers.love.some((correct) => answer.includes(correct))) {
    response.classList.add("show");
  } else {
    alert("Tente novamente com o coração! 💜");
  }
}

function checkDateAnswer() {
  const answer = document.getElementById("date-question").value;
  const response = document.getElementById("date-response");

  if (correctAnswers.date.includes(answer)) {
    response.classList.add("show");
  } else {
    alert("Essa não é a nossa data especial! Tente novamente.");
  }
}

function checkNicknameAnswer() {
  const answer = document
    .getElementById("nickname-question")
    .value.toLowerCase();
  const response = document.getElementById("nickname-response");

  if (correctAnswers.nickname.some((correct) => answer.includes(correct))) {
    response.classList.add("show");
  } else {
    alert("Não é esse... Pense com carinho!");
  }
}

function revealSurprise() {
  const surprise = document.getElementById("surprise");
  surprise.classList.add("show");

  // Rola a página para mostrar a surpresa
  surprise.scrollIntoView({ behavior: "smooth" });

  // Altera o texto do botão
  const btn = document.querySelector(".surprise-btn");
  btn.textContent = "Você é o amor da minha vida! 💜";
  btn.style.backgroundColor = "#ff4081";
}

// Personalize o nome da sua namorada aqui
document.addEventListener("DOMContentLoaded", function () {
  const name = prompt("Qual o nome da sua namorada?");
  if (name) {
    document.getElementById("girlfriend-name").textContent = name;
  }
});
