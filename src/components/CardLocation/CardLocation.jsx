import { useState, useEffect } from 'react'

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import './CardLocation.css'
import axios from 'axios'
import { Card } from '../Card/Card'

const CardLocation = ({ location }) => {
  const [open, setOpen] = useState(false)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function getFetch() {
      const result = await getUrls()
      setCharacters(result)
    }

    getFetch()
  }, [location.residents])

  async function getUrls() {
    const map = await Promise.all(
      location.residents.map((resident) => {
        return getData(resident)
      })
    )

    return map
  }

  async function getData(url) {
    try {
      const { data } = await axios.get(`${url}`)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className='card-location__container'>
        <img
          className='card-location__image'
          src='https://c4.wallpaperflare.com/wallpaper/229/145/81/rick-and-morty-wallpaper-preview.jpg'
        />
        <div className='card-location__text'>
          <Button
            className='card-location__button'
            onClick={() => setOpen(true)}
          >
            Residents
          </Button>
          <h1>{location.name}</h1>
          <p>{location.type}</p>
          <p>{location.dimension}</p>
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Characters that live here</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            gap={'10px'}
          >
            {characters.length !== 0 ? (
              characters.map((character) => {
                return <Card key={character.id} props={character} />
              })
            ) : (
              <h1>This place in inhabited</h1>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => setOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { CardLocation }
