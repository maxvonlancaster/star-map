import { Html } from '@react-three/drei'

const indexText = (activeLayer, star) => {
    switch(activeLayer) {
      case 'star-trek':
        return star.fiction['star-trek'][1];
      case 'dune':
        return star.fiction['dune'][1];
      case 'other':
        return star.fiction['other'][1];
      default:
        return star.description;
  }
}

function StarPopup({ star, activeLayer, handleStarSelect }) {
  
  const goToStar = (e) => {
    e.stopPropagation();
    handleStarSelect(star);
  }

  return (
    <Html
      position={[
        star.position[0],
        star.position[1] + 2,
        star.position[2]
      ]}
      center
      occlude={false}
    >
      <div style={{
        background: `
          linear-gradient(
            145deg,
            rgba(20,30,60,0.95),
            rgba(10,15,35,0.95)
          )
        `,
        color: '#e6f0ff',
        padding: '14px 18px',
        borderRadius: '10px',
        fontSize: '16px',
        border: '1px solid rgba(120,180,255,0.8)',
        boxShadow: `
          0 0 12px rgba(120,180,255,0.6),
          inset 0 0 8px rgba(120,180,255,0.35)
        `,
        transform: 'scale(1.15)',
        whiteSpace: 'normal',
        minWidth: '260px',
        pointerEvents: 'none',
        backdropFilter: 'blur(6px)'
      }}>
        <strong style={{ fontSize: '18px' }}>
          {star.name} <button onClick={goToStar} style={{
            marginLeft: '10px',
            fontSize: '14px',
            padding: '4px 8px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: 'rgba(50,100,200,0.8)',
            color: 'white',
            cursor: 'pointer',
            pointerEvents: 'auto'
          }}>Go To</button>
        </strong>
        <br />
        {indexText(activeLayer, star)}
      </div>
    </Html>
  )
}

export default StarPopup
