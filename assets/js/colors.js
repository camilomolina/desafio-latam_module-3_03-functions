// js
let styleDivs = (e) => {
  e.style.backgroundColor = "black";
};

document
  .querySelectorAll("#div-1, #div-2, #div-3, #div-4")
  .forEach((div) => div.addEventListener("click", (e) => styleDivs(e.target)));
