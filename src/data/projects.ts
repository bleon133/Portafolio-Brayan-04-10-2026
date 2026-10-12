import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'insulinavr',
    title: 'InsulinaVR',
    category: 'Realidad virtual',
    featured: true,
    status: 'En desarrollo, 68 % de avance',
    origin: 'Proyecto de grado, UNAB',
    year: '2026',
    publishedAt: '2026-10-11',
    description:
      'Prototipo de realidad virtual para Android y Google Cardboard que enseña a adultos con diabetes tipo 2 la técnica de insulinización con lapicero, el almacenamiento y el desecho seguro. Se recorre solo con la mirada.',
    sections: [
      {
        id: 'problema',
        title: 'Problema',
        blocks: [
          {
            type: 'paragraph',
            text: 'En la diabetes tipo 2 la aplicación de la insulina recae en el propio paciente. Una técnica incorrecta, no rotar los sitios de inyección o guardar mal el medicamento reducen la eficacia del tratamiento y favorecen complicaciones como la lipohipertrofia.',
          },
        ],
      },
      {
        id: 'caracteristicas',
        title: 'Qué incluye',
        blocks: [
          {
            type: 'list',
            items: [
              'Cinco módulos con 60 pasos narrados y subtitulados: extracción e inspección, preparación e higiene, mapeo, rotación y asepsia, técnica de inyección, y desecho seguro y conservación.',
              'Una vivienda virtual con cuatro espacios (cocina, sala, vestíbulo y sala de estudio), con animaciones 3D que acompañan cada paso.',
              'Un examen por módulo con retroalimentación inmediata y puntaje; se aprueba con 60 %.',
              'Árbol de avances con tres estados (hecho, disponible y bloqueado) y desbloqueo por prerrequisitos.',
              'Botonera estándar en cada paso: anterior, repetir, siguiente, salir y finalizar.',
            ],
          },
        ],
      },
      {
        id: 'decisiones',
        title: 'Decisiones técnicas',
        blocks: [
          {
            type: 'list',
            items: [
              'Arquitectura guiada por datos: el contenido, el orden, el audio y las preguntas viven en ScriptableObjects, así el equipo de salud puede ajustar textos sin programar.',
              'Sistemas desacoplados por eventos, con datos de contenido separados de la escena.',
              'Interacción solo con la mirada (1.5 s en botones y 2.5 s para salir) y teletransporte suavizado con viñeta de confort para evitar el mareo.',
              'Subtítulos cortos y estados que se comunican con color y texto, pensando en pacientes con posibles alteraciones visuales.',
              'El progreso se guarda en un archivo JSON dentro del dispositivo, con respaldo y recuperación si el archivo se daña. No hay nube ni datos personales (Ley 1581 de 2012).',
            ],
          },
        ],
      },
      {
        id: 'resultado',
        title: 'Resultado',
        blocks: [
          {
            type: 'paragraph',
            text: 'Al 1 de octubre de 2026 el avance ponderado era del 68 %, por encima del 60 % exigido para la entrega. Se ejecutaron 35 pruebas de verificación y se corrigieron 15 defectos. Faltan el tutorial, la pantalla de puntuaciones, más preguntas por examen y la validación con médicos de la Fundación Clínica de Floridablanca.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Autores', value: 'Brayan Steven León Martinez y Santiago Cardona Prada' },
      { label: 'Director', value: 'Leonardo Stiven Pardo Niño' },
    ],
    stack: ['Unity 2022.3 LTS', 'C#', 'Google Cardboard XR', 'URP', 'Android', 'ScriptableObjects'],
    image: '/projects/insulinavr/cocina.webp',
    links: [],
    gallery: [
      {
        src: '/projects/insulinavr/cocina.webp',
        caption: 'La cocina, donde se desarrollan los módulos. Los orbes amarillos son puntos de teletransporte hacia la zona de cada uno.',
      },
      {
        src: '/projects/insulinavr/vivienda-vista-superior.webp',
        caption: 'Vista superior de la vivienda virtual: cocina, sala, vestíbulo y sala de estudio, con sus puntos de teletransporte.',
      },
      {
        src: '/projects/insulinavr/paso-modulo-1.webp',
        caption: 'Paso 1 del módulo 1. La botonera aparece junto a la nevera, donde ocurre la animación.',
      },
      {
        src: '/projects/insulinavr/botonera.webp',
        caption: 'Botonera estándar en un primer paso, un paso intermedio y el último.',
      },
      {
        src: '/projects/insulinavr/teletransporte.webp',
        caption: 'Puntos de teletransporte con un color por cuarto. Al mirarlos crecen y se aclaran.',
      },
      {
        src: '/projects/insulinavr/arbol-progreso.webp',
        caption: 'Árbol de avances: cada módulo, examen y paso aparece como hecho, disponible o bloqueado.',
      },
      {
        src: '/projects/insulinavr/selector-examenes.webp',
        caption: 'Selector de exámenes en la sala de estudio, con el estado y el mejor puntaje de cada uno.',
      },
      {
        src: '/projects/insulinavr/examen-respuesta.webp',
        caption: 'Tablero de examen tras una respuesta incorrecta: la elegida se marca en rojo y la correcta en verde.',
      },
    ],
  },
  {
    slug: 'sistema-vigilancia',
    title: 'Sistema para empresa de vigilancia',
    category: 'Web',
    featured: false,
    origin: 'Devs Technology',
    publishedAt: '2025-09-01',
    role: 'Participé en gran parte del desarrollo.',
    description:
      'Plataforma para gestionar usuarios, clientes y puestos de trabajo. Programa turnos y rondas, controla armas y mapas, y guarda historiales, alertas, nómina, métricas, copias de seguridad y bitácora.',
    stack: ['Spring Boot', 'Java', 'Bootstrap', 'Thymeleaf', 'MongoDB', 'WebSocket', 'Leaflet', 'jQuery'],
    image: '/projects/sistema-vigilancia/mapa.webp',
    links: [],
    gallery: [
      {
        src: '/projects/sistema-vigilancia/usuarios.webp',
        caption:
          'Listado de usuarios del sistema. Se pueden editar, cambiar la contraseña, activar o inactivar y crear nuevos usuarios.',
      },
      {
        src: '/projects/sistema-vigilancia/clientes.webp',
        caption:
          'Edición de un cliente con sus campos y la imagen que lo representa. Permite exportar todos los clientes de una vez.',
      },
      {
        src: '/projects/sistema-vigilancia/mapa.webp',
        caption: 'Mapa de puestos con la ubicación de cada puesto de trabajo y filtros en la parte superior.',
      },
      {
        src: '/projects/sistema-vigilancia/armas.webp',
        caption: 'Registro de armas, con la opción de trasladarlas a otro puesto de trabajo una vez creadas.',
      },
      {
        src: '/projects/sistema-vigilancia/turnos.webp',
        caption:
          'Programación de turnos de distintos tipos con asignación de personal. También permite registrar novedades y reemplazos.',
      },
      {
        src: '/projects/sistema-vigilancia/ronda.webp',
        caption: 'Configuración de las rondas que hacen los vigilantes, con geocerca y puntos sobre el mapa.',
      },
      {
        src: '/projects/sistema-vigilancia/transferencia.webp',
        caption: 'Historial de las transferencias de turno entre vigilantes.',
      },
      {
        src: '/projects/sistema-vigilancia/bitacora.webp',
        caption: 'Bitácora con el registro de lo que hacen los usuarios dentro del sistema.',
      },
    ],
  },
  {
    slug: 'app-vigilantes',
    title: 'Aplicación para control de vigilantes',
    category: 'Móvil',
    featured: false,
    origin: 'Devs Technology',
    publishedAt: '2025-09-01',
    description:
      'App móvil multiplataforma para la gestión operativa de vigilantes. Permite consultar y hacer transferencias de turno, ver la programación asignada, registrar minutas de novedades y apoyar las revistas de puestos que hacen los supervisores.',
    stack: ['Android Studio', 'Kotlin Multiplatform'],
    image: '/projects/app-vigilantes/portada.webp',
    links: [],
    gallery: [
      {
        src: '/projects/app-vigilantes/inicio.webp',
        caption:
          'Pantalla principal. Un temporizador muestra cuánto falta para el siguiente turno y desde ahí se llega a las rondas y al estado de los turnos.',
      },
      {
        src: '/projects/app-vigilantes/novedades.webp',
        caption: 'Formulario para reportar novedades del puesto de trabajo, con registro de incidencias y eventos.',
      },
      { src: '/projects/app-vigilantes/turnos.webp', caption: 'Calendario con los turnos asignados al vigilante.' },
    ],
  },
  {
    slug: 'devs-tech',
    title: 'Devs Tech',
    category: 'Web',
    featured: false,
    origin: 'Devs Technology',
    publishedAt: '2025-09-01',
    description:
      'Sitio corporativo de Devs Technology. Escribí el código de la página a partir del prototipo en Figma que me entregó la empresa.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'jQuery', 'Three.js', 'Figma'],
    image: '/projects/devs-tech/inicio.webp',
    links: [{ label: 'Ver sitio', href: 'https://d3vs.tech/' }],
    mediaIdeas: [
      {
        title: '(Propuesta) Captura de la página de inicio del sitio',
        caption: 'Vista propuesta de la portada del sitio corporativo, reemplazable por una captura real de d3vs.tech.',
      },
      {
        title: '(Propuesta) Captura del efecto Three.js en el sitio',
        caption: 'Ilustración propuesta del elemento interactivo 3D implementado con Three.js en el sitio, para reemplazar por una captura real.',
      },
      {
        title: '(Propuesta) Comparativa prototipo Figma → sitio implementado',
        caption: 'Montaje propuesto que muestre el prototipo original en Figma junto al sitio final implementado, reemplazable por una composición real.',
      },
    ],
  },
  {
    slug: 'bgapp',
    title: 'BGApp',
    category: 'Web y móvil',
    featured: false,
    publishedAt: '2025-05-28',
    description:
      'Plataforma de turismo en Bucaramanga con rutas, mapas interactivos y reservas. Incluye versión móvil offline y online con geolocalización y notificaciones.',
    stack: ['Spring Boot', 'Kotlin', 'MongoDB', 'Bootstrap'],
    image: '/projects/bgapp/portada.webp',
    links: [
      { label: 'Código web', href: 'https://github.com/bleon133/BgAppWeb' },
      { label: 'Código móvil', href: 'https://github.com/bleon133/BgAppApp' },
    ],
    mediaIdeas: [
      {
        title: '(Propuesta) Captura del mapa interactivo de rutas turísticas',
        caption: 'Vista propuesta del mapa con rutas y puntos de interés en Bucaramanga, reemplazable por una captura real de la aplicación.',
      },
      {
        title: '(Propuesta) Captura de la pantalla de reservas',
        caption: 'Ilustración propuesta del formulario de reservas de experiencias turísticas, para reemplazar por una captura real de la interfaz.',
      },
      {
        title: '(Propuesta) Captura del modo offline en el móvil',
        caption: 'Captura propuesta del modo sin conexión mostrando las rutas almacenadas localmente, reemplazable por una captura real del app en Kotlin.',
      },
    ],
  },
  {
    slug: 'meditraz',
    title: 'Meditraz',
    category: 'Web',
    featured: false,
    origin: 'Proyecto académico',
    year: '2022',
    publishedAt: '2023-02-09',
    description:
      'Prototipo para el registro y la trazabilidad de medicamentos: inventario, escaneo de códigos y alertas de caducidad.',
    sections: [
      {
        id: 'resumen',
        title: 'Resumen',
        blocks: [
          {
            type: 'paragraph',
            text: 'Sistema web con monitoreo por código de barras, inventario digital, alertas de caducidad y control del transporte de fármacos. Se publicó como artículo de investigación en el repositorio institucional de la UNAB.',
          },
        ],
      },
    ],
    mediaIdeas: [
      {
        title: '(Propuesta) Captura del inventario digital de medicamentos',
        caption: 'Vista propuesta del módulo de inventario con la lista de fármacos y sus códigos de barras, reemplazable por una captura real del prototipo Angular.',
      },
      {
        title: '(Propuesta) Captura de alerta de caducidad',
        caption: 'Ilustración propuesta del sistema de alertas que notifica sobre medicamentos próximos a vencer, reemplazable por una captura real de la interfaz.',
      },
      {
        title: '(Propuesta) Diagrama de flujo de trazabilidad',
        caption: 'Esquema propuesto que muestre el recorrido trazable de un medicamento desde el ingreso hasta la alerta de caducidad, para reemplazar por un diagrama real si se desea.',
      },
    ],
    stack: ['Angular', 'ASP.NET Core', 'SQL Server'],
    image: '/projects/meditraz/portada.webp',
    links: [
      { label: 'Código', href: 'https://github.com/bleon133/Meditraz' },
      { label: 'Video', href: 'https://youtu.be/e8V4vXuJ9jc' },
      { label: 'Artículo', href: 'https://repository.unab.edu.co/bitstream/handle/20.500.12749/20899' },
    ],
  },
  {
    slug: 'inventario-articulos',
    title: 'Sistema de gestión de inventario',
    category: 'Escritorio',
    featured: false,
    origin: 'Proyecto académico',
    year: '2026',
    publishedAt: '2026-01-01',
    description:
      'Sistema CRUD de artículos con código de barras, stock mínimo y precios, más proveedores y clasificaciones. Ningún artículo queda sin proveedor ni clasificación.',
    sections: [
      {
        id: 'caracteristicas',
        title: 'Qué incluye',
        blocks: [
          {
            type: 'list',
            items: [
              'Web Services ASMX como capa de servicios desacoplada para crear, editar, eliminar y consultar cada entidad.',
              'Consultas por código de barras, precio, stock mínimo y proveedor.',
              'Kits y promociones con vigencia, y relación muchos a muchos entre artículos y proveedores.',
              'Dashboard de métricas de inventario consultadas por Web Service.',
            ],
          },
        ],
      },
    ],
    mediaIdeas: [
      {
        title: '(Propuesta) Captura del CRUD de artículos con código de barras',
        caption: 'Vista propuesta del formulario de creación/edición de artículos con campos de código de barras y stock mínimo, reemplazable por una captura real de Windows Forms.',
      },
      {
        title: '(Propuesta) Captura del dashboard de métricas',
        caption: 'Ilustración propuesta del panel de métricas de inventario mostrando los KPIs consultados por Web Service, para reemplazar por una captura real.',
      },
      {
        title: '(Propuesta) Diagrama de la arquitectura ASMX',
        caption: 'Esquema propuesto de la capa de Web Services ASMX desacoplada, reemplazable por un diagrama de arquitectura real.',
      },
    ],
    stack: ['.NET (C#)', 'ASP.NET Web Services (ASMX)', 'Windows Forms', 'SQL Server', 'Entity Framework'],
    links: [],
  },
  {
    slug: 'perfiles-roles',
    title: 'Sistema web de perfiles y roles',
    category: 'Web',
    featured: false,
    origin: 'Proyecto académico',
    year: '2026',
    publishedAt: '2026-01-01',
    description:
      'Sistema web CRUD de perfiles de usuario, direcciones, teléfonos y roles, con autenticación contra base de datos.',
    sections: [
      {
        id: 'caracteristicas',
        title: 'Qué incluye',
        blocks: [
          {
            type: 'list',
            items: [
              'Web API REST en ASP.NET con control de acceso basado en roles.',
              'Interfaz responsive con Bootstrap y validaciones en JavaScript.',
              'Publicado en un servidor web externo (somee.com).',
            ],
          },
        ],
      },
    ],
    mediaIdeas: [
      {
        title: '(Propuesta) Captura del CRUD de perfiles y roles',
        caption: 'Vista propuesta de la interfaz de gestión de roles con asignación de permisos, reemplazable por una captura real de la aplicación ASP.NET.',
      },
      {
        title: '(Propuesta) Captura de autenticación con login',
        caption: 'Ilustración propuesta del formulario de autenticación contra base de datos, para reemplazar por una captura real de la interfaz.',
      },
      {
        title: '(Propuesta) Diagrama de la API REST con roles',
        caption: 'Esquema propuesto de los endpoints REST y el control de acceso basado en roles, reemplazable por un diagrama de arquitectura real.',
      },
    ],
    stack: ['ASP.NET', 'C#', 'SQL Server', 'Bootstrap', 'JavaScript', 'REST API'],
    links: [],
  },
  {
    slug: 'red-campus',
    title: 'Modelo de aseguramiento de infraestructura de red',
    category: 'Redes',
    featured: false,
    origin: 'Proyecto académico, UTTT',
    year: '2026',
    publishedAt: '2026-01-01',
    description:
      'Diseño de la red de un campus universitario de más de 17 edificios, con segmentación por VLANs, subnetting VLSM y topología jerárquica de tres capas (core, distribución y acceso).',
    sections: [
      {
        id: 'caracteristicas',
        title: 'Qué incluye',
        blocks: [
          {
            type: 'list',
            items: [
              'ACLs extendidas, autenticación centralizada AAA/RADIUS con FreeRADIUS y FreeIPA, y enrutamiento dinámico OSPF con redundancia en anillo.',
              'DMZ aislada con DHCP, DNS, Syslog, TFTP/FTP, VoIP SIP y Web.',
              'Modelo validado en GNS3 con routers Cisco y hosts Ubuntu.',
            ],
          },
        ],
      },
    ],
    mediaIdeas: [
      {
        title: '(Propuesta) Diagrama de topología jerárquica de tres capas',
        caption: 'Esquema propuesto de la topología core-distribución-acceso del campus, reemplazable por un diagrama real de GNS3.',
      },
      {
        title: '(Propuesta) Captura de la simulación en GNS3',
        caption: 'Vista propuesta de la topología completa en GNS3 con todos los routers Cisco y hosts Ubuntu conectados, para reemplazar por una captura real.',
      },
      {
        title: '(Propuesta) Diagrama de segmentación VLANs y VLSM',
        caption: 'Ilustración propuesta del esquema de VLANs y subnetting VLSM por edificio, reemplazable por un diagrama de direccionamiento real.',
      },
    ],
    stack: ['GNS3', 'Cisco IOS', 'VLANs', 'OSPF', 'ACLs', 'RADIUS', 'FreeIPA', 'Linux Ubuntu'],
    links: [],
  },
  {
    slug: 'renacer-vikingo',
    title: 'Renacer Vikingo',
    category: 'Videojuego',
    featured: true,
    origin: 'Proyecto académico en equipo (8 personas)',
    year: '2024',
    publishedAt: '2024-10-22',
    role: 'Líder de programación',
    description:
      'RPG 2D en pixel art donde un humilde Karl reconstruye su aldea vikinga tras la invasión de los Cruzados, sube de rango hasta Konungr y devuelve la esperanza a su pueblo.',
    highlights: ['Líder de programación', '8 personas', '12 escenas', '4 meses', 'Unity + C#'],
    facts: [
      { label: 'Género', value: 'RPG 2D de exploración, vista cenital' },
      { label: 'Motor', value: 'Unity 2021.3.37f1 (LTS)' },
      { label: 'Pipeline', value: 'URP 2D' },
      { label: 'Plataforma', value: 'Windows' },
      { label: 'Duración', value: '4 meses (junio a octubre)' },
      { label: 'Estado', value: 'Jugable de principio a fin' },
    ],
    sections: [
      {
        id: 'descripcion',
        title: 'Descripción',
        blocks: [
          {
            type: 'paragraph',
            text: 'Renacer Vikingo es un RPG 2D de exploración con vista cenital, ambientado en una Noruega medieval asediada. Tras la invasión de los Cruzados, la aldea vikinga queda en ruinas y el jugador —un humilde Karl, hombre libre— toma la responsabilidad de reconstruirla.',
          },
          {
            type: 'paragraph',
            text: 'El juego combina tres pilares: recolección de recursos (madera en el bosque, piedra y hierro en la mina y la cueva), reconstrucción de la aldea (nueve edificios con requisitos propios de materiales) y combate contra tres rangos de enemigos cruzados. A medida que avanza, el personaje sube de nivel y escala en la jerarquía vikinga: de Thrall a Konungr.',
          },
          {
            type: 'paragraph',
            text: 'El proyecto cuenta con doce escenas jugables, ciclo de día y noche, sistema de inventario, comercio en tres establecimientos, huerto con siembra y cosecha, misiones principales y secundarias, diálogos con ocho aldeanos y una cinemática de apertura en cinco láminas.',
          },
        ],
      },
      {
        id: 'mi-rol',
        title: 'Mi rol: liderazgo de programación',
        blocks: [
          {
            type: 'paragraph',
            text: 'Fui líder de programación del equipo. Me encargué de definir y construir el núcleo del sistema de juego, además de coordinar el trabajo técnico del equipo.',
          },
          {
            type: 'table',
            columns: ['Sistema', 'Qué hice', 'Archivos'],
            rows: [
              [
                'Movimiento del personaje',
                'Desplazamiento en cuatro direcciones con animación sincronizada, sprint con tiempo de recuperación y colisiones.',
                'Scripts/Personaje/PersonajeMovimiento.cs, PersonajeAnimaciones.cs',
              ],
              [
                'Combate del jugador',
                'Ataque cuerpo a cuerpo, generación de daño, retroalimentación visual y sonora del golpe, y muerte con reaparición.',
                'Scripts/Personaje/PersonajeAtaque.cs, PersonajeVida.cs, PersonajeFX.cs',
              ],
              [
                'Panel de estadísticas',
                'Panel de atributos que muestra daño, defensa, crítico, bloqueo y velocidad, todos derivados de los datos del personaje.',
                'Scripts/Personaje/PersonajeStats.cs, Editor/PersonajeStatsEditor.cs',
              ],
              [
                'Sistema de atributos',
                'Reparto de puntos entre Fuerza, Inteligencia y Destreza al subir de nivel, con bonificadores aplicados en tiempo real.',
                'Scripts/Personaje/Personaje.cs, Scripts/Extras/AtributoButton.cs',
              ],
              [
                'Inventario',
                'Mochila de 24 casillas con límite por pila, y acciones de usar, equipar y remover sobre cada objeto.',
                'Scripts/Inventario/*',
              ],
              [
                'Enemigos',
                'Integración del movimiento, la detección y el ataque de los enemigos con su sistema de animación.',
                'Scripts/Enemy/*',
              ],
            ],
          },
          {
            type: 'list',
            items: [
              'Definí el núcleo jugable sobre el que el resto del equipo construyó: movimiento, combate, estadísticas e inventario forman la base de todas las escenas.',
              'Coordiné la programación del equipo, distribuyendo el trabajo técnico y manteniendo la coherencia entre los sistemas que cada uno desarrollaba.',
              'Ensamblé e integré las escenas, uniendo el trabajo de arte y de sistemas en escenas funcionales y jugables, y resolviendo las dependencias entre componentes.',
              'Apoyé el diseño de personajes, colaborando con el equipo de arte en el movimiento, la animación y la respuesta en juego de los personajes.',
              'Establecí el patrón de datos del proyecto con ScriptableObjects, para que ítems, armas, diálogos y misiones se pudieran editar como assets sin tocar código.',
            ],
          },
        ],
      },
      {
        id: 'reto',
        title: 'Un reto técnico que resolví',
        blocks: [
          {
            type: 'paragraph',
            text: 'El sistema de estadísticas necesitaba ser editable sin recompilar. Lo resolví con un ScriptableObject de estadísticas más un editor propio (PersonajeStatsEditor.cs) que muestra el panel en el inspector y aplica los bonificadores por atributo automáticamente. Así el equipo de diseño podía equilibrar el personaje sin abrir el código, y el mismo asset servía para el jugador y los enemigos.',
          },
        ],
      },
      {
        id: 'otros-sistemas',
        title: 'Otros sistemas del juego',
        blocks: [
          {
            type: 'paragraph',
            text: 'Estos sistemas fueron trabajo en equipo y completan la escala del proyecto:',
          },
          {
            type: 'list',
            items: [
              'Ciclo de día y noche con sol, luna y antorchas.',
              'Sistema de diálogos con ocho aldeanos, cada uno con su historia.',
              'Misiones principales y secundarias con panel de seguimiento.',
              'Comercio en herrería, taberna y almacén.',
              'Huerto con ciclos de siembra y cosecha.',
              'Sistema de IA de enemigos por estados con ScriptableObjects.',
              'Cinemática de apertura y libro tutorial.',
            ],
          },
        ],
      },
      {
        id: 'stack',
        title: 'Stack técnico',
        blocks: [
          {
            type: 'table',
            columns: ['Área', 'Tecnología'],
            rows: [
              ['Motor', 'Unity 2021.3.37f1'],
              ['Render', 'Universal Render Pipeline (URP) 2D'],
              ['Lenguaje', 'C#'],
              ['Datos', 'ScriptableObjects'],
              ['UI', 'Unity UI + TextMeshPro'],
              ['Animación', 'Animation / Animator Controller'],
              ['Cinematografías', 'Unity Timeline'],
              ['Audio', 'AudioMixer con cuatro canales'],
              ['Tilemap', 'Tilemap 2D para los suelos'],
            ],
          },
        ],
      },
      {
        id: 'animaciones',
        title: 'Animaciones',
        blocks: [
          {
            type: 'paragraph',
            text: 'Sprites animados del juego. El protagonista caminando, en reposo y al morir; los enemigos cruzados atacando; y los aldeanos que dan vida a la aldea.',
          },
          {
            type: 'media',
            columns: 3,
            items: [
              { src: '/projects/renacer-vikingo/gifs/hakon-idle.gif', alt: 'El protagonista en reposo', label: 'Hakon, en reposo', caption: 'Animación idle' },
              { src: '/projects/renacer-vikingo/gifs/hakon-muerte.gif', alt: 'El protagonista al morir', label: 'Hakon, derrota', caption: 'Animación de muerte' },
              { src: '/projects/renacer-vikingo/gifs/hakon-caminar.gif', alt: 'El protagonista caminando en las cuatro direcciones', label: 'Hakon, el protagonista', caption: 'Caminar en las cuatro direcciones', span: 2 },
            ],
          },
          {
            type: 'media',
            columns: 3,
            items: [
              { src: '/projects/renacer-vikingo/gifs/cruzado-infanteria-ataque.gif', alt: 'Cruzado de infantería atacando', label: 'Cruzado de infantería', caption: 'Ataque cuerpo a cuerpo' },
              { src: '/projects/renacer-vikingo/gifs/cruzado-caballero-ataque.gif', alt: 'Cruzado caballero atacando', label: 'Cruzado caballero', caption: 'Ataque de rango mayor' },
              { src: '/projects/renacer-vikingo/gifs/arana-cueva.gif', alt: 'La araña de la cueva', label: 'Araña de la cueva', caption: 'Enemigo de la mina' },
            ],
          },
          {
            type: 'media',
            columns: 4,
            items: [
              { src: '/projects/renacer-vikingo/gifs/npc-thora.gif', alt: 'Thora, guía de introducción', label: 'Thora', caption: 'Guía de introducción' },
              { src: '/projects/renacer-vikingo/gifs/npc-asmund.gif', alt: 'Asmund, el sabio que reparte las misiones', label: 'Asmund', caption: 'Reparte las misiones' },
              { src: '/projects/renacer-vikingo/gifs/npc-freya.gif', alt: 'Freya, tabernera', label: 'Freya', caption: 'Tabernera' },
              { src: '/projects/renacer-vikingo/gifs/npc-bjorn.gif', alt: 'Bjorn, el herrero', label: 'Bjorn', caption: 'Herrero' },
              { src: '/projects/renacer-vikingo/gifs/npc-astrid.gif', alt: 'Astrid, la agricultora', label: 'Astrid', caption: 'Agricultora' },
              { src: '/projects/renacer-vikingo/gifs/npc-harald.gif', alt: 'Harald, de la cabaña', label: 'Harald', caption: 'De la cabaña' },
              { src: '/projects/renacer-vikingo/gifs/npc-sigurd.gif', alt: 'Sigurd, instructor de entrenamiento', label: 'Sigurd', caption: 'Entrenamiento' },
            ],
          },
        ],
      },
      {
        id: 'galeria',
        title: 'Galería del juego',
        blocks: [
          {
            type: 'gallery',
            images: [
              { src: '/projects/renacer-vikingo/01-aldea-hud.webp', caption: 'El personaje en la entrada de la aldea, con la interfaz completa: vida, maná, experiencia, monedas y accesos a inventario, atributos y misiones.' },
              { src: '/projects/renacer-vikingo/02-combate.webp', caption: 'Enfrentamiento cuerpo a cuerpo con el sistema de daño activo, la barra de vida bajando y los números de daño en pantalla.' },
              { src: '/projects/renacer-vikingo/13-noche.webp', caption: 'La aldea de noche: luna, cielo oscuro y las antorchas encendidas con su halo de luz.' },
              { src: '/projects/renacer-vikingo/03-panel-stats.webp', caption: 'Panel de Daño, Defensa, Crítico, Bloqueo y Velocidad, junto al reparto de puntos entre Fuerza, Inteligencia y Destreza.' },
              { src: '/projects/renacer-vikingo/04-inventario.webp', caption: 'La mochila de 24 casillas con las acciones de usar, equipar y remover objetos.' },
              { src: '/projects/renacer-vikingo/05-bosque.webp', caption: 'Zona de recolección de madera, con los troncos talados y un aldeano del poblado.' },
              { src: '/projects/renacer-vikingo/06-aldea-construida.webp', caption: 'La muralla de la aldea con sus dos torres y la puerta central.' },
              { src: '/projects/renacer-vikingo/07-almacen.webp', caption: 'El almacén con sus estanterías de recursos y la comerciante atendiendo el mostrador.' },
              { src: '/projects/renacer-vikingo/08-herreria.webp', caption: 'La forja, el yunque, el fuelle y las herramientas del herrero.' },
              { src: '/projects/renacer-vikingo/09-taberna.webp', caption: 'La taberna con sus mesas, barriles y la barra donde se rellena la cantimplora.' },
              { src: '/projects/renacer-vikingo/10-salon-comunal.webp', caption: 'El salón con las estatuas, los escudos y los braseros, donde se reparten las misiones.' },
              { src: '/projects/renacer-vikingo/11-manual.webp', caption: 'El manual del juego con sus cuatro secciones: personajes, interfaz, interacciones e historias.' },
              { src: '/projects/renacer-vikingo/12-cinematica.webp', caption: 'Una de las láminas narrativas de la cinemática, con el texto de la historia sobre la aldea.' },
            ],
          },
        ],
      },
    ],
    stack: ['Unity', 'C#', 'URP 2D', 'Pixel Art', 'ScriptableObjects'],
    image: '/projects/renacer-vikingo/portada.png',
    coverFit: 'contain',
    links: [{ label: 'Código', href: 'https://github.com/bleon133/vikingo' }],
  },
  {
    slug: 'hurontroll',
    title: 'HuronTroll',
    category: 'Videojuego',
    featured: true,
    origin: 'Global Game Jam 2024',
    year: '2024',
    publishedAt: '2024-01-28',
    role: 'Programación y ensamblado',
    description:
      'Juego de plataformas 2D en pixel art protagonizado por un hurón. Hecho en 48 horas para la Global Game Jam 2024 bajo el tema «Make Me Laugh».',
    highlights: ['Global Game Jam 2024', '48 horas', '4 personas', 'Unity + C#', 'Make Me Laugh'],
    facts: [
      { label: 'Género', value: 'Plataformas 2D' },
      { label: 'Motor', value: 'Unity 2022.3.4f1 (LTS)' },
      { label: 'Plataforma', value: 'Windows' },
      { label: 'Duración', value: '48 horas' },
      { label: 'Formato', value: 'Game jam en equipo (4 personas)' },
      { label: 'Tema de la jam', value: 'Make Me Laugh' },
      { label: 'Estado', value: 'Jugable de principio a fin' },
    ],
    sections: [
      {
        id: 'descripcion',
        title: 'Descripción',
        blocks: [
          {
            type: 'paragraph',
            text: 'HuronTroll es un plataformas 2D en pixel art desarrollado en 48 horas durante la Global Game Jam 2024. El jugador controla a un hurón que avanza por niveles saltando entre plataformas, esquivando fuego y pinchos, y recogiendo todo lo que encuentra.',
          },
          {
            type: 'paragraph',
            text: 'El juego abraza el tema de la jam —«Make Me Laugh»— sin complejos: los coleccionables son platos colombianos (arepa santanderiana, tamal y hormiga culona), la cinemática se cuenta sobre un tablero de corcho con doce memes reales pinchados, y la habilidad estrella del hurón es directamente hacer caca.',
          },
          {
            type: 'paragraph',
            text: 'Detrás del chiste hay un plataformas funcional: control con inercia, salto, agacharse para pasar por huecos, y un sistema de progresión que obliga a recoger al menos una llave y un item antes de abrir la puerta de nivel.',
          },
        ],
      },
      {
        id: 'mi-aporte',
        title: 'Mi aporte al proyecto',
        blocks: [
          {
            type: 'paragraph',
            text: 'Fui el encargado de la programación del juego y de parte del ensamblado en Unity. En 48 horas de jam, eso significó construir el núcleo jugable sobre el que se montó todo lo demás: el control del personaje, la recolección, el marcador, las colisiones y el flujo entre escenas.',
          },
        ],
      },
      {
        id: 'sistemas',
        title: 'Sistemas que programé',
        blocks: [
          {
            type: 'paragraph',
            text: 'Estos son los sistemas que hacen funcionar el juego:',
          },
          {
            type: 'table',
            columns: ['Sistema', 'Qué resuelve'],
            rows: [
              ['Control del personaje', 'Movimiento con inercia (SmoothDamp), salto, agacharse con detección de techo, y giro por inversión de escala.'],
              ['Marcador persistente', 'Singleton con DontDestroyOnLoad que mantiene la puntuación entre escenas y se reconecta a la UI en cada cambio.'],
              ['Coleccionables', 'Items y llaves por etiquetas, con contadores separados en pantalla.'],
              ['Puertas de nivel', 'La salida solo se abre con al menos una llave y un item recogidos.'],
              ['Mecánica cómica', 'El hurón hace caca con la tecla Z; el objeto se autodestruye a los 5 segundos.'],
              ['Victoria y derrota', 'Pantallas de Winner y Game Over con reinicio de nivel.'],
              ['Flujo de escenas', 'Navegación del menú, la cinemática y el paso entre niveles.'],
            ],
          },
        ],
      },
      {
        id: 'reto',
        title: 'Un detalle técnico que quiero destacar',
        blocks: [
          {
            type: 'paragraph',
            text: 'El marcador persistente (ControladorPuntos.cs) es el sistema mejor resuelto del proyecto. Mantiene la puntuación viva entre escenas con un Singleton y, como la interfaz sí se destruye al cambiar de escena, se resuscribe al evento sceneLoaded para reconectar sus referencias. Es justo el tipo de patrón que en una jam suele quedar a medias, y aquí está bien cerrado.',
          },
        ],
      },
      {
        id: 'ensamblado',
        title: 'El ensamblado',
        blocks: [
          {
            type: 'paragraph',
            text: 'Además de programar, me encargué de montar las escenas en Unity: unir los sistemas con el arte del equipo, colocar los prefabs y las colisiones en su sitio, y dejar el juego en un estado jugable de principio a fin. El resultado es un proyecto que se recorre completo, desde el menú hasta los créditos.',
          },
        ],
      },
      {
        id: 'nivel-inedito',
        title: 'Un nivel inédito',
        blocks: [
          {
            type: 'paragraph',
            text: 'El equipo alcanzó a producir arte para un tercer nivel ambientado dentro del tronco de un árbol, con su propio personaje: un ratón entronado. No llegó a integrarse en la build de la jam, así que se conserva aquí como muestra del trabajo que quedó fuera del alcance de las 48 horas.',
          },
          {
            type: 'media',
            columns: 2,
            items: [
              { src: '/projects/hurontroll/03-fondo-nivel3.webp', alt: 'Arte de fondo del nivel inédito, dentro del tronco de un árbol', label: 'El tronco', caption: 'Escenario del nivel inédito, dentro del tronco de un árbol.' },
              { src: '/projects/hurontroll/08-raton-trono.png', alt: 'Sprite del ratón entronado, personaje del nivel inédito', label: 'El ratón entronado', caption: 'Uno de los personajes del nivel inédito.' },
            ],
          },
        ],
      },
      {
        id: 'stack',
        title: 'Stack técnico',
        blocks: [
          {
            type: 'table',
            columns: ['Área', 'Tecnología'],
            rows: [
              ['Motor', 'Unity 2022.3.4f1'],
              ['Lenguaje', 'C#'],
              ['Física', 'Rigidbody2D, colliders y triggers'],
              ['Datos de UI', 'TextMeshPro'],
              ['Animación', 'Animation / Animator Controller'],
              ['Arte', 'Pixel art (hojas de sprites de 64×64)'],
              ['Control de versiones', 'Git y GitHub (4 colaboradores)'],
            ],
          },
        ],
      },
      {
        id: 'animaciones',
        title: 'Animaciones',
        blocks: [
          {
            type: 'paragraph',
            text: 'El hurón está animado con hojas de sprites de 64×64. Estas son sus animaciones y los elementos animados del escenario.',
          },
          {
            type: 'media',
            columns: 3,
            items: [
              { src: '/projects/hurontroll/gifs/huron-idle.gif', alt: 'El hurón en reposo', label: 'En reposo', caption: 'Animación idle' },
              { src: '/projects/hurontroll/gifs/huron-correr.gif', alt: 'El hurón corriendo', label: 'Corriendo', caption: 'Carrera con inercia' },
              { src: '/projects/hurontroll/gifs/huron-salto.gif', alt: 'El hurón saltando', label: 'Saltando', caption: 'Salto' },
              { src: '/projects/hurontroll/gifs/huron-agachado.gif', alt: 'El hurón agachado y avanzando', label: 'Agachado', caption: 'Para pasar por huecos' },
              { src: '/projects/hurontroll/gifs/huron-caida.gif', alt: 'El hurón cayendo', label: 'Cayendo', caption: 'Animación de caída' },
              { src: '/projects/hurontroll/gifs/huron-muerte.gif', alt: 'El hurón derrotado', label: 'Derrota', caption: 'Animación de muerte' },
            ],
          },
          {
            type: 'media',
            columns: 3,
            items: [
              { src: '/projects/hurontroll/gifs/elemento-fuego.gif', alt: 'El fuego animado, un peligro del escenario', label: 'Fuego', caption: 'Peligro del escenario' },
              { src: '/projects/hurontroll/gifs/elemento-chispa.gif', alt: 'Las chispas del escenario', label: 'Chispas', caption: 'Efecto de partículas' },
              { src: '/projects/hurontroll/gifs/elemento-manzana.gif', alt: 'La manzana, un coleccionable', label: 'Manzana', caption: 'Coleccionable' },
            ],
          },
        ],
      },
      {
        id: 'galeria',
        title: 'Galería del juego',
        blocks: [
          {
            type: 'gallery',
            images: [
              { src: '/projects/hurontroll/10-menu.png', caption: 'El menú del juego: el logotipo con letras de comida y los botones PLAY! y EXIT.' },
              { src: '/projects/hurontroll/13-nivel1.png', caption: 'El hurón avanzando por el primer nivel, con las plataformas, el fuego como peligro y los contadores de items y llaves.' },
              { src: '/projects/hurontroll/14-nivel2.png', caption: 'El nivel del bosque: el puente de cuerdas, las nubes y una manzana coleccionable.' },
              { src: '/projects/hurontroll/11-cinematica-1.png', caption: 'Una de las láminas de la cinemática, sobre el tablero de corcho con los memes pinchados.' },
              { src: '/projects/hurontroll/12-cinematica-2.png', caption: 'Una de las láminas de la cinemática, con los botones BACK, NEXT y SKIP.' },
              { src: '/projects/hurontroll/00-logo.webp', caption: 'El logotipo en grande: cada letra de «HURON» está formada con comida.' },
              { src: '/projects/hurontroll/04-fondo-nivel2.webp', caption: 'El fondo del segundo nivel, un bosque oscuro con siluetas de árboles.' },
              { src: '/projects/hurontroll/03-fondo-nivel3.webp', caption: 'El escenario del nivel inédito, dentro del tronco de un árbol.' },
              { src: '/projects/hurontroll/05-tiles-nivel1.webp', caption: 'La hoja de tiles con la que se construye el primer nivel.' },
              { src: '/projects/hurontroll/01-fondo-menu.webp', caption: 'El escenario del menú principal.' },
              { src: '/projects/hurontroll/02-escenario-cabana.webp', caption: 'El escenario de la cabaña.' },
              { src: '/projects/hurontroll/08-raton-trono.png', caption: 'Uno de los personajes del nivel inédito.' },
              { src: '/projects/hurontroll/06-plataformas.png', caption: 'La hoja de plataformas con la que se arman los niveles.' },
              { src: '/projects/hurontroll/07-game-over.png', caption: 'El cartel de derrota, en tipografía pixel art.' },
            ],
          },
        ],
      },
    ],
    stack: ['Unity', 'C#', 'Pixel Art', 'Física 2D', 'Game Jam'],
    image: '/projects/hurontroll/00-logo.webp',
    coverFit: 'contain',
    links: [{ label: 'Código', href: 'https://github.com/bleon133/HuronTroll' }],
  },
  {
    slug: 'cthulhu-jamboree',
    title: 'Cthulhu Jamboree',
    category: 'Videojuego',
    featured: true,
    year: '2025',
    publishedAt: '2025-01-26',
    description:
      'Batalla local 1v1 de burbujas: revienta la de tu oponente antes de caer al vacío. Global Game Jam 2025.',
    stack: ['Unity', 'C#', 'HTML5'],
    image: '/projects/cthulhu-jamboree/portada.webp',
    links: [
      { label: 'Código', href: 'https://github.com/bleon133/GameJam2025' },
      { label: 'Jugar', href: 'https://crimpatches.itch.io/chutulu-jamboree' },
    ],
    mediaIdeas: [
      {
        title: '(Propuesta) Captura de la batalla 1v1 de burbujas',
        caption: 'Vista propuesta de la partida en acción con dos jugadores compitiendo, reemplazable por una captura real del juego.',
      },
      {
        title: '(Propuesta) Captura de la mecánica de caer al vacío',
        caption: 'Ilustración propuesta del momento en que una burbuja se rompe y el personaje cae, para reemplazar por una captura real de la física del juego.',
      },
      {
        title: '(Propuesta) Captura de la pantalla de inicio del juego',
        caption: 'Captura propuesta de la interfaz de inicio de Cthulhu Jamboree, reemplazable por una captura real del juego HTML5.',
      },
    ],
  },
]

/**
 * Proyectos ordenados de la fecha más reciente a la más antigua.
 * Los proyectos sin `publishedAt` quedan al final, en el orden del archivo.
 * `getProject` y `getNextProject` usan este mismo orden.
 */
export const projectsByDate = [...projects].sort((a, b) => {
  if (!a.publishedAt && !b.publishedAt) return 0
  if (!a.publishedAt) return 1
  if (!b.publishedAt) return -1
  return b.publishedAt.localeCompare(a.publishedAt)
})

/** Destacados para la Home y el pie de página, ya ordenados por fecha. */
export const featuredProjects = projectsByDate.filter((project) => project.featured)

export function getProject(slug: string | undefined) {
  return projectsByDate.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projectsByDate.findIndex((project) => project.slug === slug)
  return projectsByDate[(index + 1) % projectsByDate.length]
}
