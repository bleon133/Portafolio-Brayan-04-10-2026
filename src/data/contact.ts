import { siteConfig } from './site'

const whatsappPhoneDigits = '573170609873'
const whatsappMessage = 'Hola Brayan, vi tu portafolio y me gustaría conversar.'

export const contactData = {
  email: siteConfig.email,
  linkedinUrl: siteConfig.linkedin,
  githubUrl: siteConfig.github,
  cvUrl: siteConfig.cvUrl,
  cvFileName: siteConfig.cvFileName,
  instagramUrl: 'https://www.instagram.com/stephen_leon08/',
  whatsappPhoneDigits,
  whatsappMessage,
}

export function formatWhatsappDisplay(phone = whatsappPhoneDigits): string {
  return `+${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5, 8)} ${phone.slice(8)}`
}

export function buildWhatsappUrl(
  phone = whatsappPhoneDigits,
  message = whatsappMessage,
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
