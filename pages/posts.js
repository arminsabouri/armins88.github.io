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
    </Container>
  </Layout>
)

export default Posts
