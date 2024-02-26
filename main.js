"use strict";

// --- Service block animation
const service = document.querySelector(".service");
const serviceAll = document.querySelectorAll(".service");

// console.log(service);
// console.log(serviceAll);
// console.log(servicePosition);
// console.log(window.scrollY);

for (let i = 0; i < serviceAll.length; i++) {
  const servicePosition =
    document.querySelector(".service").getBoundingClientRect().top +
    window.scrollY;

  let delayTime = i + 1.5;
  // console.log(delayTime);
  // console.log(`${delayTime}s`);

  window.addEventListener("scroll", () => {
    if (Math.ceil(window.scrollY) > servicePosition * 0.55) {
      serviceAll[i].style.animation = "service-animation-jump 0.5s ease-in";
      serviceAll[i].style.animationDelay = `${delayTime * 0.15}s`;
    }
  });
}

// --- Skills animation
const skillAll = document.querySelectorAll(".skill-all");

for (let i = 0; i < skillAll.length; i++) {
  const skillPosition =
    document.querySelector(".skill-all").getBoundingClientRect().top +
    window.scrollY;

  let delayTime = i;

  // console.log(Math.ceil(window.scrollY), skillPosition, window.innerWidth);

  window.addEventListener("scroll", () => {
    if (
      Math.ceil(window.scrollY) > skillPosition * 0.5 &&
      window.innerWidth > 700
    ) {
      skillAll[i].style.animation = "skill-rolling 1.5s forwards";
      skillAll[i].style.animationDelay = `${delayTime * 0.1}s`;
    }

    if (
      Math.ceil(window.scrollY) > skillPosition * 0.6 &&
      window.innerWidth <= 700
    ) {
      skillAll[i].style.animation = "skill-rolling 1.5s forwards";
      skillAll[i].style.animationDelay = `${delayTime * 0.1}s`;
    }
  });
}

// --- Submit button alert
const submitButton = document.querySelector(".button-submit");

// can just alert for once?
function thanksInfo() {
  // for (let input of document.querySelectorAll("input")) {
  //   if (!input.value == "") {
  alert("Thanks, I'll reply you ASAP");
  //     }
  //   }
}

submitButton.addEventListener("click", thanksInfo);

// --- Portfolios pop-out
const project = document.querySelectorAll(".project"); // 要怎麼抓到 ::before ???
// const projectBefore = project.getComputedStyle(":before");
const projectDetail = document.querySelectorAll(".project-pop-out");
const cancelButton = document.querySelectorAll(".project-cancle-button");
const layout = document.querySelector(".overlay");

for (let i = 0; i < project.length; i++) {
  function popout() {
    projectDetail[i].classList.remove("hidden");
    layout.classList.remove("hidden");
  }
  cancelButton[i].addEventListener("click", popout);
  layout.addEventListener("click", popout);
}

// Clse portfolios  details

for (let i = 0; i < cancelButton.length; i++) {
  function hidden(e) {
    // console.log(projectDetail);
    // console.log(cancelButton);
    // console.log(layout);
    // console.log(e);
    projectDetail[i].classList.add("hidden");
    layout.classList.add("hidden");
  }

  function hiddenEsc(e) {
    // console.log(e);
    if (e.key == "Escape") {
      hidden();
    }
  }

  cancelButton[i].addEventListener("click", hidden);
  layout.addEventListener("click", hidden);
  window.addEventListener("keydown", hiddenEsc);
}
