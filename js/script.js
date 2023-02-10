localStorage.clear();
let styletheme = 0;
let mainpict = document.getElementById('body');
localStorage.setItem('styleImportantField', styletheme);
let nameUser = document.getElementById('name');

localStorage.setItem('startingGameImportantField', 0);

switch (Number(localStorage.getItem('styleImportantField'))) {
    case 0: {
        mainpict.style.backgroundImage = 'url(' + 'images/design1.jpg' + ')';
    } break;
    case 1: {
        mainpict.style.backgroundImage = 'url(' + 'images/design2.jpg' + ')';
    } break;
    case 2: {
        mainpict.style.backgroundImage = 'url(' + 'images/design3.jpg' + ')';
    } break;
}

function changeStyle() {
    switch (Number(localStorage.getItem('styleImportantField'))) {
        case 0: {
            mainpict.style.backgroundImage = 'url(' + 'images/design2.jpg' + ')';
            styletheme = 1;
            localStorage.setItem('styleImportantField', styletheme);
        } break;
        case 1: {
            mainpict.style.backgroundImage = 'url(' + 'images/design3.jpg' + ')';
            styletheme = 2;
            localStorage.setItem('styleImportantField', styletheme);
        } break;
        case 2: {
            mainpict.style.backgroundImage = 'url(' + 'images/design1.jpg' + ')';
            styletheme = 0;
            localStorage.setItem('styleImportantField', styletheme);
        } break;
    }
}

function startGame() {
    if (localStorage.getItem('repeatImportantField') != null) {
        localStorage.removeItem('repeatImportantField');
    }
    localStorage.setItem('startingGameImportantField', 0);
    if (isEmpty(nameUser.value) || nameUser.value.indexOf('ImportantField') != -1) {
        alert('Введите своё имя!');
    } else {
        localStorage.setItem('playerNameImportantField', nameUser.value);
        window.location.href = 'pages/level1.html';
    }

    function isEmpty(str) {
        return str.trim() == '';
    }
}