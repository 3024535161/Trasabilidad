const ESTADOS = [
    "En proceso",
    "Consumida",
    "Terminada",
    "Cancelada"
];

function actualizarCRM(){
    dibujarTabla();
    actualizarDashboard();
}

function dibujarTabla(){

    const tbody=document.getElementById("listaClientes");
    const texto=document.getElementById("buscar").value.toLowerCase();

    tbody.innerHTML="";

    const clientes=obtenerClientes();

    clientes.forEach((cliente,index)=>{

        if(
            !cliente.nombre.toLowerCase().includes(texto) &&
            !cliente.numero.includes(texto)
        ) return;

        let fila=document.createElement("tr");

        fila.innerHTML=`

        <td>

        <strong>${cliente.nombre}</strong>

        </td>

        <td>

        <a
        href="#"
        onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}');return false;">

        ${cliente.numero}

        </a>

        </td>

        <td>

        <select onchange="cambiarEstado(${index},this.value)">

        ${ESTADOS.map(estado=>`

        <option
        value="${estado}"
        ${cliente.estado==estado?"selected":""}>

        ${estado}

        </option>

        `).join("")}

        </select>

        </td>

        <td>

        ${botonesAcciones(cliente,index)}

        </td>

        `;

        switch(cliente.estado){

            case "En proceso":

                fila.style.background="#facc15";

            break;

            case "Consumida":

                fila.style.background="#22c55e";

            break;

            case "Terminada":

                fila.style.background="#3b82f6";

            break;

            case "Cancelada":

                fila.style.background="#ef4444";

            break;

        }

        tbody.appendChild(fila);

    });

}

document
.getElementById("buscar")
.addEventListener("input",dibujarTabla);

function verHistorial(index){

    const cliente=obtenerClientes()[index];

    alert(

`Cliente:

${cliente.nombre}

Estado:

${cliente.estado}

WhatsApp:

${cliente.numero}`

    );

}
