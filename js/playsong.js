
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-audio");

    const playlist = [
        "../assets/songs/Vanessa da Mata - Ainda Bem (Áudio Oficial).mp3",
        "../assets/songs/novo amor - anchor (legendado).mp3"
    ];

    let index = 0;

    function tocarAtual() {
        audio.src = playlist[index];
        audio.play().catch(() => {
            // Espera a interação do usuário se autoplay for bloqueado
            document.body.addEventListener(
                "click",
                () => {
                    audio.play();
                },
                { once: true },
            );
        });
    }

    // Tocar próxima música ao terminar
    audio.addEventListener("ended", () => {
        index = (index + 1) % playlist.length;
        tocarAtual();
    });

    tocarAtual();
});

