import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../layouts/posts'
import Section from '../components/section'
import { WorkGridItem } from '../components/gridItem'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} pt={20}>
        Writing
      </Heading>
      <SimpleGrid columns={[1, 1]} gap={6}>
        <Section>
          <WorkGridItem
            id="cat"
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
    </Container>
  </Layout>
)

export default Posts
