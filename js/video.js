const video = document.getElementById("video");
const canvas = document.getElementById("color-canvas");
const ctx = canvas.getContext("2d");
const ambientLight = document.getElementById("ambient-light");

function getAverageColor(frame) {
  const length = frame.data.length;
  let r = 0,
    g = 0,
    b = 0;
  for (let i = 0; i < length; i += 4) {
    r += frame.data[i];
    g += frame.data[i + 1];
    b += frame.data[i + 2];
  }
  const pixelCount = length / 4;
  return {
    r: Math.floor(r / pixelCount),
    g: Math.floor(g / pixelCount),
    b: Math.floor(b / pixelCount),
  };
}

function updateAmbientLight() {
  const width = 32;
  const height = 32;
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(video, 0, 0, width, height);
  const frame = ctx.getImageData(0, 0, width, height);
  const avgColor = getAverageColor(frame);
  ambientLight.style.background = `rgb(${avgColor.r}, ${avgColor.g}, ${avgColor.b})`;
}

video.addEventListener("play", () => {
  const interval = setInterval(() => {
    if (!video.paused && !video.ended) {
      updateAmbientLight();
    } else {
      clearInterval(interval);
    }
  }, 200); // Atualiza a cada 200ms
});
