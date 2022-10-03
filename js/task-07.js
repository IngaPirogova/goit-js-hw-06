const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputRange.addEventListener("input", onChangeInput);

function onChangeInput(event) {
    spanText.style.fontSize = inputRange.value / 3.125 + 'px';
};



