const inputText = document.querySelector('#validation-input');
console.log(inputText);

const inputLength = inputText.dataset.length;

inputText.addEventListener('blur', onInputValidation);

function onInputValidation(event) {

    if (Number(event.currentTarget.value.length) === Number(inputLength)) {
             inputText.classList.add("valid");
    } else {
        inputText.classList.add("invalid");
    }  
};
       
 




