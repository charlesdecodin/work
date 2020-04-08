let btn = document.querySelector("#btn")
let arrayLabel = document.querySelectorAll("label")
let arrayInput = document.querySelectorAll("input")
let table = document.querySelector("table")

let tr = document.createElement("tr")
let td = document.createElement("td")

function getForm(){

    for (let i = 0; i < arrayInput.length-1; i++) {
        table.appendChild(tr.cloneNode(true));
        let arrayTr = document.querySelectorAll('tr')
        arrayTr[i].appendChild(td.cloneNode(true))
        let arrayTd = document.querySelectorAll('td')
        arrayTd[i].innerHTML = arrayInput[i].value
       } 

}

btn.addEventListener("click", getForm)