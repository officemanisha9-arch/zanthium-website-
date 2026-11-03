import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/career')({
  component: RouteComponent,
})

const jobListings = [
  {
    id: 'card-graphic',
    title: 'Graphic Designer & Video Editor',
    experience: '1-3 Years',
    location: 'Rudrapur',
    icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
    requirements: [
      'Excellent knowledge of Adobe Photoshop, Illustrator, CorelDRAW, Figma, and Adobe XD.',
      'Proficiency in Adobe Premiere Pro and After Effects for video editing and motion graphics.',
      'Build social media posts, banners, posters, and marketing collateral using strong typography and color theory.',
      'Edit promotional videos, reels, YouTube videos, and short-form content with smooth transitions and effects.',
      'Plan creative concepts by studying relevant information, branding, and marketing requirements.',
      'Coordinate with the marketing, web design, and content teams to deliver high-quality visual assets.',
      'Prepare final graphics and videos optimized for digital and print platforms.',
      'Maintain brand consistency across all graphic and video content.',
      'Stay updated with the latest design trends, video editing techniques, and AI creative tools.',
      'Strong creativity, attention to detail, effective time management, and the ability to meet deadlines.',
      'Cut raw video, assemble sequences, add transitions, and sync audio for reels, shorts, and promos.',
    ],
  },
  {
    id: 'card-DigitalMarketingSEO',
    title: 'Digital Marketing & SEO Executive',
    experience: '2-5 Years',
    location: 'Rudrapur',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    requirements: [
      '2-5 years of hands-on experience in Digital Marketing and SEO.',
      'Strong expertise in On-Page, Off-Page, and Technical SEO.',
      'Develop and execute SEO strategies to improve organic search visibility.',
      'Perform keyword research, competitor analysis, and website SEO audits.',
      'Optimize website content, meta tags, schema markup, and internal linking.',
      'Identify and resolve crawl, indexing, Core Web Vitals, and performance issues.',
      'Build high-quality backlinks using ethical link-building strategies.',
      'Monitor keyword rankings and continuously improve SEO performance.',
      'Plan and execute digital marketing campaigns across multiple channels.',
      'Manage and optimize Google Ads and Meta Ads campaigns for maximum ROI.',
      'Hands-on experience with Google Analytics, Search Console, and Google Tag Manager.',
      'Develop content marketing strategies and optimize existing content.',
      'Coordinate with content writers and designers for SEO-focused content.',
      'Manage social media marketing across LinkedIn, Facebook, Instagram, X, and YouTube.',
      'Support lead generation, brand awareness, and customer acquisition initiatives.',
      'Assist with email marketing, remarketing, and performance marketing campaigns.',
      'Experience using SEO tools like Ahrefs, SEMrush, Moz, Screaming Frog, Ubersuggest, or Surfer SEO.',
      'Basic understanding of HTML, CSS, WordPress, website architecture, and UX.',
      'Conduct A/B testing and optimize campaigns based on performance data.',
      'Prepare weekly and monthly SEO and marketing performance reports.',
      'Strong analytical, communication, project management, and problem-solving skills.',
      'Experience in FinTech, Blockchain, Cryptocurrency, Web3, SaaS, Banking, or Technology domains is a plus.',
      'Passion for learning the latest SEO, AI, and digital marketing trends.',
      'Self-motivated, proactive, and focused on delivering measurable business growth.',
    ],
  },
  {
    id: 'card-Sales',
    title: 'IT Sales Executive',
    experience: '1-3 Years',
    location: 'Rudrapur',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    requirements: [
      'Proven work experience in IT sector, as a sales and marketing executive.',
      'High-level communication and networking skills.',
      'A passion for sales. Understanding of commercial trends and marketing strategies.',
      'Good project management skills.',
      'Excellent interpersonal skills. Ability to work well under pressure.',
    ],
  },
  {
    id: 'card-react',
    title: 'React Native Developer',
    experience: '2-3 Years',
    location: 'Rudrapur',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919851.png',
    requirements: [
      "Bachelor's degree in computer science, information technology, or a similar field.",
      'Previous experience working as a React.js developer.',
      'In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.',
      'Experience with user interface design.',
      'Experience with browser-based debugging and performance testing software.',
      'Knowledge of REST APIs and offline storage.',
    ],
  },
  {
    id: 'card-Android',
    title: 'Android Developer',
    experience: '2-4 Years',
    location: 'Rudrapur',
    icon: 'https://cdn-icons-png.flaticon.com/512/226/226770.png',
    requirements: [
      'Strong knowledge of Android SDK, different versions of Android, and how to deal with different screen sizes.',
      'Familiarity with RESTful APIs to connect Android applications to back-end services.',
      'Strong knowledge of Android UI design principles, patterns, and best practices.',
      'Knowledge of the open-source Android ecosystem and the libraries available for common tasks.',
      'Ability to understand business requirements and translate them into technical requirements.',
      'Proficient understanding of code versioning tools, such as Git.',
      "Understanding of Google's Android design principles and interface guidelines.",
    ],
  },
]

const whyJoinPoints = [
  'Innovative Work Environment',
  'Competitive Compensation',
  'Work-Life Balance',
  'Career Growth Path',
  'Collaborative Team Culture',
]

type JobType = {
  id: string
  title: string
  experience: string
  location: string
  icon: string
  requirements: string[]
}

function JobRow({ job, onOpen }: { job: JobType; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="job-row"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        width: '100%',
        textAlign: 'left',
        background: '#fff',
        border: '1px solid #ece7e2',
        borderRadius: 14,
        padding: '18px 22px',
        cursor: 'pointer',
        font: 'inherit',
        color: 'inherit',
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          background: '#f7f4f1',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={job.icon} alt="" style={{ width: '55%', height: '55%', objectFit: 'contain' }} />
      </div>

      <div style={{ flexGrow: 1, minWidth: 0 }}>
        <h3
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontWeight: 600,
            fontSize: '1.15rem',
            color: '#1c1410',
            margin: 0,
            marginBottom: 4,
          }}
        >
          {job.title}
        </h3>
        <div style={{ fontSize: '0.88rem', color: '#6b625c' }}>
          {job.experience} &nbsp;·&nbsp; {job.location}
        </div>
      </div>

      <span className="job-row-chevron" aria-hidden="true">
        →
      </span>
    </button>
  )
}

function JobDrawer({ job, onClose }: { job: JobType | null; onClose: () => void }) {
  useEffect(() => {
    if (!job) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [job, onClose])

  return (
    <div className={`drawer-overlay ${job ? 'is-open' : ''}`} onClick={onClose} aria-hidden={!job}>
      <div
        className={`job-drawer ${job ? 'is-open' : ''}`}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={job ? job.title : undefined}
      >
        {job && (
          <>
            <div style={{ padding: '30px 30px 20px', borderBottom: '1px solid #ece7e2', position: 'relative' }}>
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  border: '1px solid #ece7e2',
                  background: '#fff',
                  color: '#1c1410',
                  fontSize: 18,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 10,
                  background: '#f7f4f1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <img src={job.icon} alt="" style={{ width: '55%', height: '55%', objectFit: 'contain' }} />
              </div>
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 600,
                  fontSize: '1.5rem',
                  color: '#1c1410',
                  margin: '0 0 8px',
                  paddingRight: 40,
                }}
              >
                {job.title}
              </h2>
              <div style={{ fontSize: '0.92rem', color: '#6b625c' }}>
                <strong style={{ color: '#1c1410', fontWeight: 600 }}>{job.experience}</strong> experience desired
                &nbsp;·&nbsp; Based in {job.location}
              </div>
            </div>

            <div style={{ padding: '24px 30px 110px', overflowY: 'auto' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {job.requirements.map((req, i) => (
                  <li
                    key={i}
                    style={{
                      position: 'relative',
                      paddingLeft: 22,
                      marginBottom: 13,
                      fontSize: '0.92rem',
                      color: '#3a332e',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, top: 2, color: '#d90429', fontSize: '0.75rem' }}>
                      ◆
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '18px 30px',
                background: '#fff',
                borderTop: '1px solid #ece7e2',
              }}
            >
              <a
                href="/contact"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: '#d90429',
                  color: '#fff',
                  padding: '13px 20px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
              >
                Apply for this role
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function RouteComponent() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const activeJob = jobListings.find(j => j.id === activeId) ?? null

  return (
    <>
      <SEO title="Career | Zanthium Technosoft" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');

        html, body { overflow-x: hidden; }
        img { max-width: 100%; }

        .career-page { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; }

        .job-row-chevron {
          flex-shrink: 0;
          font-size: 1.1rem;
          color: #b8afa8;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .job-row:hover { border-color: #d90429; }
        .job-row:hover .job-row-chevron { color: #d90429; transform: translateX(4px); }
        .job-row:focus-visible { outline: 2px solid #d90429; outline-offset: 2px; }

        .role-chip {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 30px;
          border: 1px solid oklch(44.4% 0.177 26.899);
          color: oklch(0.92 0 0);
          font-size: 0.85rem;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .role-chip:hover { background: #eda405; color: #6d0f1f; }

        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(28,20,16,0.5);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
          z-index: 100;
        }
        .drawer-overlay.is-open { opacity: 1; pointer-events: auto; }

        .job-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 440px;
          max-width: 100vw;
          background: #fff;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 40px rgba(0,0,0,0.15);
        }
        .job-drawer.is-open { transform: translateX(0); }

        @media (max-width: 575px) {
          .career-header { padding: 80px 0 60px !important; }
          .career-header h1 { font-size: 2rem !important; }
          .career-header p { font-size: 1rem !important; }
          .job-drawer {
            top: auto;
            bottom: 0;
            width: 100%;
            height: 88vh;
            border-radius: 20px 20px 0 0;
            transform: translateY(100%);
          }
          .job-drawer.is-open { transform: translateY(0); }
        }
        @media (min-width: 768px) {
          .career-header { padding: 130px 0 90px !important; }
          .career-header h1 { font-size: 2.7rem !important; }
        }
        @media (min-width: 992px) {
          .career-header { padding: 160px 0 100px !important; }
          .career-header h1 { font-size: 3.2rem !important; }
        }
      `}</style>

      <div className="career-page">
        {/* Hero */}
        <section
          className="career-header"
          style={{
            position: 'relative',
            background: 'rgba(0, 0, 0, 0.7)',
            backgroundImage: `url('https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'), url('https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`,
            backgroundSize: 'auto, 22px 22px',
            padding: '180px 0 100px',
            color: '#fff',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.7)',
            }}
          ></div>

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              maxWidth: 1650,
              margin: '0 auto',
              padding: '10px 24px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.85rem',
                color: '#eda405',
                border: '1px solid rgba(237,164,5,0.5)',
                borderRadius: 30,
                padding: '6px 16px',
                marginBottom: 24,
              }}
            >
              Careers
            </span>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
                fontSize: '2.5rem',
                lineHeight: 1.1,
                marginBottom: 20,
                background: 'linear-gradient(90deg, rgb(231, 17, 17), rgb(242, 178, 178)) text',
                WebkitTextFillColor: 'transparent',
                animation: '1s ease 0s 1 normal none running fadeInDown',
              }}
            >
              Join Our Team
            </h1>
            <p
              style={{
                fontSize: '1.1rem',
                marginBottom: 32,
                color: 'rgba(255,255,255,0.85)',
                maxWidth: 560,
                lineHeight: 1.6,
              }}
            >
              Coming together is beginning, Staying together is progress, Working together is success.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {jobListings.map(job => (
                <button
                  key={job.id}
                  className="role-chip"
                  onClick={() => setActiveId(job.id)}
                >
                  {job.title}
                </button>
              ))}
            </div>
          </div>
        </section >

        {/* Job Openings */}
        < section style={{ padding: '70px 0', background: '#f7f4f1' }
        }>
          <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 24px' }}>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
                fontSize: '1.8rem',
                color: '#1c1410',
                marginBottom: 8,
              }}
            >
              Current Openings
            </h2>
            <p style={{ color: '#6b625c', marginBottom: 32, fontSize: '0.95rem' }}>
              {jobListings.length} positions open in Rudrapur right now. Tap a role to see the full details.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {jobListings.map(job => (
                <JobRow key={job.id} job={job} onOpen={() => setActiveId(job.id)} />
              ))}
            </div>
          </div>
        </section >

        {/* Why Join */}
        < section style={{ background: '#6d0f1f', padding: '50px 0' }}>
          <div
            style={{
              maxWidth: 1300,
              margin: '0 auto',
              padding: '0 24px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {whyJoinPoints.map((point, i) => (
              <div
                key={i}
                style={{
                  padding: '10px 24px',
                  borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  textAlign: 'center',
                }}
              >
                {point}
              </div>
            ))}
          </div>
        </section >
      </div >

      <JobDrawer job={activeJob} onClose={() => setActiveId(null)} />
    </>
  )
}