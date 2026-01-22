import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import StarField from './components/StarField'
import GalacticGrid from './components/GalacticGrid'
import CameraZoomTracker from './components/CameraZoomTracker'

function App() {
  // const [count, setCount] = useState(0)
  const [zoom, setZoom] = useState(0)

  return (
  <Canvas
      camera={{ position: [-30, 10, 0], fov: 75}}
      style={{ background: 'black' }}
    >
      <ambientLight intensity={0.8} />

      {/* Galactic plane */}
      <GalacticGrid />

      {/* Stars */}
      <StarField zoom={zoom} />

      {/* Navigation */}
      <OrbitControls enablePan enableZoom enableRotate target={[0, 0, 0]} makeDefault  />

      <CameraZoomTracker onChange={setZoom} />
    </Canvas>
  )
}

export default App
