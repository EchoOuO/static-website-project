const clickMenu = function () {
  if (
    document.querySelector(".nav-hamburger").style.display === "none" ||
    document.querySelector(".nav-hamburger").style.display === ""
  ) {
    document.querySelector(".nav-hamburger").style.display = "block";
    // document.querySelector(".menu-line1").style.transform =
    //   "translateX(0%) translateY(0%) rotate(45deg)";
    document.querySelector(".menu-line1").style.display = "none";
    document.querySelector(".menu-line2").style.opacity = "0";
    document.querySelector(".menu-line3").style.display = "none";
    // document.querySelector(".menu-line3").style.transform =
    //   "translateX(0%) translateY(0%) rotate(-45deg)";
    document.querySelector(".menu-line4").style.display = "block";
    document.querySelector(".menu-line5").style.display = "block";
    document.querySelector(".nav-hamburger").classList.toggle("active");
  } else {
    document.querySelector(".nav-hamburger").style.display = "none";
    // document.querySelector(".menu-line1").style.transform =
    //   "translateY(-300%) rotate(0deg)";
    document.querySelector(".menu-line1").style.display = "block";
    document.querySelector(".menu-line2").style.opacity = "1";
    document.querySelector(".menu-line3").style.display = "block";
    // document.querySelector(".menu-line3").style.transform =
    //   "translateY(300%) rotate(0deg)";
    document.querySelector(".menu-line4").style.display = "none";
    document.querySelector(".menu-line5").style.display = "none";
    document.querySelector(".nav-hamburger").classList.toggle("active");
  }
};
