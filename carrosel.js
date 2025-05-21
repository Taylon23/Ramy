const imagens = document.querySelectorAll(".gallery img");
let atual = 0;

function mostrarImagem(index) {
  imagens.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

mostrarImagem(atual); // Mostrar a primeira

setInterval(() => {
  atual = (atual + 1) % imagens.length;
  mostrarImagem(atual);
}, 5000); // Troca a cada 5 segundos
