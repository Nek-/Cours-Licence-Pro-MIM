var c   = document.getElementById('canevasMIM');
var ctx = c.getContext('2d');
var img = new Image();

img.onload = function() {
    /*
    // Une diagonale d'images
    for (var i = 0; i < 10; i++) {
        ctx.drawImage(img, i*10, i*10);
    }
    */
    
    /*
    var pas = Math.PI * 2 / 10;
    // i de 0 à 2*PI
    // Centre du cercle: 100, 100
    // Rayon 100
    // Cf cercle trigo pour comprendre
    for (var i = 0; i <= 2 * Math.PI; i = i + pas) {
        ctx.drawImage(img, 100+100*Math.cos(i), 100+100*Math.sin(i));
    }
    */
    
    /*
    var pas = Math.PI * 2 / 10;
    // Spirale de ouf tavu
    for (var i = 0; i <= 2 * Math.PI; i = i + pas) {
        ctx.drawImage(img, 100+i*30*Math.cos(i), 100+i*30*Math.sin(i));
    }
    */

/*
// Ceci ne fonctionne pas.
    // Lemniscate de bernouilli
    // x = (a * sqrt(2))*((t(1+t²))/(1+t^4))
    // y = ?
    var a = 100;
    for (var t = 0; t < 50*Math.PI; t += 0.2) {
        ctx.drawImage(
            img,
            100+a*Math.sqrt(2)*((t*(1+t*t))/(1+t*t*t*t)),
            100+a*Math.sqrt(2)*((t-t*t*t)/(1+t*t*t*t))
        );
    }
//*/
};

img.src = 'images/coquelicot.png';