var c   = document.getElementById('canevasMIM');
var ctx = c.getContext('2d');
var img = new Image();

img.onload = function() {
    ctx.drawImage(img, 0, 0);
};
img.src = 'images/coquelicot.png';


document.getElementById('more').innerHTML = '<button id="superbutton">click me</button>';

document.getElementById('superbutton').onclick = function() {
    // Récupération des pixels
    var imageData = ctx.getImageData(0, 0, c.width, c.height);
    for (var _i = 0, _len = imageData.data.length; _i < _len; _i += 4) {
        imageData.data[_i] = 0;
    }
    
    ctx.putImageData(imageData, 0, 0);
}