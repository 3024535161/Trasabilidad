// ==============================================
// CRM PORTABILIDAD PRO V2
// dashboard.js
// ==============================================

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

// ==============================================
// FILTROS DEL DASHBOARD
// ==============================================

document.querySelector(".dashboard").addEventListener("click",function(e){

    let card = e.target.closest(".card");

    if(!card) return;

    let titulo = card.querySelector("h3").innerText;

    switch(titulo){

        case "Total":
            dibujarTabla();
            break;

        case "En proceso":
            mostrarEstado("En proceso");
            break;

        case "Consumidas":
            mostrarEstado("Consumida");
            break;

        case "Terminadas":
            mostrarEstado("Terminada");
            break;

        case "Canceladas":
            mostrarEstado("Cancelada");
            break;

    }

});

// ==============================================
// MOSTRAR SOLO UN ESTADO
// ==============================================

function mostrarEstado(estado){

    const lista = document.getElementById("listaClientes");

    lista.innerHTML="";

    clientes.forEach((cliente,index)=>{

        if(cliente.estado!==estado) return;

        let fila = document.createElement("tr");

        fila.innerHTML=`

        <td>

        <a href="#"

        onclick="abrirFicha(${index});return false;">

        ${cliente.nombre}

        </a>

        </td>

        <td>${cliente.cedula}</td>

        <td>

        <a href="#"

        onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}');return false;">

        ${cliente.numero}

        </a>

        </td>

        <td>${cliente.estado}</td>

        <td>

        <button onclick="abrirFicha(${index})">

        👁

        </button>

        <button onclick="editarFormulario(${index})">

        ✏

        </button>

        <button onclick="eliminarCliente(${index})">

        🗑

        </button>

        </td>

        `;

        lista.appendChild(fila);

    });

}
