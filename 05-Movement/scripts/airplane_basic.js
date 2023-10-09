// ##### Initialization #####

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.addEventListener("keydown", onKeyDown);
}

// ##### Input Controls #####

function onKeyDown(event) {
    if (event.keyCode === 37) {
        moveLeft();
    } else if (event.keyCode === 39) {
        moveRight();
    }
}

// ##### Movement Functions #####

function moveLeft() {
    var airplane = document.getElementById("airplane");
    airplane.classList.remove("gd-right");
    airplane.classList.add("gd-left");

    airplane.style.left = airplane.offsetLeft - 10 + "px";
}

function moveRight() {
    var airplane = document.getElementById("airplane");
    airplane.classList.remove("gd-left");
    airplane.classList.add("gd-right");

    airplane.style.left = airplane.offsetLeft + 10 + "px";
}
