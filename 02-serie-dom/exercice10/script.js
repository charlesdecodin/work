const newTask = document.querySelector('#new-task');
const containerList = document.querySelector('#container-list');
const div = document.createElement('div');
const btn = document.createElement('button');
const inputItemList = document.createElement('input');
const resultInputList = document.createElement('p');



// create a new item in list container
function createItem() {
    //create item list in container list
    div.setAttribute("class", "item-list");
    containerList.appendChild(div.cloneNode(true));
    //create check in item list
    btn.setAttribute("class", "btn-list");
    containerList.lastChild.appendChild(btn.cloneNode(true));
    // create input in item list
    inputItemList.setAttribute("class", "input-list");
    containerList.lastChild.appendChild(inputItemList.cloneNode(true));
    // create p in item list
    resultInputList.setAttribute("class", "result-list")
    containerList.lastChild.appendChild(resultInputList.cloneNode(true));
    initResultList();
    initDelete();
}

function initResultList() {
    // selects all input and div
    let arrayIpt = document.querySelectorAll('.input-list');
    let arrayResult = document.querySelectorAll('.result-list');
    //hide last p
    arrayResult[arrayResult.length - 1].style.zIndex = "-1";
    // focus out input from a div create a P with input value and hide input
    for (let i = 0; i < arrayIpt.length; i++) {
        // create a result from input
        arrayIpt[i].addEventListener("focusout", function () {
            arrayResult[i].innerHTML = this.value;
            arrayIpt[i].style.zIndex = "-1";
            arrayResult[i].style.zIndex = "0";
            // create an input to update result
            arrayResult[i].addEventListener("dblclick", function () {
                arrayResult[i].style.zIndex = "-1";
                arrayIpt[i].style.zIndex = "0";
            })
        });
    }

}

function initDelete() {
    let arrayBtn = document.querySelectorAll('button');
    for (let i = 0; i < arrayBtn.length; i++) {
        arrayBtn[i].addEventListener("click", deleteItem)
    }
}

function deleteItem() {
    this.parentNode.remove()
}

newTask.addEventListener("click", createItem);











