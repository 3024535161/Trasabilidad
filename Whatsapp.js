// ==========================================
// CRM PORTABILIDAD PRO V2
// whatsapp.js
// ==========================================

// Abrir WhatsApp
function abrirWhatsApp(numero,nombre){

    numero = numero.replace(/\D/g,"");

    let mensaje =
`Hola ${nombre},

Te contacto para realizar seguimiento a tu proceso de portabilidad.

Quedo atento a cualquier duda.

Muchas gracias.`;

    let url =
`https://wa.me/57${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url,"_blank");

}

// Copiar número
function copiarNumero(numero){

    navigator.clipboard.writeText(numero);

    alert("Número copiado.");

}

// Llamar
function llamar(numero){

    window.location.href="tel:+57"+numero;

}

// Compartir cliente
function compartirCliente(cliente){

    let texto=

`Cliente: ${cliente.nombre}
Cédula: ${cliente.cedula}
WhatsApp: ${cliente.numero}
Estado: ${cliente.estado}`;

    if(navigator.share){

        navigator.share({

            title:"Cliente",

            text:texto

        });

    }else{

        navigator.clipboard.writeText(texto);

        alert("Información copiada.");

    }

}

// Generar botones
function botonesAcciones(cliente,index){

return `

<button
onclick="abrirFicha(${index})"
title="Ver">

👁

</button>

<button
onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}')"
title="WhatsApp">

💬

</button>

<button
onclick="copiarNumero('${cliente.numero}')"
title="Copiar">

📋

</button>

<button
onclick="llamar('${cliente.numero}')"
title="Llamar">

📞

</button>

<button
onclick="eliminarCliente(${index})"
title="Eliminar">

🗑

</button>

`;

}
