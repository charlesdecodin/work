/* Créer un chronomètre composé d'un afficheur et 3 boutons : 
un bouton "start" pour lancer lechronomètre , 
un bouton "stop" pour l’arrêter et un bouton "reset"
 pour le remettre à zéro. */

 let span = document.querySelectorAll('span');
 let start = document.querySelector('#start');
 let stop = document.querySelector("#stop");
 let reset = document.querySelector("#reset")
 let mSecond = 0;
 let second = 0;
 let minute = 0;
 let hour = 0;
 let timer 


 function startChrono(){

timer = setInterval(main, 10)

    function main(){
        mSecond+= 1
        if(mSecond === 100){
            mSecond=0;
            second ++
        }
        if(second === 60){
            second = 0;
            minute ++
        }
        if(minute === 60){
            minute= 0;
            hour ++
        }
        
        span[0].innerHTML = hour
        span[1].innerHTML = minute 
        span[2].innerHTML = second 
        span[3].innerHTML = mSecond
    }
}
function stopChrono(){
    clearInterval(timer)
}
function resetChrono(){
     mSecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    span[0].innerHTML = 0;
    span[1].innerHTML = 0;
    span[2].innerHTML = 0;
    span[3].innerHTML = 0;
}


start.addEventListener('click', startChrono);
stop.addEventListener('click', stopChrono);
reset.addEventListener('click', resetChrono)
 
