import Image from 'next/image'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import NavBar from './pages/NavSection.jsx'
import Footer from './pages/FooterSection.jsx'
import ListingPage from './pages/ListingPage.jsx'

export default function Home() {
  return (
    <div className='w-screen max-w-screen h-screen px-16 py-6 bg-white'>
      <NavBar></NavBar>
      <ListingPage></ListingPage>
      <Footer></Footer>
    </div>
  )
}
