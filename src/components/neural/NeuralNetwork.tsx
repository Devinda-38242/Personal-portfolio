
import { useEffect, useRef } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'
import type {
  NeuralNetworkConfig,
  NeuralNode,
} from './neural.types'

const defaultConfig: Required<NeuralNetworkConfig> = {
  nodeCount: 65,
  connectionDistance: 150,
  mouseInfluenceRadius: 220,
  mouseStrength: 0.018,
  nodeSpeed: 0.25,
}

export function NeuralNetwork({
  nodeCount = defaultConfig.nodeCount,
  connectionDistance = defaultConfig.connectionDistance,
  mouseInfluenceRadius = defaultConfig.mouseInfluenceRadius,
  mouseStrength = defaultConfig.mouseStrength,
  nodeSpeed = defaultConfig.nodeSpeed,
}: NeuralNetworkConfig) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouse = useMousePosition()

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')

    if (!context) {
      return
    }

    let animationFrame = 0
    let width = 0
    let height = 0

    const nodes: NeuralNode[] = []

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const createNodes = () => {
      nodes.length = 0

      const count =
        window.innerWidth < 768
          ? Math.floor(nodeCount * 0.45)
          : nodeCount

      for (let index = 0; index < count; index += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * nodeSpeed,
          vy: (Math.random() - 0.5) * nodeSpeed,
          radius: Math.random() * 1.5 + 1,
        })
      }
    }

    const resizeCanvas = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 2)

      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * devicePixelRatio
      canvas.height = height * devicePixelRatio

      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      context.setTransform(
        devicePixelRatio,
        0,
        0,
        devicePixelRatio,
        0,
        0,
      )

      createNodes()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      for (const node of nodes) {
        if (!prefersReducedMotion) {
          node.x += node.vx
          node.y += node.vy

          if (node.x < -20 || node.x > width + 20) {
            node.vx *= -1
          }

          if (node.y < -20 || node.y > height + 20) {
            node.vy *= -1
          }

          if (mouse.current.active) {
            const dx = mouse.current.x - node.x
            const dy = mouse.current.y - node.y

            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < mouseInfluenceRadius && distance > 0) {
              const influence =
                (1 - distance / mouseInfluenceRadius) *
                mouseStrength

              node.vx += (dx / distance) * influence
              node.vy += (dy / distance) * influence
            }
          }

          const maxSpeed = nodeSpeed * 2.5

          node.vx = Math.max(
            -maxSpeed,
            Math.min(maxSpeed, node.vx),
          )

          node.vy = Math.max(
            -maxSpeed,
            Math.min(maxSpeed, node.vy),
          )
        }

        context.beginPath()
        context.arc(
          node.x,
          node.y,
          node.radius,
          0,
          Math.PI * 2,
        )

        context.fillStyle = 'rgba(139, 92, 246, 0.7)'
        context.fill()
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const first = nodes[i]
          const second = nodes[j]

          const dx = first.x - second.x
          const dy = first.y - second.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            let opacity =
              (1 - distance / connectionDistance) * 0.22

            if (mouse.current.active) {
              const firstMouseDistance = Math.hypot(
                first.x - mouse.current.x,
                first.y - mouse.current.y,
              )

              const secondMouseDistance = Math.hypot(
                second.x - mouse.current.x,
                second.y - mouse.current.y,
              )

              const closestDistance = Math.min(
                firstMouseDistance,
                secondMouseDistance,
              )

              if (closestDistance < mouseInfluenceRadius) {
                opacity +=
                  (1 -
                    closestDistance / mouseInfluenceRadius) *
                  0.3
              }
            }

            context.beginPath()
            context.moveTo(first.x, first.y)
            context.lineTo(second.x, second.y)

            context.strokeStyle = `rgba(139, 92, 246, ${opacity})`
            context.lineWidth = 0.7
            context.stroke()
          }
        }
      }

      animationFrame = requestAnimationFrame(draw)
    }

    resizeCanvas()
    draw()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [
    nodeCount,
    connectionDistance,
    mouseInfluenceRadius,
    mouseStrength,
    nodeSpeed,
  ])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}