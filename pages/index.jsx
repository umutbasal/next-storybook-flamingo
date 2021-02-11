import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import { Button } from '../components/Button/Button'

export async function getServerSideProps(context) {
    const whatsmyip = await (await fetch('https://api.ipify.org?format=json')).json();
    return {
      props: {
        whatsmyip
      }
    }
  }

export default function Home({whatsmyip}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <Button>Hello</Button>
      <section>
        <p>{whatsmyip.ip}</p>
     <Link href="/blog"> Blog</Link> 
        <p>Your Self Introduction</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href="/posts/readme">Read me</Link>
        </p>
      </section>
    </Layout>
  )
}