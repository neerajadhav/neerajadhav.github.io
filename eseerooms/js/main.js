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

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (/Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}

if (getOS() == "Windows") {
    document.body.style.zoom = "75%"
}