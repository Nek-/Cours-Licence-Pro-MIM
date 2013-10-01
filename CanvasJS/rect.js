var c   = document.getElementById('canevasMIM');
var ctx = c.getContext('2d');


ctx.strokeStyle = 'blue';
ctx.fillStyle   = 'red';

/*
// Single rect
ctx.fillRect(10, 10, 150, 90);
ctx.strokeRect(10, 10, 150, 90);
*/

for (var i = 0; i < 100; i++) {
    ctx.strokeStyle = 'rgb(' + Math.round(Math.random()*255) + ', ' + Math.round(Math.random()*255) + ', ' + Math.round(Math.random()*255) + ')';
    ctx.strokeRect(Math.random()*200, Math.random()*200, Math.random()*200,Math.random()*200);
}