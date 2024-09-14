import {
  Box,
  Container,
  Heading,
  Flex,
  HStack,
  useColorModeValue,
  Stack,
  Link,
  Text,
  Center,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import Logo from '../components/logo'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from './themeToggleButton'
import { HamburgerIcon } from '@chakra-ui/icons'

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
  const { path } = props
  const GITHUB_LINK = 'https://github.com/0xBEEFCAF3'

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

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NavLink href="/works" path={path}>
            Works
          </NavLink>
          <NavLink href="/posts" path={path}>
            Writing
          </NavLink>
          <NavLink href="/Armin_Sabouri_Resume.pdf">CV</NavLink>
          <NavLink
            _target="_blank"
            href={GITHUB_LINK}
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <Center>
              <Text pr={2}>Source</Text>
              <IoLogoGithub />
            </Center>
          </NavLink>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NavLink href="/Armin_Sabouri_Resume.pdf">
                  <MenuItem as={Link}>CV</MenuItem>
                </NavLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Writing</MenuItem>
                </NextLink>
                <MenuItem as={Link} href={GITHUB_LINK}>
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
