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
            Stuff I like
          </Heading>
          <Paragraph>
            <strong>Bitcoin.</strong> <em>A decentralized monetary system anchored in cryptography.</em>
          </Paragraph>
          <Paragraph>
            * Applied cryptography. Privacy and scalability research
            * Open source software engineering
            * Protocol design
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Some stuff I do
          </Heading>

          <Box mb={6}>
            <Heading as="h4" fontSize={18} mb={3} mt={4}>
              Privacy
            </Heading>
            <Box mb={3}>
              <Text>
                <strong><Link href={`${githubUrl}/mempool-monitor`} target="_blank">Mempool Monitor</Link></strong> - A Rust-based Bitcoin mempool monitoring tool that tracks transactions, detects Replace-By-Fee (RBF) updates, and when transactions are mined. Collecting mempool state for privacy research.
              </Text>
            </Box>
            <Box mb={3}>
              <Text>
                <strong><Link href={`${githubUrl}/rust-wallet-fingerprints`} target="_blank">Wallet Fingerprints</Link></strong> - Wallet fingerprints are identifiable patterns in transaction structure that can reveal the use of specific wallet software. A Rust port of the original Python implementation.
              </Text>
            </Box>
            <Box mb={3}>
              <Text>
                <strong><Link href={`${githubUrl}/Onion78`} target="_blank">Onion78</Link></strong> - <em>June 2021</em> - MIT Hackathon winner 2021. Onion78 implements the payjoin standard (BIP-78) and privacy features (Tor Hidden Services) into an iOS application.
              </Text>
            </Box>
            <Box mb={3}>
              <Text>
                <strong><Link href={`${githubUrl}/munstr`} target="_blank">Munstr</Link></strong> - <em>April 2023</em> - MIT Bitcoin Hackathon First Place: Munstr (MuSig + Nostr) is a combination of Schnorr signature based MuSig (multisignature) keys in a terminal based wallet using decentralized Nostr networks as a communication layer to facilitate a secure and encrypted method of transporting and digitally signing bitcoin transactions in a way that chain analysis cannot identify the nature and setup of the transaction data. To anyone observing the blockchain, Munstr transactions look like single key Pay-to-Taproot (P2TR) spends.
              </Text>
            </Box>
            <Box mb={3}>
              <Text>
                <strong><Link href="https://nolooking.chaincase.app/" target="_blank">Nolooking</Link></strong> - <em>Oct 2022</em> - We abstract the whole "getting connected" stage of lightning node setup for operators into a single QR code that prepares one bitcoin transaction to get a node fully connected. Just load up our app, tweak the config if you like, scan, and send. You'll have a well connected, balanced lightning node right away. Nolooking is a Bolt.fun hackathon finalist.
              </Text>
            </Box>
            <Box mb={3}>
              <Text>
                <strong><Link href="https://github.com/chaincase-app/Chaincase" target="_blank">Chain Case</Link></strong> - <em>March 2021</em> - Chaincase frees your coins from their linear public history without ever taking control. Proven by more than ₿50,000 in successful CoinJoin mixes.
              </Text>
            </Box>
          </Box>

          <Box mb={6}>
            <Heading as="h4" fontSize={18} mb={3} mt={4}>
              OP_CAT
            </Heading>
            <Box mb={3}>
              <Text>
                <strong><Link href={`${githubUrl}/felix`} target="_blank">Felix</Link></strong> - <em>July 2024</em> - Felix (the feline indexer) is a Bitcoin OP_CAT transaction indexer. Since we deployed OP_CAT on Bitcoin signet, developers have been using OP_CAT to experiment with new ideas. Ranging from a PoW faucet to verifying STARK proofs. Felix collects any transaction that uses OP_CAT and makes it easier to search and analyze buckets of spends.
              </Text>
            </Box>
            <Box mb={3}>
              <Text>
                <strong><Link href="https://github.com/bitcoin-inquisition/bitcoin/pull/39" target="_blank">OP_CAT in Bitcoin Signet</Link></strong> - <em>July 2024</em>
              </Text>
            </Box>
          </Box>

          <Box mb={6}>
            <Heading as="h4" fontSize={18} mb={3} mt={4}>
              FROST
            </Heading>
            <Box mb={3}>
              <Text>
                <strong><Link href={`${githubUrl}/FROST-Notebook`} target="_blank">Frost Notebook</Link></strong> - <em>Aug 2023</em> - Educational implementation of the FROST (Flexible Round-Optimized Schnorr Threshold) cryptographic protocol. FROST is a protocol that enables secure multi-party threshold digital signatures.
              </Text>
            </Box>
            <Box mb={3}>
              <Text>
                <strong><Link href={`${githubUrl}/frost-playground`} target="_blank">Frost Playground</Link></strong>
              </Text>
            </Box>
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Other stuff I did for fun
          </Heading>
          <Box mb={3}>
            <Text>
              <strong><Link href={`${githubUrl}/FULL`} target="_blank">F.U.L.L</Link></strong> - <em>April 2022</em> - A novel data driven Bitcoin fee estimation algorithm.
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href={`${githubUrl}/quest/tree/arm`} target="_blank">Quest2Arm</Link></strong> - A port of the real time x86 OS <Link href="http://www.questos.org/" target="_blank">quest</Link> to ARMv7. Submitted as a final project for CS522 Operating Systems.
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href="https://github.com/aqua-watch/Firmware" target="_blank">Aqua Watch</Link></strong> - Leaching of lead and other contaminants into tap water poses a significant health risk and is expensive to accurately and efficiently detect in real time. We have utilized commercially available low-cost water metric sensors to represent water samples in an n-dimensional space and leveraged classification models to detect lead contamination in tap water. Experimental results suggest that our novel methodology is an effective and cost efficient way to detect lead contamination. Furthermore, our data driven approach shows promise of being applied to other heavy metal contaminants and organic pollutants while still using the same hardware.
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href={`${githubUrl}/auto-provisioned-lnd`} target="_blank">Auto-Provisioning LND</Link></strong> - <em>June 2022</em> - Lnd node auto-provisioning docker set up for cloud environment.
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href={`${githubUrl}/LND-config-generator`} target="_blank">LND Config Generator</Link></strong> - <em>Dec 2022</em> - LND has over 200+ config options. Everything ranging from btcd backend parameters to configuring your healthchecks. This generator is meant to expose and explain all of those options so that any user can make the most of the flexibility available to them. As well providing a variety of preset "node classes".
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href={`${githubUrl}/armins88/Dislection`} target="_blank">Dislection</Link></strong> - A small firefox extension to convert all fonts in the DOM to one tailored for Dyslexic readers. Dislection is part of a larger effort to bring accessibility to the web. I plan to extend the extension to dynamically change text-based content on the web to fit a specific readers needs. There is more research that needs to be done into how we exactly quantify good reading and what properties of text and/or web-page we change in order to improve reading.
            </Text>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Writing
          </Heading>
          <Box mb={3}>
            <Text>
              <strong><Link href="https://payjoin.org/blog/2025/04/16/liana-payjoin" target="_blank">Automatically Refresh Liana Inheritance Timelocks with Payjoin</Link></strong> - <em>April 2025</em> - Liana secures bitcoin such that after time passes, if and only if you haven't yet spent your coins, your heirs can spend them. This condition is called a "timelock" contract. To prevent unintentional activation of this inheritance policy, these timelocked coins require periodic refreshing by being spent into a new timelock. Liana's Payjoin integration automates timelock refresh as payments are received, boosting privacy and cutting costs.
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href={`${githubUrl}/fcc28c0f1ca8f9ede9e5037f03760d34`} target="_blank">Emulating Check Sig From Stack (OP_CSFS) using OP_CAT</Link></strong> - <em>Sept 2024</em> - OP_CAT is being proposed as a new <Link href="https://github.com/bitcoin/bips/pull/1698" target="_blank">tapscript opcode</Link> which simply concatenates the last two elements on the stack. A surprising consequence of this is that OP_CAT can allow for transaction introspection, also known as covenants. In this short work I demonstrate that one could also validate signatures over arbitrary messages using just OP_CAT.
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href="https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki" target="_blank">OP_CAT in Tapscript (BIP-347)</Link></strong> - <em>January 2024</em> - This BIP introduces OP_CAT as a tapscript opcode which allows the concatenation of two values on the stack. OP_CAT would be activated via a soft fork by redefining the opcode OP_SUCCESS126 (126 in decimal and 0x7e in hexadecimal). This is the same opcode value used by the original OP_CAT.
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href="https://github.com/nostr-protocol/nips/pull/495" target="_blank">NIP-90: Bitcoin PSBTs</Link></strong> - <em>April 2024</em> - This NIP defines an event type for partially signed bitcoin transactions (PSBT) that can be transferred via the Nostr relay network. 1174 is the event kind representing a Bitcoin transaction in standard PSBT format, regardless if the transaction is partially signed or fully finalized.
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href={`${githubUrl}/f6b451c171d7c3087098b85956bed316`} target="_blank">Unhardened Derivation Paths for Multisignature Coordination</Link></strong> - <em>April 2023</em> - This BIP introduces a hierarchical deterministic wallet structure intended for multisignature wallets based on the algorithm described in BIP-0032.
            </Text>
          </Box>
          <Box mb={3}>
            <Text>
              <strong><Link href={`${githubUrl}/ohttp-nostr-nip`} target="_blank">OHTTP-Nostr NIP</Link></strong>
            </Text>
          </Box>
        </Section>
        <Section delay={0.5}>
          <Paragraph>
            3D73 A3F8 8F83 AC0C 11B9 9EFE CF77 A4CB 0655 6344
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}
