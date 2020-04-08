let myInput = document.getElementById('myInput');
let myBtn = document.getElementById('btn');
let paragraph = document.querySelector('#paragraph');


function myFunction(){
    let lastResult = 0;
    let result = myInput.value;
    let arrayResult = result.split('+');
    for (let i = 0; i < arrayResult.length; i++) {
        lastResult += parseInt(arrayResult[i]);
        console.log(lastResult);
    }
    paragraph.innerHTML = lastResult;
}
myBtn.addEventListener('click', myFunction);

