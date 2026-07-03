// ===============================================
// CRM PORTABILIDAD PRO V2
// app.js
// ===============================================

// Cliente que se está editando
let indiceEdicion = -1;

// ============================
// INICIAR CRM
// ============================

window.onload = function(){

    actualizarTodo();

}

// ============================
// ACTUALIZAR TODO
// ============================

function actualizarTodo(){

    guardarDatos();

    dibujarTabla();

    actualizarDashboard();

}

// ============================
// ABRIR PANEL
// ============================

function abrirFicha(index){

    const cliente = clientes[index];

    const panel = document.getElementById("panelCliente");

    const detalle = document.getElementById("detalleCliente");

    detalle.innerHTML = `

    <h2>${cliente.nombre}</h2>

    <hr><br>

    <p><b>Cédula:</b> ${cliente.cedula}</p>

    <p><b>EXP:</b> ${cliente.exp}</p>

    <p><b>WhatsApp:</b> ${cliente.numero}</p>

    <p><b>NIP:</b> ${cliente.nip}</p>

    <p><b>Ciudad:</b> ${cliente.ciudad}</p>

    <p><b>Departamento:</b> ${cliente.departamento}</p>

    <p><b>Entrega:</b> ${cliente.entrega}</p>

    <p><b>Estado:</b> ${cliente.estado}</p>

    <p><b>Última gestión:</b> ${cliente.ultimaGestion}</p>

    <br>

    <button onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}')">

    💬 WhatsApp

    </button>

    <br><br>

    <button onclick="llamar('${cliente.numero}')">

    📞 Llamar

    </button>

    `;

    panel.style.right = "0";

}

// ============================
// CERRAR PANEL
// ============================

document
.getElementById("cerrarPanel")
.onclick = function(){

    document
    .getElementById("panelCliente")
    .style
    .right="-420px";

}

// ============================
// EDITAR CLIENTE
// ============================

function editarFormulario(index){

    indiceEdicion = index;

    const c = clientes[index];

    nombre.value = c.nombre;

    cedula.value = c.cedula;

    exp.value = c.exp;

    numero.value = c.numero;

    nip.value = c.nip;

    ciudad.value = c.ciudad;

    departamento.value = c.departamento;

    entrega.value = c.entrega;

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// ============================
// GUARDAR EDICIÓN
// ============================

document
.getElementById("btnGuardar")
.addEventListener("click",function(){

    if(indiceEdicion==-1) return;

    clientes[indiceEdicion]={

        nombre:nombre.value,

        cedula:cedula.value,

        exp:exp.value,

        numero:numero.value,

        nip:nip.value,

        ciudad:ciudad.value,

        departamento:departamento.value,

        entrega:entrega.value,

        estado:clientes[indiceEdicion].estado,

        ultimaGestion:new Date().toLocaleString()

    };

    indiceEdicion=-1;

    guardarDatos();

    actualizarTodo();

    limpiarFormulario();

});

// ============================
// CERRAR CON ESC
// ============================

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        document
        .getElementById("panelCliente")
        .style
        .right="-420px";

    }

});

// ============================
// DOBLE CLICK PARA EDITAR
// ============================

document
.getElementById("listaClientes")
.addEventListener("dblclick",function(e){

    let fila=e.target.closest("tr");

    if(!fila) return;

    editarFormulario(fila.rowIndex-1);

});
