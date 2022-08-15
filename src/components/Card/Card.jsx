import './Card.css'

const Card = ({ props }) => {
  return (
    <div className='scene scene--card'>
      <div className='card'>
        <div className='card__face card__face--front'>
          <img src={`${props.image}`} className='avatar' alt='avatar'></img>
        </div>
        <div className='card__face card__face--back'>
          <h3 className='card__title'>{`${props.name}`}</h3>
          <p>{`Status: ${props.status}`}</p>
          <p>{`Species: ${props.species}`}</p>
          <p>{`Location: ${props.location.name}.`}</p>
        </div>
      </div>
    </div>
  )
}

export { Card }
