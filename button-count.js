const button = document.getElementById("smile-button");
const counter = document.getElementById("smile-count");

let count = 0;
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

button.addEventListener("click", () => {
  if (!isDragging) {
    // só conta se não estiver arrastando
    count++;
    counter.textContent = count;
  }
});

button.addEventListener("mousedown", (e) => {
  isDragging = false;
  offsetX = e.clientX - button.getBoundingClientRect().left;
  offsetY = e.clientY - button.getBoundingClientRect().top;

  function onMouseMove(e) {
    isDragging = true;
    let left = e.clientX - offsetX;
    let top = e.clientY - offsetY;

    // limites para não sair da tela
    const maxLeft = window.innerWidth - button.offsetWidth;
    const maxTop = window.innerHeight - button.offsetHeight;

    if (left < 0) left = 0;
    if (top < 0) top = 0;
    if (left > maxLeft) left = maxLeft;
    if (top > maxTop) top = maxTop;

    button.style.left = left + "px";
    button.style.top = top + "px";
    button.style.right = "auto";
    button.style.bottom = "auto";
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);

    // dá um pequeno delay para evitar contar clique após drag
    setTimeout(() => {
      isDragging = false;
    }, 0);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

const smileButton = document.getElementById("smile-button");

smileButton.addEventListener("click", () => {
  // Remove e adiciona a classe para reiniciar a animação
  smileButton.classList.remove("animate");
  void smileButton.offsetWidth; // força reflow para reiniciar a animação
  smileButton.classList.add("animate");
});
