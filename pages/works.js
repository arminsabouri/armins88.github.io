import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../layouts/works'
import Section from '../components/section'
import { WorkGridItem } from '../components/gridItem'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4} pt={20}>
        Latest Works
      </Heading>

      <SimpleGrid columns={[1, 1]} gap={6}>
        <Section>
          <WorkGridItem
            id="onion78"
            title="Onion78"
            src="https://github.com/armins88/Onion78"
            thumbnail="/images/onion78.jpeg"
            width={100}
            height={100}
          >
            MIT Hackathon winner 2021. Onion78 aims to implement the payjoin
            standard (BIP-78) and privacy features (Tor Hidden Services) into a
            iOS application
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="chaincase"
            title="Chain Case"
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
          <WorkGridItem
            id="btcEtl"
            title="BTC ETL"
            url="https://github.com/armins88/BTC_ETL"
          >
            Collect and store mempool / network state for txs coming into the
            mempool and recently confirmed txs. Stored locally using Rocks DB.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>
    </Container>
  </Layout>
)

export default Works
