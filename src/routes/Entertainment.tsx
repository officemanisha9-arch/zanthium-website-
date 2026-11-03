import { createFileRoute } from '@tanstack/react-router'
import { CheckIcon, Diamond, DollarSign, Group, Shield, Users } from 'lucide-react'
import { useState } from "react";
import SEO from "../components/SEO";
export const Route = createFileRoute('/Entertainment')({
  component: RouteComponent,
})

function RouteComponent() {
const [openFaq, setOpenFaq] = useState(0);
  
const faqs = [
  {
    question: "How does blockchain stop piracy?",
    answer:
      "By anchoring content hashes and licenses on-chain, platforms can verify authenticity, trace distribution, and enable compliant access controls—making tampering detectable and unauthorized copies less valuable.",
  },
  {
    question: "Which chain is best for media apps?",
    answer:
      "It depends on scale, fees, and ecosystem needs. We evaluate EVM L2s (e.g., Polygon, Arbitrum) for cost and tooling, or Solana for high throughput. We often use hybrid storage: IPFS/Arweave + CDN.",
  },
  {
    question: "Can we accept cards and crypto?",
    answer:
      "Yes. We integrate fiat gateways (Stripe, Razorpay) alongside crypto payments and custodial/non-custodial wallets, with KYC/AML flows where required.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "MVPs can ship in weeks; marketplace/streaming platforms with compliance and audits can take a few months. Timelines vary with scope, integrations, and security requirements.",
  },
];
  return (
    <div>
        <SEO title="Entertainment | Zanthium Technosoft" />

      {/* Hero */}
      <section className="flex min-h-[400px] items-center justify-center bg-white px-4 pb-16 pt-28 font-sans">
        <div className="max-w-6xl text-center">

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-[#1a1a1a] uppercase leading-tight">
            Blockchain in <br />
            <span className="text-[#801b1b]">Entertainment & Media</span>
          </h1>

          <div className="mx-auto my-8 h-1.5 w-24 rounded-full bg-[#f4b41a]"></div>

          <p className="mx-auto max-w-4xl text-lg md:text-xl leading-relaxed text-[#333333]">
            Protect rights, boost fan engagement, and unlock new revenue streams with secure, scalable{' '}
            <span className="relative inline-block font-bold text-[#801b1b]">
              Web3 solutions
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#f4b41a]"></span>
            </span>
            —NFTs, decentralized streaming, transparent royalties, and on-chain ticketing.
          </p>

        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#121212] px-6 py-20 font-sans text-white">
        <div className="mx-auto container text-center">

          <h2 className="mb-8 text-3xl font-bold text-white leading-tight tracking-tight md:text-5xl">
            Ready to Transform Entertainment with <br />
            <span className="text-[#ffb800]">Blockchain?</span>
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-base leading-relaxed text-[#cccccc] md:text-xl">
            We help studios, labels, OTTs, event organizers, and creators build{' '}
            <span className="font-semibold text-[#e63946]">creator-owned ecosystems</span>—rights
            protection, monetization, and fan communities with transparent on-chain data.
          </p>

          <div className="flex justify-center">
            <a
              href="/contact"
              className="group flex items-center gap-3 rounded-sm bg-[#ffb800] px-8 py-4 text-md font-black uppercase tracking-widest text-black transition-all hover:bg-[#e5a500]"
            >
              <i className="fa-solid fa-phone me-3"></i>
              Talk to Experts
            </a>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section id="tech-services" className="bg-[#f5f5f5] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase text-[#1a1a1a] tracking-[-1px]">
              Our Blockchain Services for Entertainment & Media
            </h2>
            <div className="w-24 h-[5px] bg-gradient-to-r from-[#800000] to-[#d90429] mx-auto mt-5 mb-5"></div>
            <p className="max-w-3xl mx-auto text-[#666] text-[16px]  leading-7">
              From NFT-powered fan economies to tamper-proof streaming rights,
              our products help you thrive in a connected, creator-first world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Card 1 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center px-6">
                <img src="/indusry/nft.png" alt="NFT Marketplace" className="max-h-[90px] object-contain opacity-100 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">NFT Marketplaces for Creators</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Launch curated drops, memberships, and digital merch.
                  Enable primary + secondary sales with on-chain royalties and anti-counterfeit verification.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    ERC-721/1155, Lazy Minting
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Auctions, Bundles, Gated Content
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Fiat/Crypto Checkout, KYC/AML Ready
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center px-6">
                <img src="/indusry/dsp.png" alt="Streaming" className="max-h-[90px] object-contain opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Decentralized Streaming Platforms</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Peer-to-peer streaming with content addressing and tokenized access.
                  Reduce platform risk, get transparent analytics and payout logic.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    IPFS/Arweave Storage, CDN Hybrid
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Micropayments with L2 & Subscriptions
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Creator Dashboards & Anti-Piracy Watermarks
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center px-6">
                <img src="/indusry/audit.png" alt="Audit" className="max-h-[90px] object-contain opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Blockchain DRM & Audit Trails</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Immutable ownership proofs, automated licensing,
                  and royalty splits. Make usage auditable for partners and regulators.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    On-Chain Fingerprints & Licenses
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Royalty Engines & Payment Rails
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Granular Access Control & Logs
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center px-6">
                <img src="/indusry/token.png" alt="Tokenized" className="max-h-[90px] object-contain opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Tokenized Crowdfunding</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Raise capital using utility tokens or revenue-share models
                  with built-in governance and fan perks.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Compliance-Ready Token Sale Flows
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Perks, Allowlists, Vesting & Lockups
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    DAO-Based Decision Making
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-[#b10000]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center px-6">
                <img src="/indusry/metaverse.png" alt="Metaverse" className="max-h-[90px] object-contain transition-all duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Metaverse Integrations</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Extend IP into immersive worlds—token-gated access,
                  avatar wearables, AR/VR experiences, and cross-platform assets.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#b10000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-bold">
                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[5px]"></span>
                    Unity/Unreal SDKs, Wallet Connect
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-bold">
                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[5px]"></span>
                    Interoperable NFTs & Experiences
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-bold">
                    <span className="w-[6px] h-[6px] rounded-full bg-white mt-[5px]"></span>
                    Event Passes & VIP Tiers
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center px-6">
                <img src="/indusry/ticket.webp" alt="Ticketing" className="max-h-[90px] object-contain opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Blockchain Ticketing</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Fraud-resistant tickets with verified resale and dynamic perks
                  that unlock at venues or online streams.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Anti-Bot Minting & Identity Checks
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Geofenced Redemption & POAPs
                  </li>
                  <li className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                    Loyalty & Referral Programs
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits-redesign" className="bg-gray-50 py-12 md:py-16 lg:py-20 border-y border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <span className="text-[#dc2626] font-bold uppercase tracking-[3px] text-xs sm:text-md mb-4 block">
                Security & Scalability
              </span>
              <h2 className="text-[#800000] font-extrabold leading-tight mb-5 text-3xl sm:text-4xl lg:text-5xl">
                Protect Entertainment Content with Blockchain
              </h2>
              <p className="text-gray-700 leading-relaxed border-l-4 border-[#FFD700] pl-4 sm:pl-5 mb-8 text-base sm:text-lg">
                Stop piracy, get transparent revenue, and expand globally with a secure, scalable stack engineered for media.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                {[
                  'Immutable IP ownership & automated licensing',
                  'Real-time royalty accounting and split payments',
                  'Token-gated communities and fan rewards',
                  'Global, compliance-ready payments (fiat + crypto)',
                ].map((text) => (
                  <li key={text} className="group flex items-start text-black font-medium text-base sm:text-lg leading-relaxed">
                    <span className="flex-shrink-0 w-7 h-7 bg-black text-[#FFD700] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#800000]">
                      <CheckIcon className="w-4 h-4" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative p-3 sm:p-5 md:p-8 z-0 group max-w-[700px] mx-auto">
                <div className="absolute top-0 right-0 w-[85%] h-[85%] bg-[#800000] opacity-10 rounded-sm z-[-1]"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 sm:w-10 sm:h-10 border-l-4 border-b-4 border-[#FFD700] z-20"></div>
                <img
                  src="/indusry/protect.jpg"
                  alt="Blockchain Protection"
                  className="relative z-10 w-full rounded-sm object-cover h-[240px] sm:h-[320px] md:h-[400px] lg:h-[450px] shadow-[] transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-[10px_10px_0px_#800000]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process-v2" className="bg-white py-12 lg:py-20 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:40px_40px]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-[#800000] text-[#FFD700] uppercase tracking-[2px] px-4 py-2 text-[10px] font-bold mb-4">
              Enterprise Lifecycle
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg">A proven path from ideation to launch, aligned to compliance and creator outcomes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { id: 'step1', num: '01', label: 'INITIALIZATION', title: 'Discovery & Use‑Case Design', body: 'Stakeholder workshops, rights mapping, token models, and KPI definition.' },
              { id: 'step2', num: '02', label: 'ARCHITECTURE', title: 'Technical Architecture', body: 'Chain selection, storage strategy, compliance review, and integration plans.' },
            ].map(({ id, num, label, title, body }) => (
              <div key={id} className="group relative bg-white border border-gray-200 p-8 lg:p-10 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 hover:border-[#800000] hover:shadow-[0_25px_50px_-12px_rgba(128,0,0,0.15)]">
                <div className="w-12.5 h-13.75 bg-(--zt-black) text-[var(--zt-white)] flex items-center justify-center font-black mb-[25px] transition-all duration-300 ease-in-out [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] group-hover:bg-(--zt-gold) group-hover:text-(--zt-black)">
                  {num}
                </div>
                <span className="font-mono text-[#dc2626] text-[0.8rem] font-bold block mb-1">{label}</span>
                <h5 className="text-[#800000] font-extrabold text-xl mb-4 leading-tight">{title}</h5>
                <p className="text-gray-600 text-md leading-relaxed mb-8">{body}</p>
                <div className="mt-auto relative h-[3px] w-10 bg-gray-100 overflow-hidden group-hover:w-full transition-all duration-500">
                  <div className="absolute inset-0 bg-[#FFD700] w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                </div>
              </div>
            ))}

            <div className="hidden lg:flex items-center justify-center perspective-1000">
              <img src="/indusry/e-about.png" alt="Our Process" className="max-w-full drop-shadow-2xl transition-transform duration-700 hover:transform-[rotateX(5deg)_rotateY(-5deg)_scale(1.05)]" />
            </div>

            {[
              { id: 'step3', num: "03", label: 'DEVELOPMENT', title: 'Build & Integrate', body: 'Smart contracts, apps, wallets, and payment rails—wired to your current stack.' },
              { id: 'step4', num: '04', label: 'VALIDATION', title: 'Audit, Test & Launch', body: 'Security audits, load testing, pilot programs, and go‑live.' },
              { id: 'step5', num: '05', label: 'SCALING', title: 'Operate & Scale', body: 'Analytics, community growth, feature iterations, and ongoing support SLAs.' },
            ].map(({ id, num, label, title, body }) => (
              <div key={id} className="group relative bg-white border border-gray-200 p-8 lg:p-10 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 hover:border-[#800000] hover:shadow-[0_25px_50px_-12px_rgba(128,0,0,0.15)]">
                <div className="w-12.5 h-13.75 bg-(--zt-black) text-(--zt-white) flex items-center justify-center font-black mb-6.25 transition-all duration-300 ease-in-out [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] group-hover:bg-(--zt-gold) group-hover:text-(--zt-black)">
                  {num}
                </div>
                <span className="font-mono text-[#dc2626] text-[0.8rem] font-bold block mb-1">{label}</span>
                <h5 className="text-[#800000] font-extrabold text-xl mb-4 leading-tight">{title}</h5>
                <p className="text-gray-600 text-md leading-relaxed mb-8">{body}</p>
                <div className="mt-auto relative h-[3px] w-10 bg-gray-100 overflow-hidden group-hover:w-full transition-all duration-500">
                  <div className="absolute inset-0 bg-[#FFD700] w-0 group-hover:w-full transition-all duration-700 delay-100"></div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us-pillars" className="bg-white py-12 lg:py-20 relative">
        <div className="container mx-auto px-4">

          <div className="border-l-[8px] border-[#800000] pl-8 mb-16">
            <h2 className="text-6xl font-black text-black uppercase mb-3">Why Us</h2>
            <p className="text-xl text-gray-500 max-w-xl">
              We blend deep blockchain expertise with media domain knowledge to deliver compliant, scalable platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield/>, title: 'Audit-Ready', body: 'Smart contract best practices and security reviews baked into the SDLC.' },
              { icon: <Group/>, iconColor: '#800000', title: 'Multi-Chain', body: 'EVM, Solana, and L2 expertise to match your UX, cost, and speed goals.' },
              { icon: <DollarSign/>, title: 'Monetization Focus', body: 'Design tokenomics, subscriptions, and royalties for sustainable revenue.' },
              { icon: <Users/>, title: 'Fan-Centric', body: 'Delight communities with perks, POAPs, and fair rewards.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="group relative p-10 bg-white border border-gray-100 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-5 hover:border-[#800000] overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#800000] transition-all duration-500 ease-in-out group-hover:h-full -z-10"></div>
                <div className="w-20 h-20 rounded-full bg-black text-[#ffbc03] flex items-center justify-center text-[1.8rem] mb-7.5 transition-all duration-300 ease-in-out group-hover:bg-yellow-500 group-hover:text-black group-hover:transform-[rotateY(360deg)]">
                  {icon}
                </div>
                <h6 className="font-extrabold text-2xl text-[#800000] mb-4 transition-colors duration-400 group-hover:text-[#ffbc03]">{title}</h6>
                <p className="text-gray-600 leading-relaxed transition-colors duration-400 group-hover:text-white/90">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative bg-[#000] py-14 sm:py-16 lg:py-20 overflow-hidden font-sans">

        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 md:grid-cols-3 border border-purple-500/30 rounded-xl overflow-hidden">
                {['Ethereum', 'Polygon', 'Solana', 'Arweave', 'IPFS', 'WalletConnect'].map((tech, i) => (
                 <div
  key={tech}
  className={`min-h-[90px] sm:min-h-[120px] flex items-center justify-center border-gray-500/60 p-4 sm:p-6 md:p-8 hover:bg-purple-700/40 transition-all duration-300 cursor-pointer group
    ${i % 3 !== 2 ? 'border-r' : ''}
    ${i < 3 ? 'border-b' : ''}
  `}
>
                   <span className="text-white/90 text-sm sm:text-lg md:text-xl font-bold tracking-tight text-center break-words px-2 group-hover:scale-105 transition-transform duration-300">
  {tech}
</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-5/12 text-center lg:text-left">
              <h2 className="text-white font-black leading-[1.05] tracking-tight mb-5 text-4xl sm:text-5xl md:text-6xl">
                Tech Stack <br className="hidden sm:block" />
                <span className="text-white">& Integrations</span>
              </h2>
              <p className="text-white/80 leading-relaxed text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                EVM (Ethereum, Polygon, BSC), Solana, Avalanche;
                IPFS/Arweave; OAuth/KYC;
                Stripe/Razorpay/Coinbase Commerce;
                WalletConnect, MetaMask.
              </p>
            </div>

          </div>
        </div>

        <div className="absolute top-1/2 -left-20 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-purple-600/20 rounded-full blur-[100px] sm:blur-[120px]"></div>

      </section>

      {/* FAQ */}
      <section id="faq-redesign" className="relative bg-white py-16 overflow-hidden">

        <div className="hidden lg:block absolute left-0 top-24 z-0 select-none">
          <span className="[writing-mode:vertical-rl] text-orientation-mixed font-black text-gray-100 text-8xl">
            SUPPORT_CENTER
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">

          <div className="mb-16 text-center">
            <h2 className="text-gray-900 font-black uppercase tracking-tighter text-4xl mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[#800000] font-semibold border-b-4 border-[#FFD700] inline-block pb-1">
              Quick answers to common questions about blockchain in media.
            </p>
          </div>

          <div className="container mx-auto px-0 sm:px-6 lg:px-8">
            <div className="space-y-4">
  {faqs.map((faq, index) => (
    <div key={index} className="faq-item overflow-hidden shadow-sm">
      <button
        onClick={() =>
          setOpenFaq(openFaq === index ? -1 : index)
        }
        className={`w-full flex items-center justify-between p-6 text-left font-bold text-lg transition-all duration-300 border-l-[5px]
        ${
          openFaq === index
            ? "bg-gradient-to-r from-[#800000] to-red-700 text-white border-[#FFD700]"
            : "bg-gray-50 text-gray-900 border-black hover:bg-gray-100"
        }`}
      >
        <span>{faq.question}</span>

        <span
          className={`font-mono text-2xl transition-transform duration-300 ${
            openFaq === index ? "text-white" : "text-[#FFD700]"
          }`}
        >
          {openFaq === index ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 bg-white border border-t-0 border-gray-100 ${
          openFaq === index
            ? "max-h-[500px] py-8 px-8"
            : "max-h-0 py-0 px-8"
        }`}
      >
        <div className="text-gray-600 text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  ))}
</div>
          </div>

        </div>
      </section>

    </div>
  )
}