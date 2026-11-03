import { createFileRoute } from '@tanstack/react-router'
import { Lightbulb, Lock, Shield, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import SEO from "../components/SEO";

export const Route = createFileRoute('/supply')({
  component: RouteComponent,
})


// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  {
    icon: <Shield/>,
    title: "Enhanced Trust & Transparency",
    desc: "All participants in the supply chain have access to the same immutable data, reducing disputes and building trust between parties.",
  },
  {
    icon: <Lightbulb/>,
    title: "Improved Efficiency",
    desc: "Automate processes with smart contracts, reduce paperwork, and eliminate intermediaries to speed up operations.",
  },
  {
    icon: <Lock/>,
    title: "Superior Security",
    desc: "Blockchain's cryptographic principles and decentralized nature make supply chain data virtually tamper-proof.",
  },
  {
    icon: <TrendingUp/>,
    title: "Cost Reduction",
    desc: "Reduce costs associated with intermediaries, paperwork, fraud, and inefficiencies in the supply chain.",
  },
];

const useCases = [
  {
    icon: <img src="https://img.icons8.com/color/96/barcode.png" alt="Barcode" />,
    title: "End-to-End Product Tracking",
    desc: "Trace every product's journey from raw materials to consumer delivery with immutable records that cannot be altered or deleted.",
  },
  {
    icon: <img src="https://img.icons8.com/color/96/approval.png" alt="Approval" />,
    title: "Smart Contracts",
    desc: "Automate supplier payments, streamline logistics agreements, and execute transactions automatically when conditions are met.",
  },
  {
    icon: <img src="https://img.icons8.com/color/96/checkmark.png" alt="Checkmark" />,
    title: "Anti-Counterfeiting",
    desc: "Protect authenticity of goods using blockchain-powered verification and unique digital identifiers for each product.",
  },
  {
    icon: <img src="https://img.icons8.com/color/96/globe.png" alt="Globe" />,
    title: "Global Trade Facilitation",
    desc: "Secure cross-border shipments, simplify customs processes, and reduce documentation requirements with shared ledgers.",
  },
  {
    icon: <img src="https://img.icons8.com/color/96/leaf.png" alt="Leaf" />,
    title: "Sustainability Tracking",
    desc: "Track carbon emissions, monitor ethical sourcing, and promote eco-friendly practices across supply networks.",
  },
  {
    icon: <img src="https://img.icons8.com/color/96/package.png" alt="Package" />,
    title: "Real-Time Inventory Management",
    desc: "Enable real-time visibility of inventory across multiple locations with automated restocking and reduced stockouts.",
  },
];

const steps = [
  {
    title: "Step 1: Raw Material Sourcing",
    desc: "Blockchain records origin of raw materials, including location, ethical sourcing credentials, and environmental impact data.",
  },
  {
    title: "Step 2: Manufacturing & Production",
    desc: "Track production processes, quality control checks, and compliance with industry standards through immutable records.",
  },
  {
    title: "Step 3: Logistics & Distribution",
    desc: "Monitor goods through warehouses, transportation, and logistics providers with real-time tracking and condition monitoring.",
  },
  {
    title: "Step 4: Customs & Border Control",
    desc: "Expedite customs clearance with verified documentation and shared data between authorities and supply chain participants.",
  },
  {
    title: "Step 5: Retail & Verification",
    desc: "Verify authenticity before products reach store shelves and provide retailers with complete product history.",
  },
  {
    title: "Step 6: Consumer Experience",
    desc: "Customers can scan QR codes to see full product journey, verify authenticity, and access sustainability information.",
  },
];

const realWorld = [
  {
    logo: "https://img.icons8.com/color/96/ibm.png",
    name: "IBM Food Trust",
    desc: "Used by Walmart to track food products from farm to shelf, reducing traceability time from days to seconds and improving food safety.",
  },
  {
    logo: "https://img.icons8.com/color/96/diamond.png",
    name: "De Beers",
    desc: "Tracks diamonds from mine to retailer, ensuring conflict-free sourcing and verifying authenticity throughout the journey.",
  },
  {
    logo: "https://img.icons8.com/color/96/blockchain.png",
    name: "VeChain",
    desc: "Provides blockchain solutions for various industries including luxury goods, agriculture, and logistics with focus on anti-counterfeiting.",
  },
  {
    logo: "https://img.icons8.com/color/96/ibm.png",
    name: "Maersk & IBM TradeLens",
    desc: "Digital shipping solution that promotes more efficient and secure global trade, connecting multiple stakeholders through a single shared view of transactions.",
  },
];

const faqs = [
  {
    q: "How does blockchain improve supply chain transparency?",
    a: "Blockchain creates an immutable, shared record of all transactions and movements across the supply chain. This allows all authorized participants to access the same information in real-time, eliminating information asymmetry and providing complete visibility from raw materials to end consumer.",    
  },  
  {
    q: "Is blockchain technology scalable for large supply chains?",
    a: "Yes, modern blockchain solutions are designed with scalability in mind. Solutions like hybrid blockchains, sidechains, and layer-2 protocols enable handling of high transaction volumes while maintaining security and decentralization principles.",
  },
  {
    q: "What is the ROI of implementing blockchain in supply chain?",
    a: "Companies typically see ROI through reduced fraud, lower administrative costs, faster processes, improved inventory management, and enhanced customer trust. Most implementations see payback within 12-24 months depending on the scale and complexity of the supply chain.",
  },
  {
    q: "How does blockchain help with regulatory compliance?",
    a: "Blockchain provides an auditable, tamper-proof record of all supply chain activities, making it easier to demonstrate compliance with regulations related to product safety, ethical sourcing, environmental standards, and trade documentation requirements.",
  }
];

// ─── Component ───────────────────────────────────────────────────────────────

function RouteComponent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a1a", margin: 0, padding: 0 }}>
        <SEO title="Supply | Zanthium Technosoft" />
      <style>{`
        

        /* ── Hero ── */
        .hero {
          position: relative;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #1a0a0a;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background: url('/indusry/suply.png') center/cover no-repeat;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, rgba(36, 17, 17, 0.79) 0%, transparent 70%);
        }
        .hero-content {
          position: relative; z-index: 2;
          text-align: center; padding: 60px 24px;
          max-width: 800px;
        }
        .hero h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800; color: #fff;
          line-height: 1.15; margin-bottom: 20px;
        }
        .hero p {
          color: rgba(255,255,255,0.75);
          font-size: 1.1rem; margin-bottom: 36px;
        }
        .btn-primary {
          background: #c0392b; color: #fff;
          border: none; padding: 14px 30px;
          border-radius: 50px; font-size: 1rem;
          font-weight: 700; cursor: pointer;
          margin-right: 16px;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: #a93226; }
        .btn-outline {
          background: transparent; color: #fff;
          border: 2px solid #fff; padding: 12px 28px;
          border-radius: 50px; font-size: 1rem;
          font-weight: 700; cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .btn-outline:hover { background: #fff; color: #1a0a0a; }

        /* ── Sections ── */
        .section { padding: 72px 24px; }
        .section-light { background: #f9f7f7; }
        .section-white { background: #fff; }
        .section-center { text-align: center; }
        .section h2 {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800; margin-bottom: 12px;
        }
        .red-bar {
          width: 48px; height: 4px;
          background: #c0392b; border-radius: 2px;
          margin: 0 auto 20px;
        }
        .section-sub {
          color: #666; max-width: 680px;
          margin: 0 auto 48px; line-height: 1.7;
        }

        /* ── Why Blockchain ── */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px; align-items: start;
          max-width: 1100px; margin: 0 auto;
        }
        .benefit-list { display: flex; flex-direction: column; gap: 28px; }
        .benefit-item { display: flex; gap: 16px; align-items: flex-start; }
        .benefit-icon {
          width: 44px; height: 44px; min-width: 44px;
          background: #fdf0ef; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem;
        }
        .benefit-item h3 { color: #c0392b; font-size: 1rem; font-weight: 700; margin-bottom: 6px; }
        .benefit-item p { color: #555; font-size: 0.92rem; line-height: 1.6; }
        .why-img {
          border-radius: 14px; overflow: hidden;
          background: #1a1a2e;
          display: flex; align-items: center; justify-content: center;
          min-height: 340px;
        }
        .why-img-placeholder {
          color: #fff; opacity: 0.4; font-size: 4rem; text-align: center;
        }

        /* ── Use Cases ── */
        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px; max-width: 1100px; margin: 0 auto;
        }
        .use-card {
          border: 1.5px solid #e8d8d8;
          border-top: 3px solid #c0392b;
          border-radius: 10px; padding: 28px 22px;
          text-align: center;
          background: #fff;
        }
        .use-icon {
          width: 52px; height: 52px;
          background: #fdf0ef; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; margin: 0 auto 16px;
        }
        .use-card h3 { color: #c0392b; font-size: 1rem; font-weight: 700; margin-bottom: 10px; }
        .use-card p { color: #555; font-size: 0.88rem; line-height: 1.6; }

        /* ── Timeline ── */
        .timeline-wrap { max-width: 700px; margin: 0 auto; position: relative; }
        .timeline-wrap::before {
          content: '';
          position: absolute; left: 18px; top: 10px; bottom: 10px;
          width: 2px; background: #e8d8d8;
        }
        .timeline-step {
          display: flex; gap: 20px; margin-bottom: 28px;
          align-items: flex-start;
        }
        .tl-dot {
          width: 38px; height: 38px; min-width: 38px;
          border-radius: 50%; background: #c0392b;
          border: 3px solid #fff;
          box-shadow: 0 0 0 2px #c0392b;
          position: relative; z-index: 1;
        }
        .tl-card {
          flex: 1; background: #fff;
          border: 1px solid #ece0e0; border-radius: 10px;
          padding: 16px 20px; box-shadow: 0 1px 4px rgba(0,0,0,0.05);
        }
        .tl-card h3 { font-size: 0.95rem; font-weight: 700; margin-bottom: 6px; }
        .tl-card p { color: #666; font-size: 0.86rem; line-height: 1.6; }

        /* ── Real World ── */
        .rw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px; max-width: 1100px; margin: 0 auto 24px;
        }
        .rw-card {
          border: 1.5px solid #e8d8d8; border-radius: 10px;
          padding: 22px 18px; text-align: center; background: #fff;
        }
        .rw-logo {
          width: 48px; height: 48px; background: #fdf0ef;
          border-radius: 10px; display: flex;
          align-items: center; justify-content: center;
          font-size: 1rem; font-weight: 800; color: #c0392b;
          margin: 0 auto 12px;
        }
        .rw-card h3 { font-size: 0.95rem; font-weight: 700; color: #c0392b; margin-bottom: 8px; }
        .rw-card p { color: #555; font-size: 0.84rem; line-height: 1.5; }
        .rw-bottom { display: grid; grid-template-columns: 1fr 3fr; gap: 20px; max-width: 1100px; margin: 0 auto; }

        /* ── FAQ ── */
        .faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
        .faq-item {
          border: 1px solid #e8d8d8; border-radius: 8px;
          overflow: hidden; background: #fff;
        }
        .faq-q {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 18px 20px; background: none; border: none;
          font-size: 0.95rem; font-weight: 600; text-align: left;
          cursor: pointer; color: #1a1a1a;
        }
        .faq-q span { font-size: 1.2rem; color: #c0392b; }
        .faq-a { padding: 0 20px 16px; color: #666; font-size: 0.88rem; line-height: 1.7; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr; }
          .why-img { display: none; }
          .use-cases-grid { grid-template-columns: repeat(2, 1fr); }
          .rw-grid { grid-template-columns: repeat(2, 1fr); }
          .rw-bottom { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .use-cases-grid { grid-template-columns: 1fr; }
          .rw-grid { grid-template-columns: 1fr; }
          .btn-primary, .btn-outline { display: block; width: 100%; margin: 8px 0; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Revolutionize Supply Chain<br />with Blockchain</h1>
          <p>Transform your business with transparent, efficient, and trusted global supply networks</p>
          <a href="/contact" className="btn-primary">Explore Solutions</a>
          <a href="/contact" className="btn-outline">Request Demo</a>
        </div>
      </section>

      {/* ── Why Blockchain ── */}
      <section className="section section-white">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2>Why Blockchain for Supply Chain?</h2>
          <div className="red-bar" />
          <p className="section-sub">
            Traditional supply chains face challenges like fraud, inefficiency, and lack of transparency.
            Blockchain technology provides the perfect solution with its decentralized, immutable, and transparent nature.
          </p>
        </div>
        <div className="why-grid">
          <div className="benefit-list">
            {benefits.map((b) => (
              <div className="benefit-item" key={b.title}>
                <div className="benefit-icon">{b.icon}</div>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="why-img">
            <img src="/indusry/industry.png" alt="" />
          </div>
        </div>
      </section>

      {/* ── Key Use Cases ── */}
      <section className="section section-light section-center">
        <h2>Key Use Cases</h2>
        <div className="red-bar" />
        <p className="section-sub">
          Discover how blockchain technology is transforming various aspects of supply chain management across industries.
        </p>
        <div className="use-cases-grid">
          {useCases.map((u) => (
            <div className="use-card" key={u.title}>
              <div className="use-icon">{u.icon}</div>
              <h3>{u.title}</h3>
              <p>{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section section-white section-center">
        <h2>How Blockchain Transforms Supply Chain</h2>
        <div className="red-bar" />
        <p className="section-sub">
          From raw material sourcing to final delivery, blockchain creates an immutable record at every step of the journey.
        </p>
        <div className="timeline-wrap">
          {steps.map((s) => (
            <div className="timeline-step" key={s.title}>
              <div className="tl-dot" />
              <div className="tl-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Real-World Applications ── */}
      <section className="section section-light section-center">
        <h2>Real-World Applications</h2>
        <div className="red-bar" />
        <p className="section-sub">
          Leading companies across industries are already implementing blockchain to transform their supply chains.
        </p>
        <div className="rw-grid">
          {realWorld.slice(0, 3).map((r) => (
            <div className="rw-card" key={r.name}>
              <div className="rw-logo"><img src={r.logo} alt={r.name} /></div>
              <h3>{r.name}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1100, margin: "20px auto 0", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 20 }}>
          <div className="rw-card" style={{ textAlign: "center" }}>
            <div className="rw-logo"><img src={realWorld[3].logo} alt={realWorld[3].name} /></div>
            <h3>{realWorld[3].name}</h3>
            <p>{realWorld[3].desc}</p>
          </div>
          <div />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-16 lg:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-5 rounded-full"></div>

      <p className="mt-5 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        Get answers to common questions about carbon credits and carbon offsetting.
      </p>
    </div>

    {/* FAQ List */}
    <div className="space-y-4">
      {faqs.map((f, i) => (
        <div
          key={f.q}
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className={`w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300
              ${
                openFaq === i
                  ? "bg-red-600 text-white"
                  : "bg-gray-50 text-gray-900 hover:bg-gray-100"
              }`}
          >
            <span className="font-bold text-base md:text-lg pr-4">
              {f.q}
            </span>

            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full text-xl font-bold transition-all duration-300
                ${
                  openFaq === i
                    ? "bg-white text-red-600"
                    : "bg-red-100 text-red-700"
                }`}
            >
              {openFaq === i ? "−" : "+"}
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              openFaq === i
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 py-5 text-gray-600 leading-7 border-t border-gray-100">
                {f.a}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
    </div>
  );
}