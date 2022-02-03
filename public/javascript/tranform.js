const square = document.getElementById("square");
const frontSide = document.getElementById("frontSide");
const rightSide = document.getElementById("rightSide");


frontSide.addEventListener("click", () => {
  frontSide.style.display = "none";
  rightSide.style.display = "block";

  square.style.transform = "rotate3d(0, 0, 0, 90deg)";
  document.title = "Login page";
});

rightSide.addEventListener("click", () => {
  rightSide.style.display = "none";
  frontSide.style.display = "block";
 
  square.style.transform = "rotate3d(0, -1, 0, 90deg)";
  document.title = "Sign up page";
});