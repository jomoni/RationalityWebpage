// Rationality Engineering Design Website
// Morgan Nicholson, jmnichol3@gmail.com
// 6/11/2020

// carousel functionality, every 3.5 seconds, script sets a different image/link/header to visible

//time interval for image rotation (in milliseconds)
var slideInterval = 3500;

//which picture is being pointed at (not a literal pointer)
var pointer = 0;

//function pulls all figures from carousl
function getFigures() {
    var figures = document.getElementById("carousel").querySelectorAll("figure");
    return figures;
}

//function pulls links from carousel
function getLinks() {
    var links = document.getElementById("carousel").querySelectorAll("a");
    return links;
}

//increments pointer to next picture, resets to 0 when reaches end of array
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

//wrapper function 
function startPlayback(){
    var figures = getFigures();
    figures[0].className = 'visible';
    var links = getLinks();
    links[0].className = 'visible';
    setTimeout(moveForward, slideInterval);
}

//call wrapper function to invoke the functionality
startPlayback()