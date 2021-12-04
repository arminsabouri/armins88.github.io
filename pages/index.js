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
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import HexMatrix from '../components/hexMatrix'
import Layout from '../layouts/article'

export default function Home() {
  return (
    <Layout title="Home">
      <HexMatrix display={{ base: 'inline-block', md: 'none' }}></HexMatrix>
      <Container>
        <Center></Center>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Hello, I&apos;m a full-stack developer based in Boston!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Armin Sabouri
            </Heading>
            <p>
              Digital Craftsman&nbsp;/&nbsp;Bitcoiner&nbsp;/&nbsp;Hardware
              Enthusiast&nbsp;/&nbsp;Lifter
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
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Briefly
          </Heading>
          <Paragraph>
            Takuya is a freelance and a full-stack developer based in Osaka with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out with his camera. Currently, he is
            living off of his own product called{' '}
            <NextLink href="/works/inkdrop">
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Tehran (تهران‎), Iran.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Music, Olympic style weightlifting,{' '}
            <Link href="https://github.com/armins88" target="_blank">
              Coding
            </Link>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            GPG Fingerprint
          </Heading>
          <Paragraph>
            3D73 A3F8 8F83 AC0C 11B9 9EFE CF77 A4CB 0655 6344
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
