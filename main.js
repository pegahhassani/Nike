const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: "$119",
        colors: [
            {
                code: "black",
                img: "./img/AirForce-B.png"
            },
            {
                code: "white",
                img: "./img/AirForce-W.png"
            }
        ]
    },
    {
        id: 2,
        title: "Jordan 3",
        price: "$200",
        colors: [
            {
                code: "#fd4400",
                img: "./img/Jordan3-R.png"
            },
            {
                code: "#0b0b41",
                img: "./img/Jordan3-B.png"
            }
        ]
    },
    {
        id: 1,
        title: "Blazer",
        price: "$150",
        colors: [
            {
                code: "#490606",
                img: "./img/Blazer-B.jpg"
            },
            {
                code: "gray",
                img: "./img/Blazer-G.jpg"
            }
        ]
    }
]

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductcolors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)` ;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        
        currentProductcolors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
})

currentProductcolors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "#e4e2e2"
            size.style.color = "black"
        });

        size.style.backgroundColor = "black";
        size.style.color = "#e4e2e2"
    })
})

const productButton = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
const backdrop = document.querySelector(".backdrop");

productButton.addEventListener("click", () => {
    backdrop.style.display = "block"
    payment.style.display = "flex"
})

close.addEventListener("click", () => {
    backdrop.style.display = "none"
    payment.style.display = "none"
})

backdrop.addEventListener("click", () => {
    backdrop.style.display = "none"
    payment.style.display = "none"
})