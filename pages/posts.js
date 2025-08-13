import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../layouts/posts'
import Section from '../components/section'
import { WorkGridItem } from '../components/gridItem'
import { githubUrl } from '../constants'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} pt={20}>
        Writing
      </Heading>
      <SimpleGrid columns={[1, 1]} gap={6}>
        <Section>
          <WorkGridItem
            id=""
            title="Emulating Check Sig From Stack (OP_CSFS) using OP_CAT"
            date="Sept 2024"
            url={`${githubUrl}/fcc28c0f1ca8f9ede9e5037f03760d34`}
            thumbnail="/images/CAT_emoji.webp"
            width={100}
            height={100}
          >
            OP_CAT is being proposed as a new{' '}
            <a href="https://github.com/bitcoin/bips/pull/1698">
              tapscript opcode
            </a>{' '}
            which simply concatenates the last two elements on the stack. A
            suprising consequence of this is that OP_CAT can allow for
            transaction introspection, also known as covenants. In this short
            work I demonstrate that one could also validate signatures over
            arbituary messages using just OP_CAT.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1]} gap={6}>
        <Section>
          <WorkGridItem
            id=""
            title="OP_CAT in Tapscript (BIP-347)"
            date="January 2024"
            url="https://github.com/bitcoin/bips/blob/master/bip-0347.mediawiki"
            thumbnail="/images/CAT_emoji.webp"
            width={100}
            height={100}
          >
            This BIP introduces OP_CAT as a tapscript opcode which allows the
            concatenation of two values on the stack. OP_CAT would be activated
            via a soft fork by redefining the opcode OP_SUCCESS126 (126 in
            decimal and 0x7e in hexadecimal). This is the same opcode value used
            by the original OP_CAT.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section>
        <WorkGridItem
          id=""
          title="NIP-90: Bitcoin PSBTs "
          date="April 2024"
          url="https://github.com/nostr-protocol/nips/pull/495"
          thumbnail="/images/CAT_emoji.webp"
          width={100}
          height={100}
        >
          This NIP defines an event type for partially signed bitcoin
          transactions (PSBT) that can be transferred via the Nostr relay
          network. 1174 is the event kind representing a Bitcoin transaction in
          standard PSBT format, regardless if the transaction is partially
          signed or fully finalized.
        </WorkGridItem>
      </Section>

      <Section>
        <WorkGridItem
          id=""
          title="Unhardened Derivation Paths for Multisignature Coordination"
          date="April 2023"
          url={`${githubUrl}/f6b451c171d7c3087098b85956bed316`}
          thumbnail="/images/CAT_emoji.webp"
          width={100}
          height={100}
        >
          This BIP introduces a hierarchical deterministic wallet structure
          intended for multisignature wallets based on the algorithm described
          in BIP-0032
        </WorkGridItem>
      </Section>
    </Container>
  </Layout>
)

export default Posts
