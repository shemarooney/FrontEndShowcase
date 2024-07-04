const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]
const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()

// let futureDate = new Date(2024, 6, 31, 20, 45, 0)
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)
console.log(futureDate.getDate())

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()

const weekDay = weekdays[futureDate.getDay()]
// console.log(weekDay);

giveaway.textContent = `giveaway ends on ${weekDay} ${date} ${month} ${year} ${hours}:${minutes}pm`

// Future time in  milliseconds
const futureTime = futureDate.getTime()
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime()
  // console.log(today);
  const t = futureTime - today
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hrs

  // Values in ms
  const ondeDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  const oneSecond = 1000

  // Calculate all values
  let days = t / ondeDay
  days = Math.floor(days)

  let hours = (t % ondeDay) / oneHour
  hours = Math.floor(hours)

  let minutes = Math.floor((t % oneHour) / oneMinute)
  let seconds = Math.floor((t % oneMinute) / oneSecond)
  // console.log(seconds);

  // Set values array

  function format(item) {
    if (item < 10) {
      return (item = `0 ${item}`)
    }
    return item
  }

  const values = [days, hours, minutes, seconds]

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })

  // To stop the countdown when the remaining time is 0

  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
  }
}

//  Countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()
