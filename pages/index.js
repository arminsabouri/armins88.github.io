import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Text
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import HexMatrix from '../components/hexMatrix'
import Layout from '../layouts/main'
import { githubUrl } from '../constants'

export default function Home({ path }) {
  return (
    <Layout title="Home" path={path}>
      <HexMatrix display={{ base: 'inline-block', md: 'none' }}></HexMatrix>

      <Box >
        <Heading as="h2" variant="page-title">
          Armin Sabouri
        </Heading>
        <p>
          Bitcoin Researcher&nbsp;/&nbsp;Engineer&nbsp;/&nbsp;Embedded Systems
          Enthusiast&nbsp;/&nbsp;Lifter&nbsp;/&nbsp;Tea Drinker/&nbsp;Music
          Improviser
        </p>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Stuff I like
        </Heading>
        <Paragraph>
          <strong>Bitcoin.</strong> <em>A decentralized monetary system anchored in cryptography.</em>
        </Paragraph>
        <Box as="ul" pl={6} mb={4}>
          <Box as="li">Applied cryptography. Privacy and scalability research</Box>
          <Box as="li">Open source software engineering</Box>
          <Box as="li">Protocol design</Box>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Some stuff I do
        </Heading>

        <Box mb={6}>
          <Text>I develop and distribute improvements to Bitcoin. My work centers on Bitcoin privacy, including protocol upgrades to Payjoin (<Link href="https://github.com/bitcoin/bips/blob/master/bip-0077.mediawiki" target="_blank">BIP-77/78</Link>) through contributions to the <Link href="https://github.com/payjoin/rust-payjoin/" target="_blank">Payjoin Dev Kit</Link>.
            I am currently focused on multi-party Payjoins, which allows for a more private payments and enables counter-party privacy. To rigorously model and evaluate the privacy of these protocols we are currently developing an <Link href="https://github.com/payjoin/tx-indexer" target="_blank">analysis framework</Link>.</Text>
        </Box>

        <Box mb={6}>
          <Text>I retain an interest in Bitcoin scalability and future softfork proposals. In the past I have work on <Link href="https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki" target="_blank">BIP-347</Link> and <Link href="https://gist.github.com/arminsabouri/fcc28c0f1ca8f9ede9e5037f03760d34" target="_blank">tricks</Link> that you can do with OP_CAT.</Text>
          <Text>I was the CTO and co-founder of <Link href="https://botanixlabs.com/" target="_blank">Botanix Labs</Link> where we developed side systems for Bitcoin.</Text>
        </Box>

        <Box mb={6}>
          <Text>My other interest is in how we can scale self-custody and make it a practical experience. I worked on <Link href="https://casa.com/" target="_blank">Casa</Link>'s multisig coordinator as well as a self-custodial lightning wallet.</Text>
        </Box>
        <Box mb={6}>
          <Text>I am co-host of <Link href="https://bostonbitdevs.org/" target="_blank">Boston Bitdevs</Link>. If you are in the Boston area and interested in learning more about Bitcoin, please join us!</Text>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Other stuff I did
        </Heading>
        {/* TODO: link for chaincase, nips, ohttp electrum, unhardened derivation paths bip, frost work & dalias exploration work */}
        <Box mb={6}>
          <Text mb={2}>LND utilities I used when I was working on Lightning wallets.</Text>
          <Text mb={4}>
            <strong><Link href={`${githubUrl}/auto-provisioned-lnd`} target="_blank">Auto-Provisioning LND</Link></strong> - <em>June 2022</em> - Lnd node auto-provisioning docker set up for cloud environment.
          </Text>
          <Text>
            <strong><Link href={`${githubUrl}/LND-config-generator`} target="_blank">LND Config Generator</Link></strong> - <em>Dec 2022</em> - LND has over 200+ config options. Everything ranging from btcd backend parameters to configuring your healthchecks. This generator is meant to expose and explain all of those options so that any user can make the most of the flexibility available to them. As well providing a variety of preset "node classes".
          </Text>
        </Box>
        <Box mb={6}>
          <Text>
            <strong><Link href={`${githubUrl}/quest/tree/arm`} target="_blank">Quest2Arm</Link></strong> - A port of the real time x86 OS <Link href="http://www.questos.org/" target="_blank">quest</Link> to ARMv7. Submitted as a final project for CS522 Operating Systems.
          </Text>
        </Box>
        <Box mb={6}>
          <Text>
            <strong><Link href="https://github.com/aqua-watch/Firmware" target="_blank">Aqua Watch</Link></strong> - Leaching of lead and other contaminants into tap water poses a significant health risk and is expensive to accurately and efficiently detect in real time. We have utilized commercially available low-cost water metric sensors to represent water samples in an n-dimensional space and leveraged classification models to detect lead contamination in tap water. Experimental results suggest that our novel methodology is an effective and cost efficient way to detect lead contamination. Furthermore, our data driven approach shows promise of being applied to other heavy metal contaminants and organic pollutants while still using the same hardware.
          </Text>
        </Box>
        <Box mb={6}>
          <Text>
            <strong><Link href={`${githubUrl}/armins88/Dislection`} target="_blank">Dislection</Link></strong> - A lightweight firefox extension to convert all fonts in the DOM to one tailored for Dyslexic readers. Dislection is part of a larger effort to bring accessibility to the web. I plan to extend the extension to dynamically change text-based content on the web to fit a specific readers needs. There is more research that needs to be done into how we exactly quantify good reading and what properties of text and/or web-page we change in order to improve reading.
          </Text>
        </Box>
      </Section>
    </Layout >
  )
}
