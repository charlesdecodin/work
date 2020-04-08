let myInput = document.querySelector("#myInput");
let paragraph = document.querySelector("#paragraph")
let btn = document.querySelector('#btn')
let numberTest = 0;
function entierAleatoire(min, max){
 return Math.floor(Math.random() * (max - min) + min);
}
let entier = entierAleatoire(1, 10000);

function main(){
    let result =""
    numberTest ++
    if(myInput.value < entier){
        result="Le resultat est plus grand"
    }else if(myInput.value > entier){
        result="Le resultat est plus petit"
    }else{
        result="Tu as gagné en " + numberTest + " essais"
    }
    paragraph.innerHTML = result;
}

btn.addEventListener("click", main)

