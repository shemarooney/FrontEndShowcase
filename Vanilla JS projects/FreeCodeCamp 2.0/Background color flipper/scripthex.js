const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.background = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
