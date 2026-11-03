import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/internet-marketing')({
  component: InternetMarketing,
})

import { Search, Share2, Mail, Megaphone, PenTool, BarChart3 } from 'lucide-react';
import SEO from "../components/SEO";

function InternetMarketing() {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-red-600" />,
      title: "SEO Optimization",
      desc: "Improve your website's visibility in search engines and drive more organic traffic to your business."
    },
    {
      icon: <Share2 className="w-8 h-8 text-red-600" />,
      title: "Social Media Marketing",
      desc: "Engage with your audience and build your brand through strategic social media campaigns."
    },
    {
      icon: <Mail className="w-8 h-8 text-red-600" />,
      title: "Email Marketing",
      desc: "Nurture leads and convert customers with targeted email campaigns that deliver results."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-red-600" />,
      title: "PPC Advertising",
      desc: "Reach your target audience quickly with carefully optimized pay-per-click advertising campaigns."
    },
    {
      icon: <PenTool className="w-8 h-8 text-red-600" />,
      title: "Content Marketing",
      desc: "Attract and engage your audience with valuable content that establishes your authority."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: "Analytics & Reporting",
      desc: "Make data-driven decisions with comprehensive analytics and detailed performance reports."
    }
  ];

  return (
    <div className="w-full bg-[#edf4f9] font-sans text-slate-800 antialiased overflow-x-hidden mt-7">
        <SEO title="Internet Marketing | Zanthium Technosoft" />
      
      {/* SECTION 1: HERO CONTAINER */}
      {/* Subtle organic background shapes replicated via CSS absolute positioning */}
      <div className="relative min-h-[550px] flex items-center max-w-7xl mx-auto px-6 py-16 lg:py-24 z-10">
        
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 -z-10" />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl translate-x-1/4 -z-10" />
        <div className="absolute bottom-10 left-1/3 w-[100px] h-[100px] bg-red-200/30 rounded-2xl rotate-45 -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1e293b] leading-[1.15]">
              Boost Your Online <br />
              <span className="relative inline-block font-normal text-[#1e293b]">
                Presence
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-red-400/50 -z-10"></span>
              </span> with Expert <br />
              Marketing
            </h1>
            <p className="text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed">
              We help businesses grow their revenue through strategic digital marketing solutions tailored to your specific goals.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#services" className="px-8 py-3.5 bg-[#e12525] text-white font-medium rounded-full shadow-md hover:bg-red-700 transition duration-300 text-md sm:text-base">
                Our Services
              </a>
              <a href="/contact" className="px-8 py-3.5 bg-[#f37013] text-white font-medium rounded-full shadow-md hover:bg-orange-600 transition duration-300 text-md sm:text-base">
                Get Started Today
              </a>
            </div>
          </div>

          {/* Hero Right Content (Image Showcase) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative rounded-3xl p-3 bg-white/30 backdrop-blur-sm shadow-xl border border-white/40 max-w-lg w-full overflow-hidden transform lg:rotate-1 hover:rotate-0 transition duration-500">
              {/* Main dashboard mock photo */}
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Marketing Analytics Dashboard on Laptop" 
                className="rounded-2xl w-full object-cover shadow-inner h-[280px] sm:h-[340px]"
              />
              {/* Glossy reflection effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: STATS BANNER */}
      <div className="bg-[#b83232] text-white py-10 shadow-lg relative z-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-black tracking-tight">187%</div>
            <div className="text-xs uppercase tracking-widest font-medium text-red-100">Average Growth</div>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-x border-red-500/40 py-6 md:py-0">
            <div className="text-4xl sm:text-5xl font-black tracking-tight">350+</div>
            <div className="text-xs uppercase tracking-widest font-medium text-red-100">Happy Clients</div>
          </div>
          <div className="space-y-1">
            <div className="text-4xl sm:text-5xl font-black tracking-tight">500+</div>
            <div className="text-xs uppercase tracking-widest font-medium text-red-100">Projects Completed</div>
          </div>
        </div>
      </div>

      {/* SECTION 3: SERVICES GRID */}
      <div id="services" className="bg-slate-50/60 py-20 lg:py-28 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b] tracking-tight">
              Our Marketing Services
            </h2>
            <div className="w-12 h-1 bg-orange-400 mx-auto rounded-full" />
            <p className="text-slate-500 text-md sm:text-base pt-2">
              We offer a comprehensive suite of digital marketing services to help your business thrive online.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border-l-4 border-red-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon Wrapper */}
                <div className="w-16 h-16 rounded-full border border-slate-100 shadow-sm flex items-center justify-center mb-6 bg-slate-50 group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>
                
                {/* Text Elements */}
                <h3 className="text-xl font-semibold text-slate-800 mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-md leading-relaxed mb-6 flex-grow">
                  {service.desc}
                </p>
                
                {/* Action Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-xs font-bold text-red-600 uppercase tracking-wider hover:text-red-700 transition"
                >
                  Learn More 
                  <span className="ml-1.5 text-md transform group-hover:translate-x-1 transition duration-200">→</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}