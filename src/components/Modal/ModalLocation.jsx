import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from '../Card/Card'

const ModalLocation = ({ residents }) => {
  const [open, setOpen] = useState(false)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function getFetch() {
      const result = await getUrls()
      setCharacters(result)
    }

    getFetch()
  }, [residents])

  async function getUrls() {
    const map = await Promise.all(
      residents.map((resident) => {
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
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

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

export { ModalLocation }
