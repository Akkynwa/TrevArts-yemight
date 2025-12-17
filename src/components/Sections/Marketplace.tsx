// components/MarketplaceSection.tsx
import React from 'react';

const Marketplace: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden" id="marketplace">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f53513ff]/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f53513ff]/10 border border-[#f53513ff]/20 text-[#f53513ff] text-sm font-semibold mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-shopping-bag w-4 h-4"
              aria-hidden="true"
            >
              <path d="M16 10a4 4 0 0 1-8 0"></path>
              <path d="M3.103 6.034h17.794"></path>
              <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
            </svg>
            $TREVARTS MARKETPLACE
          </div>
          <h2 className="text-5xl text-zinc-100 pixel-font mb-6 tracking-tight">SHOP WITH $TREVART</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Use your $TREVART tokens to purchase exclusive NFTs, raffle tickets, and even cross-chain assets from ApeChain—all on Monad.
          </p>
        </div>

        {/* Marketplace Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* NFT Product */}
            <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#f53513ff]/50 transition-all duration-300">
              <div className="aspect-square bg-zinc-950 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f53513ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="/assets/nfts/2.png" 
                  alt="Trevarts NFT" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#f53513ff] rounded-full text-xs font-bold text-zinc-950">NFT</div>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h4 className="text-lg text-zinc-100 font-bold">Trevarts #2847</h4>
                  <p className="text-sm text-zinc-500">Legendary Trait</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                  <span className="text-sm text-zinc-500">Price</span>
                  <span className="text-lg text-[#f53513ff] font-bold pixel-font">500 $TREVART</span>
                </div>
                <button className="w-full px-4 py-3 bg-[#f53513ff] text-zinc-950 font-bold rounded-lg hover:bg-[#d4ff33] transition-colors">
                  Purchase
                </button>
              </div>
            </div>

            {/* Raffle Ticket Product */}
            <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#f53513ff]/50 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-zinc-950 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-purple-500/20 rounded-2xl flex items-center justify-center border-2 border-purple-500/30 group-hover:scale-110 transition-transform">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="lucide lucide-ticket w-12 h-12 text-purple-400"
                      aria-hidden="true"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                      <path d="M13 5v2"></path>
                      <path d="M13 17v2"></path>
                      <path d="M13 11v2"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-4xl text-purple-400 pixel-font">RAFFLE</div>
                    <div className="text-sm text-zinc-500 mt-2">Grand Prize Draw</div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-purple-500 rounded-full text-xs font-bold text-white">TICKET</div>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h4 className="text-lg text-zinc-100 font-bold">Premium Raffle Entry</h4>
                  <p className="text-sm text-zinc-500">Win exclusive rewards</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                  <span className="text-sm text-zinc-500">Price</span>
                  <span className="text-lg text-[#f53513ff] font-bold pixel-font">100 $TREVART</span>
                </div>
                <button className="w-full px-4 py-3 bg-[#f53513ff] text-zinc-950 font-bold rounded-lg hover:bg-[#d4ff33] transition-colors">
                  Purchase
                </button>
              </div>
            </div>

            {/* Cross-Chain Product */}
            <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-[#0054FA]/50 transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-zinc-950 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-blue-500/20 rounded-2xl flex items-center justify-center border-2 border-blue-500/30 p-4 group-hover:scale-110 transition-transform">
                    <img 
                      src="/assets/apechainlogo.svg" 
                      alt="ApeChain Logo" 
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-2xl text-blue-400 pixel-font">APECHAIN</div>
                    <div className="text-sm text-zinc-500 mt-2">Cross-Chain NFT</div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#0054FA] rounded-full text-xs font-bold text-white flex items-center gap-1">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-arrow-left-right w-3 h-3"
                    aria-hidden="true"
                  >
                    <path d="M8 3 4 7l4 4"></path>
                    <path d="M4 7h16"></path>
                    <path d="m16 21 4-4-4-4"></path>
                    <path d="M20 17H4"></path>
                  </svg>
                  CROSS-CHAIN
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h4 className="text-lg text-zinc-100 font-bold">ApeChain Collectible</h4>
                  <p className="text-sm text-zinc-500">Buy from ApeChain on Monad</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                  <span className="text-sm text-zinc-500">Price</span>
                  <span className="text-lg text-[#f53513ff] font-bold pixel-font">750 $TREVART</span>
                </div>
                <button className="w-full px-4 py-3 bg-[#f53513ff] text-zinc-950 font-bold rounded-lg hover:bg-[#d4ff33] transition-colors">
                  Purchase
                </button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {/* $TREVART Exclusive */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 text-center">
              <div className="w-12 h-12 mx-auto bg-[#f53513ff]/10 rounded-lg flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-coins w-6 h-6 text-[#f53513ff]"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="6"></circle>
                  <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                  <path d="M7 6h1v4"></path>
                  <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                </svg>
              </div>
              <h4 className="text-lg text-zinc-100 font-semibold mb-2">$TREVART Exclusive</h4>
              <p className="text-sm text-zinc-500">All purchases powered by $TREVART tokens</p>
            </div>

            {/* Multi-Chain Access */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 text-center">
              <div className="w-12 h-12 mx-auto bg-[#f53513ff]/10 rounded-lg flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-layers w-6 h-6 text-[#f53513ff]"
                  aria-hidden="true"
                >
                  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                </svg>
              </div>
              <h4 className="text-lg text-zinc-100 font-semibold mb-2">Multi-Chain Access</h4>
              <p className="text-sm text-zinc-500">Buy assets from multiple blockchains</p>
            </div>

            {/* Exclusive Drops */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 text-center">
              <div className="w-12 h-12 mx-auto bg-[#f53513ff]/10 rounded-lg flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-sparkles w-6 h-6 text-[#f53513ff]"
                  aria-hidden="true"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
              </div>
              <h4 className="text-lg text-zinc-100 font-semibold mb-2">Exclusive Drops</h4>
              <p className="text-sm text-zinc-500">Limited edition items for holders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;