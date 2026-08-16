# VANTAGE — sitio web

Landing page base para VANTAGE (asesoramiento académico y deportivo, Argentina → Estados Unidos).

## Estructura

- `index.html` — página única con todo el contenido (hero, cómo funciona, becas, nosotros, contacto). CSS embebido en el `<head>`, sin dependencias de build.

## Cómo iniciarlo

Abrí `index.html` directo en el navegador, o levantá el servidor local:

```
npm start
```

Si PowerShell bloquea `npm`, usá:

```
npm.cmd start
```

También podés correrlo directo con Node:

```
node server.js
```

Después entrá a `http://localhost:8000`.

## Pendientes

- [ ] Reemplazar los links de WhatsApp (`#`) por el número real
- [ ] Reemplazar los links de Instagram / YouTube por las cuentas reales
- [ ] Sumar testimonios en video cuando haya el primer caso
- [ ] Revisar copy — bajar el tono "genérico", sumar más voz propia
- [ ] Definir si se pasa a un framework (Next.js, Astro) o se sigue en HTML plano
