// ======================================
// APP.JS
// ======================================

// Crear panel lateral automáticamente

const panel = document.createElement("div");

panel.id = "panelCliente";

panel.innerHTML = `

<div id="panelContenido">

    <button id="cerrarPanel">✖ Cerrar</button>

    <h2>Ficha del Cliente</h2>

    <div id="datosCliente"></div>

</div>

`;

document.body.appendChild(panel);

// ======================================
// ESTILOS DEL PANEL
// ======================================

panel.style.position="fixed";
panel.style.top="0";
panel.style.right="-450px";
panel.style.width="420px";
panel.style.height="100%";
panel.style.background="#111827";
panel.style.color="white";
panel.style.transition=".35s";
panel.style.padding="20px";
panel.style.overflowY="auto";
panel.style.boxShadow="-5px 0 15px rgba(0,0,0,.4)";
panel.style.zIndex="9999";

// ======================================
// CERRAR PANEL
// ======================================

document
.getElementById("cerrarPanel")
.onclick=()=>{

    panel.style.right="-450px";

}

// ======================================
// ABRIR FICHA
// ======================================

function abrirFicha(index){

    const cliente = obtenerClientes()[index];

    document.getElementById("datosCliente").innerHTML=`

        <h3>${cliente.nombre}</h3>

        <hr>

        <p><b>Cédula:</b> ${cliente.cedula || ""}</p>

        <p><b>WhatsApp:</b> ${cliente.numero}</p>

        <p><b>EXP:</b> ${cliente.exp || ""}</p>

        <p><b>NIP:</b> ${cliente.nip || ""}</p>

        <p><b>Ciudad:</b> ${cliente.ciudad || ""}</p>

        <p><b>Departamento:</b> ${cliente.departamento || ""}</p>

        <p><b>Dirección:</b> ${cliente.dir || ""}</p>

        <p><b>Barrio:</b> ${cliente.barrio || ""}</p>

        <p><b>Operador:</b> ${cliente.operador || ""}</p>

        <p><b>Estado:</b> ${cliente.estado}</p>

        <hr>

        <h3>Historial</h3>

        <div style="background:#1e293b;padding:10px;border-radius:8px">

        ${

            cliente.historial

            ?

            cliente.historial.join("<br><br>")

            :

            "Sin historial"

        }

        </div>

        <br>

        <button onclick="abrirWhatsApp('${cliente.numero}','${cliente.nombre}')">

        💬 WhatsApp

        </button>

        <br><br>

        <button onclick="llamar('${cliente.numero}')">

        📞 Llamar

        </button>

    `;

    panel.style.right="0";

}

// ======================================
// CAMBIAR NOMBRE POR LINK
// ======================================

const original = dibujarTabla;

dibujarTabla = function(){

    original();

    const filas = document.querySelectorAll("#listaClientes tr");

    filas.forEach((fila,index)=>{

        const td = fila.children[0];

        td.innerHTML = `

        <a

        href="#"

        onclick="abrirFicha(${index});return false;">

        ${obtenerClientes()[index].nombre}

        </a>

        `;

    });

}

// ======================================
// INICIAR
// ======================================

actualizarCRM();
