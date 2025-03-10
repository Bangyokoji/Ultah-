document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    musicButton.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicButton.textContent = "🔇 Pause";
        } else {
            music.pause();
            musicButton.textContent = "🔊 Play";
        }
    });

    const stickers = ["😂", "💖", "🔥", "🎉", "😍", "🤩"];
    const stickerContainer = document.getElementById("stickerContainer");

    function showSticker() {
        const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
        stickerContainer.innerHTML = randomSticker;
        stickerContainer.style.opacity = 1;

        setTimeout(() => {
            stickerContainer.style.opacity = 0;
        }, 500);
    }

    const photoGallery = document.getElementById("photoGallery");
    photoGallery.addEventListener("touchstart", showSticker);
    photoGallery.addEventListener("mousedown", showSticker);

    document.getElementById("giftBox").addEventListener("click", function () {
        document.getElementById("giftBox").style.display = "none";
        document.getElementById("hiddenMessage").style.display = "block";
    });
});
