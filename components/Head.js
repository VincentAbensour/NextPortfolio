import Head from 'next/head'

function IndexPage(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" src="/logo/logo.png" />
      </Head>
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage