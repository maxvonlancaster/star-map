import { Sphere, Html } from '@react-three/drei'
import regions from './regions'

export default function RegionsLayer() {
  return (
    <group>
      {regions.map((blob, i) => (
        <group key={i} position={blob.position}>
        <Sphere
          key={i}
          args={[blob.radius, 32, 32]}
        >
          <meshStandardMaterial
            color={blob.color}
            transparent
            opacity={0.5}
            emissive={blob.color}
            emissiveIntensity={blob.intensity}
          />
        </Sphere>

        <Html 
                billboard
                position={[5, 5, 5]}
                // distanceFactor={200}
                occlude={false}
                transform={false}>
                    <div className="star-label" style={{ fontSize: '20px', fontWeight: 'bold', color: blob.color }}>
                        {blob.text}
                    </div>
              </Html>

        {/* {blob.subregions && blob.subregions.map((subregion, j) => (
          <group key={j} position={subregion[1]}>
            <Sphere

              key={j}
              args={[subregion[0], 32, 32]}
            >
              <meshStandardMaterial
                color={blob.color}
                transparent
                opacity={0.5}
                emissive={blob.color}
                emissiveIntensity={blob.intensity}
              />
            </Sphere>
          </group>
        ))} */}
        </group>
      ))}
    </group>
  )
}
