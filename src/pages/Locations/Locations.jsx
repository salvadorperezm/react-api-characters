import { HomeLayout } from '../../layout/HomeLayout'
import {
  Flex,
  Stack,
  Input,
  useColorModeValue,
  SimpleGrid,
  Select,
  Heading,
  HStack,
  Button,
} from '@chakra-ui/react'
import { CardLocation } from '../../components/CardLocation/CardLocation'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Locations = () => {
  const [locations, setLocations] = useState([])
  const [filteredLocations, setFilteredLocations] = useState('')
  const [filterParam, setFilterParam] = useState('name')
  const [page, setPage] = useState(1)

  function getData(page) {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}/location/?page=${page}`)
      .then((res) => {
        setLocations(res.data.results)
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
            Search for your favorite location
          </Heading>
          <Stack
            spacing={2}
            direction={{ base: 'column', md: 'row' }}
            w={{ base: '100%', md: '50%' }}
            pb={4}
          >
            <Input
              type={'text'}
              placeholder={'For example: Earth'}
              color={useColorModeValue('gray.800', 'gray.200')}
              bg={useColorModeValue('gray.100', 'gray.600')}
              rounded={'full'}
              border={0}
              _focus={{
                bg: useColorModeValue('gray.200', 'gray.800'),
                outline: 'none',
              }}
              onChange={(event) => {
                setFilteredLocations(event.target.value)
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
              <option value='type'>Type</option>
              <option value='dimension'>Dimension</option>
            </Select>
          </Stack>
          <HStack>
            {page > 1 ? (
              <Button
                onClick={() => {
                  setPage(page - 1)
                }}
              >
                -
              </Button>
            ) : (
              <></>
            )}
            <p>Page {page}</p>
            {page < 7 ? (
              <Button
                onClick={() => {
                  setPage(page + 1)
                }}
              >
                +
              </Button>
            ) : (
              <></>
            )}
          </HStack>
          <SimpleGrid
            minChildWidth={'200px'}
            spacing='20px'
            width={'100%'}
            placeItems={'center'}
          >
            {filteredLocations === ''
              ? locations.map((location) => {
                  return <CardLocation key={location.id} location={location} />
                })
              : filteredLocations !== '' && filterParam === 'name'
              ? locations.map((location) => {
                  return (
                    location.name
                      .toLowerCase()
                      .includes(filteredLocations.toLowerCase()) && (
                      <CardLocation key={location.id} location={location} />
                    )
                  )
                })
              : filteredLocations !== '' && filterParam === 'type'
              ? locations.map((location) => {
                  return (
                    location.type
                      .toLowerCase()
                      .includes(filteredLocations.toLowerCase()) && (
                      <CardLocation key={location.id} location={location} />
                    )
                  )
                })
              : filteredLocations !== '' && filterParam === 'dimension'
              ? locations.map((location) => {
                  return (
                    location.dimension
                      .toLowerCase()
                      .includes(filteredLocations.toLowerCase()) && (
                      <CardLocation key={location.id} location={location} />
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

export { Locations }
