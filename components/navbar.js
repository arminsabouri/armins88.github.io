import {
  Box,
  Container,
  Heading,
  Flex,
  HStack,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import Logo from '../components/logo'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'

const NavLink = ({ title, href, currentPath, _target, children, ...props }) => {
  const isActive = currentPath === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={isActive ? 'grassTeal' : undefined}
        color={isActive ? '#202023' : inactiveColor}
        _target={_target}
      >
        {children}
      </Link>
    </NextLink>
  )
}

export default function (props) {
  const { paths } = props
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
      <Container display="flex">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        {/* Desktop view  */}
        <HStack spacing="24px">
          <NavLink href="/works">Works</NavLink>
          <NavLink href="/posts">Posts</NavLink>
          <NavLink
            href="https://github.com/armins88/armins88.github.io"
            display="inline-flex"
            isplay="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            View Source
          </NavLink>
        </HStack>
      </Container>
    </Box>
  )
}
