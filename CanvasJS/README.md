La balise canvas
================
Par Jérôme LANDRE


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


