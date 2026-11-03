import { createFileRoute } from '@tanstack/react-router'
import { Truck, FileText, PackageSearch, MonitorSmartphone, CircleDollarSign, ShieldCheck } from 'lucide-react';import SEO from "../components/SEO";

import { useState } from 'react'

export const Route = createFileRoute('/transport')({
  component: RouteComponent,
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const whyTabs = [
  {
    key: 'transparency',
    label: 'Transparency',
    points: [
      { title: 'End-to-End Visibility', desc: 'Track shipments in real-time with an immutable record of every transaction and movement, from manufacturer to end consumer.' },
      { title: 'Build Trust', desc: 'Create verifiable and tamper-proof records that all supply chain participants can trust without intermediaries.' },
    ],
  },
  {
    key: 'security',
    label: 'Security',
    points: [
      { title: 'Fraud Prevention', desc: 'Eliminate document forgery and counterfeit products with cryptographic verification of all transactions and products.' },
      { title: 'Data Integrity', desc: 'Ensure that shipment data remains unaltered and verifiable throughout the entire logistics journey.' },
    ],
  },
  {
    key: 'efficiency',
    label: 'Efficiency',
    points: [
      { title: 'Process Automation', desc: 'Automate documentation, payments, and compliance checks with smart contracts that execute when conditions are met.' },
      { title: 'Reduce Delays', desc: 'Minimize customs clearance times and administrative bottlenecks with pre-verified digital documentation.' },
    ],
  },
  {
    key: 'sustainability',
    label: 'Sustainability',
    points: [
      { title: 'Carbon Tracking', desc: 'Accurately measure and verify carbon emissions throughout the supply chain to support sustainability initiatives.' },
      { title: 'Green Logistics', desc: 'Enable transparent reporting on environmental impact and promote eco-friendly supply chain practices.' },
    ],
  },
]

const solutions = [
  {
    icon: <Truck />,
    title: 'Real-Time Shipment Tracking',
    desc: 'Monitor goods throughout their journey with tamper-proof records updated in real-time across all supply chain participants.',
  },
  {
    icon: <FileText />,
    title: 'Smart Contract Automation',
    desc: 'Automate payments, releases, and compliance checks with self-executing contracts that trigger when conditions are met.',
  },
  {
    icon: <PackageSearch />,
    title: 'Provenance Tracking',
    desc: 'Verify the origin and journey of products to ensure authenticity and comply with regulatory requirements.',
  },
  {
    icon: <MonitorSmartphone />,
    title: 'Digital Documentation',
    desc: 'Replace paper-based processes with secure, shareable digital documents that reduce processing time and errors.',
  },
  {
    icon: <CircleDollarSign />,
    title: 'Automated Payments',
    desc: 'Streamline financial transactions with instant, verified payments triggered by shipment milestones.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Fraud Prevention',
    desc: 'Eliminate counterfeit products and document forgery with cryptographic verification of all transactions.',
  },
];

const caseStudies = [
  {
    img: '/indusry/tradelense.jpg',
    label: "Maersk & IBM's TradeLens",
    desc: 'Revolutionizing global shipping with a blockchain-based platform that increases transparency and reduces paperwork in international trade.',
  },
  {
    img: '/indusry/Walmart.jpeg',
    label: "Walmart's Food Tracking",
    desc: 'Using blockchain to track food products from farm to shelf, reducing traceability time from days to seconds and enhancing food safety.',
  },
  {
    img: '/indusry/ups.png',
    label: 'UPS Blockchain Initiatives',
    desc: 'Implementing blockchain for customs brokerage and developing a blockchain-based platform to improve supply chain efficiency.',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

function RouteComponent() {
  const [activeTab, setActiveTab] = useState('transparency')
  const currentTab = whyTabs.find(t => t.key === activeTab)

  return (
    <>
        <SEO title="Transport | Zanthium Technosoft" />
      <style>{`
        @keyframes waveIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-animate { animation: waveIn 0.8s ease forwards; }
        .hero-animate-2 { opacity: 0; animation: waveIn 0.8s ease 0.2s forwards; }
        .hero-animate-3 { opacity: 0; animation: waveIn 0.8s ease 0.4s forwards; }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', minHeight: '82vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', overflow: 'hidden',
      }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src="/indusry/transport.jpg"
            alt="Transport background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,10,20,0.72)' }} />
        </div>

        {/* Wave bottom */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: 80, display: 'block' }}>
            <path d="M0,40 C360,80 1080,0 1440,50 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1, padding: '120px 24px 100px', maxWidth: 800, margin: '0 auto' }}>
          <h1
            className="hero-animate"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}
          >
            Revolutionizing<br />Transport & Logistics<br />with Blockchain
          </h1>
          <p
            className="hero-animate-2"
            style={{ color: '#d1d5db', fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.7, marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}
          >
            Transparent, efficient, and secure supply chain solutions for the modern world
          </p>
          <div className="hero-animate-3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#solutions"
              style={{
                padding: '13px 30px', borderRadius: 50, background: '#8b1a1a',
                color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#6e1414'}
              onMouseLeave={e => e.currentTarget.style.background = '#8b1a1a'}
            >
              Explore Solutions
            </a>
            <a
              href="/contact"
              style={{
                padding: '13px 30px', borderRadius: 50, border: '2px solid #fff',
                color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none',
                background: 'transparent', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c0392b'; e.currentTarget.style.color = '#f87171' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff' }}
            >
              Request Demo
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY BLOCKCHAIN ── */}
      <section style={{ background: '#f3f4f6', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#111827', marginBottom: 16 }}>
              Why Blockchain in Transport & Logistics?
            </h2>
            <div style={{ width: 48, height: 4, background: '#8b1a1a', borderRadius: 2, margin: '0 auto 24px' }} />
            <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.8, maxWidth: 640, margin: '0 auto' }}>
              Traditional supply chains suffer from opacity, inefficiency, and vulnerability to fraud. Blockchain technology introduces unprecedented transparency, security, and automation to logistics operations.
            </p>
          </div>

          {/* Tab card */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            {/* Tab bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderBottom: '1px solid #e5e7eb' }}>
              {whyTabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    padding: '16px 8px', border: 'none', background: 'transparent',
                    fontSize: 15, fontWeight: activeTab === tab.key ? 700 : 500,
                    color: activeTab === tab.key ? '#8b1a1a' : '#6b7280',
                    borderBottom: activeTab === tab.key ? '3px solid #8b1a1a' : '3px solid transparent',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div style={{ padding: '32px 36px 36px' }}>
              {currentTab?.points.map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, marginBottom: i < currentTab.points.length - 1 ? 32 : 0 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%', background: '#8b1a1a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 2,
                  }}>
                    <span style={{ color: '#fff', fontSize: 18, lineHeight: 1 }}>✓</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', marginBottom: 6 }}>{point.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ── */}
      <section id="solutions" style={{ background: '#f9fafb', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#111827', marginBottom: 14 }}>
              Blockchain Solutions for Logistics
            </h2>
            <div style={{ width: 48, height: 4, background: '#8b1a1a', borderRadius: 2, margin: '0 auto 20px' }} />
            <p style={{ color: '#6b7280', fontSize: '0.97rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
              Discover how blockchain technology is transforming key areas of transport and logistics operations
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {solutions.map((s, i) => (
              <div
                key={i}
                style={{
                  background: '#fff', borderRadius: 16, padding: '32px 28px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #f0f0f0',
                  transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'default',
                  textAlign: 'center',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)' }}
              >
                <div style={{
                  width: 64, height: 64, borderRadius: '50%', background: '#8b1a1a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, margin: '0 auto 20px',
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111827', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section style={{ background: '#f3f4f6', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#111827', marginBottom: 14 }}>
              Industry Leaders Using Blockchain
            </h2>
            <div style={{ width: 48, height: 4, background: '#8b1a1a', borderRadius: 2, margin: '0 auto 20px' }} />
            <p style={{ color: '#6b7280', fontSize: '0.97rem', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
              Global companies are already implementing blockchain solutions to transform their logistics operations
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
            {caseStudies.map((c, i) => (
              <div
                key={i}
                style={{
                  background: '#fff', borderRadius: 16, overflow: 'hidden',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.07)', border: '1px solid #f0f0f0',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)' }}
              >
                <div style={{ height: 200, overflow: 'hidden' }}>
                  <img src={c.img} alt={c.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                  />
                </div>
                <div style={{ padding: '24px 24px 20px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#111827', marginBottom: 10 }}>{c.label}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.7, marginBottom: 16 }}>{c.desc}</p>
                  <a
                    href="/contact"
                    style={{ color: '#8b1a1a', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    Read case study →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#8b1a1a', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            Ready to Transform Your Logistics?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.7, marginBottom: 36 }}>
            Let's build a blockchain-powered supply chain that delivers transparency, efficiency, and trust at every step.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block', padding: '14px 38px', borderRadius: 50,
              background: '#fff', color: '#8b1a1a', fontWeight: 800, fontSize: 15,
              textDecoration: 'none', transition: 'transform 0.2s, opacity 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.opacity = '0.92' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.opacity = '1' }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  )
}