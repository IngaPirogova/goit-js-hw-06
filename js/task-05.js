
const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputChange);

function onInputChange(event) {    
    if (event.currentTarget.value === "") {
      spanName.textContent = "Anonymus"
    } else {
      spanName.textContent = event.currentTarget.value
    }
  };




    
  

