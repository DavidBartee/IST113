function lightFunction(){
    var lightOn = false;
    document.getElementById("button").addEventListener("click", function () {
        lightOn = !lightOn;
        if (lightOn) {
            document.getElementById("switch").innerHTML = "On";
            document.getElementById("switch").style.cssFloat = "left";
            document.getElementsByTagName("body")[0].style.backgroundColor = "white";
        }
        else {
            document.getElementById("switch").innerHTML = "Off";
            document.getElementById("switch").style.cssFloat = "right";
            document.getElementsByTagName("body")[0].style.backgroundColor = "black";
        }
    }, false);
}
lightFunction();