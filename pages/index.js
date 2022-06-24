import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Login from '../components/Login';
import { getSession } from "next-auth/react"
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import { db } from '../firebase';
import Widgets from '../components/Widgets';


export default function Home({session, posts}) {

  if(!session) return <Login/>;
  
  return (
    <div className="">
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>

      <main className='flex'>
        {/* Sidebar */}
        <Sidebar/>
        <Feed posts={posts}/>
        <Widgets/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {

  const session = await getSession(context);

  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    }
  }
}
