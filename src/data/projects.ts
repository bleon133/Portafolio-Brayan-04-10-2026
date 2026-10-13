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
        id: 'curso',
        title: 'El curso implementado',
        blocks: [
          {
            type: 'paragraph',
            text: 'El curso son cinco módulos encadenados y un examen por módulo. Cada módulo vive en una zona de la casa virtual, y cada paso combina una animación 3D, una narración con subtítulos y la botonera de navegación. Los exámenes se hacen en la sala de estudio.',
          },
          {
            type: 'table',
            columns: ['Módulo', 'Contenido', 'Pasos', 'Requiere'],
            rows: [
              ['M1', 'Extracción e inspección: animaciones de la nevera y las cinco cajas de insulina', '17', 'Ninguno'],
              ['M2', 'Preparación e higiene: lavado de manos y preparación del lapicero', '17', 'M1'],
              ['M3', 'Mapeo, rotación y asepsia', '10', 'M2'],
              ['M4', 'Técnica de inyección', '10', 'M3'],
              ['M5', 'Desecho seguro y conservación después del uso', '6', 'M4'],
              ['EvalM1 a EvalM5', 'Examen de cada módulo, 2 preguntas y 60 % para aprobar', '2 cada uno', 'M1 a M5'],
            ],
          },
          {
            type: 'paragraph',
            text: 'El módulo 2, de preparación e higiene, es el que más animación tiene: 14 clips que cubren el lavado de manos completo y la preparación del lapicero.',
          },
        ],
      },
      {
        id: 'arquitectura',
        title: 'Arquitectura',
        blocks: [
          {
            type: 'paragraph',
            text: 'El código se organiza en cinco capas que van de la entrada del usuario hasta los datos. Cada capa solo conoce a la de abajo, y los sistemas se comunican entre sí con un bus de eventos, así que agregar uno nuevo no obliga a tocar los que ya existen.',
          },
          {
            type: 'media',
            columns: 1,
            items: [
              { src: '/projects/insulinavr/diagrama-arquitectura.png', alt: 'Diagrama de la arquitectura del prototipo en cinco capas', label: 'Capas', caption: 'De la mirada del usuario hasta los datos, con el progreso guardado en JSON local.', fit: 'flow' },
              { src: '/projects/insulinavr/diagrama-bus-eventos.png', alt: 'Diagrama del bus de eventos entre componentes', label: 'Bus de eventos', caption: 'Cada componente publica y escucha eventos sin llamar directamente a otro.', fit: 'flow' },
              { src: '/projects/insulinavr/diagrama-modelo-datos.png', alt: 'Diagrama de clases del modelo de contenido', label: 'Modelo de datos', caption: 'Los ScriptableObjects que guardan el contenido, el orden, la narración y las preguntas.', fit: 'flow' },
            ],
          },
        ],
      },
      {
        id: 'animaciones',
        title: 'Animaciones del módulo 2',
        blocks: [
          {
            type: 'paragraph',
            text: 'El módulo 2 cubre la preparación e higiene: el lavado de manos completo y la preparación del lapicero. Tiene 14 animaciones (pasos 2.2 a 2.17) y es el módulo con más trabajo de animación del prototipo.',
          },
          {
            type: 'media',
            columns: 2,
            items: [
              { src: '/projects/insulinavr/gifs/lavado-manos.gif', alt: 'Animación del frotado de palmas durante el lavado de manos', label: 'Frotar las palmas', caption: 'Uno de los pasos del lavado de manos, con la técnica de la OMS.' },
              { src: '/projects/insulinavr/gifs/abrir-grifo.gif', alt: 'Animación de abrir el grifo y mojar las manos', label: 'Abrir el grifo', caption: 'El primer paso: abrir el grifo y mojar las manos.' },
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
          {
            type: 'paragraph',
            text: 'El avance se calcula ponderando cada componente por su peso en el alcance, así que refleja el trabajo real y no una cuenta de pantallas terminadas.',
          },
          {
            type: 'table',
            columns: ['Componente', 'Peso', 'Avance'],
            rows: [
              ['Arquitectura base (datos, eventos, vinculación, registro)', '10 %', '100 %'],
              ['Módulos de enseñanza M1 a M5 (60 pasos, botonera)', '25 %', '90 %'],
              ['Interacción por mirada y teletransporte', '10 %', '95 %'],
              ['Progreso persistente y reglas de desbloqueo', '10 %', '100 %'],
              ['Árbol de avances', '5 %', '100 %'],
              ['Exámenes EvalM1 a EvalM5', '15 %', '60 %'],
              ['Tutorial', '5 %', '10 %'],
              ['Pantalla de puntuaciones', '5 %', '0 %'],
              ['Validación con expertos', '15 %', '10 %'],
              ['Total ponderado', '100 %', '68 %'],
            ],
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
        caption: 'Vista superior de la vivienda: la cocina arriba, la sala en el centro, el vestíbulo abajo a la izquierda y la sala de estudio a la derecha, con sus puntos de teletransporte.',
      },
      {
        src: '/projects/insulinavr/paso-modulo-1.webp',
        caption: 'Paso 1 del módulo 1. La botonera aparece junto a la nevera, donde ocurre la animación.',
      },
      {
        src: '/projects/insulinavr/botonera.webp',
        caption: 'La botonera estándar, que cambia según el paso: cada uno decide qué botones muestra de los cinco posibles (anterior, repetir, siguiente, salir y finalizar).',
      },
      {
        src: '/projects/insulinavr/teletransporte.webp',
        caption: 'Puntos de teletransporte con un color por cuarto. Al mirarlos crecen y se aclaran.',
      },
      {
        src: '/projects/insulinavr/teletransporte-mantener.webp',
        caption: 'Punto de teletransporte que exige mantener la vista: la barra se llena y solo entonces traslada al usuario.',
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
    title: 'Gestión de usuarios',
    category: 'Web',
    featured: true,
    origin: 'Universidad Tecnológica de Tula-Tepeji (UTTT)',
    year: '2026',
    publishedAt: '2026-04-05',
    role: 'Desarrollo backend y frontend',
    description:
      'API REST para administrar usuarios, roles, perfiles, direcciones y teléfonos, con un panel de administración en React. Construida como proyecto de la materia Aplicaciones Web Orientadas a Servicios durante el intercambio académico 2026-1.',
    highlights: ['Intercambio UTTT 2026-1', 'API REST', '6 controladores · 37 endpoints', 'React + TypeScript', 'Publicado'],
    facts: [
      { label: 'Mi rol', value: 'Desarrollo backend y frontend' },
      { label: 'Origen', value: 'Intercambio académico en la UTTT, 2026-1' },
      { label: 'Materia', value: 'Aplicaciones Web Orientadas a Servicios' },
      { label: 'Backend', value: 'ASP.NET Web API 2 · .NET Framework 4.8 · EF6' },
      { label: 'Frontend', value: 'React 18 · TypeScript · Vite' },
      { label: 'Datos', value: 'SQL Server' },
      { label: 'Estado', value: 'Publicado y funcionando' },
    ],
    sections: [
      {
        id: 'demo',
        title: 'Probar el panel',
        blocks: [
          {
            type: 'paragraph',
            text: 'El panel está publicado y se puede recorrer con una cuenta de prueba. Los datos que ya están cargados son de ejemplo.',
          },
          {
            type: 'table',
            columns: ['Campo', 'Valor'],
            rows: [
              ['Usuario', 'admin.lopez'],
              ['Contraseña', 'Admin2026!'],
            ],
          },
        ],
      },
      {
        id: 'proyecto',
        title: 'El proyecto',
        blocks: [
          {
            type: 'paragraph',
            text: 'Gestión de usuarios es un sistema para administrar usuarios, roles, perfiles, direcciones y teléfonos. Lo construí durante mi intercambio académico en la Universidad Tecnológica de Tula-Tepeji (UTTT) en el periodo 2026-1, como proyecto de la materia Aplicaciones Web Orientadas a Servicios.',
          },
          {
            type: 'paragraph',
            text: 'El sistema tiene dos partes: una API REST en ASP.NET que concentra las reglas de negocio y el acceso a datos, y un panel de administración en React que consume esa API. La API está publicada y se puede consultar desde su documentación interactiva.',
          },
        ],
      },
      {
        id: 'que-hace',
        title: 'Qué hace',
        blocks: [
          {
            type: 'list',
            items: [
              'CRUD de usuarios, consulta por nombre de usuario y suspensión o reactivación de cuentas.',
              'CRUD de roles y asignación de roles a usuarios.',
              'CRUD de perfiles, con sus direcciones y teléfonos.',
              'Inicio de sesión validado en el servidor, con respuesta distinta para credenciales incorrectas y cuenta suspendida.',
              'Reglas de negocio: el nombre de usuario es único, un rol no se asigna dos veces al mismo usuario y no se elimina un rol que esté en uso.',
              'Eliminación en cascada controlada desde los servicios y escrituras dentro de transacciones.',
            ],
          },
          {
            type: 'table',
            columns: ['Recurso', 'Operaciones'],
            rows: [
              ['Usuarios', 'GET, GET por id, GET por username, POST, POST /login, PUT, DELETE, PATCH toggle-suspendido'],
              ['Roles', 'GET, GET por id, GET por nombre, POST, PUT, DELETE'],
              ['UsuarioRoles', 'GET, GET por id, GET por usuario, POST, DELETE'],
              ['PerfilesUsuarios', 'GET, GET por id, GET por usuario, POST, PUT, DELETE'],
              ['Direcciones', 'GET, GET por id, POST, PUT, DELETE'],
              ['Telefonos', 'GET, GET por id, GET por número, GET por perfil, POST, PUT, DELETE'],
            ],
          },
          {
            type: 'paragraph',
            text: 'En total son 6 controladores y 37 endpoints, todos bajo el prefijo /api/v1.',
          },
        ],
      },
      {
        id: 'backend',
        title: 'Backend',
        blocks: [
          {
            type: 'paragraph',
            text: 'La API se organiza en tres piezas: los controladores reciben las peticiones, los servicios concentran la lógica y las transacciones, y el proyecto de dominio expone el modelo de Entity Framework generado desde la base de datos.',
          },
          {
            type: 'media',
            columns: 1,
            items: [
              { src: '/projects/perfiles-roles/diagrama-arquitectura.png', alt: 'Diagrama de capas de la API', label: 'Capas de la API', caption: 'Controladores, mapeo, servicios, seguridad y acceso a datos.', fit: 'flow' },
            ],
          },
          {
            type: 'table',
            columns: ['Decisión', 'Por qué'],
            rows: [
              ['DTOs con AutoMapper', 'La API no expone las entidades de base de datos; las propiedades de navegación se ignoran y la contraseña nunca sale en una respuesta.'],
              ['Capa de servicios', 'Los controladores quedan delgados y las reglas viven en un solo lugar.'],
              ['Transacciones en escrituras', 'Crear o eliminar con datos relacionados es todo o nada.'],
              ['Servicios y controladores descartables', 'El contexto de base de datos se libera al terminar cada petición.'],
              ['Versionado en la ruta', 'El prefijo /api/v1 permite evolucionar la API sin romper a los clientes.'],
            ],
          },
        ],
      },
      {
        id: 'seguridad',
        title: 'Seguridad',
        blocks: [
          {
            type: 'paragraph',
            text: 'Las contraseñas se guardan con PBKDF2, con 100 000 iteraciones, una sal aleatoria por contraseña y comparación en tiempo constante. El formato almacenado permite subir el costo en el futuro sin romper los hashes anteriores.',
          },
          {
            type: 'list',
            items: [
              'Las contraseñas nunca se devuelven: el mapeo del usuario ignora ese campo.',
              'Al editar un usuario, si no se envía contraseña se conserva la actual.',
              'El inicio de sesión se valida en el servidor. Si una contraseña almacenada venía en texto plano de datos antiguos, se migra a hash en el primer acceso correcto.',
              'La cadena de conexión vive en un archivo aparte que no está en el repositorio; solo se versionan plantillas de ejemplo.',
            ],
          },
        ],
      },
      {
        id: 'modelo-datos',
        title: 'Modelo de datos',
        blocks: [
          {
            type: 'paragraph',
            text: 'Seis tablas. Un usuario tiene roles y perfiles; cada perfil tiene direcciones y teléfonos. La base de datos ya existía, así que el modelo de Entity Framework se generó desde ella.',
          },
          {
            type: 'media',
            columns: 1,
            items: [
              { src: '/projects/perfiles-roles/diagrama-modelo-datos.png', alt: 'Modelo de datos de las seis tablas', label: 'Relaciones', caption: 'Los usuarios, sus roles asignados y los perfiles con direcciones y teléfonos.', fit: 'flow' },
            ],
          },
        ],
      },
      {
        id: 'frontend',
        title: 'Panel de administración',
        blocks: [
          {
            type: 'paragraph',
            text: 'La interfaz es una aplicación de una sola página en React y TypeScript que consume la API. El estado del servidor lo maneja TanStack Query, así que cada escritura invalida la caché de las entidades que toca y las tablas se refrescan solas. Los estilos son CSS Modules sobre un sistema de tokens propio, con tema oscuro.',
          },
          {
            type: 'table',
            columns: ['Pantalla', 'Función'],
            rows: [
              ['Acceso', 'Usuario y contraseña, con mostrar u ocultar y validación en servidor.'],
              ['Panel', 'Métricas de usuarios, perfiles, roles y direcciones, con cuentas activas y suspendidas.'],
              ['Usuarios', 'Tabla con estado, roles como chips y conteo de perfiles; modal con pestañas de datos y roles.'],
              ['Roles', 'CRUD y búsqueda por nombre.'],
              ['Perfiles', 'Datos personales y RFC; modal con pestañas de perfil, direcciones y teléfonos.'],
              ['Direcciones', 'CRUD con selector de perfil.'],
              ['Listado general', 'Perfiles con dirección y teléfonos, ordenados por cumpleaños.'],
            ],
          },
          {
            type: 'media',
            columns: 1,
            items: [
              { src: '/projects/perfiles-roles/diagrama-conexion-front-back.png', alt: 'Diagrama de conexión entre el frontend React y la API', label: 'Frontend y backend', caption: 'El navegador, el cliente HTTP, la caché, los errores y las capas del servidor.', fit: 'flow' },
              { src: '/projects/perfiles-roles/arquitectura-capas.png', alt: 'Diagrama de capas del frontend', label: 'Capas del frontend', caption: 'De las pantallas hasta la API, pasando por la caché y el cliente HTTP.', fit: 'flow' },
            ],
          },
        ],
      },
      {
        id: 'despliegue',
        title: 'Despliegue',
        blocks: [
          {
            type: 'paragraph',
            text: 'La API corre en un hosting con IIS y SQL Server bajo un dominio propio, y el frontend se publica como sitio estático. Durante el despliegue aparecieron tres problemas que quedaron resueltos.',
          },
          {
            type: 'table',
            columns: ['Problema', 'Solución'],
            rows: [
              ['La cadena de conexión no llegaba al sitio publicado', 'El archivo de configuración se agregó como contenido del proyecto y un transform lo cambia en la publicación.'],
              ['Swagger apuntaba a la URL equivocada en el hosting', 'Se fijó la URL raíz de Swagger.'],
              ['Advertencia de un paquete del framework en el build', 'Se agregó la referencia explícita y se corrigió la redirección de enlaces.'],
            ],
          },
        ],
      },
      {
        id: 'pendientes',
        title: 'Estado y pendientes',
        blocks: [
          {
            type: 'paragraph',
            text: 'La API y el panel están publicados y funcionan contra la base de datos real. Quedan mejoras que no formaban parte del alcance entregado.',
          },
          {
            type: 'table',
            columns: ['Tema', 'Estado'],
            rows: [
              ['Autenticación con token y autorización por roles', 'Pendiente. Hoy el inicio de sesión valida credenciales pero no emite token, así que las rutas del panel se protegen en el cliente.'],
              ['Restringir CORS a orígenes conocidos', 'Pendiente; hoy está abierto para cualquier origen.'],
              ['Validación de modelos y DTO separados para crear y responder', 'Pendiente.'],
              ['Acciones asíncronas e inyección de dependencias', 'Pendiente.'],
              ['Restricciones únicas e índices en la base de datos', 'Pendiente.'],
              ['Pruebas unitarias y de integración', 'Pendiente.'],
            ],
          },
        ],
      },
      {
        id: 'galeria',
        title: 'Galería del panel',
        blocks: [
          {
            type: 'gallery',
            images: [
              { src: '/projects/perfiles-roles/dashboard.png', caption: 'El panel, con las métricas de usuarios, perfiles, roles y direcciones, y el conteo de cuentas activas y suspendidas.' },
              { src: '/projects/perfiles-roles/usuarios.png', caption: 'La tabla de usuarios, con el estado de cada cuenta, sus roles y el número de perfiles.' },
              { src: '/projects/perfiles-roles/usuario-modal.png', caption: 'La edición de un usuario, con las pestañas de datos y de asignación de roles.' },
              { src: '/projects/perfiles-roles/perfiles.png', caption: 'La tabla de perfiles, con los datos personales y el usuario asociado.' },
              { src: '/projects/perfiles-roles/perfil-modal.png', caption: 'La edición de un perfil, con las pestañas de perfil, direcciones y teléfonos.' },
              { src: '/projects/perfiles-roles/roles.png', caption: 'La gestión de roles, con búsqueda por nombre contra la API.' },
              { src: '/projects/perfiles-roles/direcciones.png', caption: 'El CRUD de direcciones, con selector de perfil.' },
              { src: '/projects/perfiles-roles/listado.png', caption: 'El listado general, con los perfiles ordenados por fecha de cumpleaños.' },
              { src: '/projects/perfiles-roles/login.png', caption: 'La pantalla de acceso, con validación en el servidor.' },
            ],
          },
        ],
      },
    ],
    stack: ['ASP.NET Web API', 'C#', '.NET Framework', 'Entity Framework', 'SQL Server', 'React', 'TypeScript', 'Vite'],
    image: '/projects/perfiles-roles/dashboard.png',
    links: [
      { label: 'Probar el panel', href: 'https://usermanagement-go0cfsbr1-brayan-leons-projects.vercel.app/login' },
      { label: 'Código backend', href: 'https://github.com/bleon133/BackGestionUsuarios' },
      { label: 'Código frontend', href: 'https://github.com/bleon133/FrontGestionUsuarios' },
    ],
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
            text: 'Renacer Vikingo es un RPG 2D de exploración con vista cenital, ambientado en una Noruega medieval asediada. Tras la invasión de los Cruzados, la aldea vikinga queda en ruinas, y el jugador, un humilde Karl y hombre libre, toma la responsabilidad de reconstruirla.',
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
            text: 'El juego abraza el tema de la jam, «Make Me Laugh», sin complejos: los coleccionables son platos colombianos (arepa santanderiana, tamal y hormiga culona), la cinemática se cuenta sobre un tablero de corcho con doce memes reales pinchados, y la habilidad estrella del hurón es directamente hacer caca.',
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
    origin: 'Global Game Jam 2025',
    year: '2025',
    publishedAt: '2025-01-26',
    role: 'Programación y ensamblaje',
    description:
      'Combate local 1v1 entre dos peces que cuelgan de un globo. Revienta el globo de tu rival antes de caer al vacío. Hecho en 48 horas para la Global Game Jam 2025.',
    highlights: ['Global Game Jam 2025', '1v1 local', 'HTML5', 'Unity + C#', 'Crim.Patches'],
    facts: [
      { label: 'Género', value: 'Combate 1v1 local' },
      { label: 'Motor', value: 'Unity 2022.3.56f1' },
      { label: 'Plataforma', value: 'HTML5 (navegador)' },
      { label: 'Duración', value: '48 horas' },
      { label: 'Formato', value: 'Game jam en equipo (6 personas)' },
      { label: 'Idiomas', value: 'Español e inglés' },
      { label: 'Estado', value: 'Publicado' },
    ],
    sections: [
      {
        id: 'descripcion',
        title: 'Descripción',
        blocks: [
          {
            type: 'paragraph',
            text: 'Cthulhu Jamboree es un juego de combate local 1v1 para dos jugadores, hecho en 48 horas para la Global Game Jam 2025 y publicado para jugar en el navegador. Cada jugador controla un pez: uno cool y otro desgarbado.',
          },
          {
            type: 'paragraph',
            text: 'Cada pez empieza colgando de un globo que lo mantiene a flote. El objetivo es reventar el globo del rival: cuando eso pasa, su dueño cae al vacío y pierde. Los jugadores comparten el mismo teclado, uno con A/D y el otro con las flechas, y se empujan entre sí y contra las burbujas que suben desde abajo.',
          },
          {
            type: 'paragraph',
            text: 'La premisa sale de la mitología que da nombre al juego. La sociedad pez adoraba a Cthulhu con sacrificios hasta que descubrió que al dios le gustaba su comida tradicional, y desde entonces decide los sacrificios con duelos de burbujas. En esta partida, los campeones elegidos son tú y tu mejor amigo.',
          },
        ],
      },
      {
        id: 'mi-aporte',
        title: 'Mi aporte al proyecto',
        blocks: [
          {
            type: 'paragraph',
            text: 'Participé como programador y del ensamblaje. En una jam de 48 horas eso significa construir el núcleo jugable y montarlo en Unity para que sea una partida real.',
          },
        ],
      },
      {
        id: 'sistemas',
        title: 'Sistemas que trabajé',
        blocks: [
          {
            type: 'paragraph',
            text: 'Estos son los sistemas que hacen funcionar el juego:',
          },
          {
            type: 'table',
            columns: ['Sistema', 'Qué resuelve'],
            rows: [
              ['Movimiento de los personajes', 'Control independiente para dos jugadores en el mismo teclado, con giro por inversión de escala.'],
              ['Física del combate', 'Rebote entre jugadores y burbujas mediante impulsos controlados, en lugar de la física por defecto de Unity.'],
              ['El globo como vida', 'El globo sostiene al jugador; al reventar, se dispara la caída cambiando la masa y la gravedad.'],
              ['Gravedad progresiva', 'Cuenta atrás que endurece la partida con el tiempo y evita duelos interminables.'],
              ['Spawners', 'Oleadas de burbujas y de objetos con posición aleatoria, retardo y ritmo configurables.'],
              ['Ensamblaje', 'Montar las escenas, unir los sistemas con el arte del equipo y dejar el juego jugable de principio a fin.'],
              ['Localización', 'Soporte de español e inglés con archivos JSON por idioma y un selector en el menú, con el idioma que se conserva entre escenas.'],
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
            text: 'El rebote de las burbujas (Bubble.cs) no usa la física de colisión de Unity. Al chocar, calcula la dirección del impacto a partir de la posición del jugador menos la de la burbuja, la normaliza y aplica un impulso con AddForce.',
          },
          {
            type: 'paragraph',
            text: 'Eso da un empuje predecible: el jugador siempre sale disparado en la dirección correcta, sin depender de masas ni rebotes impredecibles. En un juego de sumas de vectores como este, es justo lo que hace que el control se sienta bien.',
          },
          {
            type: 'paragraph',
            text: 'La gravedad progresiva es el segundo sistema del que estoy contento. Empieza suave y sube 0,1 cada 10 segundos hasta un máximo, de forma que el duelo siempre termina. Es una solución sencilla a un problema de diseño real: las partidas que no acaban.',
          },
        ],
      },
      {
        id: 'personajes',
        title: 'Personajes',
        blocks: [
          {
            type: 'paragraph',
            text: 'Dos peces con personalidades opuestas, y el dios que da sentido al sacrificio.',
          },
          {
            type: 'table',
            columns: ['Personaje', 'Descripción'],
            rows: [
              ['Cool Fish', 'El pez con gorra, auriculares y zapatillas. El popular del duelo.'],
              ['Uncool Fish', 'El pez desgarbado, con la lengua fuera y cara de no entender nada.'],
              ['Cthulhu', 'El dios verde que observa desde el centro del escenario.'],
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
              ['Motor', 'Unity 2022.3.56f1'],
              ['Lenguaje', 'C#'],
              ['Física', 'Rigidbody2D, colliders y triggers'],
              ['UI', 'TextMeshPro'],
              ['Animación', 'Animator y clips por secuencia de sprites'],
              ['Localización', 'JSON por idioma en StreamingAssets'],
              ['Plataforma', 'HTML5 (WebGL)'],
              ['Arte', 'Paint Tool SAI, Clip Studio Paint, Illustrator'],
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
            text: 'Los personajes y las burbujas están animados con secuencias de sprites. Estos son los dos peces, cada uno en reposo y cayendo.',
          },
          {
            type: 'media',
            columns: 4,
            items: [
              { src: '/projects/cthulhu-jamboree/gifs/pez-cool-idle.gif', alt: 'El pez cool en reposo', label: 'Cool Fish', caption: 'En reposo' },
              { src: '/projects/cthulhu-jamboree/gifs/pez-cool-caida.gif', alt: 'El pez cool cayendo', label: 'Cool Fish', caption: 'Cayendo' },
              { src: '/projects/cthulhu-jamboree/gifs/pez-uncool-idle.gif', alt: 'El pez uncool en reposo', label: 'Uncool Fish', caption: 'En reposo' },
              { src: '/projects/cthulhu-jamboree/gifs/pez-uncool-caida.gif', alt: 'El pez uncool cayendo', label: 'Uncool Fish', caption: 'Cayendo' },
            ],
          },
          {
            type: 'paragraph',
            text: 'Las burbujas del combate tienen animación de reposo y de explosión. Esa explosión es la que revienta el globo del rival.',
          },
          {
            type: 'media',
            columns: 3,
            items: [
              { src: '/projects/cthulhu-jamboree/gifs/burbuja-idle.gif', alt: 'La burbuja del combate en reposo', label: 'Burbuja', caption: 'En reposo' },
              { src: '/projects/cthulhu-jamboree/gifs/burbuja-explosion.gif', alt: 'La explosión de una burbuja', label: 'Explosión', caption: 'Al chocar con un jugador' },
              { src: '/projects/cthulhu-jamboree/gifs/escenario-explosion.gif', alt: 'Explosión de una burbuja de fondo', label: 'Burbuja de fondo', caption: 'Explotando' },
            ],
          },
          {
            type: 'paragraph',
            text: 'El escenario tiene tres tipos de burbujas decorativas que suben con el fondo.',
          },
          {
            type: 'media',
            columns: 3,
            items: [
              { src: '/projects/cthulhu-jamboree/gifs/escenario-burbuja-1.gif', alt: 'Burbuja de fondo tipo 1', label: 'Tipo 1', caption: 'Burbuja de fondo' },
              { src: '/projects/cthulhu-jamboree/gifs/escenario-burbuja-2.gif', alt: 'Burbuja de fondo tipo 2', label: 'Tipo 2', caption: 'Burbuja de fondo' },
              { src: '/projects/cthulhu-jamboree/gifs/escenario-burbuja-3.gif', alt: 'Burbuja de fondo tipo 3', label: 'Tipo 3', caption: 'Burbuja de fondo' },
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
              { src: '/projects/cthulhu-jamboree/01-menu.webp', caption: 'El menú principal: los dos peces se enfrentan y el Cthulhu verde los observa desde el centro del escenario.' },
              { src: '/projects/cthulhu-jamboree/02-gameplay.webp', caption: 'El pez cool colgando de su globo, con el fondo submarino y las burbujas del escenario.' },
              { src: '/projects/cthulhu-jamboree/04-fin-partida.webp', caption: 'El final de partida: uno de los peces cae, el otro gana, con la pantalla de reinicio.' },
              { src: '/projects/cthulhu-jamboree/05-cinematica.webp', caption: 'Los peces adorando a Cthulhu, con el texto narrativo que explica la premisa.' },
              { src: '/projects/cthulhu-jamboree/03-pausa.webp', caption: 'El menú de pausa durante el combate, con las opciones de reanudar, ajustes y salir.' },
              { src: '/projects/cthulhu-jamboree/06-configuracion.webp', caption: 'El panel de configuración, con el selector de idioma y el control de volumen.' },
              { src: '/projects/cthulhu-jamboree/00-logo.webp', caption: 'El logotipo del juego, dibujado a mano.' },
            ],
          },
        ],
      },
    ],
    stack: ['Unity', 'C#', 'Física 2D', 'HTML5', 'Game Jam'],
    image: '/projects/cthulhu-jamboree/portada.webp',
    links: [
      { label: 'Código', href: 'https://github.com/bleon133/GameJam2025' },
      { label: 'Jugar', href: 'https://crimpatches.itch.io/chutulu-jamboree' },
    ],
  },
  {
    slug: 'chia-landing',
    title: 'Chía: El Equilibrio Perdido',
    category: 'Web',
    featured: true,
    origin: 'UNAB · CoCrea 2025',
    year: '2025',
    publishedAt: '2025-09-15',
    role: 'Auxiliar de investigación · Programador',
    description:
      'Landing page del videojuego Chía, inspirado en la cultura Muisca. Presenta el proyecto, explica el beneficio tributario del 165% y recibe donaciones y citas.',
    highlights: ['UNAB', 'CoCrea 2025', 'React + TypeScript', 'Bilingüe', 'En producción'],
    facts: [
      { label: 'Tipo', value: 'Sitio público del videojuego' },
      { label: 'Mi rol', value: 'Auxiliar de investigación · Programador' },
      { label: 'Equipo', value: '5 estudiantes de la UNAB' },
      { label: 'Institución', value: 'Universidad Autónoma de Bucaramanga' },
      { label: 'Convocatoria', value: 'CoCrea 2025, modalidad PAI' },
      { label: 'Estado', value: 'Publicado en producción' },
    ],
    sections: [
      {
        id: 'descripcion',
        title: 'El proyecto',
        blocks: [
          {
            type: 'paragraph',
            text: 'Chía: El Equilibrio Perdido es un videojuego de acción inspirado en la cosmovisión de la cultura Muisca, ambientado unos 200 años antes de la llegada de los europeos. Lo desarrollan cinco estudiantes de la Universidad Autónoma de Bucaramanga y fue aprobado en la convocatoria CoCrea 2025, modalidad PAI.',
          },
          {
            type: 'paragraph',
            text: 'La landing es el sitio público del proyecto. Presenta el videojuego, explica el beneficio tributario para quien dona y recibe los aportes y las solicitudes de cita.',
          },
        ],
      },
      {
        id: 'mi-aporte',
        title: 'Mi aporte',
        blocks: [
          {
            type: 'paragraph',
            text: 'Participé como auxiliar de investigación y como programador. Trabajé en el frontend de la landing page, la aplicación web con la que el público conoce el proyecto y hace su aporte, y también en tareas de backend del sistema.',
          },
          {
            type: 'paragraph',
            text: 'La landing es una SPA en React y TypeScript. Sobre esa base construí y conecté la interfaz: las secciones de presentación, el formulario de donación con firma digital, la calculadora del beneficio tributario y la agenda de citas.',
          },
        ],
      },
      {
        id: 'secciones',
        title: 'Qué hace la landing',
        blocks: [
          {
            type: 'table',
            columns: ['Sección', 'Contenido'],
            rows: [
              ['Portada', 'La presentación del juego, con el personaje principal sobre un fondo de cascada y los logos de CoCrea y UNAB.'],
              ['Beneficio tributario', 'Explica la deducción del 165% sobre el monto donado, con las cifras de referencia.'],
              ['Impacto cultural', 'Tres pilares: creación de propiedad intelectual, certificado CID y preservación del patrimonio.'],
              ['El proyecto', 'Presenta el videojuego con un layout de nodos explorables.'],
              ['Respaldo institucional', 'El marco normativo que sostiene el incentivo y los avales del proyecto.'],
              ['Calculadora y citas', 'Un simulador del beneficio tributario y un formulario para agendar una reunión.'],
            ],
          },
        ],
      },
      {
        id: 'modulos',
        title: 'Módulos interactivos',
        blocks: [
          {
            type: 'list',
            items: [
              'Formulario de donación: carta de intención con datos del donante, carga del RUT y firma digital dibujada en un canvas.',
              'Calculadora tributaria: calcula la deducción según el monto, con montos sugeridos.',
              'Agenda de citas: selección de fecha con calendario y envío de los datos de contacto.',
              'Bilingüe: todo el sitio cambia entre español e inglés.',
            ],
          },
        ],
      },
      {
        id: 'arquitectura',
        title: 'Arquitectura',
        blocks: [
          {
            type: 'paragraph',
            text: 'La landing es una aplicación de una sola página que consume los servicios del proyecto para publicar el contenido y recibir las donaciones. El navegador carga la interfaz, y la interfaz pide los datos a los servicios.',
          },
          {
            type: 'media',
            columns: 1,
            items: [
              { src: '/projects/chia-landing/11-arquitectura.png', alt: 'Diagrama general de la arquitectura de la landing', label: 'Vista general', caption: 'El navegador carga la SPA y esta se comunica con los servicios del proyecto.', fit: 'flow' },
            ],
          },
          {
            type: 'table',
            columns: ['Área', 'Tecnología'],
            rows: [
              ['Framework', 'React 18'],
              ['Lenguaje', 'TypeScript'],
              ['Build', 'Vite 6'],
              ['Estilos', 'Tailwind CSS 4'],
              ['Rutas', 'react-router 7'],
              ['Formularios', 'react-hook-form + Zod'],
              ['Fechas', 'react-day-picker + date-fns'],
              ['Protección anti-bot', 'Cloudflare Turnstile'],
            ],
          },
          {
            type: 'paragraph',
            text: 'El detalle de la infraestructura y de los servicios queda fuera a propósito: el sitio está en producción y recibe donaciones.',
          },
        ],
      },
      {
        id: 'galeria',
        title: 'Galería de la landing',
        blocks: [
          {
            type: 'gallery',
            images: [
              { src: '/projects/chia-landing/01-hero.webp', caption: 'La portada, con el personaje Chía sobre el fondo de cascada y los logos institucionales.' },
              { src: '/projects/chia-landing/02-beneficio.webp', caption: 'La sección del beneficio tributario, con la deducción del 165% y las cifras de referencia.' },
              { src: '/projects/chia-landing/03-impacto.webp', caption: 'Los pilares de impacto cultural: creación de propiedad intelectual, certificado CID y patrimonio.' },
              { src: '/projects/chia-landing/04-proyecto.webp', caption: 'La presentación del videojuego, con nodos que el visitante puede explorar.' },
              { src: '/projects/chia-landing/05-respaldo.webp', caption: 'El respaldo institucional y el marco normativo del incentivo tributario.' },
              { src: '/projects/chia-landing/06-calculadora.webp', caption: 'La calculadora del beneficio y la agenda de citas, en una sola sección.' },
              { src: '/projects/chia-landing/07-donacion.webp', caption: 'La carta de intención del formulario de donación.' },
              { src: '/projects/chia-landing/08-firma.webp', caption: 'La firma digital que el donante dibuja en el canvas.' },
              { src: '/projects/chia-landing/09-menu.webp', caption: 'El menú de navegación, con el logo y el selector de idioma.' },
              { src: '/projects/chia-landing/10-footer.webp', caption: 'El pie de página con los créditos del proyecto.' },
            ],
          },
        ],
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web'],
    image: '/projects/chia-landing/01-hero.webp',
    links: [{ label: 'Sitio en vivo', href: 'https://chiaelequilibrioperdido.online/' }],
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
