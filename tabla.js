// ===============================================
// CRM PORTABILIDAD PRO V2
// tabla.js
// ===============================================

// Estados disponibles
const ESTADOS = [
    "En proceso",
    "Consumida",
    "Terminada",
    "Cancelada"
];

// ===============================================
// DIBUJAR TABLA
// ===============================================

function dibujarTabla(){

    const tabla = document.getElementById("listaClientes");

    tabla.innerHTML = "";

    let datos = clientes;

    const texto = document
        .getElementById("buscar")
        .value
        .trim()
        .toLowerCase();

    if(texto!=""){

        datos = buscarClientes(texto);

    }

    datos.forEach((cliente,index)=>{

        let color="";

        switch(cliente.estado){

            case "En proceso":
                color="estado-proceso";
            break;

            case "Consumida":
                color="estado-consumida";
            break;

            case "Terminada":
                color="estado-terminada";
            break;

            case "Cancelada":
                color="estado-cancelada";
            break;

        }

        tabla.innerHTML += `

<tr class="${color}">

<td>

<a href="#"

onclick="abrirFicha(${index});return false;">

${cliente.nombre}

</a>

</td>

<td>

${cliente.cedula}

</td>

<td>

<a

href="#"

onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}');return false;">

${cliente.numero}

</a>

</td>

<td>

<select

onchange="cambiarEstado(${index},this.value)">

${ESTADOS.map(estado=>`

<option

value="${estado}"

${cliente.estado===estado?"selected":""}>

${estado}

</option>

`).join("")}

</select>

</td>

<td>

<button

onclick="abrirFicha(${index})">

👁

</button>

<button

onclick="editarFormulario(${index})">

✏

</button>

<button

onclick="eliminarCliente(${index})">

🗑

</button>

</td>

</tr>

`;

    });

}

// ===============================================
// CARGAR CLIENTE EN EL FORMULARIO
// ===============================================

function editarFormulario(index){

    let c = clientes[index];

    document.getElementById("nombre").value = c.nombre;

    document.getElementById("cedula").value = c.cedula;

    document.getElementById("exp").value = c.exp;

    document.getElementById("numero").value = c.numero;

    document.getElementById("nip").value = c.nip;

    document.getElementById("ciudad").value = c.ciudad;

    document.getElementById("departamento").value = c.departamento;

    document.getElementById("entrega").value = c.entrega;

}

// ===============================================
// BUSCADOR
// ===============================================

document
.getElementById("buscar")
.addEventListener(

"keyup",

function(){

    dibujarTabla();

}

);

// ===============================================
// PANEL DEL CLIENTE
// ===============================================

function abrirFicha(index){

    let c = clientes[index];

    document
    .getElementById("detalleCliente")
    .innerHTML = `

<h2>${c.nombre}</h2>

<hr>

<p>

<b>Cédula:</b>

${c.cedula}

</p>

<p>

<b>EXP:</b>

${c.exp}

</p>

<p>

<b>WhatsApp:</b>

${c.numero}

</p>

<p>

<b>NIP:</b>

${c.nip}

</p>

<p>

<b>Ciudad:</b>

${c.ciudad}

</p>

<p>

<b>Departamento:</b>

${c.departamento}

</p>

<p>

<b>Entrega:</b>

${c.entrega}

</p>

<p>

<b>Estado:</b>

${c.estado}

</p>

<p>

<b>Última gestión:</b>

${c.ultimaGestion || "Sin gestión"}

</p>

<br>

<button

onclick="abrirWhatsApp('${c.numero}','${c.nombre}')">

💬 WhatsApp

</button>

`;

    document
    .getElementById("panelCliente")
    .style.right = "0";

}

// ===============================================
// CERRAR PANEL
// ===============================================

document
.getElementById("cerrarPanel")
.onclick=function(){

    document
    .getElementById("panelCliente")
    .style.right="-420px";

};
