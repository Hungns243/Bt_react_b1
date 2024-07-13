import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Banner from './components/Banner'
import Item from './components/Item'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Item/>
      <Footer/>
    </>
  )
}

export default App
