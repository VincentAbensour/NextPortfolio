import Layout from '@component/components/Layout'
import {Poppins} from 'next/font/google'
import '@component/styles/globals.css'

const poppins = Poppins({
  weight:['300','400','500','600','700'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
