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
import { CardEpisode } from '../../components/CardEpisode/CardEpisode'
import { useEffect, useState } from 'react'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'

const Episodes = () => {
  const axios = require('axios')
  const [episodes, setEpisodes] = useState([])
  const [filteredEpisodes, setFilteredEpisodes] = useState('')
  const [filterParam, setFilterParam] = useState('name')
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState()

  function getData(page) {
    axios
      .get(`${process.env.REACT_APP_PUBLIC_URL}/episode/?page=${page}`)
      .then((res) => {
        setEpisodes(res.data.results)
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
            Search for your favorite episode
          </Heading>
          <Stack
            spacing={2}
            direction={{ base: 'column', md: 'row' }}
            w={{ base: '100%', md: '50%' }}
            pb={4}
          >
            <Input
              type={'text'}
              placeholder={'For example: Pilot'}
              color={useColorModeValue('gray.800', 'gray.200')}
              bg={useColorModeValue('gray.100', 'gray.600')}
              rounded={'full'}
              border={0}
              _focus={{
                bg: useColorModeValue('gray.200', 'gray.800'),
                outline: 'none',
              }}
              onChange={(event) => {
                setFilteredEpisodes(event.target.value)
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
              <option value='code'>Code</option>
              <option value='date'>Date</option>
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
            {filteredEpisodes === ''
              ? episodes.map((episode) => {
                  return <CardEpisode key={episode.id} props={episode} />
                })
              : filteredEpisodes !== '' && filterParam === 'name'
              ? episodes.map((episode) => {
                  return (
                    episode.name
                      .toLowerCase()
                      .includes(filteredEpisodes.toLowerCase()) && (
                      <CardEpisode key={episode.id} props={episode} />
                    )
                  )
                })
              : filteredEpisodes !== '' && filterParam === 'code'
              ? episodes.map((episode) => {
                  return (
                    episode.episode
                      .toLowerCase()
                      .includes(filteredEpisodes.toLowerCase()) && (
                      <CardEpisode key={episode.id} props={episode} />
                    )
                  )
                })
              : filteredEpisodes !== '' && filterParam === 'date'
              ? episodes.map((episode) => {
                  return (
                    episode.air_date
                      .toLowerCase()
                      .includes(filteredEpisodes.toLowerCase()) && (
                      <CardEpisode key={episode.id} props={episode} />
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

export { Episodes }
