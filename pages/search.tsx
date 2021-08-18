import Footer from '../components/Footer'
import Header from '../components/Header'

const Search = () => {
  return (
    <div>
      <Header />
      <main className="flex">
        <section>
          <p className="text-xs">300</p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">Stays in Mars</h1>
          <div className="hidden">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search
