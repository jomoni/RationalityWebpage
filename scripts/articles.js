var slideInterval = 3500;
var pointer = 0;

function getFigures() {
    var figures = document.getElementById("carousel").querySelectorAll("figure");
    return figures;
}

function moveForward() {
    var figures = getFigures();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className == 'visible') {
            figures[i].className = '';
        }
    }
    if (pointer + 1 == figures.length) {
        pointer = 0;
    } else {
        pointer = pointer + 1;
    }
    figures[pointer].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

function startPlayback(){
    var figures = getFigures();
    figures[0].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

startPlayback()