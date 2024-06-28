// set initial count
let count = 0

// select value and buttons
const value = document.querySelector("#value")
const buttons = document.querySelectorAll(".btn")

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList

    if (classes.contains("increment")) {
      count++
    } else if (classes.contains("decrement")) {
      count--
    } else if (classes.contains("reset")) {
      count = 0
    }

    if (count > 0) {
      value.style.color = "green"
    }
    if (count < 0) {
      value.style.color = "red"
    }
    if (count === 0) {
      value.style.color = "#102a42"
    }
    value.textContent = count
  })
})
