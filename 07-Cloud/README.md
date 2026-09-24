# Laboratorio Cloud (básico)

App muy sencilla hecha con Vite + React para desplegar en GitHub Pages.

URL: https://aitorblesa.github.io/master-frontend-lemoncode/

```bash
npm install
npm start       # desarrollo en http://localhost:8080
npm run build   # genera la carpeta dist
```

## Ejercicio 1 - Despliegue manual

Uso el paquete [gh-pages](https://github.com/tschaub/gh-pages), que sube el contenido de `dist` a la rama `gh-pages` del repo.

```bash
npm run build
npm run deploy
```

Después, en GitHub: **Settings → Pages → Build and deployment**

- Source: `Deploy from a branch`
- Branch: `gh-pages` / `(root)`

A los 1-2 minutos la web está en la URL de arriba.

> En `vite.config.ts` he puesto `base: './'` porque la web no está en la raíz del dominio sino en `/master-frontend-lemoncode/`.

## Ejercicio 2 - Despliegue automático con GitHub Actions

El workflow está en `.github/workflows/07-cloud-cd.yml` **en la raíz del repositorio** (GitHub solo lee los workflows de ahí, no de subcarpetas).

- Se lanza en cada push/merge a `main` que toque algo de `07-Cloud/`.
- Instala dependencias, hace el build y despliega `07-Cloud/dist` con las actions oficiales `upload-pages-artifact` y `deploy-pages`.

Para que funcione hay que cambiar en GitHub: **Settings → Pages → Build and deployment → Source: `GitHub Actions`**.

Para comprobarlo: cambiar algo de la app, hacer merge a `main` y mirar la pestaña **Actions**. En la web se actualiza la fecha de "Último build".
