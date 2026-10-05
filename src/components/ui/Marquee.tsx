interface MarqueeProps {
  items: string[]
}

/** Cinta infinita de tecnologías. Se pausa al pasar el cursor. */
export function Marquee({ items }: MarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div
      className="group relative overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      aria-hidden="true"
    >
      <ul className="flex w-max animate-marquee gap-10 py-4 group-hover:[animation-play-state:paused]">
        {loop.map((item, index) => (
          <li key={`${item}-${index}`} className="text-sm font-medium tracking-wide text-muted uppercase">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
