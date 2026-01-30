import { useThree, useFrame } from "@react-three/fiber"
import { useState } from "react"
import Star from "./Star"
import stars from "./stars"
import trekLocations from "./trekLocations"
import StarPopup from "./StarPopup"
import * as THREE from "three"

export default function StarField({
  zoom,
  selectedStar,
  onStarSelect,
  activeLayer,
  handleStarSelect,
}) {
  const { camera } = useThree()

  const [visibleStars, setVisibleStars] = useState([])

  useFrame(() => {
    const allStars = [
      ...stars,
      ...(activeLayer === "star-trek" ? trekLocations : []),
    ]

    let cameraLocation = camera.position;
    // console.log(cameraLocation);

    const visible = allStars.filter((star) => {
      const pos = new THREE.Vector3(...star.position)

      // Project star position into screen space
      const projected = pos.clone().project(camera)

      // Condition 1: must be in front of camera
      const inFront = projected.z < 1

      // Condition 2: must be inside screen bounds
      const insideScreen =
        projected.x >= -1 &&
        projected.x <= 1 &&
        projected.y >= -1 &&
        projected.y <= 1

      const inSector = (star.position[0] < cameraLocation.x + 500 
        && star.position[0] > cameraLocation.x - 500 
        && star.position[2] < cameraLocation.z + 500 
        && star.position[2] > cameraLocation.z - 500 ) 
        || (star.importance == 0)
        

      return inFront && insideScreen && inSector
    })

    setVisibleStars(visible)
  })

  return (
    <>
      {/* Render only visible stars */}
      {visibleStars
        .filter(star => (star.importance === 0 || star.importance < zoom * (- 1 / 300) + 5 )
        && (!activeLayer || (star.fiction[activeLayer][0] || star.fiction[activeLayer][1]))).map((star) => (
        <Star
          key={star.id}
          {...star}
          isSelected={selectedStar?.id === star.id}
          activeLayer={activeLayer}
          onPointerDown={(e) => {
            e.stopPropagation()
            onStarSelect(star)
          }}
        />
      ))}

      {/* Popup */}
      {selectedStar && (
        <StarPopup
          star={selectedStar}
          activeLayer={activeLayer}
          handleStarSelect={handleStarSelect}
        />
      )}
    </>
  )
}
