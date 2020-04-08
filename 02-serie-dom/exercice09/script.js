const textArea = document.querySelector('#textarea');
const sp = document.querySelectorAll('span');
const p = document.querySelectorAll('p');
function main(){
    let textAreaCar = Array.from(this.value);
    sp[1].innerHTML = textAreaCar.length;
    let textAreaWordSpace = this.value.split(' ');
    let textAreaWordLine = this.value.split('/n');
    let textAreaWord = textAreaWordSpace.length + textAreaWordLine.length ;
    sp[0].innerHTML = textAreaWord;
    console.log(textAreaWord)
    if(textAreaCar.length > 100 || textAreaWord > 10)
        p[2].innerHTML = "Depassement"
}

textArea.addEventListener("change", main);