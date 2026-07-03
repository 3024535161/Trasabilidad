// ======================================
// TABLA.JS
// ======================================

const ESTADOS = [

    "En proceso",

    "Consumida",

    "Terminada",

    "Cancelada"

];

// ======================================
// ACTUALIZAR TODO EL CRM
// ======================================

function actualizarCRM(){

    dibujarTabla();

    actualizarDashboard();

}

// ======================================
// DIBUJAR TABLA
// ======================================

function dibujarTabla(){

    const tbody = document.getElementById("listaClientes");

    const buscar = document
        .getElementById("buscar")
        .value
        .toLowerCase();

    tbody.innerHTML = "";

    const clientes = obtenerClientes();

    clientes.forEach((cliente,index)=>{

        if(
            !cliente.nombre.toLowerCase().includes(buscar)
            &&
            !cliente.numero.includes(buscar)
        ){
            return;
        }

        const fila = document.createElement("tr");

        fila.innerHTML = `

        <td>

            <strong>

                ${cliente.nombre}

            </strong>

        </td>

        <td>

            <a
                href="#"
                onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}');return false;"
            >

                ${cliente.numero}

            </a>

        </td>

        <td>

            <select
                onchange="cambiarEstado(${index},this.value)"
            >

                ${ESTADOS.map(estado=>`

                    <option
                        value="${estado}"
                        ${estado===cliente.estado?"selected":""}
                    >

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

                fila.style.background="#f59e0b";

            break;

            case "Con consumo":

                fila.style.background="#16a34a";

            break;

            case "Terminado":

                fila.style.background="#2563eb";

            break;

            case "Cancelada":

                fila.style.background="#dc2626";

            break;

        }

        tbody.appendChild(fila);

    });

}

// ======================================
// BUSCADOR
// ======================================

document
.getElementById("buscar")
.addEventListener(
    "input",
    dibujarTabla
);

// ======================================
// HISTORIAL
// ======================================

function verHistorial(index){

    const cliente = obtenerClientes()[index];

    let historial = "Sin historial";

    if(cliente.historial){

        historial = cliente.historial.join("\n");

    }

    alert(

`Cliente:

${cliente.nombre}

Número:

${cliente.numero}

Estado:

${cliente.estado}

------------------------

Historial

${historial}`

    );

}
