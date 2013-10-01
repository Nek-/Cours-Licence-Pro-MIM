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

### Fill

```javascript
ctx.fill();
```

Rempli le chemin défini.