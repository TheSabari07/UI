import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Manifesto from '../components/Manifesto.jsx'
import CorePillars from '../components/CorePillars.jsx'
import IndustrialDivider from '../components/IndustrialDivider.jsx'
import StreetzMedia from '../components/StreetzMedia.jsx'
import Footer from '../components/Footer.jsx'

function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-b from-[#050505] via-[#0b0b0d] to-[#101013] text-gray-200">
      <Navbar />
      <Hero />
      <Manifesto />
      <CorePillars />
      <IndustrialDivider />
      <StreetzMedia />
      <Footer />
    </div>
  )
}

export default Home

