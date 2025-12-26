import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue,
  Center
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import HexMatrix from '../components/hexMatrix'
import Layout from '../layouts/main'

export default function Home({ path }) {
  return (
    <Layout title="Home" path={path}>
      <HexMatrix display={{ base: 'inline-block', md: 'none' }}></HexMatrix>

      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Armin Sabouri
            </Heading>
            <p>
              Bitcoin Engineer&nbsp;/&nbsp;Embedded Systems
              Enthusiast&nbsp;/&nbsp;Lifter&nbsp;/&nbsp;Tea Drinker/&nbsp;Music
              Improviser
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              alt="Profile image"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              maxHeight="100px"
              display="inline-block"
              borderRadius="100%"
              src="/images/armin.png"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Briefly
          </Heading>
          <Paragraph>
            I am a software engineer and researcher based in Boston. My
            interests include distributed, and cryptographic systems, Bitcoin,
            and embedded systems. For the past five years, I have been working
            in the Bitcoin self-custody and privacy space, and I am currently
            working Bitcoin privacy research and development at{' '}
            <Link href="https://payjoin.devkit.org/" target="_blank">
              Payjoin Devkit
            </Link>
            . In my free time, I research and develop embedded systems and
            protocol upgrades to Bitcoin.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Paragraph>
            3D73 A3F8 8F83 AC0C 11B9 9EFE CF77 A4CB 0655 6344
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
