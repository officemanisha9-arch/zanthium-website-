import { useState } from "react";
import SEO from "../components/SEO";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const features = [
  { title: "Expert Team", desc: "Skilled developers with real-world experience." },
  { title: "Fast Delivery", desc: "Agile process ensuring quick turnaround." },
  { title: "Scalable Solutions", desc: "Built to grow with your business." },
];

const industries = [
  { title: "CRM Solutions", icon: "👥", color: "bg-red-500" },
  { title: "Blockchain", icon: "🌐", color: "bg-green-500" },
  { title: "Finance", icon: "💵", color: "bg-lime-500" },
  { title: "Inventory Systems", icon: "📦", color: "bg-cyan-500" },
  { title: "Real Estate", icon: "🏠", color: "bg-blue-500" },
  { title: "Government", icon: "🏛️", color: "bg-red-400" },
  { title: "Custom Development", icon: "⚙️", color: "bg-purple-600" },
];

const steps = [
  { title: "Share Requirements", desc: "Tell us your project goals, tech stack, and expectations so we can align perfectly.", icon: "📩" },
  { title: "Choose Developers", desc: "Pick from our pool of highly skilled developers that match your requirements.", icon: "👨‍💻" },
  { title: "Interview & Shortlist", desc: "Interview candidates and finalize the best fit for your project.", icon: "🎯" },
  { title: "Complete Formalities", desc: "We handle contracts, onboarding, and ensure a smooth start.", icon: "📄" },
  { title: "Get Started", desc: "Your developer starts working immediately with full support from our team.", icon: "🚀" },
];

const techCategories = [
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React", "PHP"] },
  { title: "Mobile Development", items: ["React Native", "Android", "iOS"] },
  { title: "Blockchain", items: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "NFT Development"] },
  { title: "Software Solutions", items: ["CRM", "ERP", "SaaS Platforms", "Custom Software"] },
  { title: "Web & Graphics", items: ["UI/UX Design", "Figma", "Adobe XD", "Photoshop", "Branding"] },
  { title: "Internet Marketing", items: ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing"] },
];

const highlights = [
  "Free consultation & project planning",
  "Experienced & dedicated developers",
  "Fast turnaround & scalable solutions",
];

/* ─────────────────────────────────────────
   Sub-components
───────────────────────────────────────── */

function StepCard({ step, index }: { step: { title: string; desc: string; icon: React.ReactNode }; index: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative bg-white rounded-2xl border border-gray-200 p-6 pb-10 cursor-default transition-all duration-300"
      style={{
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.12)" : "none",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-50 text-red-600 rounded-xl text-2xl">
        {step.icon}
      </div>
      <h4 className="font-semibold text-lg text-gray-800 mb-2">{step.title}</h4>
      <div
        className="text-md text-gray-500 overflow-hidden transition-all duration-400"
        style={{
          maxHeight: hovered ? "120px" : "0",
          opacity: hovered ? 1 : 0,
          transition: "max-height 0.4s ease, opacity 0.4s ease",
        }}
      >
        {step.desc}
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-md font-bold shadow-md">
        {index + 1}
      </div>
    </div>
  );
}

function AccordionItem({ category, index, openIndex, setOpenIndex }: { category: { title: string; items: string[] }; index: number; openIndex: number | null; setOpenIndex: (index: number | null) => void }) {
  const isOpen = openIndex === index;
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 transition"
      >
        <span className="font-semibold text-gray-800">{category.title}</span>
        <span
          className="text-red-600 text-xl font-bold transition-transform duration-300"
          style={{ display: "inline-block", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 px-6"
        style={{ maxHeight: isOpen ? "200px" : "0" }}
      >
        <div className="py-4 flex flex-wrap gap-2">
          {category.items.map((item) => (
            <span key={item} className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-md">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Contact Form
───────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending request...' });

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch('https://zanthiumtechnosoft.com/process_form1.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Request submitted!' });
        setSubmitted(true);
        formElement.reset();
      } else {
        setStatus({ type: 'error', message: 'Failed to send request. Please try again later.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An error occurred. Please check your connection and try again.' });
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl">
      {submitted ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">✅</div>
          <h4 className="text-xl font-bold text-white mb-2">Request Submitted!</h4>
          <p className="text-red-100">We'll get back to you shortly.</p>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit}>
          <input type="hidden" name="source" value="Hire Us Page" />
          <input
            type="text" name="name" placeholder="Your Name" required
            value={form.name} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="email" name="email" placeholder="Your Email" required
            value={form.email} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="tel" name="phone" placeholder="Your Phone Number" required
            value={form.phone} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="text" name="projectType" placeholder="Project Type"
            value={form.projectType} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <textarea
            rows={4} name="message" placeholder="Tell us about your project..."
            value={form.message} onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          {status.type === 'error' && (
            <div className="text-red-300 text-md font-medium p-2 bg-red-900/50 rounded text-center">
              {status.message}
            </div>
          )}
          <button
            type="submit"
            disabled={status.type === 'loading'}
            className="w-full bg-white text-red-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status.type === 'loading' ? 'Sending...' : 'Send Request'}
          </button>
        </form>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
function HireUs() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="font-sans antialiased text-gray-800 mt-7">
        <SEO title="Hire Us | Zanthium Technosoft" />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Hire Expert Developers for Your Next Project
            </h2>
            <p className="text-gray-600 mb-6">
              We build scalable, high-performance software tailored to your business needs.
              From startups to enterprises — we deliver solutions that drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
              >
                Hire Now
              </button>
              <button
                onClick={() => scrollTo("process")}
                className="border border-gray-300 px-6 py-3 rounded-lg hover:border-red-600 hover:text-red-600 transition"
              >
                Our Process
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
              className="rounded-xl shadow-md w-full"
              alt="Developers"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY HIRE US
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-3">Why Hire Us?</h3>
          <div className="w-16 h-1 bg-red-600 mx-auto mb-6 rounded" />
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            We combine technical expertise with business understanding to deliver powerful software solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-full mb-4 mx-auto text-xl">
                  ★
                </div>
                <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
                <p className="text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INDUSTRIES
      ══════════════════════════════════════ */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="bg"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(127,0,0,0.6), rgba(30,58,138,0.7))" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h3 className="text-4xl font-bold mb-2">Industries We Serve</h3>
          <p className="text-gray-200 mb-16">Navigate Your Niche Successfully.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {industries.map((ind) => (
              <div key={ind.title} className="relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg ${ind.color}`}>
                    {ind.icon}
                  </div>
                </div>
                <div className="bg-white text-gray-800 rounded-2xl pt-12 pb-6 px-4 shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <p className="font-semibold text-red-600 text-md tracking-wide uppercase">
                    {ind.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-3 text-gray-800">How Hiring Works</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            We frame a model for your project that reduces overhead while maintaining quality.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 pb-8">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TECHNOLOGIES ACCORDION
      ══════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-3 text-gray-800">
            Technologies We Serve
          </h3>
          <p className="text-center text-gray-500 mb-12">
            Explore our expertise across multiple domains and technologies.
          </p>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {techCategories.map((cat, i) => (
              <AccordionItem
                key={cat.title}
                category={cat}
                index={i}
                openIndex={openAccordion}
                setOpenIndex={setOpenAccordion}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════════ */}
      <section id="contact" className="py-20 bg-white">
        <div
          className="max-w-7xl mx-auto p-10 grid md:grid-cols-2 gap-12 items-center rounded-2xl text-white"
          style={{ background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)" }}
        >
          {/* Left */}
          <div>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Let's Build Something Amazing Together 🚀
            </h3>
            <p className="text-red-100 mb-8">
              Tell us about your project and we'll help you turn your ideas into scalable,
              high-performance digital solutions.
            </p>
            <div className="space-y-4">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <ContactForm />
        </div>
      </section>

    </div>
  );
}

/* ─────────────────────────────────────────
   TanStack Router export (uncomment in your project)
───────────────────────────────────────── */
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/hire-us')({ component: HireUs })