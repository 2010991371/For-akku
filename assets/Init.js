// Akku Apology Website - Initialization File

document.addEventListener("DOMContentLoaded", () => {
    console.log("❤️ For Akku website initialized");

    // Start background music after user interaction
    const music = document.getElementById("bgMusic");
    const startMusic = () => {
        if (music) {
            music.volume = 0.35;
            music.play().catch(() => {});
        }
        document.removeEventListener("click", startMusic);
        document.removeEventListener("touchstart", startMusic);
    };

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);

    // Smooth scene reveal
    const scenes = document.querySelectorAll(".scene");

    scenes.forEach((scene, index) => {
        scene.style.animationDelay = `${index * 0.3}s`;
        scene.classList.add("loaded");
    });

    // Mobile touch support
    let startX = 0;

    document.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    document.addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) {
            window.scrollBy({
                left: window.innerWidth,
                behavior: "smooth"
            });
        }

        if (endX - startX > 50) {
            window.scrollBy({
                left: -window.innerWidth,
                behavior: "smooth"
            });
        }
    });
});
