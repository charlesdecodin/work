const p = document.querySelectorAll("p");
const btn = document.querySelector("#btn")
let myDate = new Date();
let myHours = myDate.getHours();
let myMinutes = myDate.getMinutes();
let mySeconds = myDate.getSeconds();
let clock = myHours + ":" + myMinutes + ":" + mySeconds

p[0].innerhtml = clock

function main() {
    setInterval(clockFunction, 1000)
    function clockFunction() {
        mySeconds++
        if (mySeconds === 60) {
            mySeconds = 0
            myMinutes++
        } else if (myMinutes === 60) {
            myMinutes = 0
            myHours++
        } else if (myHours === 24) {
            myHours = 0
        }
        clock = myHours + ":" + myMinutes + ":" + mySeconds
        p[0].innerHTML = clock

    }
}
main()
