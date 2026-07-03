// =====================================
// IMPORTAR.JS
// Importación masiva desde Excel/Sheets
// =====================================

const btnImportar = document.getElementById("btnImportar");
const textarea = document.getElementById("textoImportar");

btnImportar.addEventListener("click", importarClientes);

// ===============================
// IMPORTAR CLIENTES
// ===============================

function importarClientes(){

    const texto = textarea.value.trim();

    if(texto===""){

        alert("Pega primero la información.");

        return;

    }

    const lineas = texto.split("\n");

    let clientes = obtenerClientes();

    let agregados = 0;

    let repetidos = 0;

    lineas.forEach(linea=>{

        linea = linea.trim();

        if(linea==="") return;

        // Detecta tabulación o varios espacios

        let partes = linea.split(/\t+/);

        if(partes.length<2){

            partes = linea.split(/\s{2,}/);

        }

        // Si todavía no detecta intenta buscar el último número

        if(partes.length<2){

            const numero = linea.match(/\d{7,15}$/);

            if(numero){

                partes = [

                    linea.replace(numero[0],"").trim(),

                    numero[0]

                ];

            }

        }

        if(partes.length<2) return;

        const nombre = partes[0].trim();

        const numero = partes[1].replace(/\D/g,"");

        if(nombre==="" || numero==="") return;

        // Evitar duplicados

        const existe = clientes.some(

            c=>c.numero===numero

        );

        if(existe){

            repetidos++;

            return;

        }

        clientes.push({

            nombre:nombre,

            numero:numero,

            estado:"En proceso",

            fechaRegistro:new Date().toLocaleDateString(),

            ultimaActualizacion:"",

            historial:[

                "Cliente importado"

            ]

        });

        agregados++;

    });

    guardarClientes(clientes);

    textarea.value="";

    actualizarCRM();

    alert(

        "Clientes agregados: "

        +agregados+

        "\\nRepetidos: "

        +repetidos

    );

}

// ===============================
// PEGAR CON CTRL+V
// ===============================

textarea.addEventListener(

    "paste",

    function(){

        setTimeout(()=>{

            console.log(

                "Información pegada"

            );

        },100);

    }

);
