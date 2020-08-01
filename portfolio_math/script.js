const navbar = document.querySelector(".navbar")
const nav = document.querySelector("nav")
const btn = document.querySelector(".burger")
let position = pageYOffset

nav.className = "nav_hidden"

//toggle menu

btn.addEventListener('click',()=>{
    if(nav.className == "nav_hidden"){
        nav.className = "nav_visible" 
    }else{
        nav.className = "nav_hidden" 
    }
})

//hide and show navbar

window.addEventListener('scroll',()=>{
    if(position < pageYOffset){
        navbar.style.marginTop = -196 + "px"
    }else{
        navbar.style.marginTop = -100 + "px"
    }
    position = pageYOffset
})

var config = { method: 'POST',
               mode: 'cors',
               cache: 'default' };