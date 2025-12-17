export default function NFTMarquee() {
  const nftImages = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="w-full overflow-hidden bg-black py-4 border-y border-zinc-800">
      <div className="flex animate-marquee w-max">
        {/* First Set of NFTs */}
        <div className="flex gap-4 px-2">
          {nftImages.map((num) => (
            <div 
              key={`first-${num}`} 
              className="w-[100px] h-[100px] bg-zinc-900 rounded-lg flex-shrink-0 border border-zinc-800 p-2"
            >
              <img 
                src={`/assets/nfts/${num}.png`} 
                alt={`Trevarts ${num}`} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplicated Set for Seamless Animation */}
        <div className="flex gap-4 px-2">
          {nftImages.map((num) => (
            <div 
              key={`second-${num}`} 
              className="w-[100px] h-[100px] bg-zinc-900 rounded-lg flex-shrink-0 border border-zinc-800 p-2"
            >
              <img 
                src={`/assets/nfts/${num}.png`} 
                alt={`Trevarts ${num}`} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}