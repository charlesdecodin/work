let input = document.querySelectorAll('input')
let btn = document.getElementById('btn')
let array = []
function getForm() {

    for (let i = 0; i < input.length - 1; i++) {
        array.push(input[i].value)
    }

    sessionStorage.setItem('i', JSON.stringify(array))
    window.open("reponse.html")

}


btn.addEventListener("click", getForm)

