# KAGE LIVE — Anime Avatar Studio

Web responsive en español para practicar directos con un personaje anime masculino inspirado en la imagen entregada por el usuario.

## Incluye

- Avatar en transparencia, ambientación animada y escenario vertical 9:16.
- 12 expresiones, 6 acciones y efectos de partículas.
- Boca animada a partir del volumen del micrófono (Web Audio).
- Seguimiento facial opcional: cámara + Face Landmarker de MediaPipe (requiere HTTPS, internet y permiso).
- Voz en español con `speechSynthesis` y expresiones durante la lectura.
- 6 simuladores de regalos (Rosa, Corazón, Helado, Perfume, Galaxia, León), tres personalidades y nombre del espectador.
- Botón de modo transmisión que oculta los controles y muestra solo la escena.

## Abrir

Abre `index.html` con Chrome para ver la demostración. Para micrófono y cámara usa HTTPS o un servidor local. En algunos gestores de archivos Android, es mejor usar la versión de un solo archivo `KAGE-LIVE-Abrir.html` que viene aparte.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede llamarse `kage-live`).
2. Sube `index.html` y `avatar.png` a la raíz (no a una subcarpeta).
3. En **Settings > Pages** selecciona **Deploy from a branch**, `main`, `/ (root)` y guarda.
4. Abre la dirección HTTPS que GitHub Pages genera y concede los permisos de micrófono/cámara si los necesitas.

## Limitaciones

Este archivo no se conecta por sí solo a un LIVE de TikTok ni lee regalos reales; los botones reproducen eventos de prueba. Para los regalos automáticos hace falta una integración por separado, con acceso autorizado y un servidor/puente de eventos. Las opciones de compartir pantalla y hacer LIVE dependen de la cuenta TikTok y del Android.

La imagen de referencia facilitada incluye una marca de agua. Antes de usarla en emisiones públicas o comerciales, usa una versión original o debidamente licenciada.

Google MediaPipe se carga al activar la cámara. Sin internet, el seguimiento facial no funcionará; el control manual y la animación siguen disponibles.
