const question1 = document.querySelector(".answer-text-1");
const question2 = document.querySelector(".answer-text-2");
const question3 = document.querySelector(".answer-text-3");
const question4 = document.querySelector(".answer-text-4");
const plusBtn1 = document.querySelector(".icon-plus-1");
const minusBtn1 = document.querySelector(".icon-minus-1");
const plusBtn2 = document.querySelector(".icon-plus-2");
const minusBtn2 = document.querySelector(".icon-minus-2");
const plusBtn3 = document.querySelector(".icon-plus-3");
const minusBtn3 = document.querySelector(".icon-minus-3");
const plusBtn4 = document.querySelector(".icon-plus-4");
const minusBtn4 = document.querySelector(".icon-minus-4");

plusBtn1.addEventListener("click", () => {
  question1.classList.toggle("hidden-ans");
  plusBtn1.classList.toggle("hidden-btn");
  minusBtn1.classList.toggle("hidden-btn");

  //   removing hidden to other unwanted elements

  question2.classList.add("hidden-ans");
  question3.classList.add("hidden-ans");
  question4.classList.add("hidden-ans");

  minusBtn2.classList.add("hidden-btn");
  minusBtn3.classList.add("hidden-btn");
  minusBtn4.classList.add("hidden-btn");

  plusBtn2.classList.remove("hidden-btn");
  plusBtn3.classList.remove("hidden-btn");
  plusBtn4.classList.remove("hidden-btn");
});

minusBtn1.addEventListener("click", () => {
  question1.classList.toggle("hidden-ans");
  plusBtn1.classList.toggle("hidden-btn");
  minusBtn1.classList.toggle("hidden-btn");
});

// QUESTION 2

plusBtn2.addEventListener("click", () => {
  question2.classList.toggle("hidden-ans");
  plusBtn2.classList.toggle("hidden-btn");
  minusBtn2.classList.toggle("hidden-btn");

  //   removing hidden to other unwanted elements

  question1.classList.add("hidden-ans");
  question3.classList.add("hidden-ans");
  question4.classList.add("hidden-ans");

  minusBtn1.classList.add("hidden-btn");
  minusBtn3.classList.add("hidden-btn");
  minusBtn4.classList.add("hidden-btn");

  plusBtn1.classList.remove("hidden-btn");
  plusBtn3.classList.remove("hidden-btn");
  plusBtn4.classList.remove("hidden-btn");
});

minusBtn2.addEventListener("click", () => {
  question2.classList.toggle("hidden-ans");
  plusBtn2.classList.toggle("hidden-btn");
  minusBtn2.classList.toggle("hidden-btn");
});

// QUESTION 3

plusBtn3.addEventListener("click", () => {
  question3.classList.toggle("hidden-ans");
  plusBtn3.classList.toggle("hidden-btn");
  minusBtn3.classList.toggle("hidden-btn");

  //   removing hidden to other unwanted elements

  question1.classList.add("hidden-ans");
  question2.classList.add("hidden-ans");
  question4.classList.add("hidden-ans");

  minusBtn1.classList.add("hidden-btn");
  minusBtn2.classList.add("hidden-btn");
  minusBtn4.classList.add("hidden-btn");

  plusBtn1.classList.remove("hidden-btn");
  plusBtn2.classList.remove("hidden-btn");
  plusBtn4.classList.remove("hidden-btn");
});

minusBtn3.addEventListener("click", () => {
  question3.classList.toggle("hidden-ans");
  plusBtn3.classList.toggle("hidden-btn");
  minusBtn3.classList.toggle("hidden-btn");
});

// QUESTION 4

plusBtn4.addEventListener("click", () => {
  question4.classList.toggle("hidden-ans");
  plusBtn4.classList.toggle("hidden-btn");
  minusBtn4.classList.toggle("hidden-btn");

  //   removing hidden to other unwanted elements

  question1.classList.add("hidden-ans");
  question2.classList.add("hidden-ans");
  question3.classList.add("hidden-ans");

  minusBtn1.classList.add("hidden-btn");
  minusBtn2.classList.add("hidden-btn");
  minusBtn3.classList.add("hidden-btn");

  plusBtn1.classList.remove("hidden-btn");
  plusBtn2.classList.remove("hidden-btn");
  plusBtn3.classList.remove("hidden-btn");
});

minusBtn4.addEventListener("click", () => {
  question4.classList.toggle("hidden-ans");
  plusBtn4.classList.toggle("hidden-btn");
  minusBtn4.classList.toggle("hidden-btn");
});

//  ROADMAP

// onclick btn1{
//     add hidden to question 2 3 & 4
// }
// onclick btn2{
//     add hidden to question 1 3 & 4
// }
// onclick btn3{
//     add hidden to question 1 2 & 4
// }
// onclick btn4{
//     add hidden to question 1 2 & 3
// }
