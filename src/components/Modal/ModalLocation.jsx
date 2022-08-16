import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ModalLocation = ({ residents }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
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
    console.log(map)

    return map
  }

  async function getData(url) {
    try {
      const { data } = await axios.get(`${url}`)
      console.log(data.name)

      return data.name
    } catch (error) {
      console.error(error)
    }
  }

  console.log(characters)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Characters that live here</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {characters.length !== 0 &&
              characters.map((character, index) => {
                return <li key={`characters-${index}`}>{character}</li>
              })}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { ModalLocation }
