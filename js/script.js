const cart = document.querySelectorAll(".cart");
const total = document.querySelector(".price");
const total_shop = document.querySelector(".shop-price");

let counterAll = 0;
let sumAll = 0;

cart.forEach((elem) => {
    const inputs = elem.querySelector(".inputs");
    const plus = elem.querySelector(".plus");
    const minus = elem.querySelector(".minus");

    let counter = 0;
    let sum = 0;

    plus.addEventListener("click", () => {
        counter++;
        inputs.value = counter;
        counterAll = counterAll + 1;
        total_shop.textContent = counterAll;
        sum = sum + Number(elem.getAttribute("data-price"));
        sumAll = sumAll + Number(elem.getAttribute("data-price"));
        total.textContent = (sumAll + "$");
        console.log(sumAll)
    });

    minus.addEventListener("click", () => {
        if (inputs.value > 0) {
            counter--;
            inputs.value = counter;
            counterAll = counterAll - 1;
            total_shop.textContent = counterAll;
            sum = sum - Number(elem.getAttribute("data-price"));
            sumAll = sumAll - Number(elem.getAttribute("data-price"));
            total.textContent = (sumAll + "$");
        }
    });
});