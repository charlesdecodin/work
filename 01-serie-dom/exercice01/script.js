let myImg = document.querySelector('#img')
let myColor = document.querySelector('#color')
let myHeight = document.querySelector('#height')
let myWidth = document.querySelector('#width')
let myPositionY = document.querySelector('#positionY')
let myPositionX = document.querySelector('#positionX')

function modifyImg(){
    console.log(myHeight.value)
    myImg.style.backgroundColor = myColor.value;
    myImg.style.height = myHeight.value + "vw";
    myImg.style.width = myWidth.value + "vw";
    myImg.style.left = myPositionY.value + "%";
    myImg.style.bottom = myPositionX.value + "%";

}

document.addEventListener('input', modifyImg);