import { Grid } from "@react-three/drei"
import * as THREE from "three"

export default function GalacticGrid() {
  return (
    <Grid
      args={[100000, 100000]} // huge plane
      cellSize={20}
      sectionSize={500}
      fadeDistance={50000}
      fadeStrength={1}
      rotation={[0, Math.PI / 2, 0]}
      side={THREE.DoubleSide}
    />
  )
}
