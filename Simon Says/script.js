let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let btns = ["blue" , "red" , "yellow" , "green"];

let h2 = document.querySelector("h2");

let box = document.querySelectorAll(".box");

document.addEventListener("keypress" , function() {
    if(started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
});

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 180);
}

function levelUp() {
    level++;
    console.log(`level ${level}`);
    h2.innerText = `level ${level}`;
    let idx = Math.floor(Math.random() * 3);
    let rB = btns[idx];
    let btn =  document.querySelector(`.${rB}`);
    flashBtn(btn);
}

for(b of box) {
    b.addEventListener("click" , function() {
        if(level > 0) {
            console.log("box clicked");
        }
    });
}