// js
let globalColor = document.getElementById("key-div").style.backgroundColor;
let keyDiv = document.getElementById("key-div");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    globalColor = "pink";
    styleDiv(keyDiv);
  } else if (event.key === "s") {
    globalColor = "orange";
    styleDiv(keyDiv);
  } else if (event.key === "d") {
    globalColor = "aqua";
    styleDiv(keyDiv);
  }
});

let styleDiv = (e) => {
  e.style.backgroundColor = globalColor;
};
