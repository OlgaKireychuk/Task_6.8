let userText  = document.querySelector('input');
let userTextField = document.querySelector('#duplicateField');

userText.addEventListener('input',
(event) => {
    userTextField.textContent = userText.value
})

let myButton = document.querySelector('button')

myButton.addEventListener('click',
(event) => {
    event.preventDefault();
    console.log(userText.value);
    userText.value = '';
    userTextField.textContent = userText.value
})