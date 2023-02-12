const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');

trafficLightGreen.addEventListener('click', makeGreen);
trafficLightYellow.addEventListener('click', makeGreen);
trafficLightRed.addEventListener('click', makeGreen);

function makeRed() {
    trafficLightRed.style.background = ('red');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('black')

    trafficLightRed.removeEventListener('click', makeRed);
    trafficLightYellow.removeEventListener('click', makeRed);
    trafficLightGreen.removeEventListener('click', makeRed);

    trafficLightRed.addEventListener('click', makeGreen);
    trafficLightYellow.addEventListener('click', makeGreen);
    trafficLightGreen.addEventListener('click', makeGreen);
};

function makeYellow() {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('yellow');
    trafficLightGreen.style.background = ('black')

    trafficLightRed.removeEventListener('click', makeYellow);
    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightGreen.removeEventListener('click', makeYellow);

    trafficLightRed.addEventListener('click', makeRed);
    trafficLightYellow.addEventListener('click', makeRed);
    trafficLightGreen.addEventListener('click', makeRed);
};

function makeGreen() {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('green')

    trafficLightRed.removeEventListener('click', makeGreen);
    trafficLightYellow.removeEventListener('click', makeGreen);
    trafficLightGreen.removeEventListener('click', makeGreen);

    trafficLightRed.addEventListener('click', makeYellow);
    trafficLightYellow.addEventListener('click', makeYellow);
    trafficLightGreen.addEventListener('click', makeYellow);
};