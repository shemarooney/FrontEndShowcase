const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

const colors = ["red", "green", "blue", "black"];

btn.addEventListener("click", function () {
  const randomID = getRandomId();
  document.body.style.backgroundColor = colors[randomID];
  color.textContent = colors[randomID];
  btn.style.backgroundColor = colors[randomID];
});

function getRandomId() {
  return Math.floor(Math.random() * colors.length);
}
