let euro = document.querySelector("#euro");
let dollar = document.querySelector("#dollar");
let conversionFromEuro = 0;
let conversionFromDollar = 0;


function euroToDollar(){
    conversionFromEuro = Math.round(euro.value*1.12*100) / 100;
    dollar.value = conversionFromEuro ;
}
function dollarToEuro(){
    conversionFromDollar = Math.round(dollar.value*0.90*100)/100;
    euro.value = conversionFromDollar;
}
euro.addEventListener('input', euroToDollar);
dollar.addEventListener('input', dollarToEuro);