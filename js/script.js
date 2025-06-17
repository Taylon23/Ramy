const perguntas = [
  {
    texto:
      "primeira pergunta é: Já banhou, sebosa? kkkk brinks... Se fosse pedir um presente legal qual seria?",
    carta: {
      titulo: "Carta 1 – Presente",
      texto:
        "Hmmm, esse presente?! No começo eu até fiquei confuso sobre o que dar de presente. Eu pensei em chocolate, claro, ksksksksk, mas aí eu não sabia se ele ia durar até a data certa kkkkkkk. Então foi aí que lembrei que você queria começar a ler livros, então procurei alguns na internet e achei esse hehe. A pulseira foi um presente que eu também lembrei… Você pode até procurar essa mensagem: 'Faz pra mim então' kkkkkk.Então, quero dizer que tudo o que fiz e te entreguei foi pensado com calma e carinho... São presentes que você pode guardar, e não apenas chocolate que acaba em poucos segundos perto de você kkkkkkk calma que eu vou levar um para você no dia hihi.Mas espero que goste! É um presente especial para alguém especial hihi.",
    },
  },
  {
    texto:
      "Qual a coisa mais boba que você sorriu por minha causa?",
    carta: {
      titulo: "Carta 2 – Boba",
      texto:"Devem ter sido só algumas kkkkkkkk. Cara, a coisa mais legal que eu gosto de ver é você sorrindo... Sorrir basicamente por tudo! Não tem um momento nosso juntos que você fique mais de 5 minutos sem rir ksksksk. E meu sorriso favorito foi quando eu te dei o presente, e o segundo foi quando você ganhou o chocolate no mesmo dia kkkkkkk. Deu pra ver a sua cara de felicidade e, de verdade, saber que você gostou acalmou demais o meu dia e me deixou mais tranquilo. Pensei comigo mesmo: com certeza estou fazendo algo bom para a pessoa certa...Eu quero que você continue sendo essa menina risonha, sempre sorrindo… Momentos ruins, bons, mais ou menos... quero apenas que você mantenha esse seu jeito de ser... Boboca."
    },
  },
  {
    texto:
      "Se seu coração tivesse playlist, qual música ia tocar quando pensa em mim?",
    carta: {
      titulo: "Carta 3 – Playlist",
      texto:"Não sei se você sabe, mas tem algumas músicas na playlist do Discord que eu coloquei pensando em você. Nem sei se você já foi ver, e também nem sei se já me mandou a sua playlist kkkkkkkkkk. Ah, e já tentei achar alguma música com o seu nome... não achei. Com o meu nome também não tem kkkkkkk. Depois dá uma olhada lá nas músicas, eu sei que você ainda nem foi ver ksksksk. Agora quero saber: qual das vinte músicas que estão lá você acha que eu escuto pensando em você? Hahaha, boa sorte!"
    },
  },
  {
    texto: "Qual é sua música romântica preferida?",
    carta: {
      titulo: "Carta 4 – Preferida",
      texto:"Eu não tenho uma favorita, mas gosto de algumas que são novas pra mim e que me fazem lembrar de você... Agora, pra saber quais são, vai ter que investigar kkkkkkkkkk. Mas tem músicas que você me fala e eu guardo pra escutar depois (tirando os BTS... ksksks).Eu acho muito massa guardar essas pequenas coisas: lembranças, presentes, músicas, gostos... Até hoje eu tenho o saquinho do sonho que você me deu kkkkkk. Caraaa, achei muito surpreendente, porque achei que eu seria o primeiro a te dar algo tão massa assim ksksksk. Mas fico feliz de ter ganhado, nunca vou esquecer desse sonho ksksks... Algo que você gosta tanto, dando pra mim. Mas também... vo comeu uns três no mesmo dia kkkkkk.Um dia desses quero dividir algo com você... Não só dá pra um comer ksksksks. Bom, resumindo: é muito massa essas pequenas coisas, alegram muito o meu dia, e espero que isso não mude hihi."
    },
  },
  {
    texto: "Você gosta de surpresas?(clr que gosta kkkkk)",
    carta: {
      titulo: "Carta 5 – Surpresa",
      texto:"Talvez isso aqui não tenha sido uma surpresa pra você kkkkkkk, mas eu duvido que você imaginava que ia ganhar isso... Um presente massa que eu dei pra você! Espero que fique feliz com ele… e que use também ksksksks.No final de tudo, espero que tenha gostado. Chegamos à última pergunta ksksks... Esse site vai ficar funcionando até eu desativar, mas pode durar 2, 4, 8… até uns 10 anos! E se isso acontecer, eu faço questão de voltar sempre aqui pra lembrar que fiz algo pra alguém muito especial… e que pode se tornar alguém muito importante na minha vida hehe.Tomara que você tenha lido tudo com calma… Aaaaa, e gostou dessa música tocando? Ksksksks... Bom, me dá um feedback depois do que achou de tudo isso kkkkkkk. Foi demorado… mas foi feito com muitooo carinhooo hihi."
    },
  },
];

let currentQuestion = 0;
let respostaValida = false;

function showQuestion() {
  const questionContent = document.getElementById("questionContent");
  const cartasRespostas = document.querySelector(".cartas-respostas");

  if (currentQuestion >= perguntas.length) {
    questionContent.innerHTML = `
      <div style="text-align: center;">
        <h2 style="font-family: 'Dancing Script', cursive; color: #ff4757;">
          Obrigado por responder todas as perguntas!
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
  const respostaInput = document.getElementById("answer");
  const resposta = respostaInput.value.trim();
  const cartasRespostas = document.querySelector(".cartas-respostas");

  if (!resposta) {
    respostaInput.style.borderColor = "#ff4757";
    showAlert("Por favor, escreva sua resposta antes de continuar 💌");
    return;
  }

  respostaValida = true;
  respostaInput.style.borderColor = "";

  const cartaElement = document.createElement("div");
  cartaElement.className = "carta-resposta";
  cartaElement.innerHTML = `
    <h3>${perguntas[currentQuestion].carta.titulo}</h3>
    <p>${perguntas[currentQuestion].carta.texto}</p>
  `;
  cartasRespostas.appendChild(cartaElement);

  // Mostra alerta (se tiver)
  if (perguntas[currentQuestion].alerta) {
    showAlert(perguntas[currentQuestion].alerta);
  }

  currentQuestion++;
  showQuestion();
}

// Inicia
showQuestion();
