# Enermax Intranet

Intranet corporativa estática (HTML, CSS y JavaScript puro) con interfaz tipo dashboard para contexto hidroeléctrico.

## Deploy en Vercel

> ⚠️ **Nota importante:** Vercel no ejecuta `ASP.NET WebForms` (`.aspx`) como runtime nativo en este proyecto. El despliegue se realiza como sitio estático usando `index.html`.

## Configuración incluida (evita 404 por carpeta raíz)

Este repositorio incluye `vercel.json` en la **raíz del repo** para que Vercel sirva automáticamente `/enermax-main/index.html` cuando el proyecto se despliega desde `/`.

Con esta configuración:

- `/` reescribe a `/enermax-main/index.html`
- `/css/*`, `/js/*`, `/images/*` se resuelven a `/enermax-main/*`

## Opción A (recomendada): desde la UI de Vercel

1. Sube este repositorio a GitHub/GitLab/Bitbucket.
2. En Vercel, crea un proyecto nuevo e importa el repositorio.
3. Deja **Root Directory** en `/` (raíz del repo).
4. Framework Preset: **Other**.
5. Build Command: vacío.
6. Output Directory: vacío.
7. Deploy.

## Opción B: con Vercel CLI

```bash
npm i -g vercel
cd /ruta/a/Intranet
vercel
```

Para producción:

```bash
vercel --prod
```

## Solución rápida si ya viste `404: NOT_FOUND`

1. Ve a **Project Settings → General** en Vercel.
2. Confirma que el proyecto apunta al repositorio correcto.
3. Deja **Root Directory** en `/`.
4. Haz **Redeploy** del último commit.
