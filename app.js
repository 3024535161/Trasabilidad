// ===============================================
// RAP ANIME IDEAS
// app.js
// ===============================================

let animeSeleccionado = null;
let ideaActual = null;
let favoritos = cargarFavoritos();

// Banco de palabras comunes para sugerir rimas asonantes
const BANCO_RIMAS = [
    "destino", "camino", "latido", "olvido", "sonido", "perdido", "vivo", "grito",
    "fuego", "juego", "luego", "ciego", "miedo", "dedo", "cielo", "suelo", "hielo", "duelo",
    "batalla", "muralla", "falla", "calla", "nada", "mirada", "espada", "jugada",
    "noche", "golpe", "orden", "nombre", "hombre", "torre",
    "fuerza", "tierra", "guerra", "piedra", "promesa", "cabeza", "certeza",
    "sombra", "honra", "corona", "zona", "historia", "gloria", "memoria", "victoria",
    "rey", "ley", "verdad", "ciudad", "libertad", "eternidad", "soledad",
    "corazón", "razón", "visión", "misión", "canción", "pasión", "decisión",
    "alma", "calma", "palma", "sangre", "hambre", "madre",
    "luna", "fortuna", "ninguna", "cuna", "mundo", "segundo", "profundo", "rumbo",
    "todo", "solo", "modo", "loco", "fondo", "paso", "brazo", "rayo", "claro", "barco",
    "vida", "herida", "salida", "energía", "melodía", "agonía", "furia", "frío"
];

// ============================
// INICIO
// ============================

window.onload = function(){

    llenarSelect("estilo", ESTILOS, e => e.nombre);
    llenarSelect("enfoque", ENFOQUES, e => e);
    llenarSelect("animo", ANIMOS, e => e);

    dibujarAnimes();
    dibujarFavoritos();

    document.getElementById("buscar").oninput = dibujarAnimes;
    document.getElementById("btnGenerar").onclick = generar;
    document.getElementById("btnOtra").onclick = generar;
    document.getElementById("btnSorpresa").onclick = sorpresa;
    document.getElementById("btnCopiar").onclick = copiarIdea;
    document.getElementById("btnFavorito").onclick = guardarFavorito;

}

function llenarSelect(id, opciones, texto){

    const select = document.getElementById(id);

    select.innerHTML = Object.entries(opciones)
        .map(([clave, valor]) => `<option value="${clave}">${texto(valor)}</option>`)
        .join("");

}

// ============================
// LISTA DE ANIMES
// ============================

function dibujarAnimes(){

    const filtro = document.getElementById("buscar").value.toLowerCase();
    const lista = document.getElementById("listaAnimes");

    lista.innerHTML = "";

    ANIMES
        .filter(a => a.nombre.toLowerCase().includes(filtro))
        .forEach(anime => {

            const tarjeta = document.createElement("button");

            tarjeta.className = "anime" + (anime === animeSeleccionado ? " activo" : "");
            tarjeta.style.setProperty("--color", anime.color);
            tarjeta.innerHTML = `<strong>${anime.nombre}</strong><small>🔥 ${anime.tendencia}</small>`;

            tarjeta.onclick = () => {
                animeSeleccionado = anime;
                dibujarAnimes();
            };

            lista.appendChild(tarjeta);

        });

}

// ============================
// GENERAR IDEA
// ============================

function generar(){

    if(!animeSeleccionado){
        avisar("Elige un anime primero (o usa 🎲 Sorpréndeme)");
        return;
    }

    const estilo = document.getElementById("estilo").value;
    const enfoque = document.getElementById("enfoque").value;
    const animo = document.getElementById("animo").value;

    ideaActual = crearIdea(animeSeleccionado, estilo, enfoque, animo);

    mostrarIdea(ideaActual);

}

function sorpresa(){

    animeSeleccionado = azar(ANIMES);

    ["estilo", "enfoque", "animo"].forEach(id => {
        const select = document.getElementById(id);
        select.selectedIndex = Math.floor(Math.random() * select.options.length);
    });

    dibujarAnimes();
    generar();

}

function crearIdea(anime, estilo, enfoque, animo){

    const [pal, pal2] = mezclar(anime.palabras);
    const [per, per2] = mezclar(anime.personajes);
    const tema = azar(anime.temas);

    const valores = {
        PAL: pal,
        PAL2: pal2,
        PER: per,
        TEMA: tema,
        ANIME: anime.nombre,
        FRASE: capitalizar(anime.frase),
        FRASE_TITULO: titulo(anime.frase),
        TEMA_TITULO: titulo(tema)
    };

    return {
        fecha: Date.now(),
        anime: anime.nombre,
        tendencia: anime.tendencia,
        titulo: rellenar(azar(PLANTILLAS.titulos), valores),
        estilo: ESTILOS[estilo],
        enfoque: ENFOQUES[enfoque],
        animo: ANIMOS[animo],
        concepto: crearConcepto(enfoque, anime, per, per2, tema, ANIMOS[animo]),
        gancho: rellenar(azar(PLANTILLAS.ganchos), valores),
        barras: mezclar(PLANTILLAS.barras).slice(0, 4).map(b => rellenar(b, valores)),
        estructura: crearEstructura(enfoque, anime, per, per2),
        rimas: anime.palabras.map(p => ({ palabra: p, rimas: buscarRimas(p) })),
        video: crearVideo(anime, per, estilo)
    };

}

function crearConcepto(enfoque, anime, per, per2, tema, animo){

    switch(enfoque){
        case "villano":
            return `Rap ${animo} contado por el antagonista de ${anime.nombre}: justifica sus actos alrededor de "${tema}" y hace que el oyente casi le dé la razón.`;
        case "batalla":
            return `Batalla de rap ${animo}: ${per} contra ${per2}. Cada uno ataca las debilidades del otro y el tema de fondo es "${tema}".`;
        case "cypher":
            return `Cypher ${animo} de ${anime.nombre}: varios personajes (${anime.personajes.join(", ")}) toman un verso cada uno y comparten un gancho sobre "${tema}".`;
        case "fan":
            return `Rap ${animo} desde la mirada del fan: cómo ${anime.nombre} y ${per} te marcaron, conectando "${tema}" con tu propia vida.`;
        default:
            return `Rap ${animo} en primera persona como ${per}: su historia, su dolor y su meta, girando alrededor de "${tema}".`;
    }

}

function crearEstructura(enfoque, anime, per, per2){

    if(enfoque === "batalla"){
        return ["Intro: presentación de ambos rivales", `Verso 1: ${per} ataca`, `Verso 2: ${per2} responde`, "Gancho compartido", "Verso 3: ronda rápida 4 y 4", "Outro: quién gana (que decidan los comentarios)"];
    }

    if(enfoque === "cypher"){
        return ["Intro instrumental (8 compases)"]
            .concat(anime.personajes.map(p => `Verso de ${p} (16 compases, cambia el flow)`))
            .concat(["Gancho final con todos"]);
    }

    return ["Intro (4–8 compases con un diálogo o sonido del anime)", "Verso 1: origen / el problema (16)", "Gancho", "Verso 2: el momento clave del anime (16)", "Gancho", "Puente: cambio de beat o de flow (8)", "Gancho final + outro"];

}

function crearVideo(anime, per, estilo){

    const ideas = [
        `Miniatura: ${per} en primer plano con los colores de ${anime.nombre} y el título en letras grandes.`,
        "Short/TikTok: usa los 15 segundos del gancho con la escena más viral del anime.",
        `Visualizer ${ESTILOS[estilo].nombre.toLowerCase()} con letras sincronizadas y efectos al ritmo de ${ESTILOS[estilo].bpm} BPM.`,
        "Abre el video con una frase famosa del personaje antes de que entre el beat."
    ];

    return mezclar(ideas).slice(0, 2);

}

// ============================
// RIMAS (asonantes, aproximadas)
// ============================

function vocalesFinales(palabra){

    // Grupos de vocales (diptongos incluidos) de la última palabra
    const ultima = palabra.toLowerCase().split(" ").pop();
    const grupos = ultima.match(/[aeiouáéíóúü]+/g) || [];

    // Cada grupo se reduce a su vocal fuerte: "ue" → "e", "io" → "o"
    const vocales = grupos.map(g => {
        const tilde = g.match(/[áéíóú]/);
        if(tilde) return { v: sinTilde(tilde[0]), tonica: true };
        const fuerte = g.match(/[aeo]/);
        return { v: fuerte ? fuerte[0] : sinTilde(g.slice(-1)), tonica: false };
    });

    if(!vocales.length) return "";

    // Sílaba tónica: la de la tilde, o la regla de llana / aguda
    let tonica = vocales.findIndex(v => v.tonica);
    if(tonica === -1){
        const llana = /[aeiouns]$/.test(ultima);
        tonica = Math.max(0, vocales.length - (llana ? 2 : 1));
    }

    return vocales.slice(tonica).map(v => v.v).join("");

}

function sinTilde(letra){
    return letra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function buscarRimas(palabra){

    const final = vocalesFinales(palabra);

    return BANCO_RIMAS
        .filter(r => r !== palabra.toLowerCase() && vocalesFinales(r) === final)
        .slice(0, 4);

}

// ============================
// MOSTRAR IDEA
// ============================

function mostrarIdea(idea){

    document.getElementById("resultado").classList.remove("oculto");

    const rimas = idea.rimas
        .map(r => `<span class="chip"><b>${esc(r.palabra)}</b>${r.rimas.length ? " → " + esc(r.rimas.join(", ")) : ""}</span>`)
        .join("");

    document.getElementById("idea").innerHTML = `
        <h3>${esc(idea.titulo)}</h3>
        <p class="meta">${esc(idea.anime)} · 🔥 ${esc(idea.tendencia)}</p>

        <div class="bloque">
            <h4>Concepto</h4>
            <p>${esc(idea.concepto)}</p>
        </div>

        <div class="bloque">
            <h4>Beat</h4>
            <p>${esc(idea.estilo.nombre)} · ${esc(idea.estilo.bpm)} BPM · ${esc(idea.estilo.base)}</p>
            <p>Enfoque: ${esc(idea.enfoque)} · Ánimo: ${esc(idea.animo)}</p>
        </div>

        <div class="bloque">
            <h4>Gancho (coro)</h4>
            <p class="letra">${esc(idea.gancho)}</p>
        </div>

        <div class="bloque">
            <h4>Barras de arranque</h4>
            <p class="letra">${esc(idea.barras.join("\n"))}</p>
        </div>

        <div class="bloque">
            <h4>Estructura</h4>
            <ol>${idea.estructura.map(e => `<li>${esc(e)}</li>`).join("")}</ol>
        </div>

        <div class="bloque">
            <h4>Palabras clave y rimas</h4>
            <div class="chips">${rimas}</div>
        </div>

        <div class="bloque">
            <h4>Ideas para el video</h4>
            <ul>${idea.video.map(v => `<li>${esc(v)}</li>`).join("")}</ul>
        </div>
    `;

    document.getElementById("resultado").scrollIntoView({ behavior: "smooth" });

}

function ideaComoTexto(idea){

    return [
        `🎤 ${idea.titulo}`,
        `${idea.anime} (${idea.tendencia})`,
        "",
        `CONCEPTO: ${idea.concepto}`,
        `BEAT: ${idea.estilo.nombre} · ${idea.estilo.bpm} BPM · ${idea.estilo.base}`,
        "",
        "GANCHO:",
        idea.gancho,
        "",
        "BARRAS:",
        idea.barras.join("\n"),
        "",
        "ESTRUCTURA:",
        idea.estructura.map((e, i) => `${i + 1}. ${e}`).join("\n"),
        "",
        "RIMAS:",
        idea.rimas.map(r => `${r.palabra}${r.rimas.length ? ": " + r.rimas.join(", ") : ""}`).join("\n")
    ].join("\n");

}

function copiarIdea(){

    if(!ideaActual) return;

    navigator.clipboard.writeText(ideaComoTexto(ideaActual))
        .then(() => avisar("Idea copiada 📋"))
        .catch(() => avisar("No se pudo copiar"));

}

// ============================
// FAVORITOS
// ============================

function cargarFavoritos(){

    try{
        return JSON.parse(localStorage.getItem("rapAnimeFavoritos")) || [];
    }catch(e){
        return [];
    }

}

function guardarFavoritos(){

    try{
        localStorage.setItem("rapAnimeFavoritos", JSON.stringify(favoritos));
    }catch(e){
        avisar("No se pudo guardar en este navegador");
    }

}

function guardarFavorito(){

    if(!ideaActual) return;

    if(favoritos.some(f => f.fecha === ideaActual.fecha)){
        avisar("Esta idea ya está guardada");
        return;
    }

    favoritos.unshift(ideaActual);
    guardarFavoritos();
    dibujarFavoritos();
    avisar("Idea guardada ⭐");

}

function dibujarFavoritos(){

    const lista = document.getElementById("listaFavoritos");

    if(!favoritos.length){
        lista.innerHTML = `<li class="vacio">Aún no tienes ideas guardadas.</li>`;
        return;
    }

    lista.innerHTML = "";

    favoritos.forEach((idea, i) => {

        const item = document.createElement("li");

        item.innerHTML = `<span><b>${esc(idea.titulo)}</b><small>${esc(idea.anime)} · ${esc(idea.estilo.nombre)}</small></span>`;

        item.querySelector("span").onclick = () => {
            ideaActual = idea;
            mostrarIdea(idea);
        };

        const borrar = document.createElement("button");
        borrar.textContent = "🗑️";
        borrar.onclick = () => {
            favoritos.splice(i, 1);
            guardarFavoritos();
            dibujarFavoritos();
        };

        item.appendChild(borrar);
        lista.appendChild(item);

    });

}

// ============================
// UTILIDADES
// ============================

function azar(lista){
    return lista[Math.floor(Math.random() * lista.length)];
}

function mezclar(lista){
    const copia = [...lista];
    for(let i = copia.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function rellenar(plantilla, valores){
    return plantilla.replace(/\{(\w+)\}/g, (_, clave) => valores[clave] ?? "");
}

function capitalizar(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function titulo(texto){
    return texto.split(" ").map(capitalizar).join(" ");
}

function esc(texto){
    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

let temporizadorAviso;

function avisar(mensaje){
    const aviso = document.getElementById("aviso");
    aviso.textContent = mensaje;
    aviso.classList.add("visible");
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(() => aviso.classList.remove("visible"), 2200);
}
