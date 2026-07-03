// =======================================
// IMPORTAR.JS
// CRM PORTABILIDAD PRO
// =======================================

const btnImportar = document.getElementById("btnImportar");
const txtImportar = document.getElementById("textoImportar");

// ==============================
// IMPORTAR CLIENTES
// ==============================

btnImportar.addEventListener("click", importarClientes);

function importarClientes(){

    let texto = txtImportar.value.trim();

    if(texto==""){

        alert("Primero pega la información.");

        return;

    }

    let lineas = texto.split("\n");

    let agregados = 0;

    lineas.forEach(linea=>{

        linea = linea.trim();

        if(linea=="") return;

        // Divide por tabulación (Google Sheets)
        let datos = linea.split("\t");

        // Si no hay tabulación intenta con varios espacios
        if(datos.length<2){

            datos = linea.split(/\s{2,}/);

        }

        // Último intento: nombre + último número
        if(datos.length<2){

            let numero = linea.match(/\d{7,15}$/);

            if(numero){

                datos = [

                    linea.replace(numero[0],"").trim(),

                    numero[0]

                ];

            }

        }

        if(datos.length<2) return;

        let nombre = datos[0].trim();

        let numero = datos[1].trim();

        agregarCliente(nombre,numero);

        agregados++;

    });

    txtImportar.value="";

    alert(

        "Clientes importados: "+agregados

    );

}

// ==============================
// PEGAR CON CTRL+V
// ==============================

txtImportar.addEventListener("paste",()=>{

    console.log("Datos pegados correctamente.");

});
