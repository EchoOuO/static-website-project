function closeMenu() {
  document.querySelector(".nav-hamburger").style.display = "none";
  document.querySelector(".menu-line1").style.display = "block";
  document.querySelector(".menu-line2").style.opacity = "1";
  document.querySelector(".menu-line3").style.display = "block";
  document.querySelector(".menu-line4").style.display = "none";
  document.querySelector(".menu-line5").style.display = "none";
  document.querySelector(".nav-hamburger").classList.toggle("active");
}

function openMenu() {
  document.querySelector(".nav-hamburger").style.display = "block";
  document.querySelector(".menu-line1").style.display = "none";
  document.querySelector(".menu-line2").style.opacity = "0";
  document.querySelector(".menu-line3").style.display = "none";
  document.querySelector(".menu-line4").style.display = "block";
  document.querySelector(".menu-line5").style.display = "block";
  document.querySelector(".nav-hamburger").classList.toggle("active");
}

function clickMenu() {
  if (
    document.querySelector(".nav-hamburger").style.display === "none" ||
    document.querySelector(".nav-hamburger").style.display === ""
  ) {
    openMenu();
  } else {
    closeMenu();
  }

  for (let menu of document.querySelector(".nav-hamburger").children) {
    menu.addEventListener("click", closeMenu);
  }
}
