import SEO from "../components/SEO";

import { createFileRoute } from '@tanstack/react-router'
import { Globe2, Glasses, Gem, Building2, ShoppingBag } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/metaverse_development')({
  component: RouteComponent,
})

// ─── Data ─────────────────────────────────────────────────────────────────────

const solutions = [
 {
  icon: <Globe2 />,
  title: 'Virtual World Architecture',
  desc: 'Design and build persistent 3D environments with interactive elements and social features.',
  features: [
    'Custom 3D world design',
    'Multi-user synchronization',
    'Physics and collision systems',
    'Real-time communication',
    'Cross-platform deployment',
  ],
},
{
  icon: <Glasses />,
  title: 'VR/AR Integration',
  desc: 'Create immersive experiences for virtual and augmented reality platforms.',
  features: [
    'Headset compatibility',
    'Hand and eye tracking',
    'Spatial mapping',
    'Mixed reality blending',
    'Performance optimization',
  ],
},
{
  icon: <Gem />,
  title: 'Digital Asset Creation',
  desc: 'Design and implement 3D models, avatars, and interactive objects.',
  features: [
    '3D modeling & texturing',
    'Avatar customization',
    'Animation systems',
    'NFT integration',
    'Asset management',
  ],
},
{
  icon: <Building2 />,
  title: 'Enterprise Metaverse',
  desc: 'Virtual solutions for business collaboration and operations.',
  features: [
    'Virtual offices',
    'Training simulations',
    'Product visualization',
    'Data integration',
    'Security protocols',
  ],
},
{
  icon: <ShoppingBag />,
  title: 'Virtual Commerce',
  desc: 'Build shopping experiences and digital economies.',
  features: [
    '3D storefronts',
    'Virtual try-on',
    'Crypto payments',
    'Loyalty systems',
    'Analytics dashboard',
  ],
},
]

const reasons = [
  { num: '01', tag: 'INNOVATION', title: 'Cutting-Edge Technology', desc: 'Leveraging VR, AR, blockchain, and real-time 3D engines to build next-gen immersive environments.' },
  { num: '02', tag: 'STRATEGY', title: 'Custom Solutions', desc: 'Tailored metaverse ecosystems designed around your business model and user engagement goals.' },
  { num: '03', tag: 'SECURITY', title: 'Secure Infrastructure', desc: 'Enterprise-grade protection for digital assets, smart contracts, and user data integrity.' },
  { num: '04', tag: 'EXPERIENCE', title: 'Cross-Platform Systems', desc: 'Seamless integration across web, mobile, and VR devices with synchronized real-time data.' },
  { num: '05', tag: 'GROWTH', title: 'Scalable Architecture', desc: 'Cloud-native architecture designed to scale with your user base and evolving platform needs.' },
  { num: '06', tag: 'DESIGN', title: 'Innovative Design', desc: 'Immersive UI/UX experiences that captivate users and differentiate your brand in digital worlds.' },
]

const processSteps = [
  { phase: 'PHASE 01', title: 'Discovery & Strategy', desc: 'We analyze your business goals, target audience, and technical requirements to create a powerful metaverse roadmap.', side: 'left' },
  { phase: 'PHASE 02', title: 'Experience Design', desc: 'We craft immersive UI/UX systems, interactive flows, 3D environments, and engaging virtual experiences.', side: 'right' },
  { phase: 'PHASE 03', title: 'Development', desc: 'Our developers build scalable systems with blockchain, VR/AR integrations, multiplayer functionality, and real-time infrastructure.', side: 'left' },
  { phase: 'PHASE 04', title: 'Testing & Optimization', desc: 'We optimize rendering, responsiveness, security, and cross-platform compatibility for flawless performance.', side: 'right' },
  { phase: 'PHASE 05', title: 'Launch & Scaling', desc: 'After deployment, we monitor analytics, scale infrastructure, and continuously evolve your metaverse ecosystem.', side: 'left' },
]

// Animated particle dots for hero background
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.6 + 0.2,
    }))
    let raf: number
    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, w, h)
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0) d.x = w; if (d.x > w) d.x = 0
        if (d.y < 0) d.y = h; if (d.y > h) d.y = 0
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${d.a})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
}

function RouteComponent() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  // Scroll-triggered step reveal
  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setVisibleSteps(prev => new Set([...prev, i]))
      }, { threshold: 0.3 })
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <>
        <SEO title="Metaverse Development | Zanthium Technosoft" />
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .hero-title {
          background: linear-gradient(135deg, #c8cdd4 0%, #ffffff 40%, #8a9099 70%, #c8cdd4 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: heroFadeIn 0.9s ease forwards, shimmer 6s linear infinite;
        }
        .step-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .step-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-title { animation: none; }
          .step-reveal { transition: none; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{
        position: 'relative', background: '#0a0a0a', minHeight: '92vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', textAlign: 'center', padding: '80px 24px',
      }}>
        <Particles />
        {/* Subtle radial glow */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(180,140,0,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 820, margin: '0 auto', animation: 'heroFadeIn 0.9s ease forwards' }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
            Next-Gen Metaverse<br />Development
          </h1>
          <p style={{ color: '#9ca3af', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.7, maxWidth: 620, margin: '0 auto 40px', opacity: 0, animation: 'heroFadeIn 0.9s ease 0.25s forwards' }}>
            Crafting immersive digital experiences that bridge virtual and physical worlds through cutting-edge technology
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', opacity: 0, animation: 'heroFadeIn 0.9s ease 0.45s forwards' }}>
            <a href="/contact" style={{
              padding: '14px 32px', borderRadius: 50, background: '#c9960a',
              color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1.2,
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'background 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#a87c08'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#c9960a'; e.currentTarget.style.transform = 'none' }}
            >
              Start Your Project
            </a>
            <a href="#solutions" style={{
              padding: '14px 32px', borderRadius: 50, border: '2px solid rgba(255,255,255,0.5)',
              color: '#fff', fontWeight: 700, fontSize: 14, letterSpacing: 1.2,
              textDecoration: 'none', textTransform: 'uppercase',
              transition: 'border-color 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#c9960a'; e.currentTarget.style.color = '#c9960a' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff' }}
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section id="solutions" style={{ background: '#f4f5f7', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#800000', marginBottom: 12 }}>
              Comprehensive Metaverse Solutions
            </h2>
            <div style={{ width: 48, height: 3, background: '#c9960a', margin: '0 auto 16px', borderRadius: 2 }} />
            <p style={{ color: '#c9960a', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
              We deliver end-to-end metaverse development services tailored to your business needs
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {solutions.map((s, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: '#fff', borderRadius: 16, padding: '28px 28px 24px',
                  border: '1px solid #e5e7eb',
                  borderTop: hoveredCard === i ? '3px solid #800000' : '3px solid transparent',
                  boxShadow: hoveredCard === i ? '0 8px 32px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'all 0.25s ease', cursor: 'default',
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  border: '2px solid #800000', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, marginBottom: 20, background: '#fff8f8', color: '#800000',
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{ fontSize: '1rem', color: '#444', padding: '5px 0', borderBottom: j < s.features.length - 1 ? '1px solid #f3f3f3' : 'none' }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
  style={{
    position: "relative",
    overflow: "hidden",
    background: "#111113",
    padding: "80px 24px",
  }}
>
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.15,
      zIndex: 0,
    }}
  >
    <source src="/video/bg4.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0, 0, 0, 0.13)",
      zIndex: 1,
    }}
  />

  {/* Content */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: 1100,
      margin: "0 auto",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: 56 }}>
      <span
        style={{
          display: "inline-block",
          background: "#c0392b",
          color: "#fff",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2,
          padding: "5px 14px",
          borderRadius: 4,
          marginBottom: 20,
          textTransform: "uppercase",
        }}
      >
        Metaverse Expertise
      </span>

      <h2
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 800,
          color: "#fff",
          marginBottom: 12,
        }}
      >
        Why Choose Our Solutions
      </h2>

      <p
        style={{
          color: "#9ca3af",
          fontSize: "1rem",
          maxWidth: 560,
          margin: "0 auto",
        }}
      >
        A strategic approach to building immersive, scalable, and secure
        metaverse ecosystems.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 20,
      }}
    >
      {reasons.map((r, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #2a2a2e",
            borderRadius: 14,
            padding: "28px 26px",
            background: "rgba(24,24,28,0.9)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#c0392b";
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#2a2a2e";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#c0392b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 800,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              {r.num}
            </span>

            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#c0392b",
                letterSpacing: 2,
              }}
            >
              {r.tag}
            </span>
          </div>

          <h3
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 10,
            }}
          >
            {r.title}
          </h3>

          <p
            style={{
              fontSize: "1rem",
              color: "#9ca3af",
              lineHeight: 1.65,
            }}
          >
            {r.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── PROCESS TIMELINE ── */}
      <section style={{ background: '#f9fafb', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: '#1a1a1a', marginBottom: 12 }}>
              Our Metaverse Development Process
            </h2>
            <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              From strategic planning to immersive deployment, we follow a streamlined process designed for scalable, future-ready metaverse experiences.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Center line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: '#e5e7eb', transform: 'translateX(-50%)' }} className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className={`step-reveal${visibleSteps.has(i) ? ' visible' : ''}`}
                  style={{
                    display: 'grid', gridTemplateColumns: '1fr 60px 1fr',
                    alignItems: 'center', gap: 0, marginBottom: 32,
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  {/* Left slot */}
                  <div style={{ paddingRight: 28, textAlign: 'right' }}>
                    {step.side === 'left' ? (
                      <div style={{
                        display: 'inline-block', background: '#fff', border: '1px solid #e5e7eb',
                        borderRadius: 12, padding: '20px 24px', textAlign: 'left', maxWidth: 320,
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                      }}>
                        <span style={{ fontSize: 16, fontWeight: 700, color: '#c0392b', letterSpacing: 1.5, display: 'block', marginBottom: 6 }}>{step.phase}</span>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>{step.title}</h3>
                        <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                      </div>
                    ) : <div />}
                  </div>

                  {/* Center number */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      border: '2px solid #c0392b', background: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 800, color: '#c0392b', zIndex: 1,
                      boxShadow: '0 0 0 4px #f9fafb',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Right slot */}
                  <div style={{ paddingLeft: 28 }}>
                    {step.side === 'right' ? (
                      <div style={{
                        background: '#1a1a1a', borderRadius: 12, padding: '20px 24px',
                        maxWidth: 320, boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
                      }}>
                        <span style={{ fontSize: 16, fontWeight: 700, color: '#c0392b', letterSpacing: 1.5, display: 'block', marginBottom: 6 }}>{step.phase}</span>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 8 }}>{step.title}</h3>
                        <p style={{ fontSize: '1rem', color: '#9ca3af', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                      </div>
                    ) : <div />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#0a0a0a', padding: '72px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, color: '#fff', marginBottom: 16 }}>
            Ready to Build Your Metaverse?
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.7, marginBottom: 36 }}>
            Let's discuss your vision and craft a strategy that brings your immersive digital world to life.
          </p>
          <a href="/contact" style={{
            display: 'inline-block', padding: '15px 40px', borderRadius: 50,
            background: '#c9960a', color: '#fff', fontWeight: 700,
            fontSize: 14, letterSpacing: 1.2, textDecoration: 'none',
            textTransform: 'uppercase', transition: 'background 0.2s, transform 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#a87c08'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#c9960a'; e.currentTarget.style.transform = 'none' }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Mobile timeline fix */}
      <style>{`
        @media (max-width: 640px) {
          .timeline-line { display: none; }
        }
        @media (max-width: 640px) {
          [style*="gridTemplateColumns: 1fr 60px 1fr"] {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
          }
        }
      `}</style>
    </>
  )
}