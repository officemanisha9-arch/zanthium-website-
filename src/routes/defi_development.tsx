import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/defi_development')({
  component: RouteComponent,
})


import { 
  Shield, Zap, RefreshCw, BarChart3, 
  ArrowLeftRight, Landmark, Coins, Wallet, Users, Layers 
} from 'lucide-react';

// --- HERO SECTION ---
const HeroSection = () => (
  <section className="bg-white text-gray-900 mt-4 py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="text-5xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
        DeFi Development<br />Solutions
      </h1>
      <p className="text-lg text-red-600 font-medium mb-8 max-w-lg leading-relaxed">
        Empower your business with next-generation decentralized finance applications. 
        From DEXs to DAOs, we deliver secure, scalable, and innovative DeFi solutions.
      </p>
      <a href="/contact" className="bg-[#b39200] hover:bg-[#997d00] text-white font-bold py-3 px-6 rounded shadow transition duration-200 uppercase text-md tracking-wider">
        Start Your DeFi Project
      </a>
    </div>
    <div className="flex justify-center">
      {/* Decorative SVG mimicking the Ethereum/DeFi abstract graphic */}
      <img src="/blockchain/whydefi.png" alt="" />
    </div>
  </section>
);

// --- SERVICES SECTION ---
const ServicesSection = () => {
  const services = [
    {
      title: "DEX Development",
      icon: <ArrowLeftRight className="w-6 h-6 text-amber-600" />,
      desc: "Build secure and scalable decentralized exchanges with advanced trading features.",
      features: ["Automated Market Makers (AMM)", "Order Book DEXs", "Cross-chain swapping", "Liquidity pool management", "Impermanent loss protection"]
    },
    {
      title: "Lending Platforms",
      icon: <Landmark className="w-6 h-6 text-amber-600" />,
      desc: "Develop decentralized lending and borrowing protocols with flexible terms.",
      features: ["Collateralized loans", "Flash loans", "Interest rate algorithms", "Liquidation mechanisms", "Credit delegation"]
    },
    {
      title: "Yield Farming",
      icon: <Coins className="w-6 h-6 text-amber-600" />,
      desc: "Create yield optimization platforms with staking and reward systems.",
      features: ["Liquidity mining", "Staking pools", "Auto-compounding", "Multi-chain farming", "Risk management"]
    },
    {
      title: "DeFi Wallets",
      icon: <Wallet className="w-6 h-6 text-amber-600" />,
      desc: "Develop secure non-custodial wallets with DeFi integrations.",
      features: ["Multi-chain support", "Token management", "DApp browser", "Hardware wallet integration", "Transaction simulation"]
    },
    {
      title: "DAO Development",
      icon: <Users className="w-6 h-6 text-amber-600" />,
      desc: "Create decentralized autonomous organizations for community governance.",
      features: ["Voting systems", "Proposal mechanisms", "Treasury management", "Delegation features", "Multi-signature wallets"]
    },
    {
      title: "Synthetic Assets",
      icon: <Layers className="w-6 h-6 text-amber-600" />,
      desc: "Build platforms for creating and trading synthetic assets.",
      features: ["Asset tokenization", "Price oracles", "Collateral management", "Leveraged trading", "Risk mitigation"]
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-red-900 mb-2">Our DeFi Development Services</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-red-800 hover:ring-red-800`}>
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-md mb-6 leading-relaxed">{item.desc}</p>
              <ul className="space-y-2">
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start text-md text-gray-700">
                    <span className="text-amber-500 mr-2 font-bold">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- KEY FEATURES SECTION ---
const KeyFeaturesSection = () => {
  const features = [
    { title: "Security", icon: <Shield className="w-6 h-6 text-amber-500" />, desc: "Smart contract audits, formal verification, and security best practices to protect your platform and users." },
    { title: "Scalability", icon: <Zap className="w-6 h-6 text-amber-500" />, desc: "Layer 2 solutions, sidechains, and optimized contracts to handle high transaction volumes." },
    { title: "Interoperability", icon: <RefreshCw className="w-6 h-6 text-amber-500" />, desc: "Cross-chain bridges and protocols to enable seamless asset transfers between networks.",  },
    { title: "Analytics", icon: <BarChart3 className="w-6 h-6 text-amber-500" />, desc: "Comprehensive dashboards and data tools for users to track performance and metrics.", isChart: true }
  ];

  return (
    <section className="bg-neutral-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-wide mb-2">Key DeFi Features We Implement</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center h-full">
  <div className="w-20 h-25 rounded-[50%] border-2 border-amber-600 flex items-center justify-center mb-6 bg-red-900">
    {item.icon}
  </div>

  <div className="bg-white text-neutral-800 p-8 rounded-lg h-full min-h-[250px] flex flex-col w-full shadow-lg">
    <h3 className="text-xl font-bold text-red-800 mb-4 min-h-[56px] flex items-center justify-center">
      {item.title}
    </h3>

    <p className="text-md text-neutral-600 leading-relaxed flex-grow">
      {item.desc}
    </p>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CHAINS SECTION ---
const BlockchainPlatformsSection = () => {
  const chains = [
    {image: "/exchange/etherum.png", name: "Ethereum", desc: "The leading platform for DeFi applications with the largest ecosystem." },
    {image: "/exchange/bnb.png", name: "Binance Smart Chain", desc: "High-performance blockchain with low fees and Ethereum compatibility." },
    {image: "/exchange/polygon.png", name: "Polygon", desc: "Ethereum scaling solution with fast transactions and low costs." },
    {image: "/exchange/solana.png", name: "Solana", desc: "High-throughput blockchain for scalable DeFi applications." },
    {image: "/exchange/avalanche.png", name: "Avalanche", desc: "Platform with sub-second finality and custom blockchain creation." },
    {image: "/exchange/cardano.png", name: "Cardano", desc: "Research-driven blockchain with proof-of-stake consensus." }
  ];

  return (
    <section className="bg-neutral-900 text-white py-20 px-6 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light tracking-wide text-red-600 mb-2">Supported Blockchain Platforms</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chains.map((chain, idx) => (
            <div
  key={idx}
  className="border border-amber-500/30 bg-neutral-900/50 p-4 rounded-lg flex flex-col items-center text-center hover:border-amber-500 transition-colors h-full min-h-[250px]"
>
  <div className="w-15 h-15 rounded-full bg-amber-500/20 mb-2 flex items-center justify-center">
    <img
      src={chain.image}
      alt=""
      className="w-10 h-10 object-contain"
    />
  </div>

  <h3 className="text-xl font-medium text-amber-500 mb-1 min-h-[56px] flex items-center">
    {chain.name}
  </h3>

  <p className="text-md text-gray-400 leading-relaxed flex-grow">
    {chain.desc}
  </p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CASE STUDIES SECTION ---
const CaseStudiesSection = () => {
  const cases = [
    {image: "/blockchain/D-Exchange.jpg", title: "Decentralized Exchange", desc: "Built a cross-chain DEX with over $500M in monthly volume and 50,000+ active users.", tags: ["Ethereum", "Polygon", "AMM"] },
    {image: "/blockchain/leading.png", title: "Lending Protocol", desc: "Developed a money market protocol with $200M+ in TVL and innovative interest rate models.", tags: ["Binance Chain", "Flash Loans"] },
    {image: "/blockchain/yeild.png", title: "Yield Aggregator", desc: "Created an auto-compounding yield optimizer with 15+ integrated protocols.", tags: ["Avalanche", "Farming"] },
    {image: "/blockchain/DAO.jpg", title: "DAO Platform", desc: "Implemented a governance system for a DeFi protocol with 10,000+ token holders.", tags: ["Ethereum", "Governance"] }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-red-900 mb-2">DeFi Case Studies</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col h-full">
             <div
  className="h-40 bg-gradient-to-tr from-purple-100 to-amber-50 flex items-center justify-center p-6 relative"
  style={{
    backgroundImage: `url(${item.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
</div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-red-900 mb-3">{item.title}</h3>
                <p className="text-md text-gray-600 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- MAIN WRAPPER ---
function RouteComponent() {
  return (
    <div className="font-sans antialiased bg-white text-slate-900 selection:bg-amber-200">
        <SEO title="Defi Development | Zanthium Technosoft" />
      <HeroSection />
      <CaseStudiesSection />
      <KeyFeaturesSection />
      <ServicesSection />
      <BlockchainPlatformsSection />
    </div>
  );
}