import { HomeLayout } from '../../layout/HomeLayout'
import {
  Flex,
  Stack,
  Input,
  useColorModeValue,
  SimpleGrid,
  Select,
  Heading,
  Button,
  HStack,
} from '@chakra-ui/react'
import { Card } from '../../components/Card/Card'
import { useEffect, useState } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
const Characters = () => {
  const axios = require('axios')
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState('')
  const [filterParam, setFilterParam] = useState('name')
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState()

  function getData(page) {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}/character/?page=${page}`)
      .then((res) => {
        setCharacters(res.data.results)
        setMaxPage(res.data.info.pages)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getData(page)
  }, [page])

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
            <Select
              rounded={'full'}
              width={{ base: '100%', md: '40%' }}
              onChange={(event) => {
                setFilterParam(event.target.value)
              }}
            >
              <option value='name'>Name</option>
              <option value='status'>Status</option>
              <option value='species'>Species</option>
              <option value='location'>Location</option>
            </Select>
          </Stack>
          <HStack>
            <div>
              {page > 1 ? (
                <Button
                  size={'sm'}
                  onClick={() => {
                    setPage(page - 1)
                  }}
                >
                  <ArrowLeftIcon />
                </Button>
              ) : (
                <Button size={'sm'} disabled>
                  <ArrowLeftIcon />
                </Button>
              )}
            </div>
            <div>
              <p>Page {page}</p>
            </div>
            <div>
              {page < maxPage ? (
                <Button
                  size={'sm'}
                  onClick={() => {
                    setPage(page + 1)
                  }}
                >
                  <ArrowRightIcon />
                </Button>
              ) : (
                <Button size={'sm'} disabled>
                  <ArrowRightIcon />
                </Button>
              )}
            </div>
          </HStack>
          <SimpleGrid
            minChildWidth={'200px'}
            spacing='20px'
            width={'100%'}
            placeItems={'center'}
          >
            {filteredCharacters === ''
              ? characters.map((character) => {
                  return <Card key={character.id} props={character} />
                })
              : filteredCharacters !== '' && filterParam === 'name'
              ? characters.map((character) => {
                  return (
                    character.name
                      .toLowerCase()
                      .includes(filteredCharacters.toLowerCase()) && (
                      <Card key={character.id} props={character} />
                    )
                  )
                })
              : filteredCharacters !== '' && filterParam === 'species'
              ? characters.map((character) => {
                  return (
                    character.species
                      .toLowerCase()
                      .includes(filteredCharacters.toLowerCase()) && (
                      <Card key={character.id} props={character} />
                    )
                  )
                })
              : filteredCharacters !== '' && filterParam === 'location'
              ? characters.map((character) => {
                  return (
                    character.location.name
                      .toLowerCase()
                      .includes(filteredCharacters.toLowerCase()) && (
                      <Card key={character.id} props={character} />
                    )
                  )
                })
              : filteredCharacters !== '' && filterParam === 'status'
              ? characters.map((character) => {
                  return (
                    character.status
                      .toLowerCase()
                      .includes(filteredCharacters.toLowerCase()) && (
                      <Card key={character.id} props={character} />
                    )
                  )
                })
              : null}
          </SimpleGrid>
        </Stack>
      </Flex>
    </HomeLayout>
  )
}

export { Characters }
