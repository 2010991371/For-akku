/* ==========================================
   FOR AKU ❤️
   Story Engine
========================================== */

const story = [

{
title:"Some people don't just enter your life...",
text:"They become your home."
},

{
title:"Aku...",
text:"I've replayed that day in my head more times than I can count."
},

{
title:"We fought badly.",
text:"I let my anger speak louder than my love."
},

{
title:"I know words can't erase what happened.",
text:"But every day since then I've wished I had chosen love instead of anger."
},

{
title:"I'm not asking you to forget.",
text:"I'm asking for one chance to become better."
},

{
title:"Every smile we've shared...",
text:"is a memory I never want to lose."
},

{
title:"ALWAYS & FOREVER ❤️",
text:"— Aditya"
}

];

let currentStory = 0;

function nextStory(){

if(currentStory >= story.length) return;

console.log(story[currentStory]);

currentStory++;

}

function restartStory(){

currentStory = 0;

}
