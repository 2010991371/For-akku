/* ==========================================
   FOR AKU ❤️
   Premium Effects Engine
========================================== */

function createShootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 40 + "%";

    star.style.left = Math.random() * 100 + "%";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2500);

}

setInterval(createShootingStar, 3500);

/* Floating Glow Particles */

function createGlowParticle() {

    const particle = document.createElement("div");

    particle.className = "glow-particle";

    particle.style.left = Math.random() * window.innerWidth + "px";

    particle.style.top = window.innerHeight + "px";

    particle.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 12000);

}

setInterval(createGlowParticle, 250);
