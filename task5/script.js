const userText = document.querySelector('input');

const button = document.querySelector('button');

const duplicateField = document.querySelector('#duplicateField');

userText.addEventListener('input', event => {
duplicateField.textContent = userText.value;
event.preventDefault();
});

button.addEventListener('click', event => {
    console.log(userText.value);
    userText.value = null;
    duplicateField.textContent = null;
    event.preventDefault();   
});