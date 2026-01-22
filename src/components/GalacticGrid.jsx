import { Grid } from '@react-three/drei'

export default function GalacticGrid() {
  return (
    <Grid
      args={[1000, 1000]}
      cellSize={20}
      cellThickness={0.6}
      cellColor="#222"
      sectionSize={100}
      sectionThickness={1}
      sectionColor="#444"
      fadeDistance={500}
      fadeStrength={1}
      rotation={[0, Math.PI / 2, 0]}
    />
  )
}