import Image from 'next/image'
import LandingPage from './pages/HomePage.jsx'
import ListingPage from './pages/ShopPage.jsx'
import NavBar from './pages/NavSection.jsx'
import Footer from './pages/FooterSection.jsx'

export default function Home() {
  return (
    <div className='w-screen max-w-screen h-screen px-16 py-6 bg-white'>
      <NavBar></NavBar>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </div>
  )
}
