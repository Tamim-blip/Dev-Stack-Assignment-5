
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import { NavBar } from './Components/nav-Bar/NavBar'
import TechnologyCards from './Components/TechnologyCards/TechnologyCards'
import type { DataType } from './Type'
import { Footer } from './Components/Footer/Footer'

function App() {


  const DataPromise = async (): Promise<DataType[]> => {
    const res = await fetch("/data.json")
    const data = await res.json()
    return data
  }


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <TechnologyCards DataPromise={DataPromise()}></TechnologyCards>
      </Suspense>

      <Footer></Footer>

    </>
  )
}

export default App
