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

        {/* <Section delay={0.2}>
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
              Read our paper!
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Began Full Stack contracting while full-time at school working for
            the{' '}
            <Link href="https://cee.mit.edu/" target="_blank">
              Civil and Environmental Engineering department at MIT
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
              &nbsp;NormaTec (now Hyperice)
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2020-2023</BioYear>
            Worked as a Bitcoin Engineer focusing on the Multisig wallet at
            <Link href="https://keys.casa/" target="_blank">
              &nbsp;Casa
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2023 Feb-April</BioYear>
            Contracted as a R&D Embedded Engineer at Dandelion Technologies.
            Focusing on devloping an suite of IoT sensors
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Currently work as a Co-founder and Lead Bitcoin Engineer at
            <Link href="https://www.botanixlabs.xyz/en/home" target="_blank">
              &nbsp;Botanix Labs
            </Link>
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            GPG Fingerprint
          </Heading>
          <Paragraph>
            3D73 A3F8 8F83 AC0C 11B9 9EFE CF77 A4CB 0655 6344
          </Paragraph>
        </Section> */}
      </Container>
    </Layout>
  )
}
