function leftopen(){
    var left = document.getElementById("leftaside");
    var overlay = document.getElementById("leftoverlay");

    left.classList.remove("left-[-300px]");
    left.classList.add("left-0");

    overlay.classList.remove("hidden");
}

function leftover(){
    var left = document.getElementById("leftaside");
    var overlay = document.getElementById("leftoverlay");

    left.classList.add("left-[-300px]");
    left.classList.remove("left-0");

    overlay.classList.add("hidden");
}

function rightopen(){
    var left = document.getElementById("rightaside");
    var overlay = document.getElementById("rightoverlay");

    left.classList.remove("right-[-300px]");
    left.classList.add("right-0");

    overlay.classList.remove("hidden");
}

function rightover(){
    var left = document.getElementById("rightaside");
    var overlay = document.getElementById("rightoverlay");

    left.classList.add("right-[-300px]");
    left.classList.remove("right-0");

    overlay.classList.add("hidden");
}