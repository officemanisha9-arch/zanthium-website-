import { createFileRoute } from '@tanstack/react-router'
import { Leaf, BadgeCheck, Recycle } from 'lucide-react';
import { useState } from 'react';
import SEO from "../components/SEO";

export const Route = createFileRoute('/carbon')({
  component: RouteComponent,
})

// Route file: src/routes/carbon-credit-marketplace.tsx


// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "250K+", label: "Tons CO₂ Offset" },
  { value: "120+", label: "Projects" },
  { value: "5K+", label: "Businesses" },
];

const creditTypes = [
  {
    icon: <Leaf />,
    title: "Carbon Offset",
    desc: "Compensate for your emissions by funding equivalent carbon dioxide saving elsewhere in the world.",
  },
  {
    icon: <BadgeCheck />,
    title: "Certified Credits",
    desc: "All our credits are verified by international standards like Verified Carbon Standard and Gold Standard.",
  },
  {
    icon: <Recycle />,
    title: "Support Sustainability",
    desc: "Your purchase directly funds renewable energy, reforestation, and clean technology projects.",
  },
];

const steps = [
  { num: 1, title: "Calculate", desc: "Calculate your carbon footprint based on your activities" },
  { num: 2, title: "Reduce", desc: "Implement strategies to reduce your emissions" },
  { num: 3, title: "Select", desc: "Choose carbon credits from verified projects" },
  { num: 4, title: "Offset", desc: "Purchase credits to offset your remaining emissions" },
];

const projectStats = [
  { value: "120K", label: "Tons CO₂/Year" },
  { value: "500+", label: "Species Protected" },
  { value: "$2.5M", label: "Community Support" },
];

const faqs = [
  {
    q: "How do I calculate my carbon footprint?",
    a: "Use our built-in carbon calculator to estimate emissions from travel, energy use, and business operations. Enter your activity data and we'll compute your total footprint in tonnes of CO₂ equivalent.",
  },
  {
    q: "Are your carbon credits verified?",
    a: "Yes. Every credit on our marketplace is independently verified by internationally recognised standards including the Verified Carbon Standard (VCS) and Gold Standard, ensuring genuine, measurable impact.",
  },
  {
    q: "Can I choose specific projects to support?",
    a: "Absolutely. Browse our project catalogue, filter by type (reforestation, renewable energy, methane capture, etc.) and region, and purchase credits directly from the projects that matter most to you.",
  },
  {
    q: "How do I know my purchase makes a difference?",
    a: "Each retired credit is recorded on an immutable registry and you receive a certificate of retirement. Our impact dashboard lets you track exactly how many tonnes you've offset and which projects benefited.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

function RouteComponent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', Georgia, sans-serif", color: "#1a1a1a", margin: 0, padding: 0 }}>
        <SEO title="Carbon | Zanthium Technosoft" />
      <style>{`
      

        /* ── Hero ── */
        .cc-hero {
          position: relative;
          min-height: 580px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
          padding: 60px 24px 80px;
        }
        .cc-hero-bg {
          position: absolute; inset: 0;
          background: url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
        }
        .cc-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, #b8611a5d 0%, #c03a2b5b 35%, #8b1a1a4d 70%, #5a101062 100%);
        }
        .cc-hero-content { position: relative; z-index: 2; }
        .cc-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .cc-hero p {
          color: rgba(255,255,255,0.88);
          font-size: 1.15rem;
          margin-bottom: 52px;
        }
        .cc-stats {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cc-stat {
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border-radius: 14px;
          padding: 22px 40px;
          min-width: 170px;
          text-align: center;
        }
        .cc-stat-val {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          display: block;
          margin-bottom: 6px;
        }
        .cc-stat-label {
          color: rgba(255,255,255,0.8);
          font-size: 0.88rem;
          font-weight: 500;
        }

        /* ── Shared section styles ── */
        .cc-section {
          padding: 72px 24px;
          background: #f0f7f4;
        }
        .cc-section-alt { background: #e8f4f0; }
        .cc-center { text-align: center; }
        .cc-section h2 {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          margin-bottom: 14px;
          color: #1a1a1a;
        }
        .cc-gradient-bar {
          width: 56px; height: 4px;
          background: linear-gradient(90deg, #e8a020, #c0392b);
          border-radius: 2px;
          margin: 0 auto 18px;
        }
        .cc-sub {
          color: #666;
          max-width: 640px;
          margin: 0 auto 52px;
          line-height: 1.75;
          font-size: 0.97rem;
        }

        /* ── What Are Carbon Credits ── */
        .cc-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1060px;
          margin: 0 auto;
        }
        .cc-card {
          background: #fff;
          border-radius: 14px;
          border-top: 3px solid #c0392b;
          padding: 32px 24px 28px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .cc-card-icon {
          width: 64px; height: 64px;
          background: #e8f5ee;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.6rem;
          margin: 0 auto 20px;
        }
        .cc-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
        }
        .cc-card p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.65;
        }

        /* ── How It Works ── */
        .cc-steps-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 0;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .cc-steps-row::before {
          content: '';
          position: absolute;
          top: 32px;
          left: calc(12.5% + 32px);
          right: calc(12.5% + 32px);
          height: 2px;
          background: #ddd;
          z-index: 0;
        }
        .cc-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 16px;
          position: relative;
          z-index: 1;
        }
        .cc-step-circle {
          width: 64px; height: 64px;
          border-radius: 50%;
          border: 2.5px solid #c0392b;
          background: #f0f7f4;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem;
          font-weight: 700;
          color: #c0392b;
          margin-bottom: 16px;
        }
        .cc-step h3 {
          font-size: 0.97rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: #1a1a1a;
        }
        .cc-step p {
          font-size: 0.84rem;
          color: #777;
          line-height: 1.55;
        }

        /* ── Featured Project ── */
        .cc-project-wrap {
          max-width: 860px;
          margin: 0 auto;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .cc-project-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          background: linear-gradient(135deg, #2d5a27 0%, #1a3d15 50%, #0f2a0b 100%);
          display: flex; align-items: center; justify-content: center;
          font-size: 4rem;
          color: rgba(255,255,255,0.3);
        }
        .cc-project-body { padding: 24px 28px 0; background:#fff;}
        .cc-project-body h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #1a1a1a;
        }
        .cc-project-body p {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.65;
          margin-bottom: 20px;
        }
        .cc-project-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin: 0 0 0;
          background: #f8f8f8;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 28px;
        }
        .cc-pstat {
          text-align: center;
          padding: 20px 12px;
        }
        .cc-pstat-val {
          display: block;
          font-size: 1.5rem;
          font-weight: 800;
          color: #c0392b;
          margin-bottom: 4px;
        }
        .cc-pstat-label {
          font-size: 0.82rem;
          color: #888;
        }

        /* ── FAQ ── */
        .cc-faq-list {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .cc-faq-item {
          background: #fff;
          border: 1px solid #dde8e4;
          border-radius: 10px;
          overflow: hidden;
        }
        .cc-faq-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 22px;
          background: none;
          border: none;
          font-size: 0.97rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          color: #1a1a1a;
        }
        .cc-faq-plus {
          font-size: 1.3rem;
          color: #c0392b;
          line-height: 1;
          flex-shrink: 0;
        }
        .cc-faq-answer {
          padding: 0 22px 18px;
          font-size: 0.88rem;
          color: #666;
          line-height: 1.7;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .cc-cards { grid-template-columns: 1fr 1fr; }
          .cc-steps-row::before { display: none; }
          .cc-steps-row { flex-wrap: wrap; gap: 24px; }
          .cc-step { min-width: 40%; }
        }
        @media (max-width: 560px) {
          .cc-cards { grid-template-columns: 1fr; }
          .cc-step { min-width: 100%; }
          .cc-stats { flex-direction: column; align-items: center; }
          .cc-stat { width: 100%; max-width: 260px; }
          .cc-project-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="cc-hero">
        <div className="cc-hero-bg" />
        <div className="cc-hero-overlay" />
        <div className="cc-hero-content">
          <h1>Carbon Credit Marketplace</h1>
          <p>Offset your carbon footprint and support sustainable projects worldwide</p>
          <div className="cc-stats">
            {stats.map((s) => (
              <div className="cc-stat" key={s.label}>
                <span className="cc-stat-val">{s.value}</span>
                <span className="cc-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Are Carbon Credits ── */}
      <section className="cc-section cc-center">
        <h2>What Are Carbon Credits?</h2>
        <div className="cc-gradient-bar" />
        <p className="cc-sub">
          Carbon credits are permits that allow the owner to emit a certain amount of greenhouse gases. One credit equals one ton of carbon dioxide.
        </p>
        <div className="cc-cards">
          {creditTypes.map((c) => (
            <div className="cc-card" key={c.title}>
              <div className="cc-card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How Carbon Credits Work ── */}
      <section className="cc-section cc-section-alt cc-center">
        <h2>How Carbon Credits Work</h2>
        <div className="cc-gradient-bar" />
        <p className="cc-sub">
          Our simple process makes it easy to calculate, reduce, and offset your carbon footprint
        </p>
        <div className="cc-steps-row">
          {steps.map((s) => (
            <div className="cc-step" key={s.num}>
              <div className="cc-step-circle">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Project ── */}
      <section className="cc-section cc-center">
        <h2>Featured Project</h2>
        <div className="cc-gradient-bar" />
        <p className="cc-sub">Explore one of our verified carbon offset projects making a real impact</p>
        <div className="cc-project-wrap">
          <div className="cc-project-img"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80" alt="" /></div>
          <div className="cc-project-body">
            <h3>Amazon Rainforest Conservation</h3>
            <p>
              This project protects over 50,000 hectares of endangered rainforest in the Brazilian Amazon,
              preventing deforestation and preserving biodiversity while supporting local communities.
            </p>
            <div className="cc-project-stats">
              {projectStats.map((ps) => (
                <div className="cc-pstat" key={ps.label}>
                  <span className="cc-pstat-val">{ps.value}</span>
                  <span className="cc-pstat-label">{ps.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cc-section cc-section-alt cc-center">
        <h2>Frequently Asked Questions</h2>
        <div className="cc-gradient-bar" />
        <p className="cc-sub">Get answers to common questions about carbon credits and offsetting</p>
        <div className="cc-faq-list">
          {faqs.map((f, i) => (
            <div className="cc-faq-item" key={f.q}>
              <button
                className="cc-faq-btn"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                {f.q}
                <span className="cc-faq-plus">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <div className="cc-faq-answer text-left">{f.a}</div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
