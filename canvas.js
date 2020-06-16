function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log('hi there!')
var canvas = document.querySelector('canvas')
console.log(canvas)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
var i,j;
var flag = false;
var height = 0;
for(i=0;i<8;i++){
	if(flag){
		start = 100;
	}
	else{
		start = 0;
	}
	flag = !flag;
	for(j=0;j<8;j++){
		c.fillRect(start,height,100,100);
		start = start + 200;
	}
	height = height + 100;
}

var numCircles = 200;
for (i=0;i<numCircles;i++) {
	var x = Math.random()*window.innerWidth;
	var y = Math.random()*window.innerHeight;
	c.beginPath();
	c.arc(x,y,30,0,Math.PI*2,flag);
	flag = !flag;
	c.strokeStyle=getRandomColor();
	c.stroke();
}