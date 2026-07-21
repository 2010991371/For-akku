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
