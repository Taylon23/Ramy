const perguntas = [
  {
    texto: "primeira pergunta é: Já banhou, sebosa? kkkk brinks... Se fosse pedir um presente legal qual seria?",
    alerta: "hmmm",
    carta: {
      titulo: "Carta 1 – Presente",
      texto: "O presente já sou eu, simples kkkkkk né noop. Não sei qual presente vc escoheu agora, mas quando vc enviou com certeza chegou pra mim e o eu do futuro sabe agr kkkkkkk não vou responder essa agora, provavelmente vou esta mandando mensagem agr falando desse presente, então aguardar para resposta kkkkkkkk",
    },
  },
  {
    texto: "Se eu sumisse por dois dias (só pra ver sua reação), o que você ia fazer? Não vale dizer que ia comemorar kkkkk",
    alerta: "1 dia já é muito né kkkkkkkk",
    carta: {
      titulo: "Carta 2 – Dias",
      texto:
        "Dois dias sem você? Eu ia fingir que tava de boa, mas serão eu ia abrir a conversa de 2 em 2 minutos igual um doido kkkkk. Você some assim não, que meu coração não tem plano B 💔.",
    },
  },
  {
    texto: "Se seu coração tivesse playlist, qual música ia tocar quando pensa em mim? E cuidado que eu tô de ouvidos 👂kkkkkk",
    alerta: "Rapaz",
    carta: {
      titulo: "Carta 3 – Playlist",
      texto: "Não sei se sabe, mas tem algumas musicas na playlist do discord que eu coloquei pensando em vc, nem sei se já foi ver e tbm nem sei se já me mandou a playlist kkkkkkkkkkk aaa e já tentei achar musica com seu nome, não achei, com meu nome tbm não tem kkkkk",
    },
  },
  {
    texto: "Qual é sua música romântica preferida?",
    alerta: "Não sei se já ouvir, mas se noop vou ver jaja",
    carta: {
      titulo: "Carta 4 – Preferida",
      texto: "Eu tenho uma favorita, mas eu gosto de algumas que são novas pra mim, que me fazem lembrar vc... agr pra saber tem que investigar haha",
    },
  },
  {
    texto: "Você gosta de surpresas?(clr que gosta kkkkk)",
    alerta: "As melhores surpresas vêm do coração 🎁",
    carta: {
      titulo: "Carta 5 – Uma surpresa",
      texto:
        "Talvez isso aqui não foi uma surpresa para vc kkkkkkk, mas eu duvido se sabia que ia ganhar isso e um presente massa que dei para você, jaja vai saber o que é, espero que fique feliz com ele... mas no final de tudo espero que tenha gostado, me da um feedback depois do que achou de tudo isso kkkkkkk foi demorado mas foi feito com muitoooo carinhooo hihi",
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