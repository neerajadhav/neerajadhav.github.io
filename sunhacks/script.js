function sidebarOpen() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("d-none");
    sidebar.style.left = "0px";
}

function sidebarClose() {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    overlay.classList.add("d-none");
    sidebar.style.left = "-300px";
}