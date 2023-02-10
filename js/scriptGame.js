let numSquares = 6;
let repTimes = 3;
let count = 0;
let posColor = [];
let posWord = [];
let pickedColor;
let timer;
let button = false;
let score = 0;
let penTime = 2;
let penScore = 10;

let chosenColor = document.getElementById('chosenColor');

function game () {
    startTimer();
    repeat();
}

function repeat() {
    pos = [];
    posWord = [];

    for (let i = 0; i < colorsBank.length; i++) {
        pos[i] = i;
    }
    for (let i = 0; i < words.length; i++) {
        posWord[i] = i;
    }
    arrMix(pos);
    arrMix(posWord);
    createSquares();

    pickedColor = Math.floor(Math.random() * numSquares);

    funcLevel();
}

function createSquares() {
    let container = document.getElementById('container');
    for (let i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        square.id = 'square' + (i + 1);
        container.appendChild(square);
    }
}

function arrMix(array) {
    let N = array.length;
    for (let i = N - 1; i > 0; i--) {
        let rnd = Math.floor(Math.random() * (N));
        if (rnd != i) {
            t = array[i];
            array[i] = array[rnd];
            array[rnd] = t;
        }
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbcode = [r, g, b];
    return rgbcode;
    //return "rgb(" + r +", " + g + ", " + b +")";
}

function remover() {
    for (let i = 0; i < numSquares; i++) {
        let elem = document.getElementById('square' + (i + 1));
        elem.remove();
    }
}

document.getElementById('container').onclick = function(event) {
    if (!button) {
        return;
    }

    let elem = document.getElementById(event.target.id);
    let number = Number(event.target.id.substr(6, 1));

    if (number != 0) {
        stopTimer();
        let clickedColor = number - 1;
        if (clickedColor === pickedColor) {
            score += points; 
            elem.style.borderColor = 'green';
        }
        else {
            elem.style.borderColor = 'red';
            chooseTimer -= penTime;
            score -= penScore;
            elem.animate([
                {transform: 'rotate(0deg)'},
                {transform: 'rotate(-10deg)'},
                {transform: 'rotate(10deg)'},
                {transform: 'rotate(-10deg)'},
                {transform: 'rotate(10deg)'}
            ], 200);
            document.getElementById('square' + (pickedColor + 1)).style.borderColor = 'green';
            }
            button = false;
            count++;
    }
};

function timeOut() {
    let elem = document.getElementById('square' + (pickedColor + 1));
    elem.style.borderColor = 'green';
    elem.animate([
        {transform: 'rotate(0deg)'},
        {transform: 'rotate(-10deg)'},
        {transform: 'rotate(10deg)'},
        {transform: 'rotate(-10deg)'},
        {transform: 'rotate(10deg)'}
    ], 200);
    count++;
    button = false;
    chooseTimer -= penTime;
    score -= penScore;
}

function startTimer() {
    let time = chooseTimer + 1;
    if (typeof(timer) != "undefined") {
        timer.stop();
    }
    timer = new Timer('timer', time);
    timer.start();
}

function stopTimer() {
    timer.stop();
}

function Timer(selector, time) {
    let elem = document.getElementById(selector);
    let timer = 0;
    let object = this;

    this.start = function() {
        timer = setInterval(object.tick, 1000);
    }

    this.stop = function() {
        clearInterval(timer);
    }

    this.tick = function() {
        if (time > 0) {
            time--;;
            elem.innerHTML = time;
        } else {
            object.stop();
            timeOut();
        }
    }
}