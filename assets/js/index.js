let header = document.querySelector("header");
let menu = document.querySelector("#open-menu");
let navbar = document.querySelector("#nav-menu");

window.addEventListener("scroll", () => {
  header.classList.toggle("blur__header", window.scrollY > 50);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

//======== Dark Mode / light mode========
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

//======== HAMBURGER MENU========

const menuIcon = document.getElementById('open-menu'),
      navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('close-menu');

                                    
// SHOW MENU
if(menuIcon){
  menuIcon.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu');
  })
};

// SHOW MENU

if (navClose) {
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu');
  })
};