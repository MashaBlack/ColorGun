let nameArray = [];
let scoreArray = [];
let filename = 'ColorGun_ScoreTable';
let type = 'txt';
let thisTime = new Date();
let curDate = thisTime.toLocaleDateString();
let hours = thisTime.getHours();
let minutes = thisTime.getMinutes();
let seconds = thisTime.getSeconds();
let curTime = hours + '.' + minutes + '.' + seconds;

for (let key in localStorage) {
    if (!localStorage.hasOwnProperty(key) || key.indexOf('ImportantField') != -1) {
        continue;
    }

    if (!isNaN(`${localStorage.getItem(key)}`)) {
        nameArray.push(`${key}`);
        scoreArray.push(Math.round(Number(`${localStorage.getItem(key)}`)));
    }
}

BubbleSort(scoreArray, nameArray);

for (let i = 0; i < nameArray.length; i++) {
    let element = document.getElementById('firsttable');
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    if (i % 2 == 0) {
        tr.className = 'class1';
    }
    element.append(tr);
    td1.innerHTML = nameArray[i];
    tr.append(td1);
    td2.innerHTML = scoreArray[i];
    tr.append(td2);
}

function BubbleSort(array, name) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j + 1] > array[j]) {
                let n = name[j + 1];
                let s = array[j + 1];
                array[j + 1] = array[j];
                name[j + 1] = name[j];
                array[j] = s;
                name[j] = n;
            }
            if (array[j + 1] == array[j] && name[j + 1] < name[j]) {
                let n = name[j + 1];
                name[j + 1] = name[j];
                name[j] = n;
            }
        }
    }
}

function main() {
    window.location.href = '../index.html';
}

function play() {
    window.location.href = 'level1.html';
}

function download() {
    let name = localStorage.getItem('playerNameImportantField');
    let data = "Результаты:";
    for (let i = 0; i < nameArray.length; i++) {
        data += "\n" + nameArray[i] + ":  " + scoreArray[i];
    }
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) 
        window.navigator.msSaveOrOpenBlob(file, name + '_' + curDate + '_' + curTime);
    else { 
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = name + '_' + curDate + '_' + curTime;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}