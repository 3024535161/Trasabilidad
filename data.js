// ===============================================
// RAP ANIME IDEAS
// data.js — animes en tendencia y material para rimas
// ===============================================

// "tendencia": temporada / motivo por el que está sonando (actualizado: otoño 2026)
const ANIMES = [
    {
        id: "edgerunners",
        nombre: "Cyberpunk: Edgerunners 2",
        tendencia: "Otoño 2026 · El más esperado",
        color: "#f5e600",
        personajes: ["un nuevo edgerunner", "un fixer de Night City", "una netrunner"],
        temas: ["ambición", "cromo y carne", "morir joven en la ciudad", "leyendas de Night City"],
        palabras: ["cromo", "neón", "implante", "ciberpsicosis", "Night City", "eddies", "glitch", "Sandevistan"],
        frase: "o eres leyenda o eres chatarra"
    },
    {
        id: "apothecary",
        nombre: "The Apothecary Diaries T3",
        tendencia: "Otoño 2026 · Top popularidad",
        color: "#7bc96f",
        personajes: ["Maomao", "Jinshi", "Gaoshun"],
        temas: ["veneno y verdad", "intrigas de palacio", "mente fría", "secretos de la corte"],
        palabras: ["veneno", "palacio", "hierba", "antídoto", "concubina", "dosis", "misterio", "corte"],
        frase: "una dosis exacta de verdad"
    },
    {
        id: "bluebox",
        nombre: "Blue Box T2",
        tendencia: "Otoño 2026 · Romance deportivo",
        color: "#4aa8ff",
        personajes: ["Taiki", "Chinatsu", "Hina"],
        temas: ["amor y entrenamiento", "madrugar por un sueño", "la cancha y el corazón"],
        palabras: ["bádminton", "volante", "gimnasio", "red", "madrugada", "latido", "saque", "cancha"],
        frase: "entreno al alba por tu mirada"
    },
    {
        id: "blackclover",
        nombre: "Black Clover (regreso)",
        tendencia: "Otoño 2026 · Vuelve tras años",
        color: "#3a3a3a",
        personajes: ["Asta", "Yuno", "Noelle"],
        temas: ["nacer sin magia", "rivalidad fraternal", "nunca rendirse", "ser Rey Mago"],
        palabras: ["grimorio", "antimagia", "espada", "trébol", "Rey Mago", "Toros Negros", "demonio", "límite"],
        frase: "sin magia pero no me rindo"
    },
    {
        id: "sword",
        nombre: "Reincarnated as a Sword II",
        tendencia: "Otoño 2026 · Isekai en racha",
        color: "#b388ff",
        personajes: ["Fran", "Teacher (la espada)"],
        temas: ["renacer como arma", "proteger a alguien", "evolucionar"],
        palabras: ["acero", "filo", "renacer", "evolución", "hoja", "gato negro", "habilidad", "nivel"],
        frase: "renací en acero para cuidarte"
    },
    {
        id: "frieren",
        nombre: "Frieren",
        tendencia: "Fenómeno 2026",
        color: "#a7d7c5",
        personajes: ["Frieren", "Fern", "Stark", "Himmel"],
        temas: ["el paso del tiempo", "recuerdos", "lo que no dijimos", "magia y memoria"],
        palabras: ["eterna", "recuerdo", "hechizo", "flor", "Himmel", "mil años", "viaje", "despedida"],
        frase: "mil años y aún te recuerdo"
    },
    {
        id: "jjk",
        nombre: "Jujutsu Kaisen",
        tendencia: "Arco Culling Game · 2026",
        color: "#6c2bd9",
        personajes: ["Yuji Itadori", "Sukuna", "Gojo", "Megumi"],
        temas: ["maldiciones", "el más fuerte", "cargar con un rey", "expansión de dominio"],
        palabras: ["maldición", "dominio", "infinito", "Sukuna", "energía", "Shibuya", "Rey", "ritual"],
        frase: "dentro de mi dominio no fallo"
    },
    {
        id: "chainsaw",
        nombre: "Chainsaw Man",
        tendencia: "Arco de Reze · Hype vigente",
        color: "#ff5a1f",
        personajes: ["Denji", "Pochita", "Makima", "Reze", "Power"],
        temas: ["sueños simples", "deudas", "control", "amor explosivo"],
        palabras: ["motosierra", "demonio", "contrato", "deuda", "bomba", "cadena", "Pochita", "sangre"],
        frase: "arranco el motor, no hay contrato"
    },
    {
        id: "dandadan",
        nombre: "Dandadan",
        tendencia: "Tendencia en redes",
        color: "#ff3d8b",
        personajes: ["Okarun", "Momo", "Turbo Granny"],
        temas: ["ovnis y fantasmas", "caos adolescente", "poder psíquico"],
        palabras: ["ovni", "aura", "fantasma", "alien", "psíquico", "turbo", "abuela", "dimensión"],
        frase: "entre ovnis y fantasmas encontré mi ritmo"
    },
    {
        id: "sololeveling",
        nombre: "Solo Leveling",
        tendencia: "Siempre en el top",
        color: "#3d5afe",
        personajes: ["Sung Jinwoo", "Igris", "Beru"],
        temas: ["del más débil al más fuerte", "ejército de sombras", "subir de nivel solo"],
        palabras: ["sombra", "nivel", "mazmorra", "Arise", "cazador", "sistema", "monarca", "rango S"],
        frase: "levántate, mi ejército es sombra"
    },
    {
        id: "kimetsu",
        nombre: "Demon Slayer: Castillo Infinito",
        tendencia: "Trilogía en cines",
        color: "#e53935",
        personajes: ["Tanjiro", "Nezuko", "Muzan", "Akaza", "Giyu"],
        temas: ["respiración y sacrificio", "familia", "cazar en la noche"],
        palabras: ["respiración", "katana", "pilar", "demonio", "sol", "castillo", "nichirin", "luna"],
        frase: "respiro fuego bajo la luna"
    },
    {
        id: "onepiece",
        nombre: "One Piece",
        tendencia: "Saga final · Elbaf",
        color: "#ffb300",
        personajes: ["Luffy", "Zoro", "Sanji", "Shanks"],
        temas: ["libertad", "tripulación", "sueños imposibles", "Joy Boy"],
        palabras: ["tesoro", "tripulación", "sombrero", "Gear 5", "mar", "gigante", "Rey Pirata", "nakama"],
        frase: "seré libre, seré Rey"
    },
    {
        id: "sakamoto",
        nombre: "Sakamoto Days",
        tendencia: "Acción viral",
        color: "#ffcc80",
        personajes: ["Taro Sakamoto", "Shin", "Lu"],
        temas: ["el asesino retirado", "proteger a la familia", "lo cotidiano como arma"],
        palabras: ["retirado", "tienda", "asesino", "familia", "precisión", "leyenda", "bala", "calma"],
        frase: "me retiré, pero no olvidé"
    },
    {
        id: "kaiju",
        nombre: "Kaiju No. 8",
        tendencia: "Acción en racha",
        color: "#26a69a",
        personajes: ["Kafka Hibino", "Mina Ashiro", "Kikoru"],
        temas: ["nunca es tarde", "ser el monstruo", "promesas de infancia"],
        palabras: ["kaiju", "monstruo", "defensa", "promesa", "núcleo", "uniforme", "tarde", "rugido"],
        frase: "nunca es tarde para el rugido"
    }
];

// Estilos de rap con su base sugerida
const ESTILOS = {
    epico:   { nombre: "Rap épico (estilo anime rap)", bpm: "85–95", base: "orquestal + piano + 808 suave" },
    trap:    { nombre: "Trap",                         bpm: "130–150", base: "808 largo, hi-hats en tresillo" },
    drill:   { nombre: "Drill",                        bpm: "140–145", base: "bajo deslizante, percusión desplazada" },
    boombap: { nombre: "Boom bap",                     bpm: "88–94", base: "sample de soul/jazz, caja seca" },
    emo:     { nombre: "Emo rap / sad",                bpm: "70–80", base: "guitarra limpia, reverb, lo-fi" },
    phonk:   { nombre: "Phonk",                        bpm: "120–140", base: "cowbell, bajo saturado, vocales de Memphis" }
};

const ENFOQUES = {
    personaje: "Desde la voz del personaje (primera persona)",
    villano:   "Desde la voz del villano / antagonista",
    batalla:   "Batalla de rap entre dos personajes",
    cypher:    "Cypher: cada verso un personaje distinto",
    fan:       "Desde el fan: lo que el anime me hizo sentir"
};

const ANIMOS = {
    hype:      "hype / motivacional",
    oscuro:    "oscuro / agresivo",
    triste:    "melancólico",
    romantico: "romántico",
    epico:     "épico / batalla final"
};

// Plantillas para generar ganchos, títulos y versos
const PLANTILLAS = {
    titulos: [
        "{PAL} | {PER} Rap",
        "{FRASE_TITULO}",
        "Rap de {PER}: \"{PAL}\"",
        "{PAL} y {PAL2} | {ANIME} Rap",
        "{TEMA_TITULO} ({PER})"
    ],
    ganchos: [
        "{FRASE}, {FRASE} —\ncon {PAL} en las venas, nadie me detiene ya.",
        "Dicen que es {PAL}, yo digo que es destino,\n{FRASE}, abriendo mi camino.",
        "{PAL}, {PAL2}, lo llevo en la piel,\n{FRASE}, y no me vuelvo a caer.",
        "Si me ves llegar, es {PAL} lo que siento,\n{FRASE}, rompiendo el firmamento."
    ],
    barras: [
        "Traigo {PAL} donde otros traen miedo",
        "Cada {PAL2} que cae me recuerda quién soy",
        "No hablo de {TEMA}, lo vivo en cada paso",
        "Me llamaron débil, hoy me nombran {PAL}",
        "Entre {PAL} y {PAL2} aprendí a levantarme",
        "Si el mundo es {PAL}, yo soy la excepción",
        "{PER} en el beat, la historia se reescribe",
        "Tu {PAL2} no alcanza, yo vengo de {TEMA}"
    ]
};
