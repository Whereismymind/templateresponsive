function openMenu() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("sidenavOverlay").style.opacity = "1";
    document.getElementById("sidenavOverlay").style.zIndex = "1";
}

function closeMenu() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sidenavOverlay").style.opacity = "0";
    document.getElementById("sidenavOverlay").style.zIndex = "-1";
}
