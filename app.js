// =====================================
// APP.JS
// CRM PORTABILIDAD PRO
// =====================================

// Cargar CRM al abrir la página
window.onload = function () {

    actualizarTodo();

};

// ==============================
// ACTUALIZAR TODO
// ==============================

function actualizarTodo() {

    dibujarTabla();

    actualizarDashboard();

}

// ==============================
// GUARDAR CLIENTES
// ==============================

function guardar() {

    guardarDatos();

    actualizarTodo();

}

// ==============================
// LIMPIAR IMPORTACIÓN
// ==============================

function limpiarImportacion() {

    document.getElementById("textoImportar").value = "";

}

// ==============================
// PANEL DEL CLIENTE
// ==============================

function verCliente(index) {

    let cliente = clientes[index];

    let ventana = window.open(
        "",
        "_blank",
        "width=500,height=750"
    );

    ventana.document.write(`

<!DOCTYPE html>

<html>

<head>

<title>${cliente.nombre}</title>

<style>

body{

font-family:Arial;

padding:20px;

background:#111827;

color:white;

}

h2{

color:#00A9E0;

}

p{

padding:8px;

background:#1e293b;

border-radius:8px;

}

button{

padding:12px;

margin-top:10px;

border:none;

border-radius:8px;

cursor:pointer;

background:#00A9E0;

color:white;

width:100%;

}

</style>

</head>

<body>

<h2>${cliente.nombre}</h2>

<p><b>📱 WhatsApp:</b> ${cliente.numero}</p>

<p><b>📊 Estado:</b> ${cliente.estado}</p>

<p><b>📅 Fecha:</b> ${cliente.fecha}</p>

<button onclick="window.opener.abrirWhatsApp('${cliente.numero}','${cliente.nombre}')">

💬 Abrir WhatsApp

</button>

<button onclick="window.close()">

Cerrar

</button>

</body>

</html>

`);

}

// ==============================
// REINICIAR CRM
// ==============================

function reiniciarCRM(){

    if(!confirm("¿Deseas borrar todos los clientes?"))

        return;

    clientes=[];

    guardarDatos();

    actualizarTodo();

}

// ==============================
// RECARGAR AL VOLVER
// ==============================

window.addEventListener(

"focus",

function(){

    actualizarTodo();

}

);
