let idiomaActual = 'es';
let libroActual = 0;
let personajeActual = null;

const textosUI = {
    es: {
        botonIdioma: "🇧🇷 Português",
        badge: "★ TRILOGÍA OFICIAL DE JOANA MARCÚS ★",
        heroTitle: 'ANTES DE <span class="highlight-pink">DICIEMBRE</span>',
        heroSub: "Un amor con fecha de caducidad, un reloj en contra y tres libros que lo cambiaron todo.",
        heroBtn: "Descubrir los 3 Libros ↓",
        introPill: "COLECCIÓN ORIGINAL",
        introTitle: "La Historia Completa",
        introDesc: "De septiembre a diciembre... y todo lo que pasó después entre Jenna Brown y Jack Ross.",
        tabs: ["01. Antes de diciembre", "02. Después de diciembre", "03. Tres meses"],
        protagPill: "PROTAGONISTAS",
        protagTitle: "Los Dueños de la Historia",
        clickHint: "Selecciona un personaje para abrir su ficha interactiva 🎮",
        coprotagPill: "COPROTAGONISTAS",
        coprotagTitle: "Piezas Clave de la Trama",
        cardMore: "Abrir ficha ✦",
        popupBioTag: "📖 MINI BIOGRAFÍA",
        popupQuotesTag: "💬 MEJORES FRASES",
        popupSwitch: "Cambiar personaje:",
        footer: 'Hecho con ♥ por fans de la trilogía <strong>Antes de diciembre</strong> • Joana Marcús',
        cardsDesc: {
            jenna: "Leal, espontánea y en busca de su propia voz lejos de casa. Su primer año universitario pone su mundo patas arriba cuando menos lo esperaba.",
            jack: "Magnético, sarcástico y con un pasado que guarda bajo llave. Detrás de su aparente indiferencia esconde una lealtad capaz de romper sus propias reglas.",
            sue: "Compañera de habitación de Jenna y amiga inseparable de Jack. Es el puente que une sus mundos desde el primer día y un apoyo incondicional en cada crisis.",
            will: "El alma de la fiesta y mejor amigo de Jack. Detrás de su humor despreocupado esconde un corazón enorme y resulta fundamental para entender los secretos del grupo.",
            mike: "Observador, leal y pieza esencial dentro del círculo cercano de Jack. Su presencia y decisiones marcan giros reveladores en los momentos más tensos de la trilogía.",
            monty: "El novio de toda la vida de Jenna y el punto de partida de la cuenta regresiva. Su relación a distancia pone a prueba las promesas, la lealtad y el paso del tiempo."
        }
    },
    pt: {
        botonIdioma: "🇪🇸 Español",
        badge: "★ TRILOGIA OFICIAL DE JOANA MARCÚS ★",
        heroTitle: 'ANTES DE <span class="highlight-pink">DEZEMBRO</span>',
        heroSub: "Um amor com prazo de validade, um relógio contra o tempo e três livros que mudaram tudo.",
        heroBtn: "Descobrir os 3 Livros ↓",
        introPill: "COLEÇÃO ORIGINAL",
        introTitle: "A História Completa",
        introDesc: "De setembro a dezembro... e tudo o que aconteceu depois entre Jenna Brown e Jack Ross.",
        tabs: ["01. Antes de dezembro", "02. Depois de dezembro", "03. Três meses"],
        protagPill: "PROTAGONISTAS",
        protagTitle: "Os Donos da História",
        clickHint: "Selecione um personagem para abrir sua ficha interativa 🎮",
        coprotagPill: "COADJUVANTES",
        coprotagTitle: "Peças-Chave da Trama",
        cardMore: "Abrir ficha ✦",
        popupBioTag: "📖 MINI BIOGRAFIA",
        popupQuotesTag: "💬 MELHORES FRASES",
        popupSwitch: "Trocar personagem:",
        footer: 'Feito com ♥ por fãs da trilogia <strong>Antes de dezembro</strong> • Joana Marcús',
        cardsDesc: {
            jenna: "Leal, espontânea e em busca de sua própria voz longe de casa. Seu primeiro ano na faculdade vira seu mundo de cabeça para baixo quando ela menos esperava.",
            jack: "Magnético, sarcástico e com um passado guardado a sete chaves. Por trás de sua aparente indiferença esconde uma lealdade capaz de quebrar suas próprias regras.",
            sue: "Colega de quarto de Jenna e amiga inseparável de Jack. É a ponte que une os mundos dos dois desde o primeiro dia e um apoio incondicional em cada crise.",
            will: "A alma da festa e melhor amigo de Jack. Por trás do humor despreocupado esconde um coração enorme e é fundamental para entender os segredos do grupo.",
            mike: "Observador, leal e peça essencial dentro do círculo próximo de Jack. Sua presença e decisões marcam reviravoltas reveladoras nos momentos mais tensos da trilogia.",
            monty: "O namorado de longa data de Jenna e o ponto de partida da contagem regressiva. Seu relacionamento à distância coloca à prova as promessas, a lealdade e o passar do tempo."
        }
    }
};

const libros = [
    {
        es: {
            numero: "LIBRO I",
            titulo: "Antes de diciembre",
            fecha: "EL COMIENZO • CUENTA REGRESIVA",
            descripcion: "Para Jenna Brown, su primer año en la universidad supone alejarse de su familia y su novio de toda la vida. Lo que no esperaba era conocer a Jack Ross, el mejor amigo de su compañera de piso, con quien comparte una conexión inevitable... aunque ambos tengan una fecha de caducidad marcada en el calendario.",
            frase: "«A veces, el tiempo no se mide en horas, sino en momentos.»"
        },
        pt: {
            numero: "LIVRO I",
            titulo: "Antes de dezembro",
            fecha: "O COMEÇO • CONTAGEM REGRESSIVA",
            descripcion: "Para Jenna Brown, seu primeiro ano na universidade significa ficar longe da família e do namorado de longa data. O que ela não esperava era conhecer Jack Ross, o melhor amigo de sua colega de quarto, com quem compartilha uma conexão inevitável... mesmo que ambos tenham um prazo de validade marcado no calendário.",
            frase: "«Às vezes, o tempo não se mede em horas, mas em momentos.»"
        },
        gradientePortada: "linear-gradient(180deg, #e63946 0%, #ff6b35 50%, #ffbe3b 100%)",
        gradienteHero: "linear-gradient(180deg, #e63946 0%, #ff6b35 45%, #ffbe3b 100%)",
        fondoSitio: "#ffefd6",
        fondoTarjeta: "linear-gradient(135deg, #ffe2b8 0%, #ffd09b 100%)",
        fondoTabInactivo: "#fff2dc",
        colorAcento: "#ff512f",
        colorSecundario: "#ffbe3b",
        gradienteCita: "linear-gradient(90deg, #ffbe3b, #ff9f43)"
    },
    {
        es: {
            numero: "LIBRO II",
            titulo: "Después de diciembre",
            fecha: "LA CONTINUACIÓN • NUEVOS CAMINOS",
            descripcion: "El tiempo se acabó y diciembre quedó atrás. Jenna intenta reconstruir su vida y seguir adelante tras la despedida, enfrentándose a los recuerdos y a la realidad de la distancia. Sin embargo, cuando los sentimientos son tan fuertes, olvidar no es una opción tan sencilla.",
            frase: "«Lo peor de acostumbrarse a alguien es tener que aprender a vivir sin esa persona.»"
        },
        pt: {
            numero: "LIVRO II",
            titulo: "Depois de dezembro",
            fecha: "A CONTINUAÇÃO • NOVOS CAMINHOS",
            descripcion: "O tempo acabou e dezembro ficou para trás. Jenna tenta reconstruir sua vida e seguir em frente após a despedida, enfrentando as lembranças e a realidade da distância. No entanto, quando os sentimentos são tão fortes, esquecer não é uma opção tão simples.",
            frase: "«O pior de se acostumar com alguém é ter que aprender a viver sem essa pessoa.»"
        },
        gradientePortada: "linear-gradient(180deg, #6a0572 0%, #c850c0 52%, #ffcc70 100%)",
        gradienteHero: "linear-gradient(180deg, #5b0e63 0%, #c850c0 50%, #ff9a8b 100%)",
        fondoSitio: "#f9e3f4",
        fondoTarjeta: "linear-gradient(135deg, #f7cef0 0%, #eeb8e5 100%)",
        fondoTabInactivo: "#fcebf8",
        colorAcento: "#c850c0",
        colorSecundario: "#f472b6",
        gradienteCita: "linear-gradient(90deg, #f472b6, #e879f9)"
    },
    {
        es: {
            numero: "LIBRO III",
            titulo: "Tres meses",
            fecha: "EL DESENLACE • LA PERSPECTIVA DE JACK",
            descripcion: "Esta vez la historia se cuenta desde los ojos de Jack Ross. Descubre qué pasaba realmente por su mente durante esos tres meses decisivos, sus miedos, sus secretos y todo lo que estuvo dispuesto a hacer para proteger lo que más le importaba.",
            frase: "«No elegí enamorarme, pero sí elegí quedarme.»"
        },
        pt: {
            numero: "LIVRO III",
            titulo: "Três meses",
            fecha: "O DESFECHO • A PERSPECTIVA DE JACK",
            descripcion: "Desta vez a história é contada pelos olhos de Jack Ross. Descubra o que realmente passava pela sua mente durante esses três meses decisivos, seus medos, seus segredos e tudo o que ele esteve disposto a fazer para proteger o que mais importava.",
            frase: "«Não escolhi me apaixonar, mas escolhi ficar.»"
        },
        gradientePortada: "linear-gradient(180deg, #131c31 0%, #2b5876 52%, #ff9a5a 100%)",
        gradienteHero: "linear-gradient(180deg, #0f172a 0%, #2b5876 52%, #f59e0b 100%)",
        fondoSitio: "#dfeaf7",
        fondoTarjeta: "linear-gradient(135deg, #cde0f5 0%, #b5d1f0 100%)",
        fondoTabInactivo: "#ebf3fc",
        colorAcento: "#2b5876",
        colorSecundario: "#60a5fa",
        gradienteCita: "linear-gradient(90deg, #93c5fd, #60a5fa)"
    }
];

const personajes = {
    jenna: {
        nombre: "Jenna Brown",
        emoji: "✨",
        colorBarra: "linear-gradient(90deg, #e63946, #ff6b35)",
        es: {
            rol: "★ PROTAGONISTA • NIVEL 01",
            biografia: "Jenna inicia su primer año de universidad convencida de que su vida está completamente definida junto a su novio de toda la vida. Al mudarse lejos de casa y cruzarse con Jack Ross, descubre facetas de sí misma que no conocía. A lo largo de la historia aprende a escuchar lo que realmente siente y a elegir su propio camino sin miedo.",
            rasgos: ["Leal", "Espontánea", "Valiente"],
            frases: [
                "«A veces, el tiempo no se mide en horas, sino en momentos.»",
                "«No puedes controlar de quién te enamoras, por mucho que intentes ponerle una fecha límite.»",
                "«Estaba intentando ser la persona que todos esperaban, menos la que yo quería ser.»"
            ]
        },
        pt: {
            rol: "★ PROTAGONISTA • NÍVEL 01",
            biografia: "Jenna começa seu primeiro ano na faculdade convencida de que sua vida já está totalmente definida ao lado de seu namorado de longa data. Ao se mudar para longe de casa e cruzar com Jack Ross, descobre lados de si mesma que não conhecia. Ao longo da história aprende a ouvir o que realmente sente e a escolher seu próprio caminho sem medo.",
            rasgos: ["Leal", "Espontânea", "Corajosa"],
            frases: [
                "«Às vezes, o tempo não se mede em horas, mas em momentos.»",
                "«Você não pode controlar por quem se apaixona, por mais que tente colocar um prazo.»",
                "«Eu estava tentando ser a pessoa que todos esperavam, menos a que eu queria ser.»"
            ]
        }
    },
    jack: {
        nombre: "Jack Ross",
        emoji: "⚡",
        colorBarra: "linear-gradient(90deg, #131c31, #2b5876)",
        es: {
            rol: "⚡ PROTAGONISTA • NIVEL 02",
            biografia: "Reservado, irónico y con una coraza emocional construida por heridas del pasado. Jack evita los vínculos porque cree que todo lo bueno termina yéndose. Cuando Jenna entra en su vida, todas sus reglas se rompen. En 'Tres meses' se revela su verdadero interior: un chico capaz de cualquier sacrificio por proteger a quienes quiere.",
            rasgos: ["Protector", "Sarcástico", "Fiel"],
            frases: [
                "«No elegí enamorarme, pero sí elegí quedarme.»",
                "«Contigo es la primera vez que no quiero mirar el reloj.»",
                "«Si tuviera que volver a pasar por todo sabiendo cómo termina, volvería a elegirte sin dudarlo.»"
            ]
        },
        pt: {
            rol: "⚡ PROTAGONISTA • NÍVEL 02",
            biografia: "Reservado, irônico e com uma armadura emocional construída por feridas do passado. Jack evita vínculos porque acredita que tudo o que é bom acaba indo embora. Quando Jenna entra em sua vida, todas as suas regras se quebram. Em 'Três meses' revela-se seu verdadeiro interior: um garoto capaz de qualquer sacrifício para proteger quem ama.",
            rasgos: ["Protetor", "Sarcástico", "Fiel"],
            frases: [
                "«Não escolhi me apaixonar, mas escolhi ficar.»",
                "«Com você é a primeira vez que não quero olhar para o relógio.»",
                "«Se eu tivesse que passar por tudo de novo sabendo como termina, escolheria você sem hesitar.»"
            ]
        }
    },
    sue: {
        nombre: "Sue",
        emoji: "💫",
        colorBarra: "linear-gradient(90deg, #c850c0, #ff5c9d)",
        es: {
            rol: "💫 COPROTAGONISTA • ALIADA CLAVE",
            biografia: "Compañera de habitación de Jenna en la residencia y gran amiga de Jack. Extrovertida, directa y con una intuición infalible, Sue nota desde el primer segundo la conexión entre Jenna y Jack. Es el apoyo incondicional de Jenna en la universidad y la voz de la verdad cuando las dudas la bloquean.",
            rasgos: ["Directa", "Incondicional", "Carismática"],
            frases: [
                "«Puedes engañar a todo el mundo si quieres, Jenna, pero a mí no me engañas cuando lo miras.»",
                "«Las mejores amigas están para decirte la verdad, incluso cuando no quieres escucharla.»",
                "«La universidad se trata de descubrir quién eres cuando nadie te mira.»"
            ]
        },
        pt: {
            rol: "💫 COADJUVANTE • ALIADA-CHAVE",
            biografia: "Colega de quarto de Jenna na residência universitária e grande amiga de Jack. Extrovertida, direta e com uma intuição infalível, Sue percebe desde o primeiro segundo a conexão entre Jenna e Jack. É o apoio incondicional de Jenna na faculdade e a voz da verdade quando as dúvidas a bloqueiam.",
            rasgos: ["Direta", "Incondicional", "Carismática"],
            frases: [
                "«Você pode enganar o mundo inteiro se quiser, Jenna, mas a mim você não engana quando olha para ele.»",
                "«As melhores amigas existem para dizer a verdade, mesmo quando você não quer ouvir.»",
                "«A faculdade serve para descobrir quem você é quando ninguém está olhando.»"
            ]
        }
    },
    will: {
        nombre: "Will",
        emoji: "🔥",
        colorBarra: "linear-gradient(90deg, #ff512f, #ffbe3b)",
        es: {
            rol: "🔥 COPROTAGONISTA • MEJOR AMIGO",
            biografia: "El mejor amigo de Jack y el encargado de aliviar la tensión en los momentos más difíciles con su sentido del humor. Aunque parece despreocupado, Will es muy observador y conoce las cicatrices de Jack mejor que nadie. Su lealtad hacia el grupo es total cuando los secretos salen a la luz.",
            rasgos: ["Divertido", "Observador", "Noble"],
            frases: [
                "«Llevo años conociendo a Jack y nunca lo había visto perder el control por nadie... hasta que llegaste tú.»",
                "«Hacerse el gracioso a veces es la única forma de ocultar que estás preocupado.»",
                "«Los amigos de verdad no te dejan caer cuando todo se pone difícil.»"
            ]
        },
        pt: {
            rol: "🔥 COADJUVANTE • MELHOR AMIGO",
            biografia: "O melhor amigo de Jack e o responsável por aliviar a tensão nos momentos mais difíceis com seu senso de humor. Embora pareça despreocupado, Will é muito observador e conhece as cicatrizes de Jack melhor do que ninguém. Sua lealdade ao grupo é total quando os segredos vêm à tona.",
            rasgos: ["Divertido", "Observador", "Nobre"],
            frases: [
                "«Conheço o Jack há anos e nunca o vi perder o controle por ninguém... até você chegar.»",
                "«Fazer piada às vezes é a única forma de esconder que você está preocupado.»",
                "«Amigos de verdade não deixam você cair quando tudo fica difícil.»"
            ]
        }
    },
    mike: {
        nombre: "Mike",
        emoji: "🌙",
        colorBarra: "linear-gradient(90deg, #1e293b, #4f46e5)",
        es: {
            rol: "🌙 COPROTAGONISTA • PIEZA CLAVE",
            biografia: "Parte fundamental del círculo cercano de Jack y Will. De carácter más sereno y analítico, su presencia resulta decisiva en los giros más tensos de la trilogía. Sus decisiones y su historia ayudan a entender el pasado de Jack y el peso de guardar silencio.",
            rasgos: ["Sereno", "Analítico", "Confiable"],
            frases: [
                "«Guardar secretos para proteger a alguien casi siempre termina doliendo más que la verdad.»",
                "«No siempre puedes salvar a todos, pero puedes estar ahí cuando decidan levantarse.»",
                "«El pasado solo te define si dejas que decida tu futuro.»"
            ]
        },
        pt: {
            rol: "🌙 COADJUVANTE • PEÇA-CHAVE",
            biografia: "Parte fundamental do círculo próximo de Jack e Will. De personalidade mais serena e analítica, sua presença é decisiva nas reviravoltas mais tensas da trilogia. Suas decisões e sua história ajudam a entender o passado de Jack e o peso de guardar silêncio.",
            rasgos: ["Sereno", "Analítico", "Confiável"],
            frases: [
                "«Guardar segredos para proteger alguém quase sempre acaba doendo mais do que a verdade.»",
                "«Nem sempre você pode salvar todo mundo, mas pode estar lá quando decidirem se levantar.»",
                "«O passado só define você se você deixar que ele decida o seu futuro.»"
            ]
        }
    },
    monty: {
        nombre: "Monty",
        emoji: "⏳",
        colorBarra: "linear-gradient(90deg, #d97706, #fbbf24)",
        es: {
            rol: "⏳ COPROTAGONISTA • PUNTO DE PARTIDA",
            biografia: "El novio de toda la vida de Jenna antes de empezar la universidad. Representa la rutina conocida y el plan de vida tradicional que Jenna creía querer. La distancia y el paso del tiempo ponen a prueba su relación, mostrando que crecer por caminos distintos a veces es inevitable.",
            rasgos: ["Tradicional", "Distancia", "Pasado"],
            frases: [
                "«Prometimos que la distancia no iba a cambiar nada entre nosotros.»",
                "«A veces das por sentado que alguien siempre va a estar en el mismo lugar esperando.»",
                "«Cuando dos personas cambian por separado, volver al inicio ya no es posible.»"
            ]
        },
        pt: {
            rol: "⏳ COADJUVANTE • PONTO DE PARTIDA",
            biografia: "O namorado de longa data de Jenna antes de ela começar a faculdade. Representa a rotina conhecida e o plano de vida tradicional que Jenna acreditava querer. A distância e o passar do tempo colocam o relacionamento à prova, mostrando que crescer por caminhos diferentes às vezes é inevitável.",
            rasgos: ["Tradicional", "Distância", "Passado"],
            frases: [
                "«Prometemos que a distância não mudaria nada entre nós.»",
                "«Às vezes você dá como certo que alguém sempre vai estar no mesmo lugar esperando.»",
                "«Quando duas pessoas mudam separadamente, voltar ao início já não é possível.»"
            ]
        }
    }
};

function mostrarLibro(indice) {
    libroActual = indice;
    const libro = libros[indice];
    const botones = document.querySelectorAll('.tab-btn');

    botones.forEach((btn, i) => {
        btn.classList.toggle('active', i === indice);
        btn.style.background = (i === indice) ? libro.gradientePortada : libro.fondoTabInactivo;
    });

    const infoIdioma = libro[idiomaActual];
    const display = document.getElementById('book-display');
    const cover = document.getElementById('book-cover');
    const hero = document.querySelector('.hero');
    const quote = document.getElementById('book-quote');

    document.getElementById('book-num').textContent = infoIdioma.numero;
    document.getElementById('cover-title').textContent = infoIdioma.titulo;
    document.getElementById('book-title').textContent = infoIdioma.titulo;
    document.getElementById('book-date').textContent = infoIdioma.fecha;
    document.getElementById('book-desc').textContent = infoIdioma.descripcion;
    quote.textContent = infoIdioma.frase;

    cover.style.background = libro.gradientePortada;
    hero.style.background = libro.gradienteHero;
    document.body.style.backgroundColor = libro.fondoSitio;
    display.style.background = libro.fondoTarjeta;
    quote.style.background = libro.gradienteCita;

    document.querySelectorAll('.tag-pill:not(.pink-pill)').forEach(pill => {
        pill.style.backgroundColor = libro.colorSecundario;
    });
    document.querySelectorAll('.pink-pill').forEach(pill => {
        pill.style.backgroundColor = libro.colorAcento;
    });

    document.querySelector('.shape-1').style.color = libro.colorAcento;
    document.querySelector('.shape-2').style.color = libro.colorSecundario;
}

function abrirPersonaje(id) {
    const p = personajes[id];
    if (!p) return;
    personajeActual = id;

    const infoIdioma = p[idiomaActual];
    const overlay = document.getElementById('game-popup-overlay');
    const titlebar = document.getElementById('game-titlebar');

    document.getElementById('popup-role').textContent = infoIdioma.rol;
    document.getElementById('popup-emoji').textContent = p.emoji;
    document.getElementById('popup-name').textContent = p.nombre;
    document.getElementById('popup-bio').textContent = infoIdioma.biografia;
    titlebar.style.background = p.colorBarra;

    document.getElementById('popup-traits').innerHTML = infoIdioma.rasgos
        .map(r => `<span class="game-trait">✦ ${r}</span>`)
        .join('');

    document.getElementById('popup-quotes').innerHTML = infoIdioma.frases
        .map(f => `<div class="game-quote-card">${f}</div>`)
        .join('');

    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function cerrarPersonaje() {
    personajeActual = null;
    document.getElementById('game-popup-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function alternarIdioma() {
    idiomaActual = idiomaActual === 'es' ? 'pt' : 'es';
    document.documentElement.lang = idiomaActual;

    const t = textosUI[idiomaActual];

    document.getElementById('lang-toggle-btn').textContent = t.botonIdioma;
    document.getElementById('ui-badge').textContent = t.badge;
    document.getElementById('ui-hero-title').innerHTML = t.heroTitle;
    document.getElementById('ui-hero-sub').textContent = t.heroSub;
    document.getElementById('ui-hero-btn').textContent = t.heroBtn;
    document.getElementById('ui-intro-pill').textContent = t.introPill;
    document.getElementById('ui-intro-title').textContent = t.introTitle;
    document.getElementById('ui-intro-desc').textContent = t.introDesc;

    document.getElementById('tab-0').textContent = t.tabs[0];
    document.getElementById('tab-1').textContent = t.tabs[1];
    document.getElementById('tab-2').textContent = t.tabs[2];

    document.getElementById('ui-protag-pill').textContent = t.protagPill;
    document.getElementById('ui-protag-title').textContent = t.protagTitle;
    document.getElementById('ui-click-hint').textContent = t.clickHint;
    document.getElementById('ui-coprotag-pill').textContent = t.coprotagPill;
    document.getElementById('ui-coprotag-title').textContent = t.coprotagTitle;

    for (let i = 0; i < 6; i++) {
        document.getElementById(`card-more-${i}`).textContent = t.cardMore;
    }

    Object.keys(t.cardsDesc).forEach(key => {
        document.getElementById(`card-desc-${key}`).textContent = t.cardsDesc[key];
    });

    document.getElementById('ui-popup-bio-tag').textContent = t.popupBioTag;
    document.getElementById('ui-popup-quotes-tag').textContent = t.popupQuotesTag;
    document.getElementById('ui-popup-switch').textContent = t.popupSwitch;
    document.getElementById('ui-footer').innerHTML = t.footer;

    mostrarLibro(libroActual);
    if (personajeActual) {
        abrirPersonaje(personajeActual);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-toggle-btn').addEventListener('click', alternarIdioma);

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            mostrarLibro(Number(btn.dataset.libro));
        });
    });

    document.querySelectorAll('.char-card').forEach(card => {
        card.addEventListener('click', () => {
            abrirPersonaje(card.dataset.personaje);
        });
    });

    document.querySelectorAll('.switch-buttons button').forEach(btn => {
        btn.addEventListener('click', () => {
            abrirPersonaje(btn.dataset.switch);
        });
    });

    document.getElementById('popup-close-btn').addEventListener('click', cerrarPersonaje);

    document.getElementById('game-popup-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'game-popup-overlay') cerrarPersonaje();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') cerrarPersonaje();
    });

    mostrarLibro(0);
});