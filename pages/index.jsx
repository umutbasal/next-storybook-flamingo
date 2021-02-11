import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'

import { Button } from '../components/Button/Button'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <Button>Hello</Button>
      <section>
        <p>Your Self Introduction</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <Link href="/posts/readme">Read me</Link>
        </p>
      </section>
    </Layout>
  )
}