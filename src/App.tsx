import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Hero from './components/Sections/Hero'
import NFTMarquee from './components/Sections/NFTMarquee'
import Lore from './components/Sections/Lore'
import CrossChain from './components/Sections/CrossChain'
import Staking from './components/Sections/Staking'
import Marketplace from './components/Sections/Marketplace'
import SneakPeek from './components/Sections/SneakPeek'
import Community from './components/Sections/Community'
import MusicPlayer from './components/UI/MusicPlayer'
import Dashboard from './components/Sections/Dashboard'
import WertWidgetButton from './components/Sections/WertWidgetButton'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NFTMarquee />
              <Lore />
              <CrossChain />
              <Staking />
              <Marketplace />
              <SneakPeek />
              <Community />
            </>
          } />
          <Route path="/staking" element={<StakingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nftcheckout" element={<WertWidgetButton />} />
        </Routes>
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  )
}

function StakingPage() {
  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-white">Staking Dashboard</h1>
        <p className="text-zinc-400 mt-2">Coming Soon</p>
      </div>
    </div>
  )
}

function ProfilePage() {
  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-white">Profile</h1>
        <p className="text-zinc-400 mt-2">Connect your wallet to view your profile</p>
      </div>
    </div>
  )
}

function CommunityPage() {
  return (
    <div className="pt-20">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold text-white">Community</h1>
        <p className="text-zinc-400 mt-2">Community features coming soon</p>
      </div>
    </div>
  )
}

export default App