import * as THREE from "three"
import { useMemo } from "react"

export default function PolygonRegion({ vertices, color, intensity,
  height = 20 }) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape()

    // Move to first vertex
    shape.moveTo(vertices[0][0], vertices[0][1])

    // Draw lines to remaining vertices
    vertices.slice(1).forEach(([x, y]) => {
      shape.lineTo(x, y)
    })

    // Close the polygon
    shape.lineTo(vertices[0][0], vertices[0][1])

    return new THREE.ExtrudeGeometry(shape, {
      depth: height,
      bevelEnabled: false,
    })
  }, [vertices, height])

  return (
    <mesh geometry={geometry} rotation={[-Math.PI / 2, 0, 0]}  position={[0, -height / 2, 0]} >
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.35}
        emissive={color}
        emissiveIntensity={intensity}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}
