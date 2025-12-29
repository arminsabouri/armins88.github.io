import {
  Box,
  Container,
  Heading,
  Flex,
  useColorModeValue
} from '@chakra-ui/react'
import Logo from '../components/logo'
import ThemeToggleButton from './themeToggleButton'

export default function (props) {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}
