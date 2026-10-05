import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'unab-investigacion',
    company: 'Universidad Autónoma de Bucaramanga (UNAB)',
    role: 'Auxiliar de Investigación y Creación',
    start: '2026-08',
    location: 'Bucaramanga',
    summary:
      'Trabajo en «Chía: El equilibrio perdido», un videojuego inspirado en la cultura Muisca que ganó la convocatoria CoCrea 2025 de Colombia Crea Talento. Mi actividad va hasta finales de noviembre de 2026.',
    responsibilities: [
      'Diseñé la landing page del proyecto con enfoques Immersive Hero y Bento Grid.',
      'Produje renders de personajes y escenarios.',
      'Documenté mecánicas de NPCs y sistemas de juego.',
      'Contribuyo al plan de sostenibilidad financiera del proyecto.',
    ],
    environment: [],
  },
  {
    id: 'devs-technology',
    company: 'Devs Technology SAS',
    role: 'Técnico en Sistemas de Front y Back End (auxiliar)',
    start: '2023-06',
    end: '2025-09',
    location: 'Bucaramanga',
    summary:
      'Trabajé en desarrollo web y móvil, con Spring Boot y MongoDB en el backend y Kotlin Multiplatform en las apps.',
    responsibilities: [
      'Participé de punta a punta en una solución web y una app multiplataforma para gestionar la vigilancia, usadas en producción por equipos de campo.',
      'Diseñé e implementé módulos con clean code y principios SOLID, y apoyé el levantamiento de requerimientos y las capacitaciones al cliente.',
      'Implementé y di soporte a APIs REST con Spring Boot y Java, con seguridad basada en JWT y comunicación en tiempo real con WebSocket.',
      'Modelé y administré en MongoDB los datos de bitácoras, alertas, turnos, catálogos operativos y copias de seguridad.',
      'Construí vistas responsivas con jQuery y Bootstrap, y contribuí a la app móvil en Kotlin Multiplatform, integrada con el backend.',
      'Acompañé despliegues, monitoreo y soporte en producción con Git y CI/CD.',
    ],
    environment: [
      { label: 'Backend', items: ['Spring Boot', 'Java', 'PHP', 'MongoDB', 'JWT', 'WebSocket'] },
      { label: 'Frontend', items: ['jQuery', 'Bootstrap'] },
      { label: 'Móvil', items: ['Kotlin Multiplatform (iOS y Android)', 'Android Studio'] },
      { label: 'Prácticas', items: ['CI/CD', 'Git'] },
    ],
    reference: {
      quote: 'Se resalta su calidad técnica, cumplimiento de objetivos y orientación a resultados.',
      source: 'Certificación de experiencia de Devs Technology SAS, septiembre de 2025',
    },
  },
]

/** Slugs de los proyectos hechos en cada empresa, para enlazarlos desde la experiencia. */
export const companyProjects: Record<string, string[]> = {
  'devs-technology': ['sistema-vigilancia', 'app-vigilantes', 'devs-tech'],
}
