import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'TrevArts NFT',
  projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // Get from walletconnect.com
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false,
})