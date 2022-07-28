var sideMenu = document.getElementById('side-menu');
var openIcon = document.getElementById('openIcon');
var closeIcon = document.getElementById('closeIcon');
var overlay = document.getElementById('overlay');
var header = document.getElementById('header');

function openMenu() {
    sideMenu.classList.remove('right-[-250px]');
    sideMenu.classList.remove('top-[-250px]');
    sideMenu.classList.add('right-[15px]');
    sideMenu.classList.add('top-[80px]');
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    overlay.classList.remove('hidden');
    header.classList.remove('md:bg-white');
    // header.classList.add('bg-white');
}

function closeMenu() {
    sideMenu.classList.remove('right-[15px]');
    sideMenu.classList.remove('top-[80px]');
    sideMenu.classList.add('right-[-250px]');
    sideMenu.classList.add('top-[-250px]');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    overlay.classList.add('hidden');
    header.classList.add('md:bg-white');
    // header.classList.remove('bg-white');
}


document.body.style.zoom = "75%"