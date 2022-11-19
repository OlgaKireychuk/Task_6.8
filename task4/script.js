document.querySelector('#myLink').addEventListener('click',
(event) => {
    event.preventDefault();
    const userText = prompt('Введите текст');
    const userTextField = document.querySelector('#myLink')
    userTextField.textContent = userText;
})