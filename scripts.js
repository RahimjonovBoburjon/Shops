const cart = document.querySelectorAll(".cart");
const total = document.querySelector(".price");
const total_shop = document.querySelector(".shop-price");
let counter = 0;
let sum = 0;

cart.forEach((elem) => {
    elem.addEventListener("click", () => {
        const inputs = document.querySelectorAll(".inputs");
        const plus = document.querySelectorAll(".plus");
        const minus = document.querySelectorAll(".minus");

        plus.forEach((element) => {
            element.addEventListener("click", () => {
                counter++;
                inputs.forEach((elem1) => {
                    elem1.addEventListener("click", () => {
                        elem1.value = counter;
                    })
                })
                console.log(inputs)
                total_shop.textContent = (counter);
                sum = sum + Number(elem.getAttribute("data-price"));
                total.textContent = (sum + "$");
            });
        })

        minus.forEach((elements) => {
            elements.addEventListener("click", () => {
                if (inputs.value > 0) {
                    counter--;
                    inputs.forEach((elem1) => {
                        elem1.value = counter;
                    })
                    total_shop.textContent = (counter)
                    sum = sum - Number(elem.getAttribute("data-price"));
                    total.textContent = (sum + "$");
                }
            });
        })
        console.log(elem)
    })
});