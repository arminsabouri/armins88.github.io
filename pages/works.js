import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/gridItem'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop">
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
          <WorkGridItem id="inkdrop" title="Inkdrop">
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
          <WorkGridItem id="inkdrop" title="Inkdrop">
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
          <WorkGridItem id="inkdrop" title="Inkdrop">
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
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
