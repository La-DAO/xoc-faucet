'use client';
import Header from './components/Header'
import MainContent from './components/MainContent'
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { sepolia, goerli, polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
 
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia, goerli, polygonMumbai],
  [publicProvider()],
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new InjectedConnector({chains})
  ],
  publicClient,
  webSocketPublicClient,
})

export default function Home() {
  return (
    <WagmiConfig config={config}>
    <main className="flex min-h-screen flex-col items-center px-[12rem]  w-[100vw]">
      <Header/>
      <MainContent/>
    </main>
    </WagmiConfig>
  )
}
