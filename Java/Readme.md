Mini TP de rappel en java
=============================

Pour compiler le programme Java en console:
```bash
# placer le terminal dans le dossier "Java"
cd Java

# Créer un dossier séparé pour les fichiés précompilés
# (facultatif mais propre)
mkdir build/

# Compile dans le dossier "build"
# En utilisant les fichiers contenus dans src
# Avec la classe principale "src/velo/Bike.java"
javac -d build/ -sourcepath src/ src/velo/Bike.java
```