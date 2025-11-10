"use strict";

//place share icon in variable
const shareIcon = document.querySelectorAll(".share-icon");

const footer = document.querySelector(".footer");

const unclicked_div = document.querySelector(".unclicked");

const clicked_div = document.querySelector(".clicked");

/** @type {HTMLDivElement} */
const social_popup = document.querySelector(".social-popup");

const card_bottom_avatar = document.querySelector(".card-bottom-avatar");

shareIcon.forEach((element) => {
  element.addEventListener("click", (event) => {
    // code for smaller screen size
    if (window.innerWidth <= 375) {
      footer.classList.toggle("footer-share");
      unclicked_div.classList.toggle("hidden");
      clicked_div.classList.toggle("hidden");
    }

    if (window.innerWidth > 375) {
      // Code for larger screen width

      social_popup.classList.toggle("hidden");
      const shareX = event.target.getBoundingClientRect().left;
      const shareY = event.target.getBoundingClientRect().top;
      social_popup.style.top =
        `${
          shareY -
          social_popup.getBoundingClientRect().height / 2 -
          event.target.getBoundingClientRect().height * 2.5
        }` + "px";
      social_popup.style.left =
        `${shareX - social_popup.getBoundingClientRect().width / 2}` + "px";
    }
  });
});

//This works!!
window.addEventListener("resize", () => {
  if (window.innerWidth > 375) {
    footer.classList.add("hidden");
    card_bottom_avatar.classList.remove("hidden");
    social_popup.classList.add("hidden");
  } else if (window.innerWidth <= 375) {
    footer.classList.remove("hidden");
    card_bottom_avatar.classList.add("hidden");
  }
});

window.onload = () => {
  if (window.innerWidth > 375) {
    footer.classList.add("hidden");
    card_bottom_avatar.classList.remove("hidden");
  } else if (window.innerWidth <= 375) {
    footer.classList.remove("hidden");
    card_bottom_avatar.classList.add("hidden");
  }
};
