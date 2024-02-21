"use strict";

// FAQ icon click -> paragrapgh display

// 1. 目前只有在display = none 的時候點有反應 --> fixed  (不能設定 document.querySelector(".faq-detail").style.display 為 變數)
// 2. 只有點第一下 變block 有反應 --> 同上
// 3. 只有第一個icon點下去 有反應

// document.querySelector(".faq-icon").addEventListener("click", function () {
//   if (
//     document.querySelector(".faq-detail").style.display === "none" ||
//     document.querySelector(".faq-detail").style.display === ""
//   ) {
//     document.querySelector(".faq-detail").style.display = "block";
//   } else {
//     document.querySelector(".faq-detail").style.display = "none";
//   }
// });

// 第二種寫法，HTML 那邊要加 onclick="clickButton()"
// const clickButton = function () {
//   if (
//     document.querySelector(".faq-detail").style.display === "none" ||
//     document.querySelector(".faq-detail").style.display === ""
//   ) {
//     document.querySelector(".faq-detail").style.display = "block";
//   } else {
//     document.querySelector(".faq-detail").style.display = "none";
//   }
// };

const clickButton1 = function () {
  if (
    document.querySelector(".faq-detail1").style.display === "none" ||
    document.querySelector(".faq-detail1").style.display === ""
  ) {
    document.querySelector(".faq-detail1").style.display = "block";
    document.querySelector(".faq-line1").style.opacity = "0";
    document.querySelector(".faq-line2").style.opacity = "0";
    document.querySelector(".faq-line3").style.opacity = "1";
    document.querySelector(".faq-line4").style.opacity = "1";
    document.querySelector(".faq-title1").style.backgroundColor =
      "var(--color-light-primary)";
  } else {
    document.querySelector(".faq-detail1").style.display = "none";
    document.querySelector(".faq-line1").style.opacity = "1";
    document.querySelector(".faq-line2").style.opacity = "1";
    document.querySelector(".faq-line3").style.opacity = "0";
    document.querySelector(".faq-line4").style.opacity = "0";
    document.querySelector(".faq-title1").style.backgroundColor = "";
  }
};

const clickButton2 = function () {
  if (
    document.querySelector(".faq-detail2").style.display === "none" ||
    document.querySelector(".faq-detail2").style.display === ""
  ) {
    document.querySelector(".faq-detail2").style.display = "block";
    document.querySelector(".faq-line5").style.opacity = "0";
    document.querySelector(".faq-line6").style.opacity = "0";
    document.querySelector(".faq-line7").style.opacity = "1";
    document.querySelector(".faq-line8").style.opacity = "1";
    document.querySelector(".faq-title2").style.backgroundColor =
      "var(--color-light-primary)";
  } else {
    document.querySelector(".faq-detail2").style.display = "none";
    document.querySelector(".faq-line5").style.opacity = "1";
    document.querySelector(".faq-line6").style.opacity = "1";
    document.querySelector(".faq-line7").style.opacity = "0";
    document.querySelector(".faq-line8").style.opacity = "0";
    document.querySelector(".faq-title2").style.backgroundColor = "";
  }
};

const clickButton3 = function () {
  if (
    document.querySelector(".faq-detail3").style.display === "none" ||
    document.querySelector(".faq-detail3").style.display === ""
  ) {
    document.querySelector(".faq-detail3").style.display = "block";
    document.querySelector(".faq-line9").style.opacity = "0";
    document.querySelector(".faq-line10").style.opacity = "0";
    document.querySelector(".faq-line11").style.opacity = "1";
    document.querySelector(".faq-line12").style.opacity = "1";
    document.querySelector(".faq-title3").style.backgroundColor =
      "var(--color-light-primary)";
  } else {
    document.querySelector(".faq-detail3").style.display = "none";
    document.querySelector(".faq-line9").style.opacity = "1";
    document.querySelector(".faq-line10").style.opacity = "1";
    document.querySelector(".faq-line11").style.opacity = "0";
    document.querySelector(".faq-line12").style.opacity = "0";
    document.querySelector(".faq-title3").style.backgroundColor = "";
  }
};

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
