const { ChakraProvider } = require('@chakra-ui/react')
import Layout from '../layouts/main'
import Fonts from '../components/fonts'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
