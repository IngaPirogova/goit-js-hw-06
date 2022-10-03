const inputText = document.querySelector('#validation-input');
console.log(inputText);

const inputLength = inputText.dataset.length;

inputText.addEventListener('blur', onInputValidation);

function onInputValidation(event) {

        if (event.currentTarget.value.length == inputLength) {
            inputText.classList.add("valid");
            inputText.classList.remove("invalid");
        } else {
            inputText.classList.add("invalid");
            inputText.classList.remove("valid");
        }  
    };



    
 



