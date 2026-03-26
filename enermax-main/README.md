# Enermax Intranet

Intranet corporativa estática (HTML, CSS y JavaScript puro) con interfaz tipo dashboard para contexto hidroeléctrico.

## Deploy en Vercel

> ⚠️ **Nota importante:** Vercel no ejecuta `ASP.NET WebForms` (`.aspx`) como runtime nativo en este proyecto. El despliegue se realiza como sitio estático usando `index.html`.

### Opción A (recomendada): desde la UI de Vercel

1. Sube este repositorio a GitHub/GitLab/Bitbucket.
2. En Vercel, crea un proyecto nuevo e importa el repositorio.
3. Configura **Root Directory** en `enermax-main`.
4. Framework Preset: **Other**.
5. Build Command: dejar vacío.
6. Output Directory: dejar vacío (Vercel servirá el contenido estático del root configurado).
7. Deploy.

### Opción B: con Vercel CLI

```bash
npm i -g vercel
cd enermax-main
vercel
```

Para producción:

```bash
vercel --prod
```

## Archivo de configuración

Se incluye `vercel.json` para:

- dirigir `/` hacia `index.html`,
- mantener rutas estáticas,
- aplicar headers básicos de seguridad.
