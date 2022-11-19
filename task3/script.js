let trafficLight = document.querySelector('#trafficLight')
const trafficLightEl = document.querySelector('#trafficLight1');
const trafficLightE2 = document.querySelector('#trafficLight2');
const trafficLightE3 = document.querySelector('#trafficLight3');

trafficLight.addEventListener('click', makeRed);

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('black');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('yellow');
    trafficLightE3.style.background = ('black');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
}


function makeGreen() {
    trafficLightEl.style.background = ('black');
    trafficLightE2.style.background = ('black');
    trafficLightE3.style.background = ('green');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
}