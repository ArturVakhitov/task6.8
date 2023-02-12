const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
});

const consoleAlert = document.querySelector('#alert');

consoleAlert.addEventListener('click', () => {
    alert('Служит для отображения пользователю информации в виде диалогового окна с сообщением и кнопкой OK')
});

const consolePromt = document.querySelector('#prompt');

consolePromt.addEventListener('click', () => {
    alert('Служит для отображения диалогового окна с запросом на ввод текста пользователем')
});