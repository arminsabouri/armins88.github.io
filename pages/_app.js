const { ChakraProvider } = require('@chakra-ui/react')
import Fonts from '../components/fonts'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Fonts />
      <NavBar path={router.asPath} />
      <Component {...pageProps} key={router.route} />
      <Footer />
    </ChakraProvider>
  )
}

export default Website
