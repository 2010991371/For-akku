/* ==========================================
   FOR AKU ❤️
   Particle Heart Engine
========================================== */

class HeartEngine {

    constructor() {

        this.canvas = document.getElementById("heartCanvas");

        if(!this.canvas) return;

        this.ctx = this.canvas.getContext("2d");

        this.resize();

        window.addEventListener("resize",()=>this.resize());

        this.particles=[];

        this.createHeart();

        this.animate();

    }

    resize(){

        this.canvas.width=window.innerWidth;

        this.canvas.height=window.innerHeight;

    }

    heart(t){

        const x=16*Math.pow(Math.sin(t),3);

        const y=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));

        return{x,y};

    }

    createHeart(){

        for(let i=0;i<700;i++){

            const t=Math.random()*Math.PI*2;

            const p=this.heart(t);

            this.particles.push({

                x:p.x*18,

                y:p.y*18,

                size:Math.random()*2+1,

                alpha:Math.random(),

                pulse:Math.random()*Math.PI*2

            });

        }

    }

    animate(){

        if(!this.ctx) return;

        requestAnimationFrame(()=>this.animate());

        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        const cx=this.canvas.width/2;

        const cy=this.canvas.height/2;

        this.particles.forEach(p=>{

            p.pulse+=0.03;

            const glow=(Math.sin(p.pulse)+1)/2;

            this.ctx.beginPath();

            this.ctx.fillStyle=`rgba(255,90,120,${0.35+glow*0.65})`;

            this.ctx.arc(

                cx+p.x,

                cy+p.y,

                p.size+glow,

                0,

                Math.PI*2

            );

            this.ctx.fill();

        });

    }

}

window.addEventListener("load",()=>{

    new HeartEngine();

});
