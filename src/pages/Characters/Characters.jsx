import { HomeLayout } from '../../layout/HomeLayout'
import {
  Flex,
  Stack,
  Input,
  useColorModeValue,
  SimpleGrid,
  Select,
  Heading,
} from '@chakra-ui/react'
import { Card } from '../../components/Card/Card'
import { useEffect, useState } from 'react'

const Characters = () => {
  const axios = require('axios')
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState('')

  function getData() {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}/character`)
      .then((res) => {
        setCharacters(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <HomeLayout>
      <Flex
        height='100%'
        justify={'center'}
        align={'flex-start'}
        py={12}
        px={4}
        maxW={'1200px'}
        margin={'0 auto'}
      >
        <Stack
          boxShadow={'2xl'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={8}
          align={'center'}
          w={'100%'}
        >
          <Heading color={'#000'} mb={4} textAlign={'center'}>
            Search for your favorite character
          </Heading>
          <Stack
            spacing={2}
            direction={{ base: 'column', md: 'row' }}
            w={{ base: '100%', md: '50%' }}
            pb={4}
          >
            <Input
              type={'text'}
              placeholder={'For example: Rick'}
              color={useColorModeValue('gray.800', 'gray.200')}
              bg={useColorModeValue('gray.100', 'gray.600')}
              rounded={'full'}
              border={0}
              _focus={{
                bg: useColorModeValue('gray.200', 'gray.800'),
                outline: 'none',
              }}
              onChange={(event) => {
                setFilteredCharacters(event.target.value)
              }}
            />
            <Select rounded={'full'} width={{ base: '100%', md: '40%' }}>
              <option value='name'>Name</option>
              <option value='status'>Status</option>
              <option value='species'>Species</option>
              <option value='location'>Location</option>
            </Select>
          </Stack>
          <SimpleGrid
            minChildWidth={'200px'}
            spacing='20px'
            width={'100%'}
            placeItems={'center'}
          >
            {characters
              .filter((character) => {
                if (filteredCharacters === '') {
                  return character
                }
                return character.name
                  .toLowerCase()
                  .includes(filteredCharacters.toLowerCase())
              })
              .map((character) => {
                return <Card key={character.id} props={character} />
              })}
          </SimpleGrid>
        </Stack>
      </Flex>
    </HomeLayout>
  )
}

export { Characters }
