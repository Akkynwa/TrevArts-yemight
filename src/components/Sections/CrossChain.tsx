// src/components/Sections/CrossChain.tsx
import { Zap, Shield, Globe, ArrowLeftRight, Check } from 'lucide-react'

export default function CrossChain() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden" id="crosschain">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f53513ff]/5 blur-[150px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f53513ff]/10 border border-[#f53513ff]/20 text-[#f53513ff] text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            ERC721-SHADOW PROTOCOL
          </div>
          <h2 className="text-4xl md:text-5xl text-white pixel-font mb-6 tracking-tight">ONE NFT, TWO CHAINS</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Your Trevarts exists on <strong className="text-white">Monad</strong> and automatically mirrors to <strong className="text-white">ApeChain</strong>. Every transfer, every trade—ownership stays perfectly synced across both blockchains.
          </p>
        </div>

        {/* Chain Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Monad Chain */}
            <div className="relative p-8 rounded-2xl border-2 border-zinc-800 bg-zinc-900/30">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border-2 border-zinc-700">
                  <img src="https://app.monad.xyz/favicon.ico" alt="Monad Logo" className="w-10 h-10" />
                </div>
                <h3 className="text-2xl text-white font-bold">Monad</h3>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Primary Chain</p>
                <div className="pt-4">
                  <div className="text-xs text-zinc-600 mb-2">NFT Owner</div>
                  <div className="px-3 py-2 bg-zinc-800 rounded-lg text-xs font-mono text-[#f53513ff] truncate">0x742d...3f4a</div>
                </div>
              </div>
            </div>

            {/* Sync Arrow */}
            <div className="relative flex flex-col items-center justify-center py-8">
              <div className="relative">
                <ArrowLeftRight className="w-12 h-12 text-[#f53513ff] rotate-180" />
                <div className="absolute -inset-4 bg-[#f53513ff]/20 rounded-full blur-xl animate-pulse" />
              </div>
              <div className="mt-6 space-y-2 text-center">
                <p className="text-sm font-bold text-[#f53513ff] uppercase tracking-wider">Auto-Sync</p>
                <p className="text-xs text-zinc-500 max-w-[150px]">Ownership updates in real-time</p>
              </div>
            </div>

            {/* ApeChain Chain */}
            <div className="relative p-8 rounded-2xl border-2 border-[#0054FA] bg-[#0054FA]/5 scale-105">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-zinc-900 rounded-full flex items-center justify-center border-2 border-zinc-700 p-3">
                  <img src="/assets/apechainlogo.svg" alt="ApeChain Logo" className="w-full h-full" />
                </div>
                <h3 className="text-2xl text-white font-bold">ApeChain</h3>
                <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Shadow Chain</p>
                <div className="pt-4">
                  <div className="text-xs text-zinc-600 mb-2">Mirrored Owner</div>
                  <div className="px-3 py-2 bg-zinc-800 rounded-lg text-xs font-mono text-[#0054FA] truncate">0x742d...3f4a</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0054FA] rounded-full flex items-center justify-center animate-pulse">
                <Check className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            
            {/* No Bridging Risk */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-[#f53513ff]/30 transition-all">
              <div className="w-12 h-12 bg-[#f53513ff]/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#f53513ff]" />
              </div>
              <h4 className="text-lg text-white font-semibold mb-2">No Bridging Risk</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">Your NFT never leaves Monad. The shadow copy updates automatically—no bridges, no risk.</p>
            </div>

            {/* Instant Sync */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-[#f53513ff]/30 transition-all">
              <div className="w-12 h-12 bg-[#f53513ff]/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#f53513ff]" />
              </div>
              <h4 className="text-lg text-white font-semibold mb-2">Instant Sync</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">Oracle-powered updates ensure your ownership is reflected across chains in real-time.</p>
            </div>

            {/* Multi-Chain Utility */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-[#f53513ff]/30 transition-all">
              <div className="w-12 h-12 bg-[#f53513ff]/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#f53513ff]" />
              </div>
              <h4 className="text-lg text-white font-semibold mb-2">Multi-Chain Utility</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">Access exclusive features and communities on both Monad and ApeChain ecosystems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}