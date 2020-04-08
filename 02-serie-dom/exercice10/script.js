const btnPlus = document.querySelector('#plus')
const container = document.querySelector('#container')
const tr = document.createElement('tr')
const td = document.createElement('td')
const input = document.createElement('input')

console.log(btnPlus)
console.log(container)

function newToDoElement() {
    container.appendChild(tr.cloneNode(true))
    const arrayTr = document.querySelectorAll('tr')
    arrayTr[arrayTr.length - 1].appendChild(td.cloneNode(true))
    const arrayTd = arrayTr[arrayTr.length - 1].querySelectorAll('td')
    input.setAttribute('type', 'checkbox')
    arrayTd[arrayTd.length - 1].appendChild(input.cloneNode(true))
    arrayTr[arrayTr.length - 1].appendChild(td.cloneNode(true))
    input.setAttribute('type', 'input')
    arrayTd[arrayTd.length - 1].appendChild(input.cloneNode(true))
}

btnPlus.addEventListener("click", newToDoElement)