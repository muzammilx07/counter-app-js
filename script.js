const valueParagraph = document.getElementById("value");
valueParagraph.innerText = '0';

const minusbtn = document.getElementById("minusbtn");
const plusbtn = document.getElementById("plusbtn");

minusbtn.addEventListener("click", function () {
    const currentValue = parseInt(valueParagraph.innerText);
    if (currentValue > 0) {
        valueParagraph.innerText = (currentValue - 1).toString();
    }
});

plusbtn.addEventListener("click", function () {
    valueParagraph.innerText = (parseInt(valueParagraph.innerText) + 1).toString();
});

const resetbtn = document.getElementById("resetbtn");
resetbtn.addEventListener("click", function () {
    valueParagraph.innerText = '0';
});