let inputBox = document.querySelector("#input-box");
let list = document.querySelector("#list-container");
let btn = document.querySelector("#bb");

btn.addEventListener("click", function () {
    addTask();
});

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Please write something");
    } else {
        let listItem = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let textSpan = document.createElement("span");
        textSpan.innerHTML = inputBox.value;
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
        
        listItem.appendChild(checkbox);
        listItem.appendChild(textSpan);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    }
    inputBox.value = "";
}
