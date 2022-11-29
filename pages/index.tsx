import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>D&M</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    

      <Header />
       {/*Banner*/} 
      <Banner />
      

      <main className='max-w-7xl mx-auto px-10 sm:px-20'>
       <section className="pt-6 ">
          <h2 className='text-3xl font-bold pb-5'>Explore Nearby</h2>
       </section> 
      </main>

     




      
    </div>
  )
}

