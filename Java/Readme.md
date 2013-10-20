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
# Une compilation plus simple consiste à spécifier uniquement la classe principale
# ... Mais c'est moins propre


# Pour l'exécution le principe est d'exécuter les fichiers ".class" générés
# pour la compilation simplifiée, c'est aussi simple
# pour la compilation propre, c'est un peu plus compliqué
# 1. se positionner dans le dossier build
cd build
# 2. lancer la classe principale
java velo/Bike

# Le programme est lancé normalement ! \o/
# évidemment, eclipse gère tout ça automatiquement si vous l'utilisez...

```