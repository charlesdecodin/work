let contact = document.querySelector('#contact')
let number = document.querySelector('#number');
let btn = document.querySelector('#btn');
let reponse = document.querySelector("#paragraph");
let difficulty = document.querySelector("#difficulty");
let difficultyContainer = document.querySelector("#choice-difficulty");
let difficultyBtn = document.querySelector("#difficulty-button");
let resultContainer = document.querySelector(".result-container");
let newDiv = document.createElement("div");
let newSpan = document.createElement("span");
let newImg = document.createElement("img");
let showNumber = document.querySelector("#show-number");
let redo = document.querySelector('#redo');
let numberTry = document.querySelector('#numberTry');
let finalResultContainer = document.querySelector('#final-result-container');
let finalResult = document.querySelector("#final-result");
let showRandom = document.querySelector('#show-random');
let replay = document.querySelector('#replay');
let arrayDiv;
let randomArray = [];
finalResultContainer.style.visibility ="hidden";
/* function contactFunction(){
    
} */
function difficultyFunction() {
    n = difficulty.value;
    showNumber.innerHTML = difficulty.value;
    numberTry.innerHTML = difficulty.value;
    difficultyContainer.style.visibility = "hidden";
    randomArray = []
    myRandom()
}
function replayFunction(){
    difficultyContainer.style.visibility = "visible";
    finalResultContainer.style.visibility ="hidden"; 
}
function myRandom(){
    
    while (randomArray.length < 4) {
        let i = Math.floor(Math.random() * 10);
        if (randomArray.indexOf(String(i)) === -1) {
            randomArray.push(String(i));
        }
    }
}

function play() {

    let arrayUser = Array.from(number.value);
    
    let bull = 0;
    let cow = 0;
    let badAnswer = 0;
    let arrayUserTested = [];
    number.value = ""
    for (let i = 0; i < arrayUser.length; i++) {
        if (arrayUserTested.indexOf(arrayUser[i]) === -1) {
            arrayUserTested[i] = arrayUser[i];
        }
    }

    if (arrayUser.length !== 4) {
        redo.innerHTML = "Tu dois rentrer 4 chiffres !"
    } else {
        n--
        numberTry.innerHTML = n;
        redo.innerHTML = ""
        console.log(arrayUser.join(""))
        if (arrayUser.join("") === randomArray.join('')) {
            finalResultContainer.style.visibility = "visible";
            showRandom.innerHTML = randomArray.join('');
            finalResult.innerHTML = "Tu as gagné!"
            for (let i = 0; i < difficulty.value-n; i++) {
                resultContainer.removeChild(arrayDiv[i]);
            }
            
        } else if (n === 0) {
            finalResultContainer.style.visibility ="visible"; 
            showRandom.innerHTML = randomArray.join('')
            finalResult.innerHTML = "Tu as perdu!"
            for (let i = 0; i < difficulty.value-n; i++) {
                resultContainer.removeChild(arrayDiv[i]);
            }
           
        } else {
            for (let i = 0; i < arrayUser.length; i++) {
                if (arrayUser[i] == randomArray[i]) {
                    bull++;
                } else if (randomArray.includes(arrayUserTested[i]) && arrayUser[i] !== randomArray[i]) {
                    cow++;
                } else {
                    badAnswer++;
                }
            }

        }
        resultContainer.appendChild(newDiv.cloneNode(true));
        arrayDiv = document.querySelectorAll('div.result-container > div');
        newSpan.innerHTML = arrayUser.join("");
        arrayDiv[arrayDiv.length - 1].appendChild(newSpan.cloneNode(true));

        for (let i = 1; i <= bull; i++) {
            newImg.setAttribute("src", "taureau_play.png");
            arrayDiv[arrayDiv.length - 1].appendChild(newImg.cloneNode(true));
        }
        for (let i = 1; i <= cow; i++) {
            newImg.setAttribute("src", "vache_play.png");
            arrayDiv[arrayDiv.length - 1].appendChild(newImg.cloneNode(true));
        }
    }

}
function main() {
    play(n);
}

btn.addEventListener("click", main);
difficultyBtn.addEventListener("click", difficultyFunction);
replay.addEventListener("click",replayFunction)
/* contact.addEventListener("mouseover", contactFunction) */

