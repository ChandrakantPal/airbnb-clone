import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import { City } from '../types'

const Home = ({ expoloreData, cardData }) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="px-8 mx-auto max-w-7xl sm:px-16">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {expoloreData?.map(({ img, location, distance }: City) => (
              <SmallCard
                img={img}
                distance={distance}
                location={location}
                key={img}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="py-8 text-4xl font-semibold">Live Anywhere</h2>
        </section>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const expoloreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      expoloreData,
      cardData,
    },
  }
}
