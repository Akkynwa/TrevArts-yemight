// src/components/Sections/Staking.tsx
import { TrendingUp, Star, Users, Lock, Info, Coins, Layers, Wallet } from 'lucide-react'

export default function Staking() {
  const stats = [
    { value: 39, label: 'Active Missions', icon: Users, color: 'cyan' },
    { value: 150, label: 'NFTs Deployed', icon: Layers, color: 'fuchsia' },
    { value: 0, label: 'Rewards Distributed', icon: Coins, color: 'yellow', currency: true },
    { value: 0, label: 'Contract Balance', icon: Wallet, color: 'emerald', currency: true },
  ]

  return (
    <section className="py-24 bg-zinc-900/30 relative overflow-hidden" id="staking">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f53513ff]/10 border border-[#f53513ff]/20 text-[#f53513ff] text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            SOFT STAKING
          </div>
          <h2 className="text-4xl md:text-5xl text-white pixel-font mb-6 tracking-tight">EARN $TREVART DAILY</h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">
            Stake your TrevArts and earn $TREVART tokens every day. No lock-ups, no penalties—just passive rewards for being part of the community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className={`p-4 rounded-xl border border-${stat.color}-500/30 bg-${stat.color}-500/10 text-${stat.color}-400`}>
              <stat.icon className="w-6 h-6 mb-2" />
              <p className="text-2xl font-bold text-white">
                {stat.value}
                {stat.currency && <span className="text-sm ml-1 opacity-70">$TREVART</span>}
              </p>
              <p className="text-sm opacity-70">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Staking Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column - Staking Rewards */}
          <div className="relative p-8 rounded-2xl border-2 border-[#f53513ff]/30 bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f53513ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl text-white font-bold">Staking Rewards</h3>
                <div className="px-3 py-1 bg-[#f53513ff]/20 rounded-full text-xs font-bold text-[#f53513ff] uppercase">Coming Soon</div>
              </div>
              
              <div className="space-y-6">
                {/* Base Reward Card */}
                <div className="p-6 bg-zinc-950/50 rounded-xl border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-zinc-500 uppercase tracking-wide">Base Reward</span>
                    <Info className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div className="text-3xl text-[#f53513ff] pixel-font">TBA $TREVART</div>
                  <div className="text-sm text-zinc-600 mt-1">per NFT / per day</div>
                </div>

                {/* Rarity & Multiplier Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800">
                    <div className="text-xs text-zinc-500 uppercase tracking-wide mb-2">Rarity Boost</div>
                    <div className="text-xl text-white font-bold">Up to 5x</div>
                  </div>
                  <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800">
                    <div className="text-xs text-zinc-500 uppercase tracking-wide mb-2">Holder Multiplier</div>
                    <div className="text-xl text-white font-bold">Quantity Based</div>
                  </div>
                </div>

                {/* Staking Button */}
                <button className="w-full px-6 py-4 bg-zinc-800 text-zinc-400 text-lg font-bold rounded-lg cursor-not-allowed flex items-center justify-center gap-2">
                  <Lock className="w-5 h-5" />
                  Staking Opens Dec 12
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            
            {/* Rarity Multipliers Card */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f53513ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-[#f53513ff]" />
                </div>
                <div>
                  <h4 className="text-lg text-white font-semibold mb-2">Rarity Multipliers</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    Rare traits earn more. Higher rarity TrevArts earn significantly higher rewards.
                  </p>
                  <div className="space-y-2">
                    {['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythics 1 of 1'].map((rarity, index) => (
                      <div key={rarity} className="flex items-center justify-between text-sm">
                        <span className={index >= 4 ? 'text-[#f53513ff]' : 'text-zinc-400'}>
                          {rarity}
                        </span>
                        <span className={index >= 4 ? 'text-[#f53513ff] font-bold' : 'text-zinc-300 font-semibold'}>
                          TBA
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Holder Bonuses Card */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f53513ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#f53513ff]" />
                </div>
                <div>
                  <h4 className="text-lg text-white font-semibold mb-2">Holder Bonuses</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    The more TrevArts you hold, the higher your rewards multiplier.
                  </p>
                  <div className="space-y-2">
                    {[
                      { range: '1-2 NFTs', bonus: 'Base Rate' },
                      { range: '3-5 NFTs', bonus: '+10%' },
                      { range: '6-10 NFTs', bonus: '+25%' },
                      { range: '10+ NFTs', bonus: '+50%' },
                    ].map((item, index) => (
                      <div key={item.range} className="flex items-center justify-between text-sm">
                        <span className={index >= 3 ? 'text-[#f53513ff]' : 'text-zinc-400'}>
                          {item.range}
                        </span>
                        <span className={index >= 3 ? 'text-[#f53513ff] font-bold' : 'text-zinc-300 font-semibold'}>
                          {item.bonus}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Staking Card */}
            <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#f53513ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-[#f53513ff]" />
                </div>
                <div>
                  <h4 className="text-lg text-white font-semibold mb-2">Soft Staking</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    No lock-ups required. Unstake anytime, trade freely, and keep earning rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}