// ======================================
// TABLA.JS
// ======================================

// Estados disponibles

const ESTADOS = [

    "En proceso",

    "Con consumo",

    "Terminado",

    "Cancelada"

];

// ===============================
// ACTUALIZAR TODO EL CRM
// ===============================

function actualizarCRM(){

    dibujarTabla();

    actualizarDashboard();

}

// ===============================
// DIBUJAR TABLA
// ===============================

function dibujarTabla(){

    const tbody = document.getElementById("listaClientes");

    const buscar = document.getElementById("buscar").value.toLowerCase();

    tbody.innerHTML="";

    let clientes = obtenerClientes();

    clientes.forEach((cliente,index)=>{

        if(

            !cliente.nombre.toLowerCase().includes(buscar)

            &&

            !cliente.numero.includes(buscar)

        ){

            return;

        }

        const fila=document.createElement("tr");

        fila.innerHTML=`

        <td>

            <strong>${cliente.nombre}</strong>

        </td>

        <td>

            <a href="https://wa.me/57${cliente.numero}"

            target="_blank">

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

            <button

            onclick="verHistorial(${index})">

            Historial

            </button>

            <button

            onclick="eliminarCliente(${index})">

            Eliminar

            </button>

        </td>

        `;

        // Color según estado

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

// ===============================
// BUSCADOR
// ===============================

document

.getElementById("buscar")

.addEventListener(

"input",

dibujarTabla

);

// ===============================
// HISTORIAL
// ===============================

function verHistorial(index){

    const cliente = obtenerClientes()[index];

    alert(

        "Cliente:\\n\\n"

        +

        cliente.nombre

        +

        "\\n\\n"

        +

        cliente.historial.join("\\n")

    );

}
