import { projects } from '@/data/projects'
import type { AboutStep } from '@/types'

export const aboutIntro =
  'Soy desarrollador Backend y Fullstack con más de 2 años de experiencia construyendo y manteniendo aplicaciones web. Trabajo sobre todo con Spring Boot, Java, React y .NET.'

export const aboutStats = [
  { value: 2, suffix: '+', label: 'años de experiencia' },
  { value: 8, suffix: '.º', label: 'semestre en la UNAB' },
  { value: projects.length, suffix: '', label: 'proyectos publicados' },
]

export const aboutSteps: AboutStep[] = [
  {
    title: 'Formación',
    summary: 'Octavo semestre de Ingeniería de Sistemas en la UNAB.',
    points: [
      'Movilidad académica en la UTTT de México durante 2026.',
      'Técnico en Sistemas, SENA.',
      'Inglés B2: EF SET 60/100.',
      'Credenciales de AWS Academy, MongoDB University, Oracle Academy y Cisco Networking Academy.',
    ],
  },
  {
    title: 'Experiencia',
    summary: '2 años y 3 meses en Devs Technology, de junio de 2023 a septiembre de 2025.',
    points: [
      'Técnico en Sistemas de Front y Back End, como auxiliar.',
      'Módulos en Spring Boot, Java y PHP con MongoDB, y apps móviles con Kotlin Multiplatform.',
      'APIs REST con JWT y WebSocket, Git, despliegues y soporte en producción.',
      'Desde agosto de 2026, auxiliar de investigación y creación en la UNAB, hasta finales de noviembre.',
    ],
  },
  {
    title: 'Objetivo',
    summary: 'Prácticas profesionales en 2027-1.',
    points: [
      'Roles Backend o Fullstack en desarrollo de software.',
      'Aportar en desarrollo web, bases de datos y diseño de soluciones.',
      'Seguir aprendiendo en proyectos reales.',
    ],
  },
]
