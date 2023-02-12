const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    const newLink = prompt('Ссылкa изменит название на введенный в окно ввода текст')
    link.textContent = newLink;
    event.preventDefault();
});