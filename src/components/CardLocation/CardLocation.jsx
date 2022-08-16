import { useState } from 'react'
import { ModalLocation } from '../Modal/ModalLocation'

const CardLocation = ({ location }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='card-episode__container'>
      <img
        className='card-episode__image'
        src='https://c4.wallpaperflare.com/wallpaper/229/145/81/rick-and-morty-wallpaper-preview.jpg'
      />
      <div className='card-episode__text'>
        <h1>{location.name}</h1>
        <p>{location.type}</p>
        <p>{location.dimension}</p>
        <button
          onClick={() => {
            setShowModal((state) => !state)
          }}
        >
          Show {showModal ? `less` : `more`}
        </button>
      </div>
      {showModal && <ModalLocation residents={location.residents} />}
    </div>
  )
}

export { CardLocation }
