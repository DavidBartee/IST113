$(function () {

    var taskButton = $("#newtaskbutton");
    var taskList = $("#task-ul");
    var taskInput = $("#task-input");

    taskButton.on("click", function () {
        $newItem = $("<li></li>").text(taskInput.val());
        $newButton = $("<button></button>");
        $newButton.text('Delete');
        $newButton.on("click", function () {
            this.closest("li").remove();
        });
        $newItem.append($newButton);
        taskList.append($newItem);
    });
});