import { HomeLayout } from '../../layout/HomeLayout'
import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './HomeStyles.css'

const Home = () => {
  return (
    <HomeLayout>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text as={'span'} color={'#000'}>
                The Rick And Morty
              </Text>
              <br />{' '}
              <Text
                color={'#12b0c9'}
                as={'span'}
                textShadow={'5px 5px 6px #93c846'}
              >
                Web Project
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Here you can find anything about your favorite{' '}
              <Link
                to='/react-api-characters/characters'
                className='home-page__link'
              >
                characters
              </Link>
              ,{' '}
              <Link
                to='/react-api-characters/episodes'
                className='home-page__link'
              >
                episodes
              </Link>{' '}
              or even{' '}
              <Link
                to='/react-api-characters/locations'
                className='home-page__link'
              >
                locations
              </Link>{' '}
              that have appeared throughout the whole show.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            maxW='100%'
            alt={'Login Image'}
            objectFit={'contain'}
            src={
              'https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png'
            }
          />
        </Flex>
      </Stack>
    </HomeLayout>
  )
}

export { Home }
