const menuOne = document.getElementById("menu_drop_one");
const activeMenuOne = document.getElementById("active_menu_one");
const menuTwo = document.getElementById("menu_drop_two");
const activeMenuTwo = document.getElementById("active_menu_two");
const menuTree = document.getElementById("menu_drop_tree");
const activeMenuTree = document.getElementById("active_menu_tree");

function menuOn() {
  activeMenuOne.classList.toggle("active");
}

function menuOnTwo() {
  activeMenuTwo.classList.toggle("active");
}

function menuOnTree() {
  activeMenuTree.classList.toggle("active");
}

menuOne.addEventListener("click", menuOn);
menuTwo.addEventListener("click", menuOnTwo);
menuTree.addEventListener("click", menuOnTree);


// const menuDropOn = document.querySelectorAll("#menu-drop");

// menuDropOn.forEach(i) => {
//    console.log(i);
// }
