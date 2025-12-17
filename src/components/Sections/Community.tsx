// src/components/Sections/Community.tsx
import { Users, MessageCircle, Twitter } from 'lucide-react'

export default function Community() {
  return (
    <section className="py-24" id="community">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 sm:p-12 text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#f53513ff]/20 via-transparent to-transparent" />
          
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Icon */}
            <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 border border-zinc-700">
              <Users className="w-8 h-8 text-[#f53513ff]" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white pixel-font mb-6 tracking-tight">
              JOIN THE TrevArts
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl text-zinc-400 mb-8 max-w-xl">
              Be part of the most innovative NFT community. Connect with holders, get exclusive updates, and shape the future.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white text-lg font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Discord
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 bg-[#1DA1F2] hover:bg-[#1A91DA] text-white text-lg font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}