function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var i, j;
var flag = false;
var height = 0;

class Circle {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        console.log(
            "x = " + this.x + "radius = " + this.radius + "dx = " + this.dx
        );
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, flag);
        flag = !flag;
        c.strokeStyle = "black";
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        if (
            this.x + this.radius >= window.innerWidth ||
            this.x - this.radius <= 0
        ) {
            this.dx = -1 * this.dx;
        }
        if (
            this.y + this.radius >= window.innerHeight ||
            this.y - this.radius <= 0
        ) {
            this.dy = -1 * this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = x;
//     this.dy = y;
//     this.radius = radius;

//     this.draw() = function () {
//         c.beginPath();
//         c.arc(x, y, r, 0, Math.PI * 2, flag);
//         flag = !flag;
//         c.strokeStyle = color;
//         c.stroke();
//     };
// }

var circleArray = [];
var num_circles = 70;
for (i = 0; i < num_circles; i++) {
    var r = 50;
    var x = Math.random() * (innerWidth - r);
    while (x - r <= 0) {
        x = Math.random() * (innerWidth - r);
    }
    var y = Math.random() * (innerHeight - r);
    while (y - r <= 0) {
        y = Math.random() * (innerHeight - r);
    }
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 10;
    circleArray.push(new Circle(x, y, dx, dy, r, getRandomColor()));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (i = 0; i < num_circles; i++) {
        circleArray[i].update();
    }
}

animate();
