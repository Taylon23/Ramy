let index = 0;

function mudarSlide(direcao) {
  const slider = document.getElementById("slider");
  const totalSlides = slider.querySelectorAll(".slide").length;

  index += direcao;

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  slider.style.transform = `translateX(-${index * 100}%)`;
}
