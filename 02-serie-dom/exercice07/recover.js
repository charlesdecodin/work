let reponse = document.getElementById('reponse')
let item = sessionStorage.getItem('i')
let arrayItem = JSON.parse(item)

function main() {
    for (let i = 0; i < arrayItem.length; i++) {
        let tr = document.createElement("TR")
        reponse.appendChild(tr)
        let td = document.createElement("TD")
        tr.appendChild(td)
        let txt = document.createTextNode(arrayItem[i])
        td.appendChild(txt)
    }
}
main()



