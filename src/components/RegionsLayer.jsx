import { Sphere, Html } from '@react-three/drei'
import regions from './regions'
import PolygonRegion from "./PolygonRegion"

export default function RegionsLayer() {
  const moveText = (blob) => {
    return blob.moveText ? blob.moveText : 0
  }

  return (
    <group>
      {regions.map((blob, i) => 
      ( <group key={i} position={blob.position}>
      {/* ✅ Special case: polygon region */}
          {blob.polygon ? (
            <PolygonRegion
              vertices={blob.polygon}
              color={blob.color}
              intensity={blob.intensity}
              height={100}
            />
          )  : (
        
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
        </Sphere>)}

        <Html 
                billboard
                position={[5 + moveText(blob), 5, 5]}
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
