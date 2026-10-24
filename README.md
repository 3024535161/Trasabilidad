# KAGE LIVE — Ajuste manual de boca

Este proyecto conserva el estudio y LIVE de KAGE V10 y permite mover **una sola boca**.

1. Publica `index.html`, `avatar.webp` y `manifest.webmanifest` juntos por HTTPS.
2. Pulsa `🎯 Ajustar boca` en la vista previa.
3. Toca o arrastra sobre los labios del personaje, ajusta X, Y, ancho y alto.
4. Pulsa `Guardar y terminar`. La posición se conserva en el navegador con localStorage.

En reposo no se dibuja otra boca; se muestra la boca ya pintada en la ilustración. El overlay aparece al hablar y al calibrar.

La calibración se aplica a las dos vistas (Estudio y Modo LIVE) y se sincroniza entre pestañas del mismo origen. El seguimiento por cámara puede no estar disponible en todos los navegadores.
