const menuOne = document.getElementById("menu_drop_one");
const activeMenuOne = document.getElementById("active_menu_one");
const menuTwo = document.getElementById("menu_drop_two");
const activeMenuTwo = document.getElementById("active_menu_two");
const menuTree = document.getElementById("menu_drop_tree");
const activeMenuTree = document.getElementById("active_menu_tree");
const menuMobileActive = document.getElementById("menu_mobile");
const listMenuMobile = document.getElementById("list_menu_mobile");
const menuOpen = document.getElementById("menu_open");
const menuOpenTwo = document.getElementById("menu_open_two");
const menuOpenTree = document.getElementById("menu_open_tree");

function menuMobileOn() {
  listMenuMobile.classList.toggle("active");
}

function imgTroca() {
  if (listMenuMobile.classList.contains("active")) {
    menuMobileActive.src = "./images/icon-close.svg";
  } else {
    menuMobileActive.src = "images/icon-hamburger.svg";
  }
}

function menuOn() {
  activeMenuOne.classList.toggle("active");
  menuOpen.classList.toggle("giro");
}

function menuOnTwo() {
  activeMenuTwo.classList.toggle("active");
  menuOpenTwo.classList.toggle("giro");
}

function menuOnTree() {
  activeMenuTree.classList.toggle("active");
  menuOpenTree.classList.toggle("giro");
}

menuOne.addEventListener("click", menuOn);
menuTwo.addEventListener("click", menuOnTwo);
menuTree.addEventListener("click", menuOnTree);
menuMobileActive.addEventListener("click", menuMobileOn);
menuMobileActive.addEventListener("click", imgTroca);

