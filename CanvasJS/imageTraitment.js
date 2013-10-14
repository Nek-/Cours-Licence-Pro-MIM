var c    = document.getElementById('canevasMIM');
var ctx  = c.getContext('2d');
var c2   = document.getElementById('canevasMIM2');
var ctx2 = c2.getContext('2d');
var img  = new Image();


function reset() {
    img.onload = function(){
        c.width = img.width;
        c.height = img.height;
        ctx.drawImage(img, 0, 0);

        c2.width = img.width;
        c2.height = img.height;
        ctx2.drawImage(img, 0, 0);
    }
    img.src = "images/nddp.jpg";
}
reset();


function makeItBlack() {
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var numBytes = imageData.data.length;
    var r, g, b, gris;
    for (var i=0; i<numBytes; i+=4) {
        r = imageData.data[i];
        g = imageData.data[i+1];
        b = imageData.data[i+2];
        gris = 0.299*r + 0.587*g + 0.114*b;
        imageData.data[i] = gris;
        imageData.data[i+1] = gris;
        imageData.data[i+2] = gris;
    }
    ctx.putImageData(imageData, 0, 0);
}

function robertsFilter() {
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var numBytes = imageData.data.length-4;
    
    var r, g, b, a;
    for (var i=0; i<numBytes; i+=4) {
        r = imageData.data[i+4] - imageData.data[i];
        g = imageData.data[i+5] - imageData.data[i+1];
        b = imageData.data[i+6] - imageData.data[i+2];
        
        imageData.data[i] = r;
        imageData.data[i+1] = g;
        imageData.data[i+2] = b;
    }
    ctx.putImageData(imageData, 0, 0);
    
}


function robertsFilterVerti() {
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var numBytes = imageData.data.length-4;
    var width = img.width;
    
    var r, g, b, a;
    for (var i=0; i<numBytes; i+=4) {
        r = imageData.data[i+4] - imageData.data[i+width*4];
        g = imageData.data[i+5] - imageData.data[i+1+width*4];
        b = imageData.data[i+6] - imageData.data[i+2+width*4];
        
        imageData.data[i] = r;
        imageData.data[i+1] = g;
        imageData.data[i+2] = b;
    }
    ctx.putImageData(imageData, 0, 0);
    
}

function laplacien4Filter() {
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var imageData2 = ctx.getImageData(0, 0, c.width, c.height);
    var numBytes = imageData.data.length-4;
    var width = c.width;
    
    var r, g, b, a;
    for (var i=0; i<numBytes; i+=4) {
        
        // Pour le rouge
        imageData2.data[i] = Math.abs(
            imageData.data[i+width*4] + // data du rouge dans le prochain pixel du côté bas (width = mc.width)
            imageData.data[i-width*4] + // data du rouge dans le prochain pixel du côté haut
            imageData.data[i-4] +       // data du rouge dans le prochain pixel du côté gauche
            imageData.data[i+4] -       // data du rouge dans le prochain pixel du côté droite
            imageData.data[i]*4         // data du rouge dans le pixel central
        );
        // Pour le vert
        imageData2.data[i+1] = Math.abs(
            imageData.data[i+1+width*4] +
            imageData.data[i+1-width*4] +
            imageData.data[i-3] +
            imageData.data[i+5] -
            imageData.data[i+1]*4
        );
        // Pour le bleu
        imageData2.data[i+2] = Math.abs(
            imageData.data[i+2+width*4] +
            imageData.data[i+2-width*4] +
            imageData.data[i-2] +
            imageData.data[i+6] -
            imageData.data[i+2]*4
        );
    }
    ctx2.putImageData(imageData2, 0, 0);
    
}

function laplacien8Filter() {
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var imageData2 = ctx.getImageData(0, 0, c.width, c.height);
    var numBytes = imageData.data.length-4;
    var width = c.width;
    
    var r, g, b, a;
    for (var i=0; i<numBytes; i+=4) {
        
        // Pour le rouge
        imageData2.data[i] = Math.abs(
            imageData.data[i+width*4] + // data du rouge dans le prochain pixel du côté bas (width = mc.width)
            imageData.data[i-width*4] + // data du rouge dans le prochain pixel du côté haut
            imageData.data[i-4] +       // data du rouge dans le prochain pixel du côté gauche
            imageData.data[i+4] +       // data du rouge dans le prochain pixel du côté droite
            imageData.data[i+width*4-4] + // data du rouge dans le prochain pixel du côté bas gauche
            imageData.data[i+width*4+4] + // data du rouge dans le prochain pixel du côté bas droite
            imageData.data[i-width*4-4] + // data du rouge dans le prochain pixel du côté haut gauche
            imageData.data[i-width*4+4] - // data du rouge dans le prochain pixel du côté haut droite
            imageData.data[i]*8         // data du rouge dans le pixel central
        );
        // Pour le vert
        imageData2.data[i+1] = Math.abs(
            imageData.data[i+1+width*4] +
            imageData.data[i+1-width*4] +
            imageData.data[i-3] +
            imageData.data[i+5] +
            imageData.data[i+1+width*4-4] +
            imageData.data[i+1+width*4+4] +
            imageData.data[i+1-width*4-4] +
            imageData.data[i+1-width*4+4] -
            imageData.data[i+1]*8
        );
        // Pour le bleu
        imageData2.data[i+2] = Math.abs(
            imageData.data[i+2+width*4] +
            imageData.data[i+2-width*4] +
            imageData.data[i-2] +
            imageData.data[i+6] +
            imageData.data[i+2+width*4-4] +
            imageData.data[i+2+width*4+4] +
            imageData.data[i+2-width*4-4] +
            imageData.data[i+2-width*4+4] -
            imageData.data[i+2]*8
        );
    }
    ctx2.putImageData(imageData2, 0, 0);
}
