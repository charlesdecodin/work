let arrowUp = document.querySelector('.fa-arrow-up');
let arrowDown = document.querySelector('.fa-arrow-down');
let arrowLeft = document.querySelector('.fa-arrow-left');
let arrowRight = document.querySelector('.fa-arrow-right');
let square = document.querySelector('#square');


function moveLeft (){
   const positionLeft = square.offsetLeft - 50;
    square.style.left = positionLeft + "px";
}
function moveRight(){
    const positionLeft = square.offsetLeft + 50;
    square.style.left = positionLeft + "px";
}
function moveTop(){
    const positionTop = square.offsetTop - 50;
   square.style.top= positionTop + "px";
}
function moveBottom(){
    const positionTop = square.offsetTop + 50;
   square.style.top= positionTop + "px";
}


arrowLeft.addEventListener('click', moveLeft);
arrowRight.addEventListener('click', moveRight);
arrowUp.addEventListener('click', moveTop);
arrowDown.addEventListener('click', moveBottom);