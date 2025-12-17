import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SneakPeek() {
  const sneakPeekNFTs = [3, 9, 15, 18];

  return (
    <section className="py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl text-zinc-100 pixel-font mb-2 tracking-tight">SNEAK PEEK</h2>
            <p className="text-lg text-zinc-500">Preview of the collection</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sneakPeekNFTs.map((num) => (
            <div 
              key={num} 
              className="group relative aspect-square bg-zinc-950 rounded-xl overflow-hidden cursor-pointer flex items-center justify-center border border-zinc-800 hover:border-[#f53513ff]/50 transition-all"
            >
              <img 
                src={`/assets/nfts/${num}.png`} 
                className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                alt={`NFT ${num}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}