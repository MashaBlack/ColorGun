let styleGame = localStorage.getItem('styleImportantField');

switch (Number(localStorage.getItem('styleImportantField'))) {
    case 0: {
        document.getElementById('body').style.backgroundImage = 'url(' + '../images/design1.jpg' + ')';
    } break;
    case 1: {
        document.getElementById('body').style.backgroundImage = 'url(' + '../images/design2.jpg' + ')';
    } break;
    case 2: {
        document.getElementById('body').style.backgroundImage = 'url(' + '../images/design3.jpg' + ')';
    } break;
}