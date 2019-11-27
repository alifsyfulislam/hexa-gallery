var
    carousel = document.querySelector('.carousel'),
    figure = carousel.querySelector('figure'),
    nav = carousel.querySelector('nav'),
    numImages = figure.childElementCount,
    // theta =  2 * Math.PI / numImages,
    currImage = 0;
;

// nav.addEventListener('click', onClick, true);

function onClick(e) {
    e.stopPropagation();

    var t = e.target;
    if (t.tagName.toUpperCase() != 'BUTTON')
        return;

    if (t.classList.contains('next')) {
        currImage++;
    }
    else {
        currImage--;
    }

    figure.style.transform = `rotateY(${currImage*0.7853981634}rad)`;
}
var swipe_gallery = document.querySelector('.carousel');
var startTouches = 0;
var endTouches = 0;

swipe_gallery.addEventListener('touchstart', function (event) {
    startTouches = Math.round(event.touches[0].clientX);
});
swipe_gallery.addEventListener('touchend', function (event) {
    endTouches = event.changedTouches[0].clientX;
    swipeDetection(startTouches,endTouches);
});
function swipeDetection(pos1,pos2) {
    if(pos1+20<pos2) {
        currImage++;
        figure.style.transform = `rotateY(${currImage*0.7853981634}rad)`;

    } else if(pos1-20>pos2) {
        currImage--;
        figure.style.transform = `rotateY(${currImage*0.7853981634}rad)`;
    }
}


swipe_gallery.addEventListener('click',function (event) {
    console.log(event.clientX);
    if (event.clientX<=149){
        currImage++;
        figure.style.transform = `rotateY(${currImage*0.7853981634}rad)`;
    } else{
        currImage--;
        figure.style.transform = `rotateY(${currImage*0.7853981634}rad)`;
    }
});

// var myItem = 1;
// setInterval(function () {
//     myItem++;
//     if (myItem<8){
//         figure.style.transform = `rotateY(${myItem*0.7853981634}rad)`;
//     }
//     else{
//         myItem = 0;
//     }
// },1e3);