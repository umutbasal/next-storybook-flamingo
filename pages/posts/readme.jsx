import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <p>
        lorem ipsum dolor sit amet, consectet
      </p>
    </Layout>
  )
}