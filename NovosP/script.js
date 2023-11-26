const value = document.getElementById("value");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");

const UpdateValue = () => {
    value.innerHTML = count;
}

let count = 0;
let intervalId = 0;

plusButton.addEventListener("mousedown" , () => {
    intervalId = setInterval(() =>{
        count += 1;
        UpdateValue();
    }, 100);
});

minusButton.addEventListener("mousedown" , () => {
    intervalId = setInterval(() =>{
        count -= 1;
        UpdateValue();
    }, 100);
});

resetButton.addEventListener("click" , () => {
    count = 0;
    UpdateValue();
});

document.addEventListener("mouseup", () => clearInterval(intervalId));
