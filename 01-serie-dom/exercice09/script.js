let btn = document.getElementById("btn")
let paragraph = document.getElementById("paragraph")

function myFunction(){
    let tab = ["dimanche","lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    date = new Date()
    result = tab[date.getDay()]
    paragraph.style.visibility = "visible"
    paragraph.innerHTML = result
}
btn.addEventListener("click", myFunction)