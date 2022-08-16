import './CardEpisode.css'

const CardEpisode = ({ props }) => {
  return (
    <div className='card-episode__container'>
      <img
        className='card-episode__image'
        src='https://subpop-img.s3.amazonaws.com/asset/artist_images/attachments/000/007/591/max_600_400/rickandmorty-soundtrack-cover-cd1-3000x3000.jpg?1531343836'
      />
      <div className='card-episode__text'>
        <h1>{props.name}</h1>
        <p>{props.episode}</p>
        <p>{props.air_date}</p>
      </div>
    </div>
  )
}

export { CardEpisode }
