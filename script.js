const libros = [
    {
        numero: "LIBRO I",
        titulo: "Antes de diciembre",
        fecha: "EL COMIENZO • CUENTA REGRESIVA",
        descripcion: "Para Jenna Brown, su primer año en la universidad supone alejarse de su familia y su novio de toda la vida. Lo que no esperaba era conocer a Jack Ross, el mejor amigo de su compañera de piso, con quien comparte una conexión inevitable... aunque ambos tengan una fecha de caducidad marcada en el calendario.",
        frase: "«A veces, el tiempo no se mide en horas, sino en momentos.»",
        colorPortada: "#ffdf2b", // Amarillo icónico de Antes de diciembre
        colorTexto: "#141414"
    },
    {
        numero: "LIBRO II",
        titulo: "Después de diciembre",
        fecha: "LA CONTINUACIÓN • NUEVOS CAMINOS",
        descripcion: "El tiempo se acabó y diciembre quedó atrás. Jenna intenta reconstruir su vida y seguir adelante tras la despedida, enfrentándose a los recuerdos y a la realidad de la distancia. Sin embargo, cuando los sentimientos son tan fuertes, olvidar no es una opción tan sencilla.",
        frase: "«Lo peor de acostumbrarse a alguien es tener que aprender a vivir sin esa persona.»",
        colorPortada: "#ff5c9d", // Rosa vibrante de Después de diciembre
        colorTexto: "#141414"
    },
    {
        numero: "LIBRO III",
        titulo: "Tres meses",
        fecha: "EL DESENLACE • LA PERSPECTIVA DE JACK",
        descripcion: "Esta vez la historia se cuenta desde los ojos de Jack Ross. Descubre qué pasaba realmente por su mente durante esos tres meses decisivos, sus miedos, sus secretos y todo lo que estuvo dispuesto a hacer para proteger lo que más le importaba.",
        frase: "«No elegí enamorarme, pero sí elegí quedarme.»",
        colorPortada: "#38bdf8", // Azul brillante de Tres meses
        colorTexto: "#141414"
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

        document.getElementById('book-num').textContent = libro.numero;
        document.getElementById('cover-title').textContent = libro.titulo;
        document.getElementById('book-title').textContent = libro.titulo;
        document.getElementById('book-date').textContent = libro.fecha;
        document.getElementById('book-desc').textContent = libro.descripcion;
        document.getElementById('book-quote').textContent = libro.frase;

        cover.style.backgroundColor = libro.colorPortada;
        cover.style.color = libro.colorTexto;

        display.style.opacity = 1;
        display.style.transform = "translateY(0)";
    }, 220);
}