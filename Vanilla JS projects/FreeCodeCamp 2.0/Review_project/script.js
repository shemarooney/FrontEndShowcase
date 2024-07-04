const reviewers = [
  {
    name: "Wayne Rooney",
    job: "G.O.A.T",
    img: "./rooney(1).jpg",
    review:
      "In the Champions League's first-ever all-English final, United defeated rivals Chelsea to win another trophy. Rooney takes on Andrés Iniesta and Sergio Busquets of Barcelona during the 2009 UEFA Champions League Final. Rooney scored twice in the FIFA Club World Cup semi-final and was awarded the Golden Ball.",
  },
  {
    name: "NEYMAR JR",
    job: "Always in Hospital",
    img: "./neymar.jpg",
    review:
      "Neymar made his professional debut on 7 March 2009, despite being only 17 years old. He was brought on for the last thirty minutes, in a 2–1 win against Oeste.[16] The following week he scored his first goal for Santos against Mogi Mirim. One month later, on 11 April, Neymar scored the decisive goal in a 2–1",
  },
  {
    name: "SADIO Mane",
    job: "African best player",
    img: "./mane.jpg",
    review:
      "Mané helped win an early penalty for Liverpool in the 2019 UEFA Champions League final against Tottenham, Salah subsequently converted from the spot to open the scoring, and Liverpool ultimately won the match 2–0 to claim the title.",
  },
  {
    name: "KEVIN De Bruyne",
    job: "Best play maker",
    img: "./kdb.jpg",
    review:
      "On 10 June, he played only 36 minutes in his second Champions League final, as he suffered a hamstring injury. However, Manchester City eventually won 1–0 against Inter Milan, which completed their continental treble. After the season, De Bruyne was nominated for UEFA Men's Player of the Year Award .",
  },
  {
    name: "CRISTIANO  Ronaldo",
    job: "World football's all time top scorer",
    img: "./ronaldo.jpg",
    review:
      "At the quarter-final stage of the 2006–07 UEFA Champions League, Ronaldo scored his first goals in his 30th match in the competition, scoring twice in a 7–1 win over Roma. He subsequently scored four minutes into the first semi-final leg against Milan, which ended in a 3–2 win, ",
  },
]

const img = document.getElementById("img")
const names = document.getElementById("person-name")
const job = document.getElementById("job")
const testimonial = document.getElementById("review")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let CurrentId = 0

window.addEventListener("DOMContentLoaded", function () {
  displayPerson()
})

function displayPerson() {
  const person = reviewers[CurrentId]

  img.src = person.img
  names.textContent = person.name
  job.textContent = person.job
  testimonial.textContent = person.review
}

nextBtn.addEventListener("click", function () {
  CurrentId++
  if (CurrentId > reviewers.length - 1) {
    CurrentId = 0
  }
  // console.log(CurrentId);
  displayPerson()
})

prevBtn.addEventListener("click", function () {
  CurrentId--
  if (CurrentId < 0) {
    CurrentId = reviewers.length - 1
  }
  // console.log(CurrentId)
  displayPerson()
})

randomBtn.addEventListener("click", function () {
  CurrentId = Math.floor(Math.random() * reviewers.length)
  console.log(CurrentId)
  displayPerson()
})
