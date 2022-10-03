
const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');
console.log(inputName);
console.log(spanName);

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanName.textContent = event.currentTarget.value;

    if (inputName.value) {
      output.textContent = inputName.value;
    } else {
      output.textContent = "Anonymous";
    }
  };


// event.currentTarget.reset();

    
  

