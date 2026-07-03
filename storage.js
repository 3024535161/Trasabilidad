// =======================================
// STORAGE.JS
// CRM PORTABILIDAD PRO
// =======================================

const STORAGE = "crm_portabilidad_pro";

let clientes = JSON.parse(localStorage.getItem(STORAGE)) || [];

// ==========================
// GUARDAR
// ==========================

function guardarDatos() {

    localStorage.setItem(
        STORAGE,
        JSON.stringify(clientes)
    );

}

// ==========================
// ACTUALIZAR TODO
// ==========================

function actualizarTodo() {

    guardarDatos();

    dibujarTabla();

    actualizarDashboard();

}

// ==========================
// AGREGAR CLIENTE
// ==========================

function agregarCliente(nombre, numero) {

    numero = numero.replace(/\D/g, "");

    if (nombre == "" || numero == "") return;

    // Evita duplicados

    let existe = clientes.find(c => c.numero == numero);

    if (existe) return;

    clientes.push({

        nombre: nombre,

        numero: numero,

        estado: "En proceso",

        fecha: new Date().toLocaleString()

    });

    actualizarTodo();

}

// ==========================
// ELIMINAR
// ==========================

function eliminarCliente(index) {

    if (!confirm("¿Eliminar cliente?")) return;

    clientes.splice(index, 1);

    actualizarTodo();

}

// ==========================
// CAMBIAR ESTADO
// ==========================

function cambiarEstado(index, estado) {

    clientes[index].estado = estado;

    actualizarTodo();

}

// ==========================
// BUSCAR
// ==========================

function obtenerClientes() {

    let texto = document
        .getElementById("buscar")
        .value
        .toLowerCase();

    if (texto == "") return clientes;

    return clientes.filter(cliente => {

        return (

            cliente.nombre
                .toLowerCase()
                .includes(texto)

            ||

            cliente.numero
                .includes(texto)

        );

    });

}
