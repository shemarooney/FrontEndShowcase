const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")
const airForce = document.querySelector(".air-force")
const jordan = document.querySelector(".jordan")
const blazer = document.querySelector(".blazer")
const crater = document.querySelector(".crater")
const hippie = document.querySelector(".hippie")

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
]

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

airForce.style.color = "#369e62"

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`

    // Change the chose product
    chosenProduct = products[index]

    // Change texts of currentProduct
    currentProductTitle.textContent = chosenProduct.title
    currentProductPrice.textContent = "$" + chosenProduct.price
    currentProductImg.src = chosenProduct.colors[0].img

    // Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code
    })

    // Reset styles
    airForce.style.color = ""
    jordan.style.color = ""
    blazer.style.color = ""
    crater.style.color = ""
    hippie.style.color = ""

    // Apply styles based on the index
    if (index === 0) {
      airForce.style.color = "#369e62"
    } else if (index === 1) {
      jordan.style.color = "rebeccapurple"
    } else if (index === 2) {
      blazer.style.color = "teal"
    } else if (index === 3) {
      crater.style.color = "cornflowerblue"
    } else if (index === 4) {
      hippie.style.color = "rgb(124, 115, 80)"
    }
  })
})

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img
  })
})

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", (e) => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "whitesmoke"
      size.style.color = "#000"
    })
    size.style.backgroundColor = "#000"
    size.style.color = "#fff"
  })
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const closeButton = document.querySelector(".close")

productButton.addEventListener("click", () => {
  payment.style.display = "flex"
})

closeButton.addEventListener("click", () => {
  payment.style.display = "none"
})

let year = document.querySelector(".year")
year.textContent = new Date().getFullYear()
