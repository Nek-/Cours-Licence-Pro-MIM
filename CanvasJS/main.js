var c   = document.getElementById('canevasMIM');
var ctx = c.getContext('2d');

ctx.beginPath();

// Dessiner un triangle
ctx.moveTo(150, 10);
ctx.lineTo(300,200);
ctx.lineTo(100,200);
ctx.lineTo(150,10);

ctx.closePath();
ctx.stroke();