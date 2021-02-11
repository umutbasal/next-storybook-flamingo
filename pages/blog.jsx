import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/Layout/Layout'
import Button from '../components/Button/Button'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Blog({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Button>Hello</Button>
            <section>
                <h2>Blog</h2>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <br />
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            {date}
                        </li>
                    ))}
                </ul>

            </section>
        </Layout>
    )
}