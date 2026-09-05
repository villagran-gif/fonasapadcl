# Deploy rápido en Netlify

## Opción recomendada

1. Subir el contenido de esta carpeta a una rama nueva de GitHub.
2. En Netlify abrir **Deploys → Deploy Previews**.
3. Revisar el preview antes de hacer merge a `main`.

## Comandos locales

```bash
npm ci
npm run build
```

Directorio de publicación esperado por Vite: `dist/`.

## Pruebas SEO después del deploy

```text
https://fonasapad.cl/
https://fonasapad.cl/cirugia-bariatrica
https://fonasapad.cl/abdominoplastia-bono-pad
https://fonasapad.cl/robots.txt
https://fonasapad.cl/sitemap.xml
```

La URL antigua `/cirugia-metabolica` debe responder 301.
Una URL inexistente debe responder 404 y no cargar la home.
