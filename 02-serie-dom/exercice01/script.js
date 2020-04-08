span =  document.querySelectorAll('span')
/* span[1].innerHTML = "******" */

let tab = ["Paris", "Rome", "Washington", "Berlin", "Séoul"]
 

    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener("click", ()=>{
            span[i].innerHTML=tab[i]
        })
    }
    



