import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import StarField from './components/StarField'
import GalacticGrid from './components/GalacticGrid'
import CameraZoomTracker from './components/CameraZoomTracker'
import RegionsLayer from './components/RegionsLayer'
import { useRef } from 'react'


function App() {
  const controlsRef = useRef()

  // const [count, setCount] = useState(0)
  const [zoom, setZoom] = useState(0)
  const [selectedStar, setSelectedStar] = useState(null)
  const [activeLayer, setActiveLayer] = useState(null)
  const [target, setTarget] = useState([0, 0, 0])

  const handleStarSelect = (star) => {
    setTarget(star.position)
    requestAnimationFrame(() => {
    if (!controlsRef.current) return

    const controls = controlsRef.current
    const camera = controls.object

    const dir = camera.position
      .clone()
      .sub(controls.target)
      .normalize()

    const desiredDistance = 5  

    camera.position
      .copy(controls.target)
      .add(dir.multiplyScalar(desiredDistance))

    controls.update()
  })
  }

  return (
    <>
    {/* UI OVERLAY */}
      <div className="ui-panel">
        <label>Layer</label>
        <select
          value={activeLayer ?? ''}
          onChange={(e) =>
            setActiveLayer(e.target.value || null)
          }
        >
          <option value="">None</option>
          <option value="star-trek">Star Trek</option>
          <option value="dune">Dune</option>
          <option value="other">Other</option>
        </select>
      </div>

  <Canvas
      camera={{ position: [target[0] - 30, target[1] + 10, target[2]], fov: 75}}
      style={{ background: 'black' }}
      onPointerMissed={() => setSelectedStar(null)}
    >
      <ambientLight intensity={0.8} />

      {/* Galactic plane */}
      <GalacticGrid />

      {/* Stars */}
      <StarField 
        zoom={zoom} 
        onStarSelect={setSelectedStar}
        selectedStar={selectedStar}
        activeLayer={activeLayer}
        handleStarSelect={handleStarSelect}
      />

      {/* Fictional Layer */}
      {activeLayer === 'star-trek' && <RegionsLayer />}

      {/* Navigation */}
      <OrbitControls enablePan enableZoom enableRotate target={target} makeDefault ref={controlsRef} />

      <CameraZoomTracker onChange={setZoom} />
    </Canvas>
    </>
  )
}

export default App
