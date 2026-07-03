// ==========================================
// CRM PORTABILIDAD PRO V2
// storage.js
// ==========================================

// ---------- Base de datos ----------
const STORAGE_KEY = "crm_portabilidad_v2";

// Arreglo principal
let clientes = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// ==========================================
// GUARDAR EN LOCALSTORAGE
// ==========================================

function guardarDatos(){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(clientes)

    );

}

// ==========================================
// OBTENER CLIENTES
// ==========================================

function obtenerClientes(){

    return clientes;

}

// ==========================================
// AGREGAR CLIENTE
// ==========================================

function agregarCliente(cliente){

    // Evitar números repetidos

    let existe = clientes.find(

        c => c.numero === cliente.numero

    );

    if(existe){

        alert("Ese número ya existe.");

        return false;

    }

    clientes.push(cliente);

    guardarDatos();

    actualizarTodo();

    return true;

}

// ==========================================
// ELIMINAR CLIENTE
// ==========================================

function eliminarCliente(index){

    if(!confirm("¿Eliminar cliente?")) return;

    clientes.splice(index,1);

    guardarDatos();

    actualizarTodo();

}

// ==========================================
// CAMBIAR ESTADO
// ==========================================

function cambiarEstado(index,nuevoEstado){

    clientes[index].estado = nuevoEstado;

    clientes[index].ultimaGestion =

        new Date().toLocaleString();

    guardarDatos();

    actualizarTodo();

}

// ==========================================
// EDITAR CLIENTE
// ==========================================

function editarCliente(index,nuevoCliente){

    clientes[index] = nuevoCliente;

    guardarDatos();

    actualizarTodo();

}

// ==========================================
// BUSCAR CLIENTES
// ==========================================

function buscarClientes(texto){

    texto = texto.toLowerCase();

    return clientes.filter(cliente=>{

        return(

            cliente.nombre

            .toLowerCase()

            .includes(texto)

            ||

            cliente.numero

            .includes(texto)

            ||

            cliente.cedula

            .includes(texto)

        );

    });

}

// ==========================================
// REINICIAR CRM
// ==========================================

function borrarCRM(){

    if(

        confirm(

        "¿Eliminar TODOS los clientes?"

        )

    ){

        clientes=[];

        guardarDatos();

        actualizarTodo();

    }

}

// ==========================================
// EXPORTAR JSON
// ==========================================

function exportarJSON(){

    const datos = JSON.stringify(

        clientes,

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

    enlace.href =

    URL.createObjectURL(blob);

    enlace.download =

    "clientes.json";

    enlace.click();

}

// ==========================================
// IMPORTAR JSON
// ==========================================

function importarJSON(event){

    const archivo = event.target.files[0];

    if(!archivo) return;

    const lector = new FileReader();

    lector.onload=function(e){

        clientes = JSON.parse(

            e.target.result

        );

        guardarDatos();

        actualizarTodo();

    }

    lector.readAsText(archivo);

}
