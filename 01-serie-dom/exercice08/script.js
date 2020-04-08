let btn = document.getElementById("btn");
let div = document.querySelectorAll("div");
let tab = [-2, 1, 4];
let result= [];
function additionne(x){
    for (let i = 0; i < tab.length; i++) {
       x = tab[i]
    result[i] = x + 2
    }
}
function affiche(){
    additionne()
    for (let j = 0; j < tab.length; j++) {
        div[j].innerHTML = result[j]
    }
} 

btn.addEventListener("click", affiche)



