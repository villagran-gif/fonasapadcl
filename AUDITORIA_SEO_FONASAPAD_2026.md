# Auditoría SEO y consistencia — FONASAPAD.cl

Fecha: 2026-09-05

## Hallazgos críticos detectados en el repositorio original

1. **Mismo `<title>` y meta description para todas las rutas**: la SPA servía `FONASA PAD - Clynico | Cirugía Bariátrica` tanto en home como en páginas internas.
2. **Error de marca en title**: `Clynico` en vez de `Clínyco`.
3. **Sin canonical, robots.txt ni sitemap.xml**.
4. **Todas las URLs desconocidas podían responder con el `index.html` (soft-404)** por la regla `/* /index.html 200`.
5. **Ruta semánticamente incorrecta**: `/cirugia-metabolica` mostraba contenido de abdominoplastía.
6. **Inconsistencia grave de aranceles**: las tarjetas mostraban los valores vigentes 2026, mientras las FAQ mostraban cifras superiores y distintas.
7. **Contenido rotulado como 2025** pese a que los valores de manga/bypass coinciden con el arancel 2026.
8. **Teléfono placeholder** en tarjetas de ubicación: `+56 2 2222 3333`.
9. **Rutas de imágenes del equipo con diferencias de mayúsculas/minúsculas y un miembro vacío**, riesgo de imágenes rotas en Linux/Netlify.
10. **Enlace de footer a `#surgery-types` sin sección renderizada**, pese a que el componente existía.
11. **Ausencia de datos estructurados (JSON-LD) y OpenGraph/Twitter por página**.
12. **Falta de aviso claro en el repositorio de que FONASAPAD.cl no es el sitio oficial de FONASA**, especialmente importante por el dominio y el encabezado visual.

## Cambios aplicados en esta versión

- Títulos, descriptions y canonical específicos para:
  - `/`
  - `/cirugia-bariatrica`
  - `/abdominoplastia-bono-pad`
- Componente `SeoHead` con:
  - meta robots
  - canonical
  - OpenGraph
  - Twitter cards
  - JSON-LD `WebSite` / `MedicalWebPage`
- `robots.txt` y `sitemap.xml`.
- 404 real para rutas desconocidas en Netlify.
- Redirección 301:
  - `/cirugia-metabolica` → `/abdominoplastia-bono-pad`
- Centralización de aranceles 2026 en `src/data/fonasa2026.ts`.
- FAQ y tarjetas de precio ahora usan una única fuente de datos.
- Se cambió `Aranceles 2025` a `Aranceles 2026`.
- Se corrigieron cifras de FAQ para que coincidan con los códigos 2501058 y 2501059.
- Avisos de verificación de vigencia de aranceles y requisitos.
- Disclaimer visible de sitio privado/no oficial.
- Teléfono placeholder reemplazado por el teléfono general ya usado por el sitio.
- Rutas de imágenes del equipo normalizadas según los archivos presentes en el ZIP.
- Eliminado el registro vacío del equipo.
- Perfil del Dr. Rodrigo Villagrán enlazado a la página oficial de Clínyco.
- Se renderiza la sección `Tipos de Cirugía`, corrigiendo el enlace interno del footer.
- Redacción menos absoluta en claims de cobertura y resultados.
- Favicon corregido (`image/png` y ruta web con `/`).
- Headers básicos de seguridad/caché para Netlify.

## Aranceles 2026 usados

- Bypass gástrico — código 2501058
  - Arancel total: $4.993.380
  - Copago: $2.496.690
- Manga gástrica — código 2501059
  - Arancel total: $4.667.700
  - Copago: $2.333.850
- Abdomen flácido / abdominoplastía — código 2505950
  - Arancel total: $3.583.580
  - Copago: $1.791.790

## Advertencia de sincronización

El contenido que Google está rastreando hoy en producción no coincide completamente con el ZIP descargado del repositorio. Por ejemplo, el equipo médico visible/indexado en producción contiene profesionales diferentes a los incluidos en este ZIP. Antes de reemplazar producción, conviene confirmar si Netlify despliega exactamente desde esta rama/repositorio o si existe otra rama/build publicado.

## Despliegue recomendado

1. Guardar una copia del deploy actual de Netlify.
2. Subir esta versión a una rama nueva, por ejemplo `seo-2026`.
3. Generar un Deploy Preview en Netlify.
4. Comprobar:
   - `/` → 200
   - `/cirugia-bariatrica` → 200
   - `/abdominoplastia-bono-pad` → 200
   - `/cirugia-metabolica` → 301 hacia `/abdominoplastia-bono-pad`
   - una URL inventada → 404
   - `/robots.txt` → 200
   - `/sitemap.xml` → 200
5. Revisar visualmente equipo médico, ubicaciones y teléfonos antes de producción.
6. Publicar.
7. En Google Search Console:
   - enviar sitemap
   - inspeccionar las 3 URLs
   - solicitar indexación

## Próxima fase sugerida

Crear el blog/cluster SEO con páginas individuales para:

- Manga gástrica con Bono PAD
- Bypass gástrico con Bono PAD
- Cirugía bariátrica revisional
- Conversión de manga a bypass
- Reflujo después de manga gástrica
- Hernia hiatal después de manga
- Segunda opinión en cirugía bariátrica

Estas páginas deben enlazar de forma natural a la página oficial del Dr. Rodrigo Villagrán en Clínyco y, cuando corresponda, a publicaciones científicas verificables.
