var c   = document.getElementById('canevasMIM');
var ctx = c.getContext('2d');

ctx.beginPath();

/*
    // Dessiner un triangle
    ctx.moveTo(150, 10);
    ctx.lineTo(300,200);
    ctx.lineTo(100,200);
    ctx.lineTo(150,10);
*/

    // Dessiner des lignes
    for (var i = 10; i < 110; i = i+10) {
        ctx.moveTo(10,i);
        ctx.lineTo(100, i);
    }
    
    var _i = 10;
    while(_i < 110) {
        ctx.moveTo(110, _i);
        ctx.lineTo(200, _i);
        _i = _i + 10;
    }

ctx.closePath();

// "fill" or "stroke"
// fill: rempli
// stroke: dessine
ctx.stroke();