// =====================================
// WHATSAPP.JS
// =====================================

// Mensaje predeterminado

const MENSAJE_BASE =
`Hola, soy tu asesor de Movistar.

Te escribo para realizar seguimiento a tu proceso de portabilidad.

Quedo atento a cualquier duda.

¡Muchas gracias!`;

// =====================================
// ABRIR WHATSAPP
// =====================================

function abrirWhatsApp(numero, nombre){

    numero = numero.replace(/\D/g,"");

    if(numero.length < 10){

        alert("Número inválido");

        return;

    }

    let mensaje =

`Hola ${nombre}.

${MENSAJE_BASE}`;

    let url =

`https://wa.me/57${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url,"_blank");

}

// =====================================
// COPIAR NÚMERO
// =====================================

function copiarNumero(numero){

    navigator.clipboard.writeText(numero);

    alert("Número copiado.");

}

// =====================================
// LLAMAR
// =====================================

function llamar(numero){

    window.location.href="tel:+57"+numero;

}

// =====================================
// BOTONES DE ACCIONES
// =====================================

function botonesAcciones(cliente,index){

return `

<button
onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}')">

💬 WhatsApp

</button>

<button
onclick="llamar('${cliente.numero}')">

📞 Llamar

</button>

<button
onclick="copiarNumero('${cliente.numero}')">

📋 Copiar

</button>

<button
onclick="verHistorial(${index})">

📄 Historial

</button>

<button
onclick="eliminarCliente(${index})">

🗑 Eliminar

</button>

`;

}
