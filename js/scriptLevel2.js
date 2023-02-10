let points = 20;
let chooseTimer = 15;

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
                document.getElementById('button').innerHTML = 'Следующий уровень';
            }
            button = true;
            remover();
            game();
        }
        else {
            window.location.href = '../pages/level3.html';
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
        elem.style.backgroundColor = colorsCSS[pos[i]];
        let backColor = colorsRGB[pos[i]];
        let textColor = randomColor();
        let ifcol = true;
        while (ifcol) {
            if (Math.abs(backColor[0] - textColor[0]) > 64 && 
            Math.abs(backColor[1] - textColor[1]) > 64 &&
            Math.abs(backColor[2] - textColor[2]) > 64) {
                ifcol = false;
                elem.style.color = 'rgb(' + textColor[0] + ', ' + textColor[1] + ', ' + textColor[2] + ')';
            }
            else {
                textColor = randomColor();
            }
        }
        elem.innerHTML = colorsBank[posWord[i]] + ' ' + words[posWord[i]];
    }
        
}
