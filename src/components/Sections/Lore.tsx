// src/components/Sections/Lore.tsx
import { BookOpen } from 'lucide-react'

export default function Lore() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden" id="lore">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f53513ff]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-10">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f53513ff]/10 border border-[#f53513ff]/20 text-[#f53513ff] text-sm font-semibold mx-auto">
          <BookOpen className="w-4 h-4" />
          ABOUT TREVARTS
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl text-white pixel-font tracking-tight leading-tight">
          THE YEAR IS <span className="text-[#f53513ff]">2069</span>
        </h2>

        {/* Lore Content */}
        <div className="space-y-8 text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
          <p>
TrevArts focuses on simplicity, accessibility, and straightforward user experience, allowing creators and buyers to interact directly without unnecessary complexity. The platform supports standard blockchain wallets and payment solutions to facilitate smooth transactions.          </p>
          <p>
TrevArts does not provide financial advice or investment services. All digital assets are offered as creative and collectible items, and users are responsible for understanding the nature of NFTs and blockchain technology before participating.          </p>
          <p>
The platform enables artists and creators to mint, showcase, and sell unique digital assets as non-fungible tokens (NFTs), using transparent on-chain technology to verify ownership and authenticity. Collectors can browse, purchase, and hold digital artworks securely through their personal wallets.          </p>
        </div>

        {/* Call to Action */}
        <div className="pt-8 space-y-4">
          <p className="text-3xl text-white pixel-font">Gather your TrevArts...</p>
          <div className="flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#f53513ff] to-transparent" />
          </div>
          <p className="text-2xl text-[#f53513ff] pixel-font animate-pulse">Heed the call and take our city back!</p>
        </div>
      </div>
    </section>
  )
}