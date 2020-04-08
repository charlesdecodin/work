let input = document.querySelector("#n");
let reponse = document.querySelector("#reponse");
let btn = document.querySelector("#btn");
let table = document.querySelector("table");
let tr = document.createElement('tr');
let td = document.createElement('td');
let arrayTr;

function multiple(){
    number = parseFloat(input.value);
    if(Number.isInteger(number)){
        reponse.innerHTML = ""
        for (let i = 1; i <= 11; i++) {
            table.appendChild(tr.cloneNode(true));
            arrayTr = document.querySelectorAll('tr');
            arrayTr[i-1].appendChild(td.cloneNode(true));
            td.innerHTML = input.value*i;
        }
    }else{
        reponse.innerHTML = "Entrer un chiffre entier";
    }
}

btn.addEventListener('click',multiple)