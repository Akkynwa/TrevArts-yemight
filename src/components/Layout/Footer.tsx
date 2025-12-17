// src/components/Layout/Footer.tsx
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-12 rounded flex items-center justify-center overflow-hidden">
                <img src="/assets/logo.png" alt="TrevArts Logo" className="w-full h-full object-contain" />
              </div>
            </Link>
            <p className="text-zinc-500 text-base max-w-xs">
              Building the future of cross-chain digital collectibles on Monad.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {/* Explore Column */}
            <div>
              <h4 className="text-zinc-100 font-semibold mb-4">Explore</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><a href="#crosschain" className="hover:text-[#f53513ff] transition-colors">Cross-Chain</a></li>
                <li><a href="#staking" className="hover:text-[#f53513ff] transition-colors">Staking</a></li>
                <li><a href="#marketplace" className="hover:text-[#f53513ff] transition-colors">Marketplace</a></li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h4 className="text-zinc-100 font-semibold mb-4">Community</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><a href="#community" className="hover:text-[#f53513ff] transition-colors">Community</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f53513ff] transition-colors">Twitter</a></li>
                <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f53513ff] transition-colors">Discord</a></li>
              </ul>
            </div>

            {/* Account Column */}
            <div>
              <h4 className="text-zinc-100 font-semibold mb-4">Account</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><Link to="/profile" className="hover:text-[#f53513ff] transition-colors">Profile</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-zinc-100 font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#f53513ff] transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
          <p>© 2024 TrevArts. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}