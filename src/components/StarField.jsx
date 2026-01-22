import Star from './Star'
import stars from './stars'

export default function StarField({ zoom }) {
  return (
    <>
      {stars.filter(star => star.importance < zoom * (- 1 / 300) + 5).map((star, i) => (
        <Star key={i} {...star} />
      ))}
    </>
  )
}
