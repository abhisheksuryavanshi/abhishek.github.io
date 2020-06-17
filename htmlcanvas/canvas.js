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
// for(i=0;i<8;i++){
// 	if(flag){
// 		start = 100;
// 	}
// 	else{
// 		start = 0;
// 	}
// 	flag = !flag;
// 	for(j=0;j<8;j++){
// 		c.fillRect(start,height,100,100);
// 		start = start + 200;
// 	}
// 	height = height + 100;
// }

// var numCircles = 200;
// for (i=0;i<numCircles;i++) {
// 	var x = Math.random()*window.innerWidth;
// 	var y = Math.random()*window.innerHeight;
// 	c.beginPath();
// 	c.arc(x,y,30,0,Math.PI*2,flag);
// 	flag = !flag;
// 	c.strokeStyle=getRandomColor();
// 	c.stroke();
// }

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var r = 50;
var color = getRandomColor();
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, flag);
    flag = !flag;
    c.strokeStyle = color;
    c.stroke();

    if (x + r >= innerWidth || x - r <= 0) {
        dx = -1 * dx;
    }
    if (y + r >= innerHeight || y - r <= 0) {
        dy = -1 * dy;
    }
    x += dx;
    y += dy;
}

animate();
