
import { useEffect, useRef } from 'react'

export function useMousePosition() {
  const mouse = useRef({
    x: 0,
    y: 0,
    active: false,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY
      mouse.current.active = true
    }

    const handleMouseLeave = () => {
      mouse.current.active = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return mouse
}