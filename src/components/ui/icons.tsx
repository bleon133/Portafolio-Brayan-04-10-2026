import { siGithub } from 'simple-icons'
import type { ComponentProps } from 'react'

export function GithubIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d={siGithub.path} />
    </svg>
  )
}

export function LinkedinIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M3.5 9h4v11.5h-4zM5.5 3a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6zM10 9h3.8v1.6c.6-1 1.9-1.9 3.8-1.9 3.5 0 4.4 2.3 4.4 5.3v6.5h-4v-5.7c0-1.4-.1-2.7-1.8-2.7s-2.2 1.2-2.2 2.6v5.8h-4z" />
    </svg>
  )
}
