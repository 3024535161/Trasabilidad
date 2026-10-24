# KAGE LIVE V8.1 — EDICIÓN FRONTAL — Anime Stream Studio

Versión mejorada del estudio de avatar Kage, creado para Chrome Android o escritorio. Se incluyen `index.html`, `avatar.webp`, `manifest.webmanifest`, y un único `KAGE-LIVE-V8-ABRIR.html` autosuficiente. La página no necesita backend para las expresiones, regalos de prueba y pantalla LIVE. El control remoto entre dispositivos sí necesita internet para acceder a PeerJS Cloud y una conexión WebRTC viable.

## Pantallas disponibles

- `index.html`: Estudio privado con todos los controles.
- `index.html?mode=live`: Salida limpia del avatar, sin botones visibles.
- `index.html?mode=remote`: Controlador desde otro dispositivo. **En Control > Crear código privado**, obtendrás un enlace listo para compartir al segundo móvil.
- Botón **Modo LIVE**: transforma el mismo documento en salida limpia; mantiene activo el micrófono abierto previamente.
- Para salir del modo LIVE sin controles: cuatro toques en la esquina superior izquierda del escenario o tecla Esc. **Detén la transmisión primero**, pues al salir vuelve a mostrar el estudio.

## Publicación en GitHub Pages

Crea un repositorio, sube `index.html`, `avatar.webp` y `manifest.webmanifest` a la raíz de la rama `main`. Activa **Settings > Pages > Deploy from branch: main / root**, y abre la URL HTTPS. La versión HTML autónoma también sirve para probar desde archivos, pero los permisos de micrófono y compartición son más predecibles con HTTPS.

## Dos teléfonos Android (privacidad de controles)

1. En el primer teléfono, abre KAGE LIVE en Chrome por HTTPS. Enciende el micrófono si quieres sincronizar la boca con la voz. En la pestaña **Control**, pulsa **Crear código privado**. No compartas públicamente el código.
2. En el segundo teléfono, abre el enlace del controlador y pulsa **Conectar**. Espera el mensaje de conexión verde y prueba una expresión.
3. En el primer teléfono pulsa **Modo LIVE**; solo se ve el avatar. Configura la captura de pantalla de TikTok según las funciones disponibles en tu cuenta, y activa No molestar. Las acciones del segundo teléfono cambiarán al personaje en el primero.
4. Primero detén la captura de pantalla de TikTok, luego sal del Modo LIVE con cuatro toques en la esquina superior izquierda.

## Realidad técnica / límites

- Las expresiones son cambios animados sobre una ilustración 2D fija: **no es un rig Live2D** y no tiene seguimiento de cabeza/cuerpo de alta fidelidad ni lectura de gestos de webcam.
- El micrófono mueve la boca por volumen y no graba ni sube el audio a nuestros servidores. El navegador puede perder acceso al micrófono cuando otra aplicación lo usa (TikTok/Android); prueba antes de un directo público.
- **No lee regalos reales de TikTok**. Los regalos aquí son simulaciones manuales. No se anuncia una API oficial de regalos en directo ni una integración que no exista; las librerías no oficiales requieren servidor externo y pueden dejar de funcionar.
- El audio generado por voz sintética puede no incluirse en la captura de pantalla de TikTok, según las limitaciones de audio de Android.
- **La web solo oculta sus propios botones**. Notificaciones, barra de estado, panel de TikTok, gestos del sistema y overlays externos podrían capturarse. Configura No molestar y realiza una prueba privada antes de emitir.
- WebRTC PeerJS Cloud es un servicio externo; para el control remoto entre celulares requiere internet y puede fallar si la red bloquea conexiones entre pares. Los códigos se generan aleatoriamente con 8 caracteres, pero quien tenga el código podrá manejar las expresiones.
- Los comandos de reconocimiento de voz usan servicios del navegador que pueden procesar audio fuera del dispositivo.
- Para instalaciones de producción con eventos TikTok y sincronización fiable se necesita servidor y controles de acceso propios.


### Avatar frontal actualizado

Se ha sustituido el personaje por una ilustración frontal del mismo estilo: cabello negro con tonos violáceos, chaqueta negra y camiseta blanca. Se recalibraron la boca y los párpados para la imagen nueva. La interfaz LIVE sigue ocultando los controles. El micrófono requiere HTTPS o localhost. La detección automática de regalos reales de TikTok no está implementada.
