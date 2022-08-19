const title = document.querySelector(".hello h1");

function handleTitleClick() {
  title.style.color = "tomato";
}

function handleMouseEnter() {
  title.style.color = "red";
}

function handleMouseLeave() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
