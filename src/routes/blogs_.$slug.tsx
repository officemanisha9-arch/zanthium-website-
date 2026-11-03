import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Check,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ListOrdered,
  Copy,
  Folder,
  MessageSquare,
  ExternalLink,
  Award,
  Zap,
  ShieldCheck,
  Headphones
} from 'lucide-react'
import { useState } from 'react'
import SEO from '../components/SEO'
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogsData'

export const Route = createFileRoute('/blogs_/$slug')({
  component: CapermintStyleBlogDetailPage,
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug || p.id === params.slug)
    if (!post) {
      if (BLOG_POSTS.length > 0) {
        return { post: BLOG_POSTS[0] }
      }
      throw notFound()
    }
    return { post }
  },
})

function renderFormattedText(text: string) {
  if (!text) return ''
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s),]+)/g
  if (!text.match(regex)) return text

  const parts = text.split(regex)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-gray-950">
          {part.slice(2, -2)}
        </strong>
      )
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      const [, label, href] = linkMatch
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-700 hover:text-red-800 underline font-semibold transition-colors inline-flex items-center gap-0.5"
        >
          {label}
        </a>
      )
    }
    if (part.startsWith('http://') || part.startsWith('https://')) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-700 hover:text-red-800 underline font-semibold transition-colors inline-flex items-center gap-0.5"
        >
          {part}
        </a>
      )
    }
    return part
  })
}

function CapermintStyleBlogDetailPage() {
  const { post } = Route.useLoaderData()
  const [copiedLink, setCopiedLink] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Recent and related posts
  const recentPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 4)
  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === post.id)
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null

  // Calculate category counts
  const categoryCounts = BLOG_CATEGORIES.reduce((acc, cat) => {
    if (cat === "All") {
      acc[cat] = BLOG_POSTS.length
    } else {
      acc[cat] = BLOG_POSTS.filter((p) => p.category === cat).length
    }
    return acc
  }, {} as Record<string, number>)

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2500)
    }
  }

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  const scrollToSection = (sectionIndex: number) => {
    const el = document.getElementById(`section-${sectionIndex}`)
    if (el) {
      const yOffset = -90
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-[#f8f9fc] font-sans text-gray-800 antialiased pt-20 min-h-screen">
      <SEO
        title={`${post.title} | Zanthium Technosoft`}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, Zanthium Technosoft, Game Development, AI Solutions`}
      />

      {/* ── 1. CAPERMINT-STYLE HEADER & BREADCRUMBS ── */}
      <section className="bg-white border-b border-gray-200 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center flex-wrap gap-2 text-xs text-gray-500 mb-5">
            <Link to="/" className="hover:text-red-700 transition-colors font-medium">Home</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <Link to="/blogs" className="hover:text-red-700 transition-colors font-medium">Blog</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-red-700 font-semibold">{post.category}</span>
          </nav>

          <div className="max-w-4xl">
            {/* Category Tag */}
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-800 mb-4">
              {post.category}
            </span>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-gray-950 leading-tight tracking-tight mb-5">
              {post.title}
            </h1>

            {/* Meta Information Bar (No user/author details) */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-medium text-gray-700">
                  <Calendar className="w-4 h-4 text-red-700" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-medium text-gray-700">
                  <Clock className="w-4 h-4 text-red-700" />
                  {post.readTime}
                </span>
              </div>

              {/* Share Pills */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-medium mr-1">Share:</span>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-700 transition-colors cursor-pointer"
                  title="Copy link"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  title="Share on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                  title="Share on LinkedIn"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN 2-COLUMN LAYOUT (CONTENT + STICKY SIDEBAR) ── */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ═════════ LEFT MAIN ARTICLE COLUMN (8 cols) ═════════ */}
          <main className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-gray-200/80 shadow-xs space-y-9">

            {/* Featured Image */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] bg-gray-900 border border-gray-100 shadow-xs">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
                }}
              />
            </div>

            {/* Lead / Introduction Callout */}
            <div className="bg-red-50/60 border-l-4 border-red-700 p-5 sm:p-6 rounded-r-xl">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium italic">
                "{post.content.lead}"
              </p>
            </div>

            {/* ── CAPERMINT-SIGNATURE: EMBEDDED TABLE OF CONTENTS BOX ── */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="bg-[#f9fafc] border border-gray-200 rounded-xl p-5 sm:p-6">
                <div className="flex items-center gap-2 font-bold text-gray-900 text-base mb-3 pb-2 border-b border-gray-200">
                  <ListOrdered className="w-5 h-5 text-red-700" />
                  <span>Table of Contents</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  {post.tableOfContents.map((item, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => scrollToSection(idx + 1)}
                        className="text-left text-gray-700 hover:text-red-700 hover:underline transition-colors flex items-center gap-2 cursor-pointer w-full py-0.5"
                      >
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="truncate">{item}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ── ARTICLE SECTIONS ── */}
            <div className="space-y-10 text-gray-800 leading-relaxed text-base">
              {post.content.sections.map((section, idx) => (
                <section
                  key={idx}
                  id={`section-${idx + 1}`}
                  className="space-y-4 pt-2 scroll-mt-24 border-b border-gray-100 pb-8 last:border-b-0"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-950 tracking-tight flex items-baseline gap-2.5">
                    <span className="text-red-700 font-extrabold">{idx + 1}.</span>
                    <span>{section.heading.replace(/^\d+\.\s*/, '')}</span>
                  </h2>

                  <div className="space-y-3.5 text-gray-700 text-base leading-relaxed">
                    {section.body.map((p, pIdx) => (
                      <p key={pIdx}>
                        {renderFormattedText(p)}
                      </p>
                    ))}
                  </div>

                  {/* Highlight Callout */}
                  {section.highlight && (
                    <div className="my-5 p-4 bg-amber-50/70 border-l-4 border-yellow-500 rounded-r-xl">
                      <p className="text-sm sm:text-base font-semibold text-gray-900">
                        💡 {renderFormattedText(section.highlight)}
                      </p>
                    </div>
                  )}

                  {/* Bullet points with checkmarks */}
                  {section.bulletPoints && (
                    <ul className="space-y-2.5 my-4 bg-gray-50/60 p-5 rounded-xl border border-gray-200">
                      {section.bulletPoints.map((point, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base">
                          <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                          <span className="text-gray-800">{renderFormattedText(point)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Data Tables */}
                  {section.table && (
                    <div className="my-5 overflow-x-auto rounded-xl border border-gray-200 shadow-2xs">
                      <table className="w-full text-left text-sm text-gray-700">
                        <thead className="bg-[#111111] text-white text-xs uppercase tracking-wider">
                          <tr>
                            {section.table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-5 py-3.5 font-bold whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}>
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-5 py-3.5 font-medium ${cIdx === 0 ? 'font-bold text-red-800' : 'text-gray-800'
                                    }`}
                                >
                                  {renderFormattedText(cell)}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* ── CAPERMINT-STYLE IN-ARTICLE CONVERSION CTA BANNER ── */}
            <div className="bg-gradient-to-r from-[#111111] via-[#8b0000] to-[#111111] text-white p-7 sm:p-9 rounded-2xl shadow-md my-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                  {post.category === "Artificial Intelligence"
                    ? "AI Engineering Services"
                    : post.category === "Blockchain"
                      ? "Blockchain & Web3 Engineering"
                      : post.category === "Software Development"
                        ? "Custom Software Engineering"
                        : "Custom Game Development"}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {post.category === "Artificial Intelligence"
                    ? "Want to Build an AI-Powered Solution for Your Business?"
                    : post.category === "Blockchain"
                      ? "Looking to Build a Secure Blockchain or Web3 Solution?"
                      : post.category === "Software Development"
                        ? "Looking to Streamline Your Business Workflows with Custom Software?"
                        : "Looking to Develop a Game Like This?"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 max-w-xl">
                  {post.category === "Artificial Intelligence"
                    ? "Zanthium Technosoft delivers enterprise AI chatbots, automated KYC verification, real-time caller assistants, and adaptive learning apps tailored to your business."
                    : post.category === "Blockchain"
                      ? "From enterprise smart contracts and tokenization to dApps, DeFi protocols, and secure wallet integrations, Zanthium Technosoft engineers robust blockchain solutions."
                      : post.category === "Software Development"
                        ? "From custom workflow automation and business portals to enterprise software architecture, Zanthium Technosoft builds scalable digital solutions to support continuous improvement."
                        : "From full-cycle game mechanics and certified RNG to multiplayer WebSockets and mobile deployment, we turn your game concept into reality."}
                </p>
              </div>
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 text-center"
              >
                Get a Free Quote
              </a>
            </div>

            {/* ── EXPANDABLE FAQ ACCORDION ── */}
            {post.content.faqs && post.content.faqs.length > 0 && (
              <div id="section-faqs" className="mt-10 pt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-red-700" />
                  <span>Frequently Asked Questions</span>
                </h3>

                <div className="space-y-3">
                  {post.content.faqs.map((faq, fIdx) => {
                    const isOpen = openFaq === fIdx
                    return (
                      <div
                        key={fIdx}
                        className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white"
                      >
                        <button
                          onClick={() => toggleFaq(fIdx)}
                          className="w-full px-5 py-4 text-left font-bold text-sm sm:text-base text-gray-900 hover:text-red-700 bg-gray-50/50 hover:bg-gray-100/50 flex items-center justify-between gap-3 transition-colors cursor-pointer"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-red-700' : ''
                              }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-5 py-4 text-sm text-gray-600 bg-white border-t border-gray-100 leading-relaxed">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── CAPERMINT-STYLE "WHY CHOOSE ZANTHIUM TECHNOSOFT?" SECTION ── */}
            <div className="mt-12 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-2">
                Why Partner With Zanthium Technosoft?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-6">
                We are a full-cycle technology and software development company delivering robust digital products across gaming and artificial intelligence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">End-to-End Execution</h4>
                    <p className="text-xs text-gray-600 mt-0.5">From discovery and UX wireframing to high-performance code and cloud deployment.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Certified Security & RNG</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Built with strict regulatory adherence, data privacy, and mathematically verified algorithms.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex items-start gap-3">
                  <Award className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Experienced Engineers</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Specialized architects in WebSocket real-time state, AI computer vision, and speech tech.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-gray-200/80 flex items-start gap-3">
                  <Headphones className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Dedicated Post-Launch SLA</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Continuous monitoring, version maintenance, live-ops updates, and scaling support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── KEY TAKEAWAYS CARD ── */}
            <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-7 shadow-xs mt-6">
              <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Key Takeaways</span>
              </h3>
              <div className="space-y-3">
                {post.content.takeaways.map((takeaway, tIdx) => (
                  <div key={tIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                    <span className="w-5 h-5 rounded-full bg-red-700 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {tIdx + 1}
                    </span>
                    <span>{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 py-4 border-t border-b border-gray-200">
              <span className="text-xs font-bold text-gray-500 uppercase mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Previous / Next Article Navigation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {prevPost ? (
                <Link
                  to="/blogs/$slug"
                  params={{ slug: prevPost.slug }}
                  className="group p-4 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <span className="text-[11px] font-bold text-gray-400 uppercase flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                    <span>Previous Post</span>
                  </span>
                  <div className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2 mt-1">
                    {prevPost.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  to="/blogs/$slug"
                  params={{ slug: nextPost.slug }}
                  className="group p-4 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xs transition-all flex flex-col justify-between text-right"
                >
                  <span className="text-[11px] font-bold text-gray-400 uppercase flex items-center justify-end gap-1">
                    <span>Next Post</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2 mt-1">
                    {nextPost.title}
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>

          </main>


          {/* ═════════ RIGHT SIDEBAR (4 cols, CAPERMINT STYLE) ═════════ */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">

            {/* 1. CAPERMINT-STYLE PROJECT ESTIMATE / INQUIRY CTA CARD */}
            <div className="bg-gradient-to-br from-[#111111] via-[#8b0000] to-[#111111] text-white p-6 sm:p-7 rounded-2xl shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-2.5 py-0.5 rounded-full inline-block mb-3 border border-yellow-400/30">
                Project Consultation
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Have a Blockchain, Game or AI Project in Mind?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Partner with Zanthium Technosoft to bring your technical vision to life. Get a detailed scope, tech stack consultation, and cost estimate.
              </p>

              <div className="space-y-2 mb-5 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Free Tech Consultation & Proposal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 shrink-0" />
                  <span>NDA Protected Discussion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400 shrink-0" />
                  <span>Flexible Hiring & Fixed Scope Models</span>
                </div>
              </div>

              <a
                href="/contact"
                className="w-full inline-block py-3 px-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-950 font-bold text-xs uppercase tracking-wider transition-colors text-center shadow-xs"
              >
                Request a Free Quote
              </a>
            </div>

            {/* 2. RECENT ARTICLES WIDGET (CAPERMINT STYLE) */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
              <h3 className="text-sm font-bold text-gray-950 uppercase tracking-wider pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-700" />
                <span>Recent Articles</span>
              </h3>

              <div className="space-y-4">
                {recentPosts.map((rec) => (
                  <Link
                    key={rec.id}
                    to="/blogs/$slug"
                    params={{ slug: rec.slug }}
                    className="group flex gap-3 items-start"
                  >
                    <div className="w-16 h-14 rounded-lg overflow-hidden shrink-0 bg-gray-900 border border-gray-200">
                      <img
                        src={rec.image}
                        alt={rec.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2 leading-snug">
                        {rec.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-1">
                        <Calendar className="w-3 h-3 text-red-700" />
                        <span>{rec.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. CATEGORIES WIDGET (CAPERMINT STYLE) */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
              <h3 className="text-sm font-bold text-gray-950 uppercase tracking-wider pb-3 mb-4 border-b border-gray-100 flex items-center gap-2">
                <Folder className="w-4 h-4 text-red-700" />
                <span>Categories</span>
              </h3>

              <div className="space-y-2 text-xs">
                {BLOG_CATEGORIES.map((cat) => (
                  <Link
                    key={cat}
                    to="/blogs"
                    className="flex items-center justify-between py-1.5 px-2 rounded-lg text-gray-700 hover:text-red-700 hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium">{cat}</span>
                    <span className="bg-gray-100 text-gray-600 font-bold px-2 py-0.5 rounded-full text-[10px]">
                      {categoryCounts[cat] || 0}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 4. SHARE THIS ARTICLE CARD */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Share This Article
              </h3>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex-1 py-2 px-3 rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? "Copied!" : "Copy Link"}</span>
                </button>

                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  title="Share on WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                  title="Share on LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </aside>

        </div>

        {/* ── 3. BOTTOM RELATED ARTICLES GRID (CAPERMINT STYLE) ── */}
        <section className="mt-16 pt-10 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700 block mb-1">
                More Insights
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-950">
                Related Articles
              </h3>
            </div>
            <Link to="/blogs" className="text-xs font-bold text-red-700 hover:text-red-900 flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.slice(0, 3).map((rel) => (
              <Link
                key={rel.id}
                to="/blogs/$slug"
                params={{ slug: rel.slug }}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 w-full overflow-hidden bg-gray-900">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold text-red-700 uppercase">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2 mt-1 mb-2 leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-red-700" />
                    {rel.readTime}
                  </span>
                  <span className="text-red-700 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    Read More <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
