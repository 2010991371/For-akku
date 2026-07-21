/* ===========================================
   FOR AKU ❤️
   Premium Cinematic Website
   Part 1
=========================================== */

const scenes = document.querySelectorAll(".scene");
const progressBar = document.getElementById("progressBar");
const restartBtn = document.getElementById("restart");

const music = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicToggle");

const loader = document.getElementById("loader");

let currentScene = 0;
let musicStarted = false;

/* Loader */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },1500);

});

/* Scene Navigation */

function showScene(index){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });

    scenes[index].classList.add("active");

    progressBar.style.width =
        ((index+1)/scenes.length)*100 + "%";

}

/* Next */

function nextScene(){

    if(currentScene < scenes.length-1){

        currentScene++;

        showScene(currentScene);

    }

}

/* Previous */

function previousScene(){

    if(currentScene >0){

        currentScene--;

        showScene(currentScene);

    }

}

/* Restart */

restartBtn.addEventListener("click",()=>{

    currentScene=0;

    showScene(0);

});

/* Mouse Wheel */

window.addEventListener("wheel",(e)=>{

    if(e.deltaY>0){

        nextScene();

    }else{

        previousScene();

    }

});

/* Keyboard */

window.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowDown") nextScene();

    if(e.key==="ArrowUp") previousScene();

});

/* ===========================================
   PART 2
   Mobile + Music + GSAP Animations
=========================================== */

let touchStartX = 0;
let touchEndX = 0;

/* ---------- Swipe Navigation ---------- */

window.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].screenX;

});

window.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].screenX;

    if(touchStartX-touchEndX>60){

        nextScene();

    }

    if(touchEndX-touchStartX>60){

        previousScene();

    }

});

/* ---------- Music ---------- */

function startMusic(){

    if(musicStarted) return;

    music.play().catch(()=>{});

    musicButton.innerHTML="🎵";

    musicStarted=true;

}

window.addEventListener("click",startMusic,{once:true});

window.addEventListener("touchstart",startMusic,{once:true});

/* ---------- Music Button ---------- */

musicButton.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicButton.innerHTML="🎵";

    }

    else{

        music.pause();

        musicButton.innerHTML="🔇";

    }

});

/* ---------- GSAP Scene Animation ---------- */

function animateScene(index){

    gsap.fromTo(

        scenes[index].querySelector(".glass"),

        {

            opacity:0,

            y:60,

            scale:.95

        },

        {

            opacity:1,

            y:0,

            scale:1,

            duration:1.4,

            ease:"power3.out"

        }

    );

}

/* Override Scene */

const originalShowScene = showScene;

showScene = function(index){

    originalShowScene(index);

    animateScene(index);

}

/* First Scene */

animateScene(0);
