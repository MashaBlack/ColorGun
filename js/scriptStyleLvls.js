let styleGame = localStorage.getItem('styleImportantField');

switch (Number(localStorage.getItem('styleImportantField'))) {
    case 0: {
        document.getElementById('body').style.backgroundImage = 'url(' + '../images/design1Lvls.jpg' + ')';
    } break;
    case 1: {
        document.getElementById('body').style.backgroundImage = 'url(' + '../images/design2Lvls.jpg' + ')';
    } break;
    case 2: {
        document.getElementById('body').style.backgroundImage = 'url(' + '../images/design3Lvls.jpg' + ')';
    } break;
}