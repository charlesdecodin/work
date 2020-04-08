inputCertif = document.querySelector("#inputCertif");
text = document.querySelector("#text");
verif = document.querySelector("#verif");

function main(){
   if(inputCertif.value != text.innerHTML){
        verif.innerHTML = "Incorect : " + inputCertif.value;
    }else{
        verif.innerHTML = "OK";
    }
}