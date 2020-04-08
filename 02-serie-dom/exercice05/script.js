/* Ecrire une page HTML qui permet de calculer l'impôt d’une personne. 
Cette dernière doitsaisir ces revenus ainsi que son code postale.
Méthode de calcul: Si la personne habite dans le Nord-Pas-de-Calais, 
elle ne paye riensinon elle paie la moitié de ces revenus. */

let salary = document.querySelector("#salary");
let region = document.querySelector("#region");
let btn = document.querySelector("#btn");
let reponseContainer = document.querySelector("#reponse");

function calculTax(){
    let regionValue = parseInt(region.value);
    let salaryValue = parseInt(salary.value);
    if(regionValue === 59 || regionValue === 62){
        salaryValue = salaryValue;
        reponseContainer.innerHTML = salaryValue;
    }else{
        salaryValue = salaryValue/2;
        reponseContainer.innerHTML = salaryValue;
    }
}

btn.addEventListener("click", calculTax );
