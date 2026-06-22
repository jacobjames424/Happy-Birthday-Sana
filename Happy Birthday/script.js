/* =========================
   BIRTHDAY STORY SCRIPT
   ========================= */

let scene = 1;

const song = document.getElementById("song");

/* SCENES */
const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");
const scene6 = document.getElementById("scene6");
const scene7 = document.getElementById("scene7");

/* BUTTONS */
const nextBtn = document.querySelector(".nextBtn");
const giftBox = document.querySelector(".giftBox");
const continueBtn = document.querySelector(".continueBtn");
const letter = document.querySelector(".letter");
const message = document.querySelector(".message");
const wishBtn = document.querySelector(".wishBtn");


/* START EXPERIENCE */
nextBtn.addEventListener("click", () => {
    goToScene(2);
    startMusic();
    startEffects();
});


/* GIFT CLICK */
giftBox.addEventListener("click", () => {
    goToScene(3);
    createSparkles();
});


/* CONTINUE BUTTON */
continueBtn.addEventListener("click", () => {
    goToScene(4);
});


/* LETTER CLICK */
letter.addEventListener("click", () => {

    message.classList.add("show");

    createHearts();

});


/* CAKE WISH BUTTON */
wishBtn.addEventListener("click", () => {

    blowCandles();

    setTimeout(() => {
        goToScene(6);
        startFinale();
    }, 2000);

});


/* CHANGE SCENES */
function goToScene(num){

    document.querySelectorAll(".scene").forEach(s => {
        s.classList.remove("active");
    });

    document.getElementById("scene" + num).classList.add("active");

    scene = num;
}


/* MUSIC */
function startMusic(){
    song.play().catch(()=>{});
}


/* FLOATING EFFECTS */
function startEffects(){

    setInterval(() => {

        let emoji = document.createElement("div");
        emoji.innerHTML = ["💖","✨","🌸","🎀","💫"][Math.floor(Math.random()*5)];
        emoji.classList.add("flower");
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = "-20px";

        document.body.appendChild(emoji);

        setTimeout(() => emoji.remove(), 8000);

    }, 500);
}


/* HEARTS */
function createHearts(){

    for(let i=0;i<10;i++){

        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "80%";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}


/* SPARKLES */
function createSparkles(){

    for(let i=0;i<15;i++){

        let sparkle = document.createElement("div");
        sparkle.innerHTML = "✨";
        sparkle.classList.add("sparkle");

        sparkle.style.left = Math.random() * 100 + "vw";
        sparkle.style.top = Math.random() * 100 + "vh";

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 3000);
    }
}


/* CANDLES EFFECT */
function blowCandles(){

    document.querySelector(".candles").style.opacity = "0";

    createSparkles();
}


/* FINAL SCENE ANIMATION */
function startFinale(){

    goToScene(6);

    setTimeout(() => {
        goToScene(7);
    }, 4000);

}


/* TOUCH EFFECT (ANYWHERE CLICK) */
document.body.addEventListener("click", (e) => {

    let star = document.createElement("div");
    star.innerHTML = "✨";
    star.style.position = "absolute";
    star.style.left = e.clientX + "px";
    star.style.top = e.clientY + "px";
    star.style.fontSize = "20px";
    star.style.pointerEvents = "none";
    star.style.animation = "sparkleMove 2s linear forwards";

    document.body.appendChild(star);

    setTimeout(() => star.remove(), 2000);

});