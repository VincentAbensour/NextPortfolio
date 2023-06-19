import Head from 'next/head'

function IndexPage(props) {
  return (
      <Head>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Voici mon site personnel de développeur web où vous pourrez retrouver mes projets, ma biographie. N'hésitez pas à me contacter pour votre projet web!"
          keyword="desc"
        />
        <link rel="icon" type="image/png" href="/logo/logo.png" />
      </Head>
  )
}

export default IndexPage