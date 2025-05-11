let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
let box = document.querySelector('div');

function getColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

btn.addEventListener("click" , function() {
    let cl = getColor();
    // console.log(cl);
    h1.innerHTML = cl;
    h1.style.color = cl;
    box.style.backgroundColor = cl;
})