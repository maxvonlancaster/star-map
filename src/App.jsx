import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Lightformer } from '@react-three/drei'
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
  const [projectionsSelected, projectionsSelect] = useState(false)
  const [panelOpen, setPanelOpen] = useState(true)


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

      camera.updateProjectionMatrix()
      camera.updateMatrixWorld()
      controls.update()
    })
  }

  return (
    <div className="app-container">
      {/* UI OVERLAY */}
      <div className={`ui-panel ${panelOpen? "open" : "closed"}`}>
        
        <div className="section">
          <p>
            3D Map of Real Stars and Sci-Fi Locations
          </p>
        </div>
        <div className="section">
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
        <div className="section">
          <label>Star projections</label>
          <input type="checkbox" checked={projectionsSelected} onChange={(e) => projectionsSelect(e.target.checked)} />
        </div>

        <div className="section">
          {/* <label>Links</label> */}

          <a
            href="https://github.com/maxvonlancaster"
            target="_blank" rel="noopener noreferrer" className="github-link"
          >
            Follow me on github
          </a>
          <button className="collapse-btn" onClick={() => {setPanelOpen(!panelOpen)}}>
            {panelOpen? "<" : ">"}
          </button>
        </div>
        <div className="section">
          
        </div>
      </div>

<div className='canvas-container'>
  <Canvas
      camera={{ position: [- 30, 10, 0], fov: 75, far: 200000, near: 1 }}
      style={{ background: '#f0f0f0' }}
      onPointerMissed={() => setSelectedStar(null)}
    >
      <ambientLight intensity={0.3} color="#ffffff" />
        <directionalLight 
          position={[10, 20, 5]} 
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-100}
          shadow-camera-right={100}
          shadow-camera-top={100}
          shadow-camera-bottom={-100}
        />
        <hemisphereLight 
          args={["#87CEEB", "#8B7355", 0.3]} // Sky blue to brown earth colors
        />
        
        {/* Point light at the galactic center */}
        <pointLight 
          position={[0, 0, 0]} 
          intensity={0.5} 
          distance={500}
          color="#fff4e6"
        />

      {/* Galactic plane */}
      <GalacticGrid />

      {/* Stars */}
      <StarField 
        zoom={zoom} 
        onStarSelect={setSelectedStar}
        selectedStar={selectedStar}
        activeLayer={activeLayer}
        handleStarSelect={handleStarSelect}
        projections={projectionsSelected}
      />

      {/* Fictional Layer */}
      {activeLayer === 'star-trek' && <RegionsLayer />}

      {/* Navigation */}
      <OrbitControls enablePan enableZoom enableRotate target={target} makeDefault ref={controlsRef} />

      <CameraZoomTracker onChange={setZoom} />
    </Canvas>
    </div>
    </div>
  )
}

export default App


// TODO
// - refactor 
// - fix issue with fantom background stars +
// - fix goto double click 
// - exoplanets view in system on click 
// - distance between stars measurement 
// - other items: nebulae, black holes, pleyades cluster, aquila rift 
// - federation blob 
// - optimize performance for large datasets 
// - search for stars 
// - goto home (sol) 
// - fix issue on zoom redundant stars appearing 
// - make grid visible from below +
// - more stars with fiction 
// - more trek locations 
// - firefly system 
// - zoom of importance calculation improve 
// - textwrapping in popup +
// - vertical line projections to stars +
// - realistic lighting +
// - landing page 
// - z-index for different items 
// - fix mobile 
// - star names different font 
// - think of different background 
// - sidebar make collapsable 