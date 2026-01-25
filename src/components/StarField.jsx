import Star from './Star'
import stars from './stars'
import StarPopup from './StarPopup'

export default function StarField({ zoom, selectedStar, onStarSelect, activeLayer, handleStarSelect }) {
  return (
    <>
      {stars.filter(star => star.importance < zoom * (- 1 / 300) + 5 
        && (!activeLayer || (star.fiction[activeLayer][0] || star.fiction[activeLayer][1]))
        && (!star.hide || activeLayer === 'star-trek')).map((star, i) => (
        <Star 
          key={i} 
          {...star} 
          isSelected={selectedStar?.id === star.id}
          onPointerDown={(e) => {
              e.stopPropagation();
              onStarSelect(star)
            }}
          activeLayer={activeLayer}
        />
      ))}

      {selectedStar && <StarPopup star={selectedStar} activeLayer={activeLayer} handleStarSelect={handleStarSelect} />}
    </>
  )
}
