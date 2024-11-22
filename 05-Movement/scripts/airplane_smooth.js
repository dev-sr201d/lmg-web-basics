// ##### Initialization #####

document.addEventListener("DOMContentLoaded", init);

let airplane = null;

function init() {
    airplane = document.getElementById("airplane");
    airplane.isFlyingTo = null;
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
}

// ##### Input Controls #####

function onKeyDown(event) {
    switch (event.keyCode) {
        case 37:
            startFlyLeft();
            break;
        case 39:
            startFlyRight();
            break;
    }
}

function onKeyUp(event) {
    switch (event.keyCode) {
        case 37:
            stopFlyLeft();
            break;
        case 39:
            stopFlyRight();
            break;
    }
}

// ##### Flight Functions #####

function startFlyLeft() {
    if (airplane.isFlyingTo === "left") {
        return;
    }
    airplane.isFlyingTo = "left";
    airplane.classList.remove("gd-right");
    airplane.classList.add("gd-left");
    flyLeft();
}

function startFlyRight() {
    if (airplane.isFlyingTo === "right") {
        return;
    }
    airplane.isFlyingTo = "right";
    airplane.classList.remove("gd-left");
    airplane.classList.add("gd-right");
    flyRight();
}

function stopFlyLeft() {
    if (airplane.isFlyingTo === "left") {
        airplane.isFlyingTo = null;
    }
}

function stopFlyRight() {
    if (airplane.isFlyingTo === "right") {
        airplane.isFlyingTo = null;
    }
}

function flyLeft() {
    if (airplane.isFlyingTo !== "left"){
        return;
    }

    airplane.style.left = (airplane.offsetLeft - 6) + "px";

    window.setTimeout(flyLeft, 10);
}

function flyRight() {
    if (airplane.isFlyingTo !== "right"){
        return;
    }

    airplane.style.left = (airplane.offsetLeft + 6) + "px";

    window.setTimeout(flyRight, 10);
}

