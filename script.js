var mnu = document.getElementById("menu_container");
var mnubtn = document.getElementById("menu_icon");

function Open(){
    mnu.className += "responsive"
    mnubtn.style.display = "none";
}

function Close(){
    mnu.className = "header__nav_container_menu";
    mnubtn.style.display = "block";
}