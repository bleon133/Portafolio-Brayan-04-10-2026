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
    description:
      'Prototipo de realidad virtual para Android y Google Cardboard que enseña a adultos con diabetes tipo 2 la técnica de insulinización con lapicero, el almacenamiento y el desecho seguro. Se recorre solo con la mirada.',
    problem:
      'En la diabetes tipo 2 la aplicación de la insulina recae en el propio paciente. Una técnica incorrecta, no rotar los sitios de inyección o guardar mal el medicamento reducen la eficacia del tratamiento y favorecen complicaciones como la lipohipertrofia.',
    features: [
      'Cinco módulos con 60 pasos narrados y subtitulados: extracción e inspección, preparación e higiene, mapeo, rotación y asepsia, técnica de inyección, y desecho seguro y conservación.',
      'Una vivienda virtual con cuatro espacios (cocina, sala, vestíbulo y sala de estudio), con animaciones 3D que acompañan cada paso.',
      'Un examen por módulo con retroalimentación inmediata y puntaje; se aprueba con 60 %.',
      'Árbol de avances con tres estados (hecho, disponible y bloqueado) y desbloqueo por prerrequisitos.',
      'Botonera estándar en cada paso: anterior, repetir, siguiente, salir y finalizar.',
    ],
    decisions: [
      'Arquitectura guiada por datos: el contenido, el orden, el audio y las preguntas viven en ScriptableObjects, así el equipo de salud puede ajustar textos sin programar.',
      'Sistemas desacoplados por eventos, con datos de contenido separados de la escena.',
      'Interacción solo con la mirada (1.5 s en botones y 2.5 s para salir) y teletransporte suavizado con viñeta de confort para evitar el mareo.',
      'Subtítulos cortos y estados que se comunican con color y texto, pensando en pacientes con posibles alteraciones visuales.',
      'El progreso se guarda en un archivo JSON dentro del dispositivo, con respaldo y recuperación si el archivo se daña. No hay nube ni datos personales (Ley 1581 de 2012).',
    ],
    result:
      'Al 1 de octubre de 2026 el avance ponderado era del 68 %, por encima del 60 % exigido para la entrega. Se ejecutaron 35 pruebas de verificación y se corrigieron 15 defectos. Faltan el tutorial, la pantalla de puntuaciones, más preguntas por examen y la validación con médicos de la Fundación Clínica de Floridablanca.',
    sections: [
      {
        id: 'contexto',
        title: 'Contexto',
        blocks: [
          {
            type: 'paragraph',
            text: 'En la diabetes tipo 2 la aplicación de la insulina recae en el propio paciente. Una técnica incorrecta, no rotar los sitios de inyección o guardar mal el medicamento reducen la eficacia del tratamiento y favorecen complicaciones como la lipohipertrofia.',
          },
        ],
      },
      {
        id: 'solucion',
        title: 'Solución',
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
        id: 'resultados',
        title: 'Resultados',
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
    featured: true,
    origin: 'Devs Technology',
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
    featured: true,
    origin: 'Devs Technology',
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
    featured: true,
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
    description:
      'Prototipo para el registro y la trazabilidad de medicamentos: inventario, escaneo de códigos y alertas de caducidad.',
    overview:
      'Sistema web con monitoreo por código de barras, inventario digital, alertas de caducidad y control del transporte de fármacos. Se publicó como artículo de investigación en el repositorio institucional de la UNAB.',
    sections: [
      {
        id: 'descripcion',
        title: 'Descripción',
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
    description:
      'Sistema CRUD de artículos con código de barras, stock mínimo y precios, más proveedores y clasificaciones. Ningún artículo queda sin proveedor ni clasificación.',
    features: [
      'Web Services ASMX como capa de servicios desacoplada para crear, editar, eliminar y consultar cada entidad.',
      'Consultas por código de barras, precio, stock mínimo y proveedor.',
      'Kits y promociones con vigencia, y relación muchos a muchos entre artículos y proveedores.',
      'Dashboard de métricas de inventario consultadas por Web Service.',
    ],
    sections: [
      {
        id: 'caracteristicas',
        title: 'Características',
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
    description:
      'Sistema web CRUD de perfiles de usuario, direcciones, teléfonos y roles, con autenticación contra base de datos.',
    features: [
      'Web API REST en ASP.NET con control de acceso basado en roles.',
      'Interfaz responsive con Bootstrap y validaciones en JavaScript.',
      'Publicado en un servidor web externo (somee.com).',
    ],
    sections: [
      {
        id: 'caracteristicas',
        title: 'Características',
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
    description:
      'Diseño de la red de un campus universitario de más de 17 edificios, con segmentación por VLANs, subnetting VLSM y topología jerárquica de tres capas (core, distribución y acceso).',
    features: [
      'ACLs extendidas, autenticación centralizada AAA/RADIUS con FreeRADIUS y FreeIPA, y enrutamiento dinámico OSPF con redundancia en anillo.',
      'DMZ aislada con DHCP, DNS, Syslog, TFTP/FTP, VoIP SIP y Web.',
      'Modelo validado en GNS3 con routers Cisco y hosts Ubuntu.',
    ],
    sections: [
      {
        id: 'caracteristicas',
        title: 'Características',
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
    featured: false,
    description:
      'Juego 2D en pixel art ambientado en la época medieval. Cruzados invadieron el reino y el jugador debe sobrevivir, reconstruir la aldea y subir de rango.',
    stack: ['Unity', 'C#'],
    image: '/projects/renacer-vikingo/portada.webp',
    links: [{ label: 'Código', href: 'https://github.com/bleon133/vikingo' }],
    mediaIdeas: [
      {
        title: '(Propuesta) Captura del personaje principal en pixel art',
        caption: 'Vista propuesta del personaje vikingo en el entorno del juego, reemplazable por una captura real del motor Unity.',
      },
      {
        title: '(Propuesta) Captura de la aldea en construcción',
        caption: 'Ilustración propuesta de la aldea medieval que el jugador reconstruye, para reemplazar por una captura real del juego.',
      },
      {
        title: '(Propuesta) Captura del sistema de progresión y rangos',
        caption: 'Captura propuesta de la interfaz de subida de rango del jugador, reemplazable por una captura real de la UI del juego.',
      },
    ],
  },
  {
    slug: 'hurontroll',
    title: 'HuronTroll',
    category: 'Videojuego',
    featured: false,
    year: '2024',
    description: 'Aventura de plataformas 2D en pixel art creada en 48 horas para la Global Game Jam 2024.',
    stack: ['Unity', 'C#'],
    image: '/projects/hurontroll/portada.webp',
    links: [{ label: 'Código', href: 'https://github.com/bleon133/HuronTroll' }],
    mediaIdeas: [
      {
        title: '(Propuesta) Captura de un nivel de plataformas',
        caption: 'Vista propuesta de un nivel de plataformas 2D con los elementos de pixel art, reemplazable por una captura real del juego.',
      },
      {
        title: '(Propuesta) Captura del personaje HuronTroll en acción',
        caption: 'Ilustración propuesta del personaje saltando o interactuando en el entorno, para reemplazar por una captura real del motor Unity.',
      },
      {
        title: '(Propuesta) Captura de la pantalla de título de la Game Jam',
        caption: 'Captura propuesta de la pantalla de inicio del juego de la Global Game Jam 2024, reemplazable por una captura real.',
      },
    ],
  },
  {
    slug: 'cthulhu-jamboree',
    title: 'Cthulhu Jamboree',
    category: 'Videojuego',
    featured: false,
    year: '2025',
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

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
