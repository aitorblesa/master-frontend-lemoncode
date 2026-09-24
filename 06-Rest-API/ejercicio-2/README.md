# Laboratorio REST API - Ejercicio 2

Igual que el ejercicio 1 pero ahora los endpoints apuntan al servidor local (carpeta `server`), que tiene los 5 primeros personajes.

- `GET /api/character` → listado
- `GET /api/character/:id` → detalle
- `PUT /api/character/:id` → guardar la mejor frase (`bestSentence`)

En el detalle del personaje hay un campo para escribir su mejor frase y un botón de guardar.

## Cómo arrancarlo

```bash
npm install
npm start
```

`npm start` levanta a la vez la web (http://localhost:8080) y el server mock (http://localhost:3000). Vite hace proxy de `/api` al puerto 3000.

> Ojo: el server guarda los datos en memoria, si se reinicia se pierden las frases.
