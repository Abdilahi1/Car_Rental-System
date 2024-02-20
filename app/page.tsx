
import Image from 'next/image'
import {CustomFilter, Hero, SearchBar, ContactS} from '@/components'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x paddin-y max-width' id='discover'>
      <div className='home__text-container'>
      <h1 className='tex-4xl font-extrabold '> Car Cataloge</h1>
      <p> Explore many cars as you want</p>
      </div>
      <div className='home__filters'>
        <SearchBar />

        <div
        className='home__filter-container'>
          <CustomFilter title="fuel" />
          <CustomFilter title="fuel" />


        </div>
        </div>
      </div>
        
    </main>
  )
}
