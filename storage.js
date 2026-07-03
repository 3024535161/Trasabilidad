// =======================================
// CRM PORTABILIDAD PRO
// STORAGE.JS
// =======================================

const STORAGE_KEY = "crm_portabilidad_pro";

// =======================================
// OBTENER CLIENTES
// =======================================

function obtenerClientes() {

    const datos = localStorage.getItem(STORAGE_KEY);

    if (!datos) return [];

    return JSON.parse(datos);

}

// =======================================
// GUARDAR CLIENTES
// =======================================

function guardarClientes(clientes) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(clientes)
    );

}

// =======================================
// AGREGAR CLIENTE
// =======================================

function agregarCliente(cliente){

    const clientes = obtenerClientes();

    clientes.push(cliente);

    guardarClientes(clientes);

    actualizarCRM();

}

// =======================================
// ELIMINAR CLIENTE
// =======================================

function eliminarCliente(index){

    const clientes = obtenerClientes();

    clientes.splice(index,1);

    guardarClientes(clientes);

    actualizarCRM();

}

// =======================================
// ACTUALIZAR CLIENTE
// =======================================

function actualizarCliente(index,nuevo){

    const clientes = obtenerClientes();

    clientes[index]=nuevo;

    guardarClientes(clientes);

    actualizarCRM();

}

// =======================================
// CAMBIAR ESTADO
// =======================================

function cambiarEstado(index,estado){

    const clientes = obtenerClientes();

    clientes[index].estado = estado;

    clientes[index].ultimaActualizacion = new Date().toLocaleString();

    guardarClientes(clientes);

    actualizarCRM();

}

// =======================================
// BUSCAR
// =======================================

function buscarClientes(texto){

    texto = texto.toLowerCase();

    return obtenerClientes().filter(cliente=>{

        return(

            cliente.nombre.toLowerCase().includes(texto)

            ||

            cliente.numero.includes(texto)

        );

    });

}

// =======================================
// LIMPIAR TODO
// =======================================

function borrarCRM(){

    if(confirm("¿Deseas eliminar todos los clientes?")){

        localStorage.removeItem(STORAGE_KEY);

        actualizarCRM();

    }

}

// =======================================
// EXPORTAR JSON
// =======================================

function exportarJSON(){

    const datos = JSON.stringify(

        obtenerClientes(),

        null,

        2

    );

    const blob = new Blob(

        [datos],

        {

            type:"application/json"

        }

    );

    const enlace = document.createElement("a");

    enlace.href = URL.createObjectURL(blob);

    enlace.download = "clientes.json";

    enlace.click();

}

// =======================================
// IMPORTAR JSON
// =======================================

function importarJSON(event){

    const archivo = event.target.files[0];

    if(!archivo) return;

    const lector = new FileReader();

    lector.onload = function(e){

        guardarClientes(

            JSON.parse(e.target.result)

        );

        actualizarCRM();

    }

    lector.readAsText(archivo);

}

// =======================================
// INICIAR
// =======================================

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        actualizarCRM();

    }

);
