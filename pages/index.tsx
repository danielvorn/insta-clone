import type {NextPage} from 'next'
import Head from 'next/head'
import Header from "../components/Header";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Instagram 2.0 YouTube</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/* Header */}
            <Header/>
            {/* Feed */}
            {/* Modal */}
        </div>
    )
}

export default Home
