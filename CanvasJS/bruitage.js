var c    = document.getElementById('canevasMIM'),
    ctx  = c.getContext('2d'),
    c2   = document.getElementById('canevasMIM2'),
    ctx2 = c2.getContext('2d'),
    img  = new Image();

function reset() {
    img.onload = function(){
        c.width = img.width;
        c.height = img.height;
        ctx.drawImage(img, 0, 0);

        c2.width = img.width;
        c2.height = img.height;
        ctx2.drawImage(img, 0, 0);
    }
    img.src = "images/image_bruit.png";
}
reset();




function gaussianFilter() {
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var imageData2 = ctx.getImageData(0, 0, c.width, c.height);
    var numBytes = imageData.data.length-4;
    var width = c.width;
    
    var r, g, b, a;
    for (var i=0; i<numBytes; i+=4) {
        
        // Pour le rouge
        imageData2.data[i] = Math.round((
            imageData.data[i+width*4] + // data du rouge dans le prochain pixel du côté bas (width = mc.width)
            imageData.data[i-width*4] + // data du rouge dans le prochain pixel du côté haut
            imageData.data[i-4] +       // data du rouge dans le prochain pixel du côté gauche
            imageData.data[i+4] +       // data du rouge dans le prochain pixel du côté droite
            imageData.data[i+width*4-4] + // data du rouge dans le prochain pixel du côté bas gauche
            imageData.data[i+width*4+4] + // data du rouge dans le prochain pixel du côté bas droite
            imageData.data[i-width*4-4] + // data du rouge dans le prochain pixel du côté haut gauche
            imageData.data[i-width*4+4] + // data du rouge dans le prochain pixel du côté haut droite
            imageData.data[i]         // data du rouge dans le pixel central
        )/9);
        // Pour le vert
        imageData2.data[i+1] = Math.round((
            imageData.data[i+1+width*4] +
            imageData.data[i+1-width*4] +
            imageData.data[i-3] +
            imageData.data[i+5] +
            imageData.data[i+1+width*4-4] +
            imageData.data[i+1+width*4+4] +
            imageData.data[i+1-width*4-4] +
            imageData.data[i+1-width*4+4] +
            imageData.data[i+1]
        )/9);
        // Pour le bleu
        imageData2.data[i+2] = Math.round((
            imageData.data[i+2+width*4] +
            imageData.data[i+2-width*4] +
            imageData.data[i-2] +
            imageData.data[i+6] +
            imageData.data[i+2+width*4-4] +
            imageData.data[i+2+width*4+4] +
            imageData.data[i+2-width*4-4] +
            imageData.data[i+2-width*4+4] +
            imageData.data[i+2]
        )/9);
    }
    ctx2.putImageData(imageData2, 0, 0);
    ctx.putImageData(imageData2, 0, 0);
}

function medianFilter() {
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    var imageData2 = ctx.getImageData(0, 0, c.width, c.height);
    var numBytes = imageData.data.length-4;
    var width = c.width;
    
    var r, g, b, a;
    for (var i=0; i<numBytes; i+=4) {
        var tab = new Array(
            imageData.data[i+width*4],
            imageData.data[i-width*4],
            imageData.data[i-4],
            imageData.data[i+4],
            imageData.data[i+width*4-4],
            imageData.data[i+width*4+4],
            imageData.data[i-width*4-4],
            imageData.data[i-width*4+4],
            imageData.data[i]
        );
        tab.sort();
        imageData2.data[i] = tab[4];
        
        tab = new Array(
            imageData.data[i+1+width*4],
            imageData.data[i+1-width*4],
            imageData.data[i+1-4],
            imageData.data[i+1+4],
            imageData.data[i+1+width*4-4],
            imageData.data[i+1+width*4+4],
            imageData.data[i+1-width*4-4],
            imageData.data[i+1-width*4+4],
            imageData.data[i+1]
        );
        tab.sort();
        imageData2.data[i+1] = tab[4];
        
        tab = new Array(
            imageData.data[i+2+width*4],
            imageData.data[i+2-width*4],
            imageData.data[i+2-4],
            imageData.data[i+2+4],
            imageData.data[i+2+width*4-4],
            imageData.data[i+2+width*4+4],
            imageData.data[i+2-width*4-4],
            imageData.data[i+2-width*4+4],
            imageData.data[i+2]
        );
        tab.sort();
        imageData2.data[i+2] = tab[4];
    }
    ctx2.putImageData(imageData2, 0, 0);
    ctx.putImageData(imageData2, 0, 0);
    
}