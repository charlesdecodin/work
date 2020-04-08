let salary = document.querySelector('#salary');
let firstBonus = document.querySelector('#firstBonus');
let secondBonus = document.querySelector('#secondBonus');
let woman = document.querySelector('#woman');
let child = document.querySelector('#child')
let btn = document.querySelector('#btn');
let showResult = document.querySelector('#showResult');
let salaryTax = 0.18;
let employeeInsurance = 0.07;
let pension = 0.05;

function main() {
    let result = 0;
    let salaryValue = salary.value;
    let childValue = child.value;

    if (woman.checked) {
        salaryTax -= 0.02;
    } else {
        salaryTax = salaryTax;
    }
    if (childValue === 3) {
        salaryTax -= 0.01;
    } else if (childValue >= 4) {
        salaryTax -= 0.02;
    } else {
        salaryTax = salaryTax
    }

    result = salaryValue - ((salaryValue * salaryTax) + (salaryValue * employeeInsurance) + (salaryValue * pension));
    
    if (firstBonus.checked) {
        result = result + 100;
    }
    if (secondBonus.checked) {
        result = result + 150;
    }

    showResult.innerHTML = result;

    console.log(employeeInsurance);
    console.log(pension);

}

btn.addEventListener('click', main)