var taskButton = document.getElementById("newtaskbutton");
var taskList = document.getElementById("task-ul");
var taskInput = document.getElementById("task-input");

taskButton.addEventListener("click", function () {
    var newItem = document.createElement("li");
    var newContent = document.createTextNode(taskInput.value);
    var newButton = document.createElement("button");
    newButton.innerText = 'Delete';
    newButton.addEventListener("click", function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
    newItem.appendChild(newContent);
    newItem.appendChild(newButton);
    taskList.appendChild(newItem);
});