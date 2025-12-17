// src/components/Sections/Hero.tsx
import { Sparkles, ArrowDown } from 'lucide-react'
import WertWidget from "../../widget-initializer-master/index";


function openWert() {
  const widget = new WertWidget({
    partner_id: "01KC903Q0NY0H61RZ17G8H26T3",
    origin: "https://widget.wert.io",
    address: "0xCBa0b4c60626a3a672C65fA16dB09C776615745c",
    network: "ethereum",
    commodity: "USDT",
    lang: "en",

    listeners: {
      close: () => console.log("Widget closed"),
      "payment-status": (data) => console.log("Payment status", data),
      error: (err) => console.error("Wert error", err)
    }
  });

  widget.open();
}

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#f53513ff]/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Launch Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f53513ff]/10 border border-[#f53513ff]/20 text-[#f53513ff] text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f53513ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f53513ff]" />
            </span>
            Launching December 12, 2024
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-white tracking-tight pixel-font">
            TrevArts <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f53513ff] via-[#a8d904] to-[#f53513ff] bg-[length:200%_auto] animate-gradient">
              DIGITAL SOCIETY
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            TrevArts is a digital marketplace dedicated to the creation and sale of <strong className="text-white">blockchain-based</strong> digital art and collectibles. It is building the infrastructure to power the next generation of digital ownership and creativity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a className="px-8 py-4 bg-[#f53513ff] text-zinc-950 text-lg font-bold rounded-lg hover:bg-[#d4ff33] hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
            onClick={openWert}
            >
              Mint Now
              <Sparkles className="w-5 h-5" />
            </a>
            <a
              href="#lore"
              className="px-8 py-4 bg-transparent border-2 border-[#f53513ff]/30 text-zinc-200 text-lg font-medium rounded-lg hover:bg-[#f53513ff]/10 hover:border-[#f53513ff] transition-all flex items-center justify-center gap-2"
            >
              Learn More
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-zinc-500">
            <div>
              <p className="text-2xl sm:text-3xl text-white pixel-font">5,000</p>
              <p className="text-sm font-medium uppercase tracking-wide">Supply</p>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <div>
              <p className="text-2xl sm:text-3xl text-white pixel-font">Dec 12</p>
              <p className="text-sm font-medium uppercase tracking-wide">Launch</p>
            </div>
            <div className="w-px h-10 bg-zinc-800" />
            <div>
              <p className="text-2xl sm:text-3xl text-[#f53513ff] pixel-font">2</p>
              <p className="text-sm font-medium uppercase tracking-wide">Chains</p>
            </div>
          </div>
        </div>

        {/* Right - NFT Preview */}
        <div className="relative lg:h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#f53513ff]/10 to-[#a8d904]/10 rounded-3xl blur-2xl" />
          <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-2xl shadow-black/50 hover:border-[#f53513ff]/50 transition-all duration-500">
            <div className="aspect-square w-full bg-zinc-950 rounded-xl overflow-hidden relative flex items-center justify-center">
              <img
                src="/assets/nfts/home.png"
                alt="TrevArts NFT"
                className="w-3/4 h-3/4 object-contain transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="mt-5 space-y-3 px-2 pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl sm:text-2xl text-white pixel-font">TrevArts #1</h3>
                  <p className="text-base sm:text-lg text-zinc-500">OtherSide Avatar</p>
                </div>
                <div className="bg-zinc-800 p-2 rounded-lg border border-zinc-700">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#f53513ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3h12l4 6-10 13L2 9Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3 8 9l4 13 4-13-3-6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 9h20" />
                  </svg>
                </div>
              </div>
              <div className="h-px w-full bg-zinc-800/50" />
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-zinc-500">Mint Price</span>
                <span className="text-white flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#f53513ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                    <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                  </svg>
                  650 MON
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}