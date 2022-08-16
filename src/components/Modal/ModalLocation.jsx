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

const ModalLocation = ({ props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [character, setCharacter] = useState({})
  const axios = require('axios')

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* {props.map((prop) => {
              axios
                .get(`${prop}`)
                .then((res) => {
                  let id = res.data.id
                  console.log(res.data.id)
                  let name = res.data.name
                })
                .catch((error) => {
                  console.log(error)
                })
              return console.log(`${id}, ${name}`)
            })} */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
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
