import Head from 'next/head'
import { Box, Container, Center } from '@chakra-ui/react'
import NavBar from '../components/navbar'
import HexMatrix from '../components/hexMatrix'
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Armin homepage" />
        <meta name="author" content="Armin Sabouri" />
        <meta name="author" content="armins" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arminsdev" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Armin Sabouri's Homepage" />
        <meta property="og:type" content="website" />
      </Head>
      <NavBar />
      <Center>
        <HexMatrix />
      </Center>
      <Container maxW="container.md" pt={50}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
