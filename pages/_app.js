import NavBar from '@/components/Navbar'
import '@/styles/globals.css'
import '@/components/Navbar.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    </>

  )
}
