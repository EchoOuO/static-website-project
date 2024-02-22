"use strict";

// FAQ icon click -> paragrapgh display

const faqDetail = document.querySelectorAll(".faq-detail");
const faqIcon = document.querySelectorAll(".faq-icon");
const faqLine1 = document.querySelectorAll(".faq-line1");
const faqLine2 = document.querySelectorAll(".faq-line2");
const faqLine3 = document.querySelectorAll(".faq-line3");
const faqLine4 = document.querySelectorAll(".faq-line4");

// open & close faq
// how to make one open , one close????
for (let i = 0; i < faqIcon.length; i++) {
  // const initFaq = function () {
  //   document
  //     .querySelectorAll(".faq-detail:not(:nth-child(" + i + "))")
  //     .classList.remove("faq-detail-shift");
  //   document
  //     .querySelectorAll(".faq-line1:not(:nth-child(" + i + "))")
  //     .classList.remove("faq-icon-hidden");
  //   document
  //     .querySelectorAll(".faq-line2:not(:nth-child(" + i + "))")
  //     .classList.remove("faq-icon-hidden");
  //   document
  //     .querySelectorAll(".faq-line3:not(:nth-child(" + i + "))")
  //     .classList.add("faq-icon-hidden");
  //   document
  //     .querySelectorAll(".faq-line4:not(:nth-child(" + i + "))")
  //     .classList.add("faq-icon-hidden");
  // };

  const openCloseFaq = function () {
    faqDetail[i].classList.toggle("faq-detail-shift");
    faqLine1[i].classList.toggle("faq-icon-hidden");
    faqLine2[i].classList.toggle("faq-icon-hidden");
    faqLine3[i].classList.toggle("faq-icon-hidden");
    faqLine4[i].classList.toggle("faq-icon-hidden");
  };

  // faqIcon[i].addEventListener("click", initFaq);
  faqIcon[i].addEventListener("click", openCloseFaq);
}

// --- Skills animation
const skillAll = document.querySelectorAll(".skill-all");

for (let i = 0; i < skillAll.length; i++) {
  const skillPosition =
    document.querySelector(".skill-all").getBoundingClientRect().top +
    window.scrollY;

  let delayTime = i;

  console.log(Math.ceil(window.scrollY), skillPosition, window.innerWidth);

  window.addEventListener("scroll", () => {
    if (
      Math.ceil(window.scrollY) > skillPosition * 0.4 &&
      window.innerWidth > 700
    ) {
      skillAll[i].style.animation = "skill-rolling 1.5s forwards";
      skillAll[i].style.animationDelay = `${delayTime * 0.1}s`;
    }

    if (
      Math.ceil(window.scrollY) > skillPosition * 0.45 &&
      window.innerWidth <= 700
    ) {
      skillAll[i].style.animation = "skill-rolling 1.5s forwards";
      skillAll[i].style.animationDelay = `${delayTime * 0.1}s`;
    }
  });
}
