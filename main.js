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
