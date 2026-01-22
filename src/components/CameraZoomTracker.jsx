import { useThree, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function CameraZoomTracker({ onChange }) {
  const { camera, controls } = useThree()
  const lastValue = useRef(null)

  useFrame(() => {
    if (!controls) return

    const distance = camera.position.distanceTo(controls.target)

    // avoid spamming state updates
    if (lastValue.current !== distance) {
      lastValue.current = distance
      onChange(distance)
    }
  })

  return null
}

export default CameraZoomTracker