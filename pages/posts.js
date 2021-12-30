import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../layouts/posts'
import Section from '../components/section'
import { GridItem } from '../components/gridItem'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My Fish workflow"
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
