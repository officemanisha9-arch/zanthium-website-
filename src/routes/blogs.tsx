import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useMemo, useEffect } from 'react'
import { 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import SEO from '../components/SEO'
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogsData'

export const Route = createFileRoute('/blogs')({
  component: SimpleBlogsPage,
})

const POSTS_PER_PAGE = 12

function SimpleBlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)

  // Reset to page 1 whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory

      const query = searchQuery.trim().toLowerCase()
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.name.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [selectedCategory, searchQuery])

  // Pagination calculation
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [filteredPosts, currentPage])

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
      const gridSection = document.getElementById('blog-grid-section')
      if (gridSection) {
        const topOffset = gridSection.getBoundingClientRect().top + window.pageYOffset - 90
        window.scrollTo({ top: topOffset, behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 350, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="w-full bg-[#fbfbfb] font-sans text-gray-800 antialiased pt-20 min-h-screen">
      <SEO
        title="Blogs & Articles | Zanthium Technosoft"
        description="Explore the latest technology articles, architecture guides, and software engineering insights from Zanthium Technosoft."
        keywords="Zanthium Technosoft blogs, tech articles, software development, blockchain, AI, web development"
      />

      {/* ── 1. SIMPLE HEADER BANNER ── */}
      <section className="bg-gradient-to-r from-[#111111] via-[#8b0000] to-[#111111] text-white py-12 sm:py-16 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-[3px] text-yellow-400 font-bold mb-2 inline-block">
            Insights & Knowledge
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
            Our <span className="text-yellow-400">Blogs</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto leading-relaxed">
            Read practical engineering insights, industry perspectives, and architectural best practices from our technical team.
          </p>
        </div>
      </section>

      {/* ── 2. SIMPLE FILTER & SEARCH CONTROLS ── */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {BLOG_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? "bg-red-700 text-white shadow-xs"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Simple Search Input */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-full pl-9 pr-8 py-1.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CLEAN 3-COLUMN BLOG GRID WITH PAGINATION ── */}
      <section id="blog-grid-section" className="py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200 max-w-md mx-auto p-6">
              <h3 className="text-base font-bold text-gray-800 mb-1">No blogs found</h3>
              <p className="text-xs text-gray-500 mb-4">
                We couldn't find any articles matching your search or filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="px-4 py-1.5 rounded-lg bg-red-700 text-white text-xs font-semibold hover:bg-red-800 transition-colors cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              {/* Blog Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {paginatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    to="/blogs/$slug"
                    params={{ slug: post.slug }}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-lg hover:border-red-300 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Top Image */}
                    <div>
                      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gray-900">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-700 text-white shadow-xs">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        {/* Date & Read Time */}
                        <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-gray-400" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-yellow-600" />
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-red-700 transition-colors leading-snug line-clamp-2 mb-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-5 pb-4 pt-2 border-t border-gray-100 flex items-center justify-end text-xs">
                      <span className="text-red-700 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* ── 4. PAGINATION CONTROLS ── */}
              {totalPages > 1 && (
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Results Count Text */}
                  <p className="text-xs text-gray-500 font-medium">
                    Showing <span className="text-gray-900 font-bold">{(currentPage - 1) * POSTS_PER_PAGE + 1}</span>–
                    <span className="text-gray-900 font-bold">{Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)}</span> of{' '}
                    <span className="text-gray-900 font-bold">{filteredPosts.length}</span> articles
                  </p>

                  {/* Page Navigation Buttons */}
                  <div className="flex items-center gap-1.5">
                    {/* Previous Button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                        currentPage === 1
                          ? "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50"
                          : "border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-600 hover:text-red-700 bg-white shadow-xs cursor-pointer"
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Prev</span>
                    </button>

                    {/* Numeric Page Buttons */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                      const isActive = pageNum === currentPage
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          aria-current={isActive ? "page" : undefined}
                          className={`w-9 h-9 rounded-lg text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                            isActive
                              ? "bg-red-700 text-white shadow-sm border border-red-700"
                              : "bg-white text-gray-700 hover:bg-gray-100 hover:text-red-700 border border-gray-200"
                          }`}
                        >
                          {pageNum}
                        </button>
                      )
                    })}

                    {/* Next Button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                        currentPage === totalPages
                          ? "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50"
                          : "border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-600 hover:text-red-700 bg-white shadow-xs cursor-pointer"
                      }`}
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
