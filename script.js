const libros = [
    {
        numero: "LIBRO I",
        titulo: "Antes de diciembre",
        fecha: "EL COMIENZO • CUENTA REGRESIVA",
        descripcion: "Para Jenna Brown, su primer año en la universidad supone alejarse de su familia y su novio de toda la vida. Lo que no esperaba era conocer a Jack Ross, el mejor amigo de su compañera de piso, con quien comparte una conexión inevitable... aunque ambos tengan una fecha de caducidad marcada en el calendario.",
        frase: "«A veces, el tiempo no se mide en horas, sino en momentos.»",
        gradientePortada: "linear-gradient(180deg, #e63946 0%, #ff6b35 50%, #ffbe3b 100%)",
        gradienteHero: "linear-gradient(180deg, #e63946 0%, #ff6b35 45%, #ffbe3b 100%)",
        fondoSitio: "#fff8eb",
        colorAcento: "#ff512f",
        colorSecundario: "#ffbe3b",
        gradienteCita: "linear-gradient(90deg, #fff0c2, #ffe0b2)"
    },
    {
        numero: "LIBRO II",
        titulo: "Después de diciembre",
        fecha: "LA CONTINUACIÓN • NUEVOS CAMINOS",
        descripcion: "El tiempo se acabó y diciembre quedó atrás. Jenna intenta reconstruir su vida y seguir adelante tras la despedida, enfrentándose a los recuerdos y a la realidad de la distancia. Sin embargo, cuando los sentimientos son tan fuertes, olvidar no es una opción tan sencilla.",
        frase: "«Lo peor de acostumbrarse a alguien es tener que aprender a vivir sin esa persona.»",
        gradientePortada: "linear-gradient(180deg, #6a0572 0%, #c850c0 52%, #ffcc70 100%)",
        gradienteHero: "linear-gradient(180deg, #5b0e63 0%, #c850c0 50%, #ff9a8b 100%)",
        fondoSitio: "#fdf2fa",
        colorAcento: "#c850c0",
        colorSecundario: "#f472b6",
        gradienteCita: "linear-gradient(90deg, #fce7f3, #fae8ff)"
    },
    {
        numero: "LIBRO III",
        titulo: "Tres meses",
        fecha: "EL DESENLACE • LA PERSPECTIVA DE JACK",
        descripcion: "Esta vez la historia se cuenta desde los ojos de Jack Ross. Descubre qué pasaba realmente por su mente durante esos tres meses decisivos, sus miedos, sus secretos y todo lo que estuvo dispuesto a hacer para proteger lo que más le importaba.",
        frase: "«No elegí enamorarme, pero sí elegí quedarme.»",
        gradientePortada: "linear-gradient(180deg, #131c31 0%, #2b5876 52%, #ff9a5a 100%)",
        gradienteHero: "linear-gradient(180deg, #0f172a 0%, #2b5876 52%, #f59e0b 100%)",
        fondoSitio: "#f0f5fa",
        colorAcento: "#2b5876",
        colorSecundario: "#60a5fa",
        gradienteCita: "linear-gradient(90deg, #dbeafe, #e0f2fe)"
    }
];

function mostrarLibro(indice) {
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach((btn, i) => {
        btn.classList.toggle('active', i === indice);
    });

    const display = document.getElementById('book-display');
    display.style.opacity = 0;
    display.style.transform = "translateY(10px)";

    setTimeout(() => {
        const libro = libros[indice];
        const cover = document.getElementById('book-cover');
        const hero = document.querySelector('.hero');
        const quote = document.getElementById('book-quote');
        const activeBtn = document.querySelector('.tab-btn.active');

        document.getElementById('book-num').textContent = libro.numero;
        document.getElementById('cover-title').textContent = libro.titulo;
        document.getElementById('book-title').textContent = libro.titulo;
        document.getElementById('book-date').textContent = libro.fecha;
        document.getElementById('book-desc').textContent = libro.descripcion;
        quote.textContent = libro.frase;

        cover.style.background = libro.gradientePortada;
        hero.style.background = libro.gradienteHero;
        document.body.style.backgroundColor = libro.fondoSitio;
        quote.style.background = libro.gradienteCita;

        if (activeBtn) {
            activeBtn.style.background = libro.gradientePortada;
        }
        document.querySelectorAll('.tag-pill:not(.pink-pill)').forEach(pill => {
            pill.style.backgroundColor = libro.colorSecundario;
        });
        document.querySelectorAll('.pink-pill').forEach(pill => {
            pill.style.backgroundColor = libro.colorAcento;
        });

        document.querySelector('.shape-1').style.color = libro.colorAcento;
        document.querySelector('.shape-2').style.color = libro.colorSecundario;

        display.style.opacity = 1;
        display.style.transform = "translateY(0)";
    }, 220);
}

/* =========================================
   DATOS DE PERSONAJES PARA LA VENTANA MODAL
   ========================================= */
const personajesData = {
    jenna: {
        nombre: "Jenna Brown",
        rol: "PROTAGONISTA",
        emoji: "✨",
        fondoVentana: "#fff6e0",
        biografia: "Jenna comienza su primer año de universidad con la idea de que su vida ya está perfectamente planeada junto a su novio de toda la vida. Sin embargo, al mudarse lejos de casa y conocer a Jack Ross, descubre facetas de sí misma que desconocía. A lo largo de la trilogía aprende a escuchar sus propios deseos, enfrentar la culpa y tomar decisiones valientes sobre quién quiere ser y a quién quiere amar.",
        rasgos: ["Leal", "Empática", "Valiente", "En busca de su identidad"],
        frases: [
            "«A veces, el tiempo no se mide en horas, sino en momentos.»",
            "«No puedes controlar de quién te enamoras, por mucho que intentes ponerle una fecha límite.»",
            "«Me di cuenta de que estaba intentando ser la persona que todos esperaban, menos la que yo quería ser.»"
        ]
    },
    jack: {
        nombre: "Jack Ross",
        rol: "PROTAGONISTA",
        emoji: "⚡",
        fondoVentana: "#edf2fa",
        biografia: "Reservado, irónico y con una coraza emocional construida a base de heridas del pasado. Jack evita los compromisos porque cree que todo lo bueno termina marchándose. Cuando Jenna entra en su vida, sus reglas comienzan a tambalearse. En 'Tres meses' conocemos su verdadera profundidad: un chico dispuesto a cargar con el silencio y el sacrificio con tal de proteger a quienes quiere.",
        rasgos: ["Protector", "Sarcástico", "Reservado", "Lealtad inquebrantable"],
        frases: [
            "«No elegí enamorarme, pero sí elegí quedarme.»",
            "«Contigo es la primera vez que no quiero mirar el reloj.»",
            "«Si tuviera que volver a pasar por todo sabiendo cómo termina, volvería a elegirte sin dudarlo.»"
        ]
    },
    sue: {
        nombre: "Sue",
        rol: "COPROTAGONISTA",
        emoji: "💫",
        fondoVentana: "#fdf0f7",
        biografia: "Compañera de cuarto de Jenna en la residencia universitaria y una de las personas más cercanas a Jack. Sue es extrovertida, directa y posee una intuición infalible para notar la química entre Jenna y Jack desde el primer instante. Se convierte en el pilar emocional de Jenna en la universidad y en la voz de la razón cuando las dudas la superan.",
        rasgos: ["Directa", "Incondicional", "Carismática", "Gran intuición"],
        frases: [
            "«Puedes engañar a todo el mundo si quieres, Jenna, pero a mí no me engañas cuando lo miras.»",
            "«La vida universitaria no se trata de sobrevivir a los exámenes, sino de descubrir quién eres cuando nadie te mira.»",
            "«Las mejores amigas están para decirte la verdad, incluso cuando no quieres escucharla.»"
        ]
    },
    will: {
        nombre: "Will",
        rol: "COPROTAGONISTA",
        emoji: "🔥",
        fondoVentana: "#fff3e6",
        biografia: "El mejor amigo de Jack y el encargado de romper la tensión en los momentos más serios con su sentido del humor. Aunque a primera vista parece despreocupado y bromista, Will es sumamente observador y conoce las cicatrices de Jack mejor que nadie. Su lealtad hacia el grupo es absoluta y juega un papel clave cuando los secretos salen a la luz.",
        rasgos: ["Divertido", "Observador", "Fiel amigo", "Corazón noble"],
        frases: [
            "«Llevo años conociendo a Jack y nunca lo había visto perder el control por nadie... hasta que llegaste tú.»",
            "«A veces hacerse el gracioso es la única forma de que los demás no noten que estás preocupado.»",
            "«Los amigos de verdad no te dejan caer cuando todo se pone difícil.»"
        ]
    },
    mike: {
        nombre: "Mike",
        rol: "COPROTAGONISTA",
        emoji: "🌙",
        fondoVentana: "#eef0ff",
        biografia: "Parte esencial del círculo íntimo de Jack y Will. Mike suele mantener un perfil más sereno y analítico, pero su presencia resulta determinante en los momentos más críticos de la historia. Su historia personal y sus decisiones aportan giros reveladores que ayudan a comprender el pasado de Jack y las consecuencias de guardar silencio.",
        rasgos: ["Analítico", "Sereno", "Clave en la trama", "Confiable"],
        frases: [
            "«Guardar secretos para proteger a alguien casi siempre termina doliendo más que la verdad.»",
            "«No siempre puedes salvar a todos, pero puedes estar ahí cuando decidan levantarse.»",
            "«El pasado solo te define si dejas que decida tu futuro.»"
        ]
    },
    monty: {
        nombre: "Monty",
        rol: "COPROTAGONISTA",
        emoji: "⏳",
        fondoVentana: "#fef9e6",
        biografia: "El novio de toda la vida de Jenna antes de que ella se marchara a la universidad. Representa la seguridad, la costumbre y el plan de vida tradicional que Jenna creía querer. La distancia y el paso de los meses ponen a prueba su relación, demostrando que crecer en direcciones distintas a veces es inevitable.",
        rasgos: ["Tradicional", "Parte del pasado", "Punto de partida", "Relación a distancia"],
        frases: [
            "«Prometimos que la distancia no iba a cambiar nada entre nosotros.»",
            "«A veces das por sentado que alguien siempre va a estar en el mismo lugar esperando.»",
            "«Cuando dos personas cambian por separado, volver al punto de inicio ya no es posible.»"
        ]
    }
};

function abrirPersonaje(id) {
    const p = personajesData[id];
    if (!p) return;

    const modal = document.getElementById('char-modal');
    const ventana = document.getElementById('modal-window');

    document.getElementById('modal-emoji').textContent = p.emoji;
    document.getElementById('modal-role').textContent = p.rol;
    document.getElementById('modal-name').textContent = p.nombre;
    document.getElementById('modal-bio').textContent = p.biografia;

    ventana.style.backgroundColor = p.fondoVentana;

    // Renderizar etiquetas de rasgos
    const traitsContainer = document.getElementById('modal-traits');
    traitsContainer.innerHTML = p.rasgos
        .map(rasgo => `<span class="trait-tag">✦ ${rasgo}</span>`)
        .join('');

    // Renderizar mejores frases
    const quotesContainer = document.getElementById('modal-quotes');
    quotesContainer.innerHTML = p.frases
        .map(frase => `<div class="quote-item">${frase}</div>`)
        .join('');

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById('char-modal');
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

function cerrarModalFondo(event) {
    if (event.target.id === 'char-modal') {
        cerrarModal();
    }
}

// Cerrar ventana con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
});