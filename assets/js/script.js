// js
function pintar(e, color = "green") {
  e.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, "yellow"));

pintar(ele);

// 4 colores
const divs = document
  .querySelector("div-1, div-2, div-3, div-4")
  .addEventListener("click", (event) => {
    event.target.style.backgroundColor = "black";
  });
