let input = document.querySelectorAll('input')
let btn = document.getElementById('btn')


function getForm() {

    for (let i = 0; i < input.length - 1; i++) {
        localStorage.setItem('i', 'input[i].value')
        console.log(input[i].value)
    }
    window.open("reponse.html")
}


btn.addEventListener("click", getForm)

