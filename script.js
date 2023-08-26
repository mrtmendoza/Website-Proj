var menuIcon = document.querySelector(".menu-icon")
var topbar = document.querySelector(".topbar")
var container = document.querySelector(".container")

menuIcon.onclick = function(){
    topbar.classList.toggle("small-topbar");
    container.classList.toggle("large-container")

}