import Head from "next/head"
import About from "../components/About"
import Hero from "../components/Hero"
import Works from "../components/Works"

const Home = () => {
  return (
    <>
      <Head>
        <title>tribagus | dev</title>
        <meta
          name="description"
          content="frontend engineer backend engineer fullstack developer"
        />
        <meta
          property="og:title"
          name="Front-End Engineer | Back-End Engineer | Fullstack Developer"
        />
      </Head>
      <Hero />
      <About />
      <Works />
    </>
  )
}

export default Home
