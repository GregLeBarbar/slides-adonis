# Pour déployer sur github pages

## Git à jour

Il faut avoir tout git push

## Modifier la config de vite

Dans le fichier `vite.config.ts` il faut :

```js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // Pour déployer il faut passer en '/slides-adonis/'
});
```

## Builder l'application

npm run build

## Deployer l'application

npm run deploy

## Voir les slides sur github

[https://greglebarbar.github.io/slides-adonis](https://greglebarbar.github.io/slides-adonis)

Lorsqu'on est en cours, on peut :

- sur un écran mettre les slides :
  https://greglebarbar.github.io/slides-adonis

- sur un autre écran, on peut en :
  https://greglebarbar.github.io/slides-adonis/presenter

grâce à ce là, dans les slides en mode presenter, on utilise les flèches
