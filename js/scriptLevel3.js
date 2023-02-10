let points = 30;
let chooseTimer = 20;

let userName = localStorage.getItem('playerNameImportantField');

function Start() {
    if (button) {
        return;
    }

    if (count === 0) {
        button = true;
        game();
        document.getElementById('button').innerHTML = 'Дальше';
    }
    else {
        if (count < repTimes) {
            if (count === repTimes - 1) {
                document.getElementById('button').innerHTML = 'Смотреть результаты';
            }
            button = true;
            remover();
            game();
        }
        else {
            window.location.href = '../pages/result.html';
            let currentScore = score + Number(localStorage.getItem(userName));
            localStorage.setItem(userName, currentScore);
        }
    }
}

function funcLevel() {
    chosenColor.textContent = colorsBank[pos[pickedColor]];
    if (colorsCSS[pos[pickedColor]] === 'black') {
        chosenColor.style.color = 'white';
    }  
    else {
        chosenColor.style.color = colorsCSS[pos[pickedColor]];
    }

    for (let i = 0; i < numSquares; i++) {
        let elem = document.getElementById('square' + (i + 1));
        elem.style.color = colorsCSS[pos[i]];
        let textColor = colorsRGB[pos[i]];
        let backColor = randomColor();
        let ifcol = true;
        while (ifcol) {
            if (Math.abs(backColor[0] - textColor[0]) > 64 && 
            Math.abs(backColor[1] - textColor[1]) > 64 &&
            Math.abs(backColor[2] - textColor[2]) > 64) {
                ifcol = false;
                elem.style.backgroundColor = 'rgb(' + backColor[0] + ', ' + backColor[1] + ', ' + backColor[2] + ')';
            }
            else {
                backColor = randomColor();
            }
        }
        elem.innerHTML = colorsBank[posWord[i]] + ' ' + words[posWord[i]];        
    }
}