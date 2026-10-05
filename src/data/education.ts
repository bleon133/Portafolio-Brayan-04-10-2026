import type { Education } from '@/types'

export const education: Education[] = [
  {
    id: 'unab',
    institution: 'Universidad Autónoma de Bucaramanga (UNAB)',
    program: 'Ingeniería de Sistemas',
    period: '2023 a la fecha',
    status: 'Octavo semestre',
    summary:
      'Mi proyecto de grado es InsulinaVR, un prototipo de realidad virtual para enseñar técnicas de insulinización. Busco hacer las prácticas en 2027-1, en desarrollo Backend o Fullstack.',
    projectSlug: 'insulinavr',
  },
  {
    id: 'uttt',
    institution: 'Universidad Tecnológica de Tula-Tepeji (UTTT), Hidalgo, México',
    program: 'Movilidad académica internacional en Tecnologías de la Información',
    period: 'Cuatrimestre de 2026',
    status: 'Movilidad',
    summary:
      'Cursé Seguridad Informática, Estándares y Métricas de Software y Aplicaciones Web Orientadas a Servicios.',
  },
  {
    id: 'sena-sistemas',
    institution: 'SENA',
    program: 'Técnico en Sistemas',
    period: '2017 a 2018',
    status: 'Egresado',
    summary: 'Base técnica en sistemas antes de entrar a la universidad.',
    certUrl: 'https://drive.google.com/file/d/13oQgGLn1QQPwcix5hFv1GojTQnKJCjdu/view?usp=sharing',
  },
]
