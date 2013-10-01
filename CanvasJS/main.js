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
/*
    // Dessiner des lignes
    for (var i = 10; i < 110; i = i+10) {
        ctx.moveTo(10,i);
        ctx.lineTo(100, i);
    }
    
    var _i = 15;
    while(_i < 110) {
        ctx.moveTo(20, _i);
        ctx.lineTo(120, _i);
        _i = _i + 10;
    }
*/

    // Dessiner un cadriage
    var case_l = 400/8;
    for (var _i = 0; _i < 401; _i = _i + case_l) {
        ctx.moveTo(0, _i);
        ctx.lineTo(400, _i);

        ctx.moveTo(_i, 0);
        ctx.lineTo(_i, 400);
    }
    
ctx.closePath();

// "fill" or "stroke"
// fill: rempli
// stroke: dessine
ctx.stroke();