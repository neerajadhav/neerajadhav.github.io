function leftopen(){
    var left = document.getElementById("leftaside");
    var overlay = document.getElementById("leftoverlay");
    var body = document.getElementsByTagName("BODY")[0];

    left.classList.remove("left-[-300px]");
    left.classList.add("left-0");

    overlay.classList.remove("hidden");
    body.classList.add("fixed");
    body.classList.add("w-full");
}

function leftover(){
    var left = document.getElementById("leftaside");
    var overlay = document.getElementById("leftoverlay");
    var body = document.getElementsByTagName("BODY")[0];

    left.classList.add("left-[-300px]");
    left.classList.remove("left-0");

    overlay.classList.add("hidden");
    body.classList.remove("fixed");
    body.classList.remove("w-full");
}

function rightopen(){
    var left = document.getElementById("rightaside");
    var overlay = document.getElementById("rightoverlay");
    var body = document.getElementsByTagName("BODY")[0];

    left.classList.remove("right-[-300px]");
    left.classList.add("right-0");

    overlay.classList.remove("hidden");
    body.classList.add("fixed");
    body.classList.add("w-full");
}

function rightover(){
    var left = document.getElementById("rightaside");
    var overlay = document.getElementById("rightoverlay");
    var body = document.getElementsByTagName("BODY")[0];

    left.classList.add("right-[-300px]");
    left.classList.remove("right-0");

    overlay.classList.add("hidden");
    body.classList.remove("fixed");
    body.classList.remove("w-full");
}