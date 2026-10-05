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
    image: '/projects/sistema-vigilancia/login.webp',
    links: [],
    gallery: [
      {
        src: '/projects/sistema-vigilancia/login.webp',
        caption: 'Inicio de sesión con recuperación de contraseña. La sesión se maneja con JSON Web Token.',
      },
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
    image: '/projects/app-vigilantes/login.webp',
    links: [],
    gallery: [
      { src: '/projects/app-vigilantes/login.webp', caption: 'Inicio de sesión con recuperación de contraseña para entrar a la app.' },
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
  },
]

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
