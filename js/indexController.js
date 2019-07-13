
var car = $('#car');

var carWidth = car.width();
var carHeight = car.height();

car.css('transform', `translate(-${carWidth/2}px,-${carHeight/2}px)`);

var positionX = $(window).width()/2;
var positionY = $(window).height()/2;

car.css('left', positionX);
car.css('top', positionY);

$(document).keyup(function getKeyAndMove(e){
    var key_code = e.which||e.keyCode;

    switch(key_code){
        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
    }
});
function moveLeft(){
    positionX -= 10;
    if (positionX >= carWidth/2){
        car.css('left', positionX);
    }else {
        positionX += 10;
    }
}
function moveUp(){
    positionY-= 10;
    if (positionY >= (carHeight/2 + 100)){
        car.css('top', positionY);
    }else {
        positionY+= 10;
    }
}
function moveRight(){
    positionX += 10;
    if (positionX <= $(window).width() - (carWidth/2)){
        car.css('left', positionX);
    }else {
        positionX -= 10;
    }
}
function moveDown(){
    positionY += 10;
    if (positionY <= $(window).height() - (carHeight/2)) {
        car.css('top', positionY);
    }else {
        positionY -= 10;
    }
}