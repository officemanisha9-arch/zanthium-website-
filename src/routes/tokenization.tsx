import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/tokenization')({
  component: RouteComponent,
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const platformFeatures = [
  { tag: 'Enhanced Security', desc: 'Military-grade encryption and multi-signature wallets ensure your digital assets are protected from unauthorized access.' },
  { tag: 'High Performance', desc: 'Process thousands of transactions per second with our optimized blockchain infrastructure and consensus mechanisms.' },
  { tag: 'Regulatory Compliance', desc: 'Stay compliant with global regulations through our built-in KYC/AML verification and reporting tools.' },
  { tag: 'Scalable Infrastructure', desc: 'Our platform grows with your business, supporting everything from small projects to enterprise-level tokenization.' },
  { tag: 'Seamless Integration', desc: 'Connect with existing systems through our comprehensive APIs and developer-friendly documentation.' },
  { tag: 'Immutable Records', desc: 'Leverage the power of blockchain to create tamper-proof records of ownership and transaction history.' },
]

const tabs = [
  {
    key: 'real-estate',
    label: 'Real Estate',
    title: 'Real Estate Tokenization',
    img: '/blockchain/real_state.svg',
    p1: 'Fractionalize property ownership and unlock liquidity in traditionally illiquid markets. Our platform enables you to tokenize residential, commercial, and industrial real estate assets, making them accessible to a global investor base.',
    p2: 'With smart contract automation, investors can receive automated dividend payments and participate in governance decisions. All property details and ownership records are immutably stored on the blockchain.',
  },
  {
    key: 'financial',
    label: 'Financial Assets',
    title: 'Financial Assets Tokenization',
    img: '/blockchain/assets.svg',
    p1: 'Transform traditional financial instruments like stocks, bonds, and commodities into digital tokens. Our platform ensures compliance with securities regulations while enabling 24/7 trading on global markets.',
    p2: 'Tokenization reduces settlement times from days to minutes and eliminates intermediaries, significantly lowering transaction costs. Built-in compliance mechanisms ensure only eligible investors can participate.',
  },
  {
    key: 'supply-chain',
    label: 'Supply Chain',
    title: 'Supply Chain Tokenization',
    img: '/blockchain/suply_chain.svg',
    p1: 'Create digital twins of physical goods and track them throughout the supply chain. Each product is represented by a unique token that contains all relevant information about its origin, journey, and authenticity.',
    p2: 'Our solution increases transparency, reduces counterfeit goods, and streamlines logistics. Smart contracts automate payments and transfer of ownership as goods move through the supply chain.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

function RouteComponent() {
  const [activeTab, setActiveTab] = useState('real-estate')

  const currentTab = tabs.find(t => t.key === activeTab)

  return (
    <div>
        <SEO title="Tokenization | Zanthium Technosoft" />
      <style>{`
        .clip-tag {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
          padding-right: 2rem;
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-14 lg:pt-28 pb-20 lg:pb-28 mt-7">
        {/* Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                Advanced <span className="text-red-500">Tokenization</span> Solutions
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
                Transform real-world assets into secure blockchain-powered digital tokens with scalable infrastructure, enterprise-grade compliance, and seamless asset management.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition duration-300 shadow-lg shadow-red-500/20">
                  Start Your Project
                </a>
                <a href="#solutions"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-red-700/10 bg-white/5 hover:bg-white/10 text-red-700 font-semibold transition duration-300 backdrop-blur-md">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full" />
              <div className="relative overflow-hidden p-6">
                <img src="/blockchain/blockchaindev.png" alt="Blockchain Visualization"
                  className="w-[80%] object-contain hover:scale-105 transition duration-700" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0a0a14]">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-red-600/10 blur-3xl rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Why Choose Our <span className="text-red-600">Tokenization Platform</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              We provide enterprise-grade solutions for tokenizing assets on blockchain networks with security, compliance, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((f, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0e0e1a] p-10 min-h-[320px]">
                <div className="relative inline-flex items-center bg-red-600 text-white text-xs font-bold px-5 py-2.5 mb-10 clip-tag">
                  {f.tag}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed relative z-10">{f.desc}</p>
                <div className="absolute -bottom-10 left-0 w-full h-24 bg-red-600/15 blur-3xl group-hover:opacity-100 opacity-50 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solutions Tabs ── */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#f8fafc]" id="solutions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight mb-4 sm:mb-6">
              Our <span className="text-red-600">Tokenization</span> Solutions
            </h2>
            <p className="text-md sm:text-base lg:text-lg text-gray-500 leading-relaxed px-2">
              We offer tailored solutions for various industries and use cases to meet your specific tokenization needs.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-md sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-red-600 text-white'
                    : 'bg-white border border-gray-200 hover:border-red-500 text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {currentTab && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text */}
              <div className="order-1 text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] mb-5 sm:mb-6">
                  {currentTab.title}
                </h3>
                <p className="text-gray-600 text-md sm:text-base leading-relaxed mb-4">
                  {currentTab.p1}
                </p>
                <p className="text-gray-600 text-md sm:text-base leading-relaxed mb-5 sm:mb-6">
                  {currentTab.p2}
                </p>
                <a href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-red-600 hover:bg-red-700 text-white text-md sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-red-500/20">
                  Learn More
                </a>
              </div>

              {/* Image */}
              <div className="order-2 flex justify-center">
                <div className="w-full max-w-md lg:max-w-full">
                  <img
                    key={currentTab.key}
                    src={currentTab.img}
                    alt={currentTab.title}
                    className="w-full h-auto object-contain p-4 sm:p-8 lg:p-10"
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  )
}