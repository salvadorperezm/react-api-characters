import { useState } from 'react'
import { ModalLocation } from '../Modal/ModalLocation'
import { Button } from '@chakra-ui/react'
import './CardLocation.css'

const CardLocation = ({ location }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='card-location__container'>
      <img
        className='card-location__image'
        src='https://c4.wallpaperflare.com/wallpaper/229/145/81/rick-and-morty-wallpaper-preview.jpg'
      />
      <div className='card-location__text'>
        <h1>{location.name}</h1>
        <p>{location.type}</p>
        <p>{location.dimension}</p>
        <Button
          onClick={() => {
            setShowModal((state) => !state)
          }}
        >
          Show {showModal ? `less` : `more`}
        </Button>
      </div>
      {showModal && <ModalLocation residents={location.residents} />}
    </div>
  )
}

export { CardLocation }
