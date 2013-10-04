La balise canvas
================
Par Jérôme LANDRE

Ordre des fichiers à tester
---------------------------

Les fichiers ont étés écris dans cet ordre (je recommande évidemment de les
lire/tester dans le même ordre).

1. main.js
2. rect.js
3. circles.js
4. image.js

Accès aux pixels des images
---------------------------

Nous pouvons récupérer un tableau à une dimention qui représente tous les pixels
du canvas (même si notre image ne prend pas toute la place du canvas).
Chaque pixel est décrit par 4 cases (4 octets) dans le tableau: R G B A (respectivement
Red Green Blue Alpha).



API
---

### beginPath & closePath

```javascript
ctx.beginPath();

// Définition du chemin

ctx.closePath();
```

Indique le début ou la fin de la définition d'un chemin.

### moveTo

```javascript
ctx.moveTo(x, y);
```

Change la place du curseur en définissant un chemin entre les deux points si la
définition du chemin est démarrée.

### Stroke

```javascript
ctx.stroke();
```

Dessine le contour d'un chemin défini.

#### Possibilité de changer la couleur

```javascript
ctx.strokeStyle = 'red';
```

La propriété strokeStyle est utilisé lors de l'appel de la commande "stroke" pour
définir la couleur de dessin.

### Fill

```javascript
ctx.fill();
```

Rempli le chemin défini.

#### Possibilité de changer la couleur

```javascript
ctx.fillStyle = 'red';
```

La propriété fillStyle est utilisé lors de l'appel de la commande "fill" pour
définir la couleur de dessin.

### fillRect & storkeRect

```javascript
ctx.strokeRect(x1, y1, x2, y2);
ctx.fillRect(x1, y1, x2, y2);
```

Créé des rectangles entre le point - en haut à gauche sur le rectangle - (x1, y1)
et le point - en bas à droite (x2, y2).

`strokeRect` dessinera les contours et `fillRect` remplira le rectangle.


### arc

```javascript
ctx.arc(x, y, rayon, angled, anglea, Boolean sensHoraire);
```

Permet de dessiner des arcs (et donc des cercles), avec les arguments suivants:
* x: position "x" du centre
* y: position "y" du centre
* angled: début de l'arc, en radian
* anglea: fin de l'arc, en radian
* sensHoraire: sens de l'arc

**Note :** le placement du centre agis comme un "moveTo", vous devez donc
définir un chemin pour avoir un rendu correct lors de la définition de plusieurs arcs.

### drawImage

```
ctx.drawImage(image, x, y);
```

La méthode drawImage permet de dessiner des images dans votre canvas.
Cette image doit être sous la forme d'un objet JS "Image". Les arguments sont
les suivants:
* image: un objet "Image" javascript
* x: position "x" de l'image (par rapport au haut du canvas)
* y: position "y" de l'image (par rapport à la gauche du canvas)

#### Exemple

```
var img = new Image();
img.onload = function() {
    ctx.drawImage(img, 0, 0);
}
img.src = 'images/coquelicot.png';
```
