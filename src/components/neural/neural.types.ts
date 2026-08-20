
export interface NeuralNode {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
}

export interface MousePostion {
    x: number
    y:number
    active: boolean
}

export interface NeuralNetworkConfig {
    nodeCount?: number
    connectionDistance?: number
    mouseInfluenceRadius?: number
    mouseStrength?: number
    nodeSpeed?: number
}