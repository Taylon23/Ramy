const perguntas = [
  {
    texto: "Qual é a sua estação do ano favorita?",
    alerta: "Estação linda, como você 💮",
    carta: {
      titulo: "Carta 1 – Um começo doce",
      texto: "Quando penso em você, tudo floresce dentro de mim 🌸.",
    },
  },
  {
    texto: "Você acredita em amor à primeira vista?",
    alerta: "Acreditar no amor é mágico ✨",
    carta: {
      titulo: "Carta 2 – Confissões do coração",
      texto:
        "Você faz meu coração sorrir de um jeito que eu nem sabia que era possível 💖.",
    },
  },
  {
    texto: "Se pudesse ir a qualquer lugar agora, onde seria?",
    alerta: "Que lugar especial! 🗺️",
    carta: {
      titulo: "Carta 3 – Uma viagem com você",
      texto: "Não importa o destino... se for contigo, já é o paraíso 💞.",
    },
  },
  {
    texto: "Qual é sua música romântica preferida?",
    alerta: "Essa música toca a alma 🎶",
    carta: {
      titulo: "Carta 4 – Trilha sonora do amor",
      texto: "Cada verso de uma canção me lembra o som da sua risada 🎵❤️.",
    },
  },
  {
    texto: "Você gosta de surpresas?",
    alerta: "As melhores surpresas vêm do coração 🎁",
    carta: {
      titulo: "Carta 5 – Uma surpresa no fim",
      texto:
        "Essa jornada foi só o começo… tem muito amor guardado pra você 💌.",
    },
  },
];

const container = document.querySelector(".interactive");
const cartaContainer = document.querySelector(".love-letter");
const customAlert = document.getElementById("customAlert");
const alertMessage = document.getElementById("alertMessage");
let indice = 0;

function mostrarPergunta() {
  if (indice >= perguntas.length) {
    container.innerHTML =
      "<p style='font-family: Comic Sans MS; font-size: 1.2em;'>Você terminou o questionário! 💞</p>";
    return;
  }

  container.innerHTML = `
      <label style="font-family: Comic Sans MS; font-size: 1.1em;">${perguntas[indice].texto}</label><br>
      <input type="text" id="resposta" placeholder="Digite sua resposta" />
      <button onclick="responder()">Responder</button>
    `;
}

function responder() {
  const resposta = document.getElementById("resposta").value;
  if (resposta.trim() === "") {
    mostrarAlerta("Responda com carinho antes de continuar 💌");
    return;
  }

  mostrarCarta(perguntas[indice].carta);
  mostrarAlerta(perguntas[indice].alerta);
}

function mostrarCarta(carta) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
      <h3>${carta.titulo}</h3>
      <p>${carta.texto}</p>
    `;
  cartaContainer.appendChild(div);
}

function mostrarAlerta(mensagem) {
  alertMessage.innerText = mensagem;
  customAlert.style.display = "flex";
}

function fecharAlerta() {
  customAlert.style.display = "none";
  indice++;
  mostrarPergunta();
}
// Primeira pergunta ao carregar
mostrarPergunta();