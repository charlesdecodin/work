let reponse = document.getElementById('reponse')
let p = document.createElement("p")

for (let i = 0; i < 3; i++) {
    let item = (localStorage.getItem(i))
    reponse.appendChild(p.cloneNode(true))
    let para = document.querySelectorAll("p")
    para[i].innerHTML = item
}

