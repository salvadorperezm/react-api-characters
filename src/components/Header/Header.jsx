import './HeaderStyles.css'
import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

const Links = [
  { linkName: 'Characters', linkUrl: '/react-api-characters/characters' },
  { linkName: 'Episodes', linkUrl: '/react-api-characters/episodes' },
  { linkName: 'Locations', linkUrl: '/react-api-characters/locations' },
]

const NavLink = ({ children }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#12b0c9'),
      color: useColorModeValue('#fff'),
      border: '2px solid #93c846',
    }}
    to={children.linkUrl}
  >
    {children.linkName}
  </Link>
)

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box px={4} py={2}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Box>
            <RouterLink to='/react-api-characters'>
              <Image
                src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
                alt='Rick and Morty logo'
                className='header__logo'
              />
            </RouterLink>
          </Box>
        </HStack>
        <Flex alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link.linkUrl}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link.linkUrl}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export { Header }
