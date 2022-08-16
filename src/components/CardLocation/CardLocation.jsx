import { useState } from 'react'
import { ModalLocation } from '../Modal/ModalLocation'

const CardLocation = ({ props }) => {
  const [showModal, setShowModal] = useState('off')
  //   const users = [
  //     {
  //       id: 1,
  //       name: 'salvador',
  //     },
  //     {
  //       id: 2,
  //       name: 'ramon',
  //     },
  //     {
  //       id: 3,
  //       name: 'ronald',
  //     },
  //   ]
  return (
    <div className='card-episode__container'>
      <img className='card-episode__image' />
      <div className='card-episode__text'>
        <h1>{props.name}</h1>
        <p>{props.type}</p>
        <p>{props.dimension}</p>
        <button
          onClick={() => {
            showModal === 'off' ? setShowModal('on') : setShowModal('off')
          }}
        >
          Show more
        </button>
      </div>
      {showModal === 'on' ? <ModalLocation props={props.residents} /> : <></>}
    </div>
  )
}

export { CardLocation }
