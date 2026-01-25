import { Sphere, Html } from '@react-three/drei'
import { useState } from 'react'

const starName = (activeLayer, name, fiction) => {
  if (! activeLayer) {
    return name;
  }
  let info = fiction[activeLayer];
  if (info[0] == '') {
    return name;
  }
  return info[0] + '(' + name + ')';
}



export default function Star({ 
  position, name, color, size, importance, description, fiction,
  isSelected,
  onPointerDown,
  activeLayer }) {

  const handleSelect = (e) => {
    e.stopPropagation()
    onPointerDown(e)
  }

  return (
    <group position={position}>
      <Sphere
        args={[0.1 + 0.05 * size, 16, 16]}
        onPointerDown={handleSelect}
      >
        <meshStandardMaterial
          color={isSelected ? 'red' : color}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </Sphere>

       <Html 
        billboard
        // distanceFactor={200}
        occlude={false}
        transform={false}
        pointerEvents="auto">
            <div className="star-label" style={{ 
              fontSize: `${14 - importance * 1.5 }px`,
              cursor: 'pointer',
              pointerEvents: 'auto',
              userSelect: 'none' }} 
              onClick={handleSelect}>
                {starName(activeLayer, name, fiction)}
            </div>
      </Html>
      
    </group>
  )
}
