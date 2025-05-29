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

let currentQuestion = 0;
const envelope = document.querySelector(".envelope");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");
const questionContent = document.getElementById("questionContent");
const alertBox = document.getElementById("alert");
const alertMessage = document.getElementById("alertMessage");

function toggleEnvelope() {
    envelope.classList.toggle('open');
}

function showQuestion() {
    if (currentQuestion >= perguntas.length) {
        questionContent.innerHTML = `
            <div style="text-align: center;">
                <h2 style="font-family: 'Dancing Script', cursive; color: #ff4757;">
                    Obrigado por responder todas as perguntas! 💖
                </h2>
                <div class="heart">♥</div>
            </div>
        `;
        return;
    }

    respostaValida = false; // Reseta a flag para nova pergunta
    
    questionContent.innerHTML = `
        <div class="question">
            <h2>${perguntas[currentQuestion].texto}</h2>
            <input type="text" id="answer" placeholder="Digite aqui..." required>
            <button onclick="validarResposta()">Enviar</button>
        </div>
    `;
}

function validarResposta() {
    const respostaInput = document.getElementById('answer');
    const resposta = respostaInput.value.trim();

    if (!resposta) {
        respostaInput.style.borderColor = '#ff4757'; // Destaca campo vazio
        showAlert("Por favor, escreva sua resposta antes de continuar 💌");
        return;
    }

    respostaValida = true;
    respostaInput.style.borderColor = ''; // Remove destaque
    
    // Atualiza carta
    letterTitle.textContent = perguntas[currentQuestion].carta.titulo;
    letterText.textContent = perguntas[currentQuestion].carta.texto;
    
    // Abre envelope
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
    }
    
    // Mostra alerta
    showAlert(perguntas[currentQuestion].alerta);
}

function showAlert(message) {
    alertMessage.innerHTML = `
        <p>${message}</p>
        <button onclick="fecharAlerta()">Continuar</button>
    `;
    alertBox.style.display = 'flex';
}

function fecharAlerta() {
    alertBox.style.display = 'none';
    
    // Só avança se resposta for válida
    if (respostaValida) {
        currentQuestion++;
        showQuestion();
    }
}

// Inicia
showQuestion();