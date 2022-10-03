const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
inputRange.oninput = function () {
    spanText.style.fontSize = inputRange.value + "px";
}

