import '../styles/globals.css'
import CryptoContext from '../CryptoContext'

function MyApp({ Component, pageProps }) {
  return <CryptoContext><Component {...pageProps} /></CryptoContext>
}

export default MyApp
