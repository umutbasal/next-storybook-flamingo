import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import useSWR from 'swr'

export default function FirstPost() {
  const { data, error } = useSWR('https://api64.ipify.org?format=json')
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <p>
        {data.ip} {' '}
        lorem ipsum dolor sit amet, consectet
      </p>
    </Layout>
  )
}