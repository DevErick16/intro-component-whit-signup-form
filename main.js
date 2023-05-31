const btnSubmit = document.getElementById('btnSubmit');
const nameInput = document.getElementById('firstNameInput');
const errorNameInput = document.getElementById('firstNameError');
const lastInput = document.getElementById('lastNameInput');
const errorLastInput = document.getElementById('lastNameError');
const emailInput = document.getElementById('emailInput');
const errorEmailInput = document.getElementById('emailAddresError');
const passwordInput = document.getElementById('passwordInput');
const errorPasswordInput = document.getElementById('passwordError');

btnSubmit.addEventListener('click', (event)=>{
    event.preventDefault();
    formValidateEmpty(nameInput.value, nameInput, errorNameInput,'First Name cannot be empty');
    formValidateEmpty(lastInput.value, lastInput, errorLastInput,'Last Name cannot be empty');
    formValidateEmail(emailInput.value,emailInput,errorEmailInput,'Looks like this is not an email');
    formValidateEmpty(passwordInput.value,passwordInput, errorPasswordInput, 'Password cannot be empty');
});

function formValidateEmpty(inputValue, divInput, divError, nameError){
    if(inputValue.length == 0){
        showError(divInput, divError,nameError);
    }else{
        hideError(divInput,divError,nameError);
    }
}

function formValidateEmail(inputValue,divInput, divError,nameError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(inputValue)===false){
        showError(divInput,divError,nameError);
        
    }else{
        hideError(divInput,divError,nameError);
    }
}

function showError(divInput, divError,nameError){
    divInput.style.border='1px solid red';
    divError.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="icon error">
    <p class="error">${nameError}</p>`;
}
function hideError(divInput, divError){
    divInput.style.border=''
    divError.innerHTML=``
}