import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../layouts/works'
import Section from '../components/section'
import { WorkGridItem } from '../components/gridItem'
import Link from 'next/link'

import { githubUrl } from '../constants'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} pt={20}>
        Open Source Projects
      </Heading>
      <SimpleGrid columns={[1, 1]} gap={6}>
        <Section>
          <WorkGridItem
            id="cat"
            title="Felix"
            date="July 2024"
            url={`${githubUrl}/felix`}
            thumbnail="/images/CAT_emoji.webp"
            width={100}
            height={100}
          >
            Felix (the feline indexer) is a Bitcoin OP_CAT transaction indexer.
            Since we deployed OP_CAT on Bitcoin signet, developers have been
            using OP_CAT to experiment with new ideas. Ranging from a PoW faucet
            to verifying STARK proofs. Felix collects any transaction that uses
            OP_CAT and makes it easier to search and analyze buckets of spends.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="cat"
            title="OP_CAT in Bitcoin Signet"
            date="July 2024"
            url="https://github.com/bitcoin-inquisition/bitcoin/pull/39"
            thumbnail="/images/CAT_emoji.webp"
            width={100}
            height={100}
          ></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="frost"
            title="Frost Notebook"
            date="Aug 2023"
            url={`${githubUrl}/FROST-Notebook`}
            thumbnail="/images/frost.png"
            width={100}
            height={100}
          >
            Educational implementation of the FROST (Flexible Round-Optimized
            Schnorr Threshold) cryptographic protocol. FROST is a protocol that
            enables secure multi-party threshold digital signatures.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="munstr"
            title="Munstr"
            date="April 2023"
            url={`${githubUrl}/munstr`}
            thumbnail="/images/munstr.png"
            width={100}
            height={100}
          >
            MIT Bitcoin Hackathon First Place: Munstr (MuSig + Nostr) is a
            combination of Schnorr signature based MuSig (multisignature) keys
            in a terminal based wallet using decentralized Nostr networks as a
            communication layer to facilitate a secure and encrypted method of
            transporting and digitally signing bitcoin transactions in a way
            that chain analysis cannot identify the nature and setup of the
            transaction data. To anyone observing the blockchain, Munstr
            transactions look like single key Pay-to-Taproot (P2TR) spends.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="nolooking"
            title="Nolooking"
            date="Oct 2022"
            url="https://nolooking.chaincase.app/"
            thumbnail="/images/nolooking.png"
            width={100}
            height={100}
          >
            We abstract the whole "getting connected" stage of lightning node
            setup for operators into a single QR code that prepares one bitcoin
            transaction to get a node fully connected. Just load up our app,
            tweak the config if you like, scan, and send. You'll have a well
            connected, balanced lightning node right away. Nolooking is a
            Bolt.fun hackathon finalist.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="full"
            title="F.U.L.L"
            date="April 2022"
            url={`${githubUrl}/FULL`}
            thumbnail="/images/kyrios.png"
            width={100}
            height={100}
          >
            A novel data driven Bitcoin fee estimation algorithm.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="onion78"
            title="Onion78"
            date="June 2021"
            url={`${githubUrl}/Onion78`}
            thumbnail="/images/onion78.jpeg"
            width={100}
            height={100}
          >
            MIT Hackathon winner 2021. Onion78 implements the payjoin standard
            (BIP-78) and privacy features (Tor Hidden Services) into an iOS
            application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="chaincase"
            title="Chain Case"
            date="March 2021"
            url="https://github.com/chaincase-app/Chaincase"
            thumbnail="/images/chaincase.png"
            width={100}
            height={100}
          >
            Chaincase frees your coins from their linear public history without
            ever taking control. Proven by more than ₿50,000 in successful
            CoinJoin mixes.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Previous Works
        </Heading>
        <SimpleGrid columns={[1, 1]} gap={6}>
          <Section>
            <WorkGridItem
              id="quest"
              title="Quest2Arm"
              src={`${githubUrl}/quest/tree/arm`}
              thumbnail="/images/quest.png"
              width={229}
              height={42}
            >
              A port of the real time x86 OS{' '}
              <Link href="http://www.questos.org/"> quest </Link> to ARMv7.
              Submited as a final project for CS522 Operating Systems
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section>
          <WorkGridItem
            id="Aqua Watch"
            title="Aqua Watch"
            url="https://github.com/aqua-watch/Firmware"
          >
            Leaching of lead and other contaminants into tap water poses a
            significant health risk and is expensive to accurately and
            efficiently detect in real time. We have utilized commer- cially
            available low-cost water metric sensors to represent water samples
            in an n-dimensional space and leveraged classification models to
            detect lead contamination in tap water. Experimental results suggest
            that our novel methodology is an effective and cost efficient way to
            detect lead contamination. Furthermore, our data driven approach
            shows promise of being applied to other heavy metal contaminants and
            organic pollutants while still using the same hardware.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="lnd-setup"
            title="Auto-Provisioning LND"
            date="June 2022"
            url={`${githubUrl}/auto-provisioned-lnd`}
            width={100}
            height={100}
          >
            Lnd node auto-provisioning docker set up for cloud enviorment.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="lnd-config-generator"
            title="LND Config Generator"
            date="Dec 2022"
            url={`${githubUrl}/LND-config-generator`}
            thumbnail="/images/lightning_wrench.png"
            width={100}
            height={100}
          >
            LND has over 200+ config options. Everything ranging from btcd
            backend parameters to configuring your healthchecks. This generator
            is meant to expose and explain all of those options so that any user
            can make the most of the flexibility available to them. As well
            providing a variety of preset "node classes".
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dislection"
            title="Dislection"
            url={`${githubUrl}/armins88/Dislection`}
          >
            A small firefox extension to convert all fonts in the DOM to one
            tailored for Dyslexic readers. Dislection is part of a larger effort
            to bring accessibility to the web. I plan to extend the extension to
            dynamically change text-based content on the web to fit a specific
            readers needs. There is more research that needs to be done into how
            we exactly quantify good reading and what properties of text and/or
            web-page we change in order to improve reading.
          </WorkGridItem>
        </Section>
        <SimpleGrid columns={[1, 1]} gap={6}>
          <Section>
            <WorkGridItem
              id="WriteFree"
              title="Write Free"
              src={`${githubUrl}/writefree-fe`}
            >
              World’s first web-based note-taking application specifically
              designed to support people with dyslexia.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Works
