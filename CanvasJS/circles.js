var c   = document.getElementById('canevasMIM');
var ctx = c.getContext('2d');

for (var i = 0; i < 100; i++) {
    ctx.beginPath()
    ctx.strokeStyle = 'rgb(' + Math.round(Math.random()*255) + ', ' + Math.round(Math.random()*255) + ', ' + Math.round(Math.random()*255) + ')';
    ctx.arc(Math.random()*400, Math.random()*400, Math.random()*20+10, 0, Math.PI*2, true);
    ctx.stroke();
    ctx.closePath();
}