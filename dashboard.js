// ======================================
// DASHBOARD.JS
// ======================================

function actualizarDashboard(){

    const clientes = obtenerClientes();

    let proceso = 0;
    let consumidas = 0;
    let terminadas = 0;
    let canceladas = 0;

    clientes.forEach(cliente=>{

        switch(cliente.estado){

            case "En proceso":
                proceso++;
                break;

            case "Consumida":
                consumidas++;
                break;

            case "Terminada":
                terminadas++;
                break;

            case "Cancelada":
                canceladas++;
                break;

        }

    });

    document.getElementById("totalClientes").textContent = clientes.length;

    document.getElementById("enProceso").textContent = proceso;

    document.getElementById("consumidas").textContent = consumidas;

    document.getElementById("terminadas").textContent = terminadas;

    document.getElementById("canceladas").textContent = canceladas;

}

    });

    document.getElementById("totalClientes").textContent = total;

    document.getElementById("enProceso").textContent = proceso;

    document.getElementById("conConsumo").textContent = consumo;

    document.getElementById("terminadas").textContent = terminado;

    document.getElementById("canceladas").textContent = cancelada;

}

// ======================================
// FILTROS DEL DASHBOARD
// ======================================

document.getElementById("totalClientes").parentElement.onclick=()=>{

    dibujarTabla();

}

document.getElementById("enProceso").parentElement.onclick=()=>{

    filtrarEstado("En proceso");

}

document.getElementById("conConsumo").parentElement.onclick=()=>{

    filtrarEstado("Con consumo");

}

document.getElementById("terminadas").parentElement.onclick=()=>{

    filtrarEstado("Terminado");

}

document.getElementById("canceladas").parentElement.onclick=()=>{

    filtrarEstado("Cancelada");

}

// ======================================
// FILTRAR TABLA
// ======================================

function filtrarEstado(estado){

    const tbody = document.getElementById("listaClientes");

    tbody.innerHTML="";

    const clientes = obtenerClientes();

    clientes.forEach((cliente,index)=>{

        if(cliente.estado!==estado) return;

        const fila=document.createElement("tr");

        fila.innerHTML=`

        <td><strong>${cliente.nombre}</strong></td>

        <td>

        <a target="_blank"

        href="https://wa.me/57${cliente.numero}">

        ${cliente.numero}

        </a>

        </td>

        <td>${cliente.estado}</td>

        <td>

        <button onclick="verHistorial(${index})">

        Historial

        </button>

        </td>

        `;

        tbody.appendChild(fila);

    });

}
