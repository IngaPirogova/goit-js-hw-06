const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormLogin);

function onFormLogin(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {email, password};
    
    if (email === "" || password === "") {
        alert('Все поля должны быть заполнены')
    } else {
        console.log(formData);
        event.currentTarget.reset();
    };
  
};




