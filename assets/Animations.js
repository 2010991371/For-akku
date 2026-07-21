/* ==========================================
   FOR AKU ❤️
   Premium Animation Engine
========================================== */

class AnimationEngine {

    constructor() {
        this.duration = 1200;
    }

    fadeIn(element) {

        if (!element) return;

        gsap.fromTo(
            element,
            {
                opacity: 0,
                y: 60,
                scale: 0.96
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.4,
                ease: "power3.out"
            }
        );

    }

    fadeOut(element) {

        if (!element) return;

        gsap.to(element, {

            opacity: 0,

            y: -40,

            duration: 0.8,

            ease: "power2.in"

        });

    }

    pulseHeart(element){

        if(!element) return;

        gsap.to(element,{

            scale:1.08,

            repeat:-1,

            yoyo:true,

            duration:1.2,

            ease:"sine.inOut"

        });

    }

    glow(element){

        if(!element) return;

        gsap.to(element,{

            boxShadow:
            "0 0 35px rgba(255,255,255,.35)",

            repeat:-1,

            yoyo:true,

            duration:2

        });

    }

}

const animator = new AnimationEngine();

/* Animate every glass card */

document.querySelectorAll(".glass").forEach(card=>{

    animator.fadeIn(card);

    animator.glow(card);

});

/* Animate memory image */

const memoryImage=document.querySelector(".memory-photo img");

if(memoryImage){

    gsap.from(memoryImage,{

        opacity:0,

        scale:.8,

        duration:2,

        delay:1,

        ease:"power3.out"

    });

}
