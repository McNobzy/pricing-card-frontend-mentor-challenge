function getDivWidth() {
  alert(document.querySelector(".container").clientWidth);
}

window.onresize = () => {
  document.querySelector("#screenwidth").textContent = window.innerWidth + "px";
};

window.onload = () => {
  document.querySelector("#screenwidth").textContent = window.innerWidth + "px";
};


function showUpdatedDate() {
  document.querySelector("#updated").textContent = new Date();
}
