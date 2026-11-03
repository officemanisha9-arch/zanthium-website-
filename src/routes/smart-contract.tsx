import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'

import { 
  FileCode, 
  ShieldCheck, 
  RefreshCw, 
  Coins, 
  Network, 
  Layers, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';

export const Route = createFileRoute('/smart-contract')({
  component: SmartContract,
})


function SmartContract() {
  
  // Section 3: Core Services Data
  const services = [
    {
      icon: <FileCode className="w-8 h-8 text-white" />,
      title: "Custom Smart Contract Development",
      desc: "Tailored smart contracts designed for your specific business needs, whether for DeFi, NFTs, DAOs, or enterprise solutions."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Smart Contract Auditing",
      desc: "Comprehensive security audits using both automated tools and manual review to identify vulnerabilities."
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-white" />,
      title: "Smart Contract Migration",
      desc: "Seamless migration of existing smart contracts between blockchain platforms or newer versions."
    },
    {
      icon: <Coins className="w-8 h-8 text-white" />,
      title: "Token Development",
      desc: "Creation of ERC-20, ERC-721, and ERC-1155 standards with fully custom functionalities."
    },
    {
      icon: <Network className="w-8 h-8 text-white" />,
      title: "DeFi Protocol Development",
      desc: "Build decentralized finance applications including DEXs, lending platforms, and liquidity pools."
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Upgradeable Smart Contracts",
      desc: "Implement proxy patterns for upgradeable contracts while maintaining security and transparency."
    }
  ];

  // Section 4: Process Steps Data
  const steps = [
    { num: "1", title: "Requirement Analysis", desc: "Detailed discussion to understand your business needs and technical requirements." },
    { num: "2", title: "Architecture Design", desc: "Creating the optimal contract structure and interaction flow." },
    { num: "3", title: "Development", desc: "Coding with best practices and security standards." },
    { num: "4", title: "Testing", desc: "Rigorous testing including unit tests and scenario simulations." },
    { num: "5", title: "Deployment", desc: "Secure deployment to mainnet with proper verification." }
  ];

  // Section 5: Blockchain Platforms Data
  const platforms = [
    { name: "Ethereum", desc: "Solidity, Vyper development for the world's leading smart contract platform with EVM compatibility." },
    { name: "Binance Smart Chain", desc: "High-performance smart contracts with lower transaction fees." },
    { name: "Solana", desc: "Rust-based smart contracts for high-throughput applications." },
    { name: "Polygon", desc: "Ethereum-compatible layer 2 solutions for scalable dApps." },
    { name: "Avalanche", desc: "Development of custom blockchain solutions on Avalanche's subnets." },
    { name: "Hyperledger Fabric", desc: "Enterprise-grade permissioned blockchain solutions" }
  ];

  // Section 6: Use Cases Data
  const useCases = [
    { title: "Decentralized Finance (DeFi)", desc: "Lending protocols, decentralized exchanges, yield farming, and other financial instruments." },
    { title: "NFT Marketplaces", desc: "Digital ownership verification, royalty distribution, and marketplace operations." },
    { title: "Supply Chain", desc: "Track and verify product authenticity, automate payments." },
    { title: "DAO Governance", desc: "Decentralized autonomous organizations with voting mechanisms." },
    { title: "Insurance", desc: "Automated claims processing and risk pool management." }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800 antialiased overflow-x-hidden">
        <SEO title="Smart Contract | Zanthium Technosoft" />
      
      {/* SECTION 1: HERO OVERVIEW */}
      <div className="bg-[#f7f2f0] py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Abstract Graphic */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-purple-500/20 to-blue-500/10 rounded-full flex items-center justify-center shadow-inner">
              <div className="absolute top-4 right-4 w-12 h-12 bg-purple-400/30 rounded-full blur-xl" />
              {/* Central stylized document icon representation */}
              <img src="/blockchain/img1.webp" alt="" />
            </div>
          </div>

          {/* Right Header Text Block */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight">
              Empower Your <br />
              Business with Smart <br />
              Contracts
            </h1>
            <p className="text-red-800/90 font-medium text-base sm:text-lg max-w-xl leading-relaxed">
              Automate trust with secure, transparent, and cost-efficient smart contracts. Build on top blockchain platforms with Zanthium Technosoft expertise.
            </p>
          </div>
        </div>
      </div>


      {/* SECTION 2: WHAT ARE SMART CONTRACTS */}
      <div className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                What Are Smart Contracts?
              </h2>
              <div className="w-14 h-1 bg-amber-400 rounded-full" />
            </div>
            <p className="text-slate-600 text-md sm:text-base leading-relaxed">
              Smart contracts are self-executing contracts with the terms of the agreement directly written into code. They automatically enforce and execute the terms of a contract when predetermined conditions are met, without the need for intermediaries.
            </p>

            {/* Checkmark Value List */}
            <div className="space-y-4 pt-2">
              {[
                { title: "Trustless Execution", text: "Parties can transact directly without needing to trust each other or a third party" },
                { title: "Transparency", text: "All contract terms and executions are visible on the blockchain" },
                { title: "Security", text: "Cryptographic security makes contracts tamper-proof" },
                { title: "Cost Efficiency", text: "Eliminates intermediaries and reduces transaction costs" }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-md sm:text-base">{item.title}</h4>
                    <p className="text-slate-500 text-xs sm:text-md">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Vector Block Representation */}
          <div className="lg:col-span-6 flex justify-center">
            <img src="/blockchain/contract.png" alt="" />
          </div>

        </div>
      </div>


      {/* SECTION 3: CORE SERVICES GRID */}
      <div className="bg-slate-50/50 py-20 lg:py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Smart Contract Services
            </h2>
            <div className="w-14 h-1 bg-amber-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((item, index) => (
    <div key={index} className="flex">
      <div className="bg-white rounded-2xl p-8 border border-slate-100/80 flex flex-col items-center text-center h-full w-full shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300">
        
        <div className="w-14 h-14 bg-[#b22222] rounded-xl flex items-center justify-center mb-6 shadow-md shadow-red-900/10 text-white">
          {item.icon}
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight px-2 leading-snug min-h-[56px] flex items-center">
          {item.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed flex-grow">
          {item.desc}
        </p>

      </div>
    </div>
  ))}
</div>

        </div>
      </div>


      {/* SECTION 4: DEVELOPMENT LIFECYCLE PROCESS */}
      <div className="bg-white py-20 lg:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Smart Contract Development Process
            </h2>
            <div className="w-14 h-1 bg-amber-400 mx-auto rounded-full" />
            <p className="text-slate-500 text-md sm:text-base pt-1">
              We follow a rigorous development lifecycle to ensure your smart contracts are secure, efficient, and meet all business requirements.
            </p>
          </div>

          {/* Sequential Process Train Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-100 shadow-sm rounded-xl p-6 pt-10 relative flex flex-col items-center text-center group">
                <div className="absolute -top-5 w-10 h-10 bg-[#800a0a] text-white rounded-full flex items-center justify-center font-bold text-md shadow-md border-4 border-white group-hover:scale-105 transition">
                  {step.num}
                </div>
                <h3 className="text-md font-bold text-slate-900 mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* SECTION 5: BLOCKCHAIN PLATFORMS NETWORK */}
      <div className="bg-[#040d21] text-white py-20 lg:py-24 relative overflow-hidden">
        {/* Subtle grid pattern background trick */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">
              Blockchain Platforms We Work With
            </h2>
            <div className="w-14 h-1 bg-amber-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {platforms.map((plat, i) => (
    <div key={i} className="flex">
      <div className="bg-[#091630] border border-blue-900/40 rounded-xl p-8 text-left relative overflow-hidden group hover:border-blue-700/60 transition-all h-full w-full flex flex-col">
        
        <Cpu className="absolute bottom-4 right-4 text-blue-900/30 w-10 h-10 group-hover:text-blue-800/40 transition" />

        <h3 className="text-lg font-bold text-white mb-3 tracking-tight min-h-[56px] flex items-start">
          {plat.name}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed pr-6 flex-grow">
          {plat.desc}
        </p>

      </div>
    </div>
  ))}
</div>

        </div>
      </div>


      {/* SECTION 6: USE CASES */}
      <div className="bg-white py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Smart Contract Use Cases
            </h2>
            <div className="w-14 h-1 bg-amber-400 mx-auto rounded-full" />
          </div>

          {/* Balanced Card Grid layout dynamically centering the odd final entry */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
  {useCases.map((use, i) => (
    <div
      key={i}
      className={`flex ${
        i === 3 ? 'lg:col-start-1' : i === 4 ? 'lg:col-start-2' : ''
      }`}
    >
      <div
        className="bg-white rounded-xl p-8 border border-slate-100 shadow-[0_8px_25px_rgba(0,0,0,0.02)] text-center flex flex-col h-full w-full hover:shadow-md transition-all duration-300"
      >
        <h3 className="text-base font-bold text-slate-900 mb-3 tracking-tight min-h-[48px] flex items-center justify-center">
          {use.title}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed flex-grow">
          {use.desc}
        </p>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

    </div>
  );
}