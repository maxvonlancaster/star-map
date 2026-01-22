import { Sphere, Html } from '@react-three/drei'
import { useState } from 'react'

export default function Star({ position, name, color, size, importance }) {
  const [selected, setSelected] = useState(false)

  return (
    <group position={position}>
      <Sphere
        args={[0.1 + 0.05 * size, 16, 16]}
        onClick={() => setSelected(!selected)}
      >
        <meshStandardMaterial
          color={selected ? 'red' : color}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </Sphere>

       <Html 
        billboard
        // distanceFactor={200}
        occlude={false}
        transform={false}>
            <div className="star-label" style={{ fontSize: `${14 - importance * 1.5 }px` }}>
                {name}
            </div>
      </Html>
      
    </group>
  )
}
