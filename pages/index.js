import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram 2.0 Clone</title>
        <link rel="icon" href="/instagram-logo-svg-vector-for-print.svg" />
      </Head>
      {/* header */}
        <Header />
      {/* Feed */}
        <Feed />
      {/* modal */}
      <Modal />
    </div>
  )
}
