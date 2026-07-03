// ==========================================
// DASHBOARD.JS
// CRM PORTABILIDAD PRO
// ==========================================

function actualizarDashboard(){

    let total = clientes.length;
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

    document.getElementById("totalClientes").innerText = total;
    document.getElementById("proceso").innerText = proceso;
    document.getElementById("consumidas").innerText = consumidas;
    document.getElementById("terminadas").innerText = terminadas;
    document.getElementById("canceladas").innerText = canceladas;

}

// ==============================
// FILTROS DEL DASHBOARD
// ==============================

document.getElementById("totalClientes").parentElement.onclick = ()=>{

    dibujarTabla();

}

document.getElementById("proceso").parentElement.onclick = ()=>{

    filtrarEstado("En proceso");

}

document.getElementById("consumidas").parentElement.onclick = ()=>{

    filtrarEstado("Consumida");

}

document.getElementById("terminadas").parentElement.onclick = ()=>{

    filtrarEstado("Terminada");

}

document.getElementById("canceladas").parentElement.onclick = ()=>{

    filtrarEstado("Cancelada");

};

// ==============================
// FILTRAR TABLA
// ==============================

function filtrarEstado(estado){

    const lista = document.getElementById("listaClientes");

    lista.innerHTML = "";

    clientes.forEach((cliente,index)=>{

        if(cliente.estado !== estado) return;

        let fila = document.createElement("tr");

        fila.innerHTML = `

        <td>

        <a href="#"

        onclick="verCliente(${index});return false;">

        ${cliente.nombre}

        </a>

        </td>

        <td>

        <a

        target="_blank"

        href="https://wa.me/57${cliente.numero}">

        ${cliente.numero}

        </a>

        </td>

        <td>${cliente.estado}</td>

        <td>

        <button onclick="eliminarCliente(${index})">

        🗑

        </button>

        </td>

        `;

        lista.appendChild(fila);

    });

}
