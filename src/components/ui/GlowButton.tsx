
import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface GlowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function GlowButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: GlowButtonProps) {
  return (
    <button
      className={`glow-button glow-button--${variant} ${className}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  )
}