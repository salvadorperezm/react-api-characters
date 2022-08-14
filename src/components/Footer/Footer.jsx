import { Box, Text, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box py={4}>
      <Text fontSize={'sm'} textAlign={'center'}>
        Created by{' '}
        <Link href='https://github.com/salvadorperezm' isExternal>
          @salvadorperezm
        </Link>
      </Text>
    </Box>
  )
}

export { Footer }
