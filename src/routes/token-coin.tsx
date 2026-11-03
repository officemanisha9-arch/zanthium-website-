import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/token-coin')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <SEO title="Token Coin | Zanthium Technosoft" />

      {/* Hero */}
      <section className="bg-[#dce8f5] px-6 py-16 lg:py-20 mt-7">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#7a0e0e] leading-tight mb-6">
                Professional Token<br />& Coin<br />Development
              </h1>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Custom coin &amp; token development tailored for DeFi, NFT, DAO,
                and more. Get expert help from concept to deployment.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#f5b800] text-black font-black uppercase tracking-widest text-md hover:bg-[#e0a800] transition-colors duration-300"
              >
                Get Started Today
              </a>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="/blockchain/token.svg"
                alt="Token & Coin Development"
                className="w-full max-w-sm object-contain drop-shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Token Use Cases */}
      <section className="bg-[#f4f4f8] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7a0e0e] mb-4">
              Token Use Cases
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                img: '/blockchain/defi.jfif',
                label: 'DeFi Protocols',
                body: 'Utility tokens for decentralized exchanges, lending platforms, and yield farming',
              },
              {
                img: '/blockchain/digital.jpg',
                label: 'Digital Collectibles',
                body: 'NFTs for art, music, videos, and digital ownership verification',
              },
              {
                img: '/blockchain/DAO.jpg',
                label: 'DAO Governance',
                body: 'Voting tokens for decentralized autonomous organizations',
              },
            ].map(({ img, label, body }) => (
              <div key={label} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-[200px] overflow-hidden">
                  <img src={img} alt={label} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{label}</h3>
                  <p className="text-gray-600 text-md leading-relaxed">{body}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Our Token Development Services */}
      <section className="bg-[#f4f4f8] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7a0e0e] mb-4">
              Our Token Development Services
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: 'Fungible Tokens',
                body: 'Create interchangeable tokens with identical value, perfect for cryptocurrencies, utility tokens, and stablecoins.',
                features: [
                  'ERC-20, BEP-20, SPL standards',
                  'Custom tokenomics design',
                  'Minting/burning functionality',
                  'Multi-chain compatibility',
                  'Staking and reward mechanisms',
                ],
              },
              {
                title: 'Non-Fungible Tokens (NFTs)',
                body: 'Develop unique digital assets with provable ownership for art, collectibles, and more.',
                features: [
                  'ERC-721, ERC-1155 standards',
                  'Royalty distribution systems',
                  'Metadata customization',
                  'Lazy minting solutions',
                  'Cross-marketplace compatibility',
                ],
              },
              {
                title: 'Security Tokens',
                body: 'Compliant digital securities representing real-world assets with regulatory frameworks.',
                features: [
                  'ERC-1400, ST-20 standards',
                  'KYC/AML integration',
                  'Transfer restrictions',
                  'Dividend distribution',
                  'Regulatory compliance',
                ],
              },
              {
                title: 'Governance Tokens',
                body: 'Create tokens that enable decentralized decision-making for DAOs and protocols.',
                features: [
                  'Voting mechanisms',
                  'Proposal systems',
                  'Delegation features',
                  'Quadratic voting',
                  'Treasury management',
                ],
              },
              {
                title: 'Native Blockchain Coins',
                body: 'Develop the core cryptocurrency for your custom blockchain network.',
                features: [
                  'Custom consensus mechanisms',
                  'Wallet integration',
                  'Block explorer support',
                  'Mining/staking systems',
                  'Cross-chain bridges',
                ],
              },
              {
                title: 'Stablecoin Development',
                body: 'Create price-stable cryptocurrencies pegged to assets like fiat or commodities.',
                features: [
                  'Fiat-collateralized',
                  'Crypto-collateralized',
                  'Algorithmic models',
                  'Rebasing mechanisms',
                  'Regulatory compliance',
                ],
              },
            ].map(({ title, body, features }) => (
              <div
  key={title}
  className="bg-white rounded-2xl p-7 shadow-sm border-t-4 border-[#7a0e0e] hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
>
  <h3 className="text-lg font-bold text-gray-900 mb-3 min-h-[56px]">
    {title}
  </h3>

  <p className="text-gray-600 text-md leading-relaxed mb-5 min-h-[96px]">
    {body}
  </p>

  <ul className="space-y-2 flex-grow">
    {features.map((f) => (
      <li
        key={f}
        className="flex items-start gap-2 text-gray-700 text-md"
      >
        <span className="w-[5px] h-[5px] rounded-full bg-[#7a0e0e] mt-[7px] flex-shrink-0"></span>
        {f}
      </li>
    ))}
  </ul>
</div>
            ))}

          </div>
        </div>
      </section>

      {/* Supported Token Standards */}
      <section className="bg-[#111111] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Supported Token Standards
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {[
              {
                title: 'Ethereum Standards',
                items: [
                  'ERC-20 (Fungible Tokens)',
                  'ERC-721 (NFTs)',
                  'ERC-1155 (Multi-Token)',
                  'ERC-1400 (Security Tokens)',
                  'ERC-4626 (Tokenized Vaults)',
                ],
              },
              {
                title: 'Binance Smart Chain',
                items: [
                  'BEP-20 (Fungible)',
                  'BEP-721 (NFTs)',
                  'BEP-1155 (Multi-Token)',
                ],
              },
              {
                title: 'Solana',
                items: [
                  'SPL Tokens',
                  'Token-2022 Program',
                  'NFT Standards',
                ],
              },
              {
                title: 'Other Blockchains',
                items: [
                  'Polygon (ERC standards)',
                  'Avalanche (ARC-20)',
                  'TRON (TRC-20/721)',
                  'Cosmos (CW-20)',
                ],
              },
            ].map(({ title, items }) => (
              <div
  key={title}
  className="bg-[#1e1e1e] rounded-xl p-7 border border-[#2a2a2a] hover:border-[#f5b800]/40 transition-colors duration-300 h-full flex flex-col"
>
  <h3 className="text-[#f5b800] font-bold text-lg min-h-[66px] flex items-center">
    {title}
  </h3>

  <ul className="space-y-2 flex-grow">
    {items.map((item) => (
      <li
        key={item}
        className="text-gray-300 text-md leading-relaxed"
      >
        {item}
      </li>
    ))}
  </ul>
</div>
            ))}

          </div>
        </div>
      </section>

    </div>
  )
}