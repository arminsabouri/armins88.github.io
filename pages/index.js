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
import Layout from '../layouts/main'

export default function Home({ path }) {
  return (
    <Layout title="Home" path={path}>
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
              Enthusiast&nbsp;/&nbsp;Lifter&nbsp;/&nbsp;Tea Drinker
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
            I am a recently graduated Boston based Software Engineer and a
            Full-Stack Engineer at{' '}
            <a href="https://keys.casa" target="_blank">
              Casa
            </a>
            . In my professional and educational background, I have worked hard
            to educated my self to create full stack systems that aim to empower
            creators and individuals. My interests include resource management
            in embedded settings, leveraging open source data science frameworks
            to create an actionable understanding of immense data-sets,
            distributed, and cryptographic systems. I have vast software
            engineering experience and enjoy teaching my self new concepts and
            tools. .
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
          <BioSection>
            <BioYear>2014</BioYear>
            Began coding by volunteering to build websites for local
            organizations
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Started studying Computer Science at Boston University
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Began medical Data Science internship at the Mass. General Hospital.
            Paper accepted 23 October 2020.{' '}
            <Link
              href="https://link.springer.com/article/10.1007/s42399-020-00612-6"
              target="_blank"
            >
              Paper
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Began Full Stack contacting while still full time at school working
            for the{' '}
            <Link href="https://cee.mit.edu/" target="_blank">
              civil and environmental engineering department at MIT
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Finished Computer Science degree with a focus on embedded systems
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Began work as an embedded systems engineer at
            <Link href="https://hyperice.com/" target="_blank">
              NormaTec (now Hyperice)
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Began work as an full stack engineer at
            <Link href="https://keys.casa/" target="_blank">
              Casa
            </Link>
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
