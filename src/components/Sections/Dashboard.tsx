import { useState, useEffect } from "react";

export default function Dashboard() {
  // 🔹 LIVE STATE (can later be replaced with API / contract calls)
  const [activeMissions, setActiveMissions] = useState(0);
  const [nftsDeployed, setNftsDeployed] = useState(0);
  const [rewardsDistributed, setRewardsDistributed] = useState(0);
  const [contractBalance, setContractBalance] = useState(0);

  // 🔹 Example: simulate live updates (remove later)
  useEffect(() => {
    const interval = setInterval(() => {
      setRewardsDistributed((v) => v);
      setContractBalance((v) => v);
      setNftsDeployed((v) => v);
      setActiveMissions((v) => v);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
                <div className="h-20"></div>
      {/* ========== COVERT MISSIONS HEADER SECTION ========== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* ========== HEADER CONTENT ========== */}
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
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
              className="lucide lucide-zap w-4 h-4 text-cyan-400"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
            </svg>
            <span className="text-cyan-400 text-sm font-medium">
              DEPLOY YOUR TrevArts
            </span>
          </div>

          {/* Main Title */}
          <h1 className="pixel-font text-5xl sm:text-7xl text-white mb-4">
            <span className="text-cyan-400">COVERT</span> TrevArts Missions (Soft
            Staking)
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            In the neon-lit streets of the New New York underground, your
            TrevArts can be deployed on covert operations. The longer the
            mission, the greater the{" "}
            <span className="text-cyan-400 font-semibold">$TREVART</span> rewards.
          </p>

          {/* Safety Notice */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl mb-8">
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
              className="lucide lucide-shield w-5 h-5 text-emerald-400"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
            <span className="text-emerald-400 font-medium">
              Your NFTs never leave your wallet
            </span>
          </div>
        </div>

        {/* ========== STATS GRID ========== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {/* Active Missions */}
          <div className="p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
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
              className="lucide lucide-users w-6 h-6 mb-2"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <path d="M16 3.128a4 4 0 0 1 0 7.744" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            <p className="text-2xl font-bold text-white">
              {activeMissions}
            </p>
            <p className="text-sm opacity-70">Active Missions</p>
          </div>

          {/* NFTs Deployed */}
          <div className="p-4 rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-400">
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
              className="lucide lucide-layers w-6 h-6 mb-2"
            >
              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
            </svg>
            <p className="text-2xl font-bold text-white">
              {nftsDeployed}
            </p>
            <p className="text-sm opacity-70">NFTs Deployed</p>
          </div>

          {/* Rewards */}
          <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
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
              className="lucide lucide-coins w-6 h-6 mb-2"
            >
              <circle cx="8" cy="8" r="6" />
              <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
              <path d="M7 6h1v4" />
              <path d="m16.71 13.88.7.71-2.82 2.82" />
            </svg>
            <p className="text-2xl font-bold text-white">
              {rewardsDistributed}{" "}
              <span className="text-sm ml-1 opacity-70">$TREVART</span>
            </p>
            <p className="text-sm opacity-70">Rewards Distributed</p>
          </div>

          {/* Contract Balance */}
          <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
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
              className="lucide lucide-wallet w-6 h-6 mb-2"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
            </svg>
            <p className="text-2xl font-bold text-white">
              {contractBalance}{" "}
              <span className="text-sm ml-1 opacity-70">$TREVART</span>
            </p>
            <p className="text-sm opacity-70">Contract Balance</p>
          </div>
        </div>

        {/* ========== CONNECT WALLET SECTION ========== */}
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
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
              className="lucide lucide-wallet w-10 h-10 text-cyan-400"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
              <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
            </svg>
          </div>

          <h2 className="pixel-font text-3xl text-white mb-4">
            Connect Wallet
          </h2>
          <p className="text-zinc-400 mb-6">
            Connect your wallet to deploy your TrevArts on missions
          </p>
        </div>
      </div>
    </>
  );
}
