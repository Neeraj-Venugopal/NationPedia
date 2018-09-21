var canvas = document.getElementById('canvasFrontPage');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
// c.fillRect(100, 100, 100, 100); 


// for(var i = 0; i < 10; i++){
//     c.beginPath();
//     c.strokeStyle = "green";
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.arc(x, y, 30, 0, Math.PI * 2,false);
//     c.stroke();
// }

// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;

// var dx = 4;
// var dy = 4;
// var radius = 30
// function animate(){
//     requestAnimationFrame(animate);

//     c.beginPath();
//     c.strokeStyle = "green";
//         // var x = Math.random() * window.innerWidth;
//        // var y = Math.random() * window.innerHeight;
//     c.clearRect(0, 0, innerWidth, innerHeight);

//         c.arc(x, y, radius, 0, Math.PI * 2,false);
//         c.stroke();
    
//     if(x + radius > innerWidth || x - radius < 0){
//         dx = -dx;
//     }

//     if(y + radius > innerHeight || y - radius < 0){
//         dy = -dy;
//     }
//     x += dx;
//     y += dy;

// }

// animate();


c.strokeStyle = "black";
c.shadowOffsetX = 1;
c.shadowOffsetY = 1;
c.shadowColor = "gray";
c.shadowBlur = 2;
c.font = "bold 50px sans-serif";
c.fillStyle = "ORANGE";
c.textAlign="left";
c.strokeStyle="GREEN"
c.fillText("CMPE 280 Project", innerWidth / 3  , innerHeight / 7);

c.font = "bold 20px sans-serif";
c.fillStyle = "black";

c.fillText("Click Anywhere", 100, 100);
// c.fillText(link, 10, 10);

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function(){

        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.strokeStyle = color;
       c.fill();
       c.fillStyle = color;
    }

    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();    
    }
}

function VerticalCircle(x, y, dy, radius){
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);

        var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.strokeStyle = color;
       c.fill();
       c.fillStyle = color;

    }
//&& (this.y + this.radius > innerHeight / 2))
    this.update = function() {
        if(this.y + this.radius < 6 * innerHeight / 7  || this.y - this.radius < 0 || this.y + this.radius > innerHeight){
            this.dy = -this.dy;
        }
        this.y += this.dy;
        this.draw();    
    }

}

var circleArray = [];
var verticalCircleArray = [];

for(var i = 0; i < 100; i++){

    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight  - radius * 2) + radius;

    var dx =  (Math.random() * (-0.5)) * 10;
    var dy = (Math.random() * (-0.5)) * 10;
    var radius = 0.2;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}
// var circle = new Circle(200, 200, 4, 4, 30);
// circle.draw();

var dy = 4;
var y = 7 * innerHeight / 8;
var x =  0;
var constant = innerWidth / 40;

for(var i = 0; i < 100; i++){
    var radius = 1;
        x += constant;
        if(x > 99 * innerWidth / 100){
            break;
        }
        verticalCircleArray.push(new VerticalCircle(x, y, dy, radius));
    
}

function animate(){

requestAnimationFrame(animate);
c.clearRect(0, 7*innerHeight/8, innerWidth, innerHeight);

c.font = "100px sans-serif";
c.textAlign="center";

  c.fillText("NationPedia", innerWidth / 2, innerHeight/ 2);

    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

    for(var i = 0; i < verticalCircleArray.length; i++){
        verticalCircleArray[i].update();
    }
}

//fillText("Nation Pedia", 10, 10);
animate();

function redirect()
{
    window.location = "homePage" ;// loads webpage in the current tab
    // window.open = "https://canvasjs.com/" ;// loads webpage in the new tab
}

