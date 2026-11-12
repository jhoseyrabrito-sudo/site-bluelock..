const libros = [
    {
        numero: "LIBRO I",
        titulo: "Antes de diciembre",
        fecha: "El comienzo • Cuenta regresiva",
        descripcion: "Para Jenna Brown, su primer año en la universidad supone alejarse de su familia y su novio de toda la vida. Lo que no esperaba era conocer a Jack Ross, el mejor amigo de su compañera de piso, con quien comparte una conexión inevitable... aunque ambos tengan una fecha de caducidad marcada en el calendario.",
        frase: "«A veces, el tiempo no se mide en horas, sino en momentos.»",
        gradiente: "linear-gradient(160deg, #1e293b, #0f172a)"
    },
    {
        numero: "LIBRO II",
        titulo: "Después de diciembre",
        fecha: "La continuación • Nuevos caminos",
        descripcion: "El tiempo se acabó y diciembre quedó atrás. Jenna intenta reconstruir su vida y seguir adelante tras la despedida, enfrentándose a los recuerdos y a la realidad de la distancia. Sin embargo, cuando los sentimientos son tan fuertes, olvidar no es una opción tan sencilla.",
        frase: "«Lo peor de acostumbrarse a alguien es tener que aprender a vivir sin esa persona.»",
        gradiente: "linear-gradient(160deg, #31102f, #0f172a)"
    },
    {
        numero: "LIBRO III",
        titulo: "Tres meses",
        fecha: "El desenlace • La perspectiva de Jack",
        descripcion: "Esta vez la historia se cuenta desde los ojos de Jack Ross. Descubre qué pasaba realmente por su mente durante esos tres meses decisivos, sus miedos, sus secretos y todo lo que estuvo dispuesto a hacer para proteger lo que más le importaba.",
        frase: "«No elegí enamorarme, pero sí elegí quedarme.»",
        gradiente: "linear-gradient(160deg, #064e3b, #0f172a)"
    }
];

function mostrarLibro(indice) {
    const botones = document.querySelectorAll('.tab-btn');
    botones.forEach((btn, i) => {
        btn.classList.toggle('active', i === indice);
    });

    const display = document.getElementById('book-display');
    display.style.opacity = 0;

    setTimeout(() => {
        const libro = libros[indice];
        document.getElementById('book-num').textContent = libro.numero;
        document.getElementById('cover-title').textContent = libro.titulo;
        document.getElementById('book-title').textContent = libro.titulo;
        document.getElementById('book-date').textContent = libro.fecha;
        document.getElementById('book-desc').textContent = libro.descripcion;
        document.getElementById('book-quote').textContent = libro.frase;
        document.getElementById('book-cover').style.background = libro.gradiente;

        display.style.opacity = 1;
    }, 200);
}