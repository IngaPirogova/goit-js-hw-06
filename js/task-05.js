
const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');
console.log(inputName);
console.log(spanName);

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    spanName.textContent = event.currentTarget.value;
}



