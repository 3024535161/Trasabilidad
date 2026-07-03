// =========================================
// TABLA.JS
// CRM PORTABILIDAD PRO
// =========================================

const ESTADOS = [
    "En proceso",
    "Consumida",
    "Terminada",
    "Cancelada"
];

// ==============================
// DIBUJAR TABLA
// ==============================

function dibujarTabla() {

    const lista = document.getElementById("listaClientes");
    lista.innerHTML = "";

    const datos = obtenerClientes();

    datos.forEach((cliente, index) => {

        let fila = document.createElement("tr");

        switch (cliente.estado) {

            case "En proceso":
                fila.style.background = "#facc15";
                fila.style.color = "#000";
                break;

            case "Consumida":
                fila.style.background = "#22c55e";
                break;

            case "Terminada":
                fila.style.background = "#3b82f6";
                break;

            case "Cancelada":
                fila.style.background = "#ef4444";
                break;

        }

        fila.innerHTML = `

        <td>

            <a href="#"

            onclick="verCliente(${index});return false;">

            ${cliente.nombre}

            </a>

        </td>

        <td>

            <a href="#"

            onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}');return false;">

            ${cliente.numero}

            </a>

        </td>

        <td>

            <select onchange="cambiarEstado(${index},this.value)">

                ${ESTADOS.map(estado => `

                <option

                value="${estado}"

                ${cliente.estado === estado ? "selected" : ""}>

                ${estado}

                </option>

                `).join("")}

            </select>

        </td>

        <td>

            ${botonesAcciones(cliente,index)}

        </td>

        `;

        lista.appendChild(fila);

    });

}

// ==============================
// BUSCADOR
// ==============================

document
.getElementById("buscar")
.addEventListener("keyup", dibujarTabla);

// ==============================
// FILTRAR POR ESTADO
// ==============================

function filtrarEstado(estado){

    const lista = document.getElementById("listaClientes");

    lista.innerHTML = "";

    clientes.forEach((cliente,index)=>{

        if(cliente.estado!==estado) return;

        let fila = document.createElement("tr");

        fila.innerHTML = `

        <td>

        <a href="#"

        onclick="verCliente(${index});return false;">

        ${cliente.nombre}

        </a>

        </td>

        <td>

        <a href="#"

        onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}');return false;">

        ${cliente.numero}

        </a>

        </td>

        <td>

        ${cliente.estado}

        </td>

        <td>

        ${botonesAcciones(cliente,index)}

        </td>

        `;

        lista.appendChild(fila);

    });

}

// ==============================
// ACTUALIZAR TABLA
// ==============================

function refrescarTabla(){

    dibujarTabla();

}
