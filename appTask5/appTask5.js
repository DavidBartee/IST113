var myKey = "listValues";
var myItems = [];

function initializeForm() {
    let button = $("#contact-button");
    let form = $("#contact-div");
    button.on("click", function(){
        if (form.is(":visible")) {
            form.hide();
        } else {
            form.show();
        }
    });
}

function setupLocal() {
    if (localStorage.getItem(myKey) !== null) {
        let myItemsString = localStorage.getItem(myKey);
        myItems = JSON.parse(myItemsString);
        $(myItems).each(function() {
            createItem(this);
        });
    }
    else {
        createItem("List One Item");
        myItems.push("List One Item");
        saveItems();
    }

    $("#newtaskbutton").on("click", function() {
        let curVal = $("#task-input").val();
        createItem(curVal);
        myItems.push(curVal);
        saveItems();
    });
}

function createItem(itemValue) {

    let taskButton = $("#newtaskbutton");
    let taskList = $("#task-ul");
    let taskInput = $("#task-input");

    $newItem = $("<li></li>").text(itemValue);
    $newButton = $("<button></button>");
    $newButton.text('Delete');
    
    $newItem.append($newButton);
    taskList.append($newItem);

    $newButton.on("click", function () {
        removeItem(this.closest("li"));
    });
}

function removeItem(item) {
    let itemText = $(item).text();
    itemText = itemText.substr(0, itemText.length - 6);
    //alert (itemText);
    let index = myItems.indexOf(itemText);

    if (index != -1) {
        myItems.splice(index, 1);
        saveItems();
    }
    $(item).remove();
}

function saveItems() {
    let myItemsString = JSON.stringify(myItems);
    localStorage.setItem(myKey, myItemsString);
}

$(function() {
    setupLocal();
    $("#contact-div").hide();
    initializeForm();
});