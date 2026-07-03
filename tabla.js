// ==========================================
// TABLA.JS
// CRM PORTABILIDAD PRO
// ==========================================

// Estados disponibles
const ESTADOS = [
    "En proceso",
    "Consumida",
    "Terminada",
    "Cancelada"
];

// ===============================
// DIBUJAR TABLA
// ===============================

function dibujarTabla(){

    const lista = document.getElementById("listaClientes");

    lista.innerHTML = "";

    const datos = obtenerClientes();

    datos.forEach((cliente,index)=>{

        const fila = document.createElement("tr");

        fila.innerHTML = `

        <td>

            <strong>

                <a href="#"
                onclick="verCliente(${index});return false;">

                ${cliente.nombre}

                </a>

            </strong>

        </td>

        <td>

            <a

            href="https://wa.me/57${cliente.numero}"

            target="_blank">

            ${cliente.numero}

            </a>

        </td>

        <td>

            <select

            onchange="cambiarEstado(${index},this.value)">

            ${ESTADOS.map(e=>`

                <option

                value="${e}"

                ${cliente.estado===e?"selected":""}>

                ${e}

                </option>

            `).join("")}

            </select>

        </td>

        <td>

            <button onclick="eliminarCliente(${index})">

            🗑

            </button>

        </td>

        `;

        // Colores por estado

        switch(cliente.estado){

            case "En proceso":

                fila.style.background="#facc15";
                fila.style.color="#000";

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

        lista.appendChild(fila);

    });

}

// ===============================
// VER CLIENTE
// ===============================

function verCliente(index){

    const cliente = clientes[index];

    alert(

`CLIENTE

Nombre:
${cliente.nombre}

Número:
${cliente.numero}

Estado:
${cliente.estado}

Fecha registro:
${cliente.fecha}`

    );

}

// ===============================
// BUSCADOR
// ===============================

document
.getElementById("buscar")
.addEventListener(

"input",

dibujarTabla

);
