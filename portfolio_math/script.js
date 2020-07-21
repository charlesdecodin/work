const nav = document.querySelector("nav")
const btn = document.querySelector(".burger")

nav.className = "nav_hidden"
console.log(nav);

btn.addEventListener('click',()=>{
    if(nav.className == "nav_hidden"){
        nav.className = "nav_visible" 
    }else{
        nav.className = "nav_hidden" 
    }
   
})