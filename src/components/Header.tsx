import { Link } from '@tanstack/react-router'
import { Globe, Network, Paintbrush, Phone, SquaresExclude, WebcamIcon } from 'lucide-react';
import { useState, useRef, useEffect } from "react";

const servicesMenu = {
  categories: [
    {
      key: "blockchain",
      label: "Blockchain",
      icon: <Globe className="w-4 h-4"/>,
      items: [
        { link: "/blockchain", title: "Blockchain Development", desc: "We Innovate For Digital Transformation Using Smart Contracts And Blockchain" },
        { link: "/exchange-listing", title: "Cryptocurrency Exchange", desc: "We Engineer Secure, Scalable Platforms For Crypto Asset Trading And Liquidity" },
        { link: "/smart-contract", title: "Smart Contract", desc: "We Develop Secure And Automated Smart Contracts For Transparent Transactions" },
        { link: "/token-coin", title: "Token & Coin", desc: "We Create Custom Tokens And Native Coins With Advanced Blockchain Utility" },
        { link: "/wallet_development", title: "Wallet Development", desc: "We Build Secure, Multi-Asset Wallets For Seamless Crypto Asset Management" },
        { link: "/defi_development", title: "Defi Development", desc: "We Enable Financial Inclusion Through Decentralized Lending And Yield Protocols" },
        { link: "/metaverse_development", title: "Metaverse Development", desc: "We Design Immersive Blockchain Worlds With NFTs, Avatars, And Digital Economies" },
        { link: "/tokenization", title: "Tokenization", desc: "We Unlock Asset Liquidity By Tokenizing Real Estate, Equity, And Intellectual Property" },
      ],
    },
    {
      key: "web",
      label: "Web Development",
      icon: <WebcamIcon className="w-4 h-4"/>,
      items: [
        { link: "/web-development#ecommerce", title: "E-Commerce Solutions", desc: "Custom online stores with secure payment gateways and inventory management" },
        { link: "/web-development#cms", title: "CMS Development", desc: "Content Management Systems tailored to your business needs" },
        { link: "/web-development#WebApp", title: "Web Portal Development", desc: "Custom web portals for businesses, communities, and organizations" },
        { link: "/web-development#open-source", title: "Open Source Solution", desc: "Cost-Effective, simple and fast! Alternative to commercial software" },
        { link: "/web-development#custom", title: "Custom Web Development", desc: "Tailored solutions for your specific business requirements" },
        { link: "/web-development#api", title: "API Integration", desc: "Seamless integration with third-party services and platforms" },
      ],
    },
    {
      key: "software",
      label: "Software Solutions",
      icon: <SquaresExclude className="w-4 h-4"/>,
      items: [
        { link: "/software-development", title: "Custom Software", desc: "Tailored solutions designed specifically for your business needs" },
        { link: "/enterprise_software", title: "Enterprise Software", desc: "Scalable solutions for large organizations and corporations" },
        { link: "/saas_development", title: "SaaS Development", desc: "Cloud-based software solutions with subscription models" },
        { link: "/desktop_app", title: "Desktop Applications", desc: "Native applications for Windows, macOS, and Linux platforms" },
        { link: "/system_integration", title: "System Integration", desc: "Connecting disparate systems for seamless data flow" },
      ],
    },
    {
      key: "graphics",
      label: "Web & Graphics",
      icon: <Paintbrush className="w-4 h-4"/>,
      items: [
        { link: "/web_design", title: "Web Design Services", desc: "We create responsive, user-friendly websites that drive engagement and conversions" },
        { link: "/web-graphic-designing", title: "Graphic Design Services", desc: "Visual solutions that communicate your brand message effectively" },
      ],
    },
    {
      key: "marketing",
      label: "Internet Marketing",
      icon: <Network className="w-4 h-4" />,
      items: [
        { link: "/internet-marketing", title: "Internet Marketing", desc: "SEO, PPC, Social Media and Digital Marketing Services" },
      ],
    },
    {
      key: "mobile",
      label: "Mobile Application",
      icon: <Phone className="w-4 h-4" />,
      items: [
        { link: "/mobile-application", title: "Mobile Application Development", desc: "Android, iOS and Cross-Platform App Development" },
      ],
    },
  ],
};

const industryItems = [
  { link: "/Entertainment", title: "Entertainment", desc: "We Revolutionize Digital Entertainment With Blockchain Platforms" },
  { link: "/Education", title: "Education", desc: "We Empower Learning With Secure, Transparent, And Solutions" },
  { link: "/transport", title: "Transport & Logistics", desc: "We Optimize Transport & Logistics With Smart Contracts And Tracking" },
  { link: "/supply", title: "Supply Chain", desc: "We Streamline Supply Chains With Blockchain For Transparency" },
  { link: "/carbon", title: "Carbon Credit", desc: "We Enable Transparent Carbon Credit Tracking With Verified Digital Tokens" },
  { link: "/procure-to-pay", title: "Procure to Pay", desc: "We Automate Procure-To-Pay Cycles With Smart Contracts And Audit Trails" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12" fill="none"
      className={`transform transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industry" | null>(null);
  const [activeCategory, setActiveCategory] = useState("blockchain");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"services" | "industry" | null>(null);
  const [mobileCategoryExpanded, setMobileCategoryExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const activeServiceCategory = servicesMenu.categories.find(c => c.key === activeCategory);

  const toggleMobileSection = (section: "services" | "industry") => {
    setMobileExpanded(prev => prev === section ? null : section);
    if (section === "services") setMobileCategoryExpanded(null);
  };

  return (
    <div className="bg-slate-50 antialiased font-sans">
      <nav ref={headerRef} className="bg-white  border-b border-slate-200 shadow-sm fixed w-full top-0 left-0 z-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo11.png" alt="Company Logo" className="h-12 lg:h-14 xl:h-14 w-auto object-contain" />
          </Link>

          {/* Combined Navigation Links Ordered Layout */}
          <div className="hidden xl:flex items-center gap-1">
            <Link to="/" className="px-3 py-2 text-md font-medium text-black rounded-md hover:text-red-700 transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link to="/aboutus" className="px-3 py-2 text-md font-medium text-black rounded-md hover:text-red-700 transition-colors whitespace-nowrap">
              About Us
            </Link>

            {/* Services Dropdown (Directly After About Us) */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                className={`px-3 py-2 text-md font-medium rounded-md flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeDropdown === "services" ? "text-red-700 bg-red-50" : "text-black hover:text-red-700"
                }`}
              >
                Services <Chevron open={activeDropdown === "services"} />
              </button>
            </div>

            {/* Industry Dropdown (Directly After Services) */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "industry" ? null : "industry")}
                className={`px-3 py-2 text-md font-medium rounded-md flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeDropdown === "industry" ? "text-red-700 bg-red-50" : "text-black hover:text-red-700"
                }`}
              >
                Industry <Chevron open={activeDropdown === "industry"} />
              </button>
            </div>

            <Link to="/technologies" className="px-3 py-2 text-md font-medium text-black rounded-md hover:text-red-700 transition-colors whitespace-nowrap">
              Technologies
            </Link>
            <Link to="/blogs" className="px-3 py-2 text-md font-medium text-black rounded-md hover:text-red-700 transition-colors whitespace-nowrap">
              Blogs
            </Link>
            <Link to="/career" className="px-3 py-2 text-md font-medium text-black rounded-md hover:text-red-700 transition-colors whitespace-nowrap">
              Career
            </Link>
            <Link to="/hire-us" className="px-3 py-2 text-md font-medium text-black rounded-md hover:text-red-700 transition-colors whitespace-nowrap">
              Hire Us
            </Link>
            {/* <Link to="/internship" className="px-3 py-2 text-md font-medium text-black rounded-md hover:text-red-700 transition-colors whitespace-nowrap">
              Internship
            </Link> */}
            {/* <Link
              to="/payments"
              className="flex items-center gap-2 px-4 py-2 text-md font-semibold text-white  transition-all duration-300 whitespace-nowrap"
            >
              <img src="/ph.png" alt="" className='w-20 h-20' />
            </Link> */}
            </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-block bg-red-800 hover:bg-red-700 text-white font-bold rounded-md px-5 py-2.5 text-md tracking-wide shadow-sm transition-colors whitespace-nowrap"
          >
            Get in Touch
          </Link>
          <Link
            to="/payments"
            className="hidden xl:flex items-center"
          >
            <img
              src="/ph.png"
              alt="Payments"
              className="w-16 xl:w-20 h-auto"
            />
          </Link>

          {/* Responsive Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden flex flex-col justify-center items-center gap-1 w-10 h-10 border border-slate-200 rounded-md p-2 bg-slate-50 active:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-200 ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-800 transition-all duration-200 ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* ===== SERVICES MEGA MENU (desktop) ===== */}
        {activeDropdown === "services" && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-slate-200 flex z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div 
              className="w-64 border-r border-slate-100 py-4 shrink-0 bg-cover bg-center relative"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(254,242,242,0.9), rgba(241,245,249,0.95)), url('/service.png')` }}
            >
              {servicesMenu.categories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-3 w-full px-5 py-3 border-l-4 text-md font-semibold transition-all ${
                    activeCategory === cat.key 
                      ? "bg-red-50 border-red-700 text-red-700" 
                      : "border-transparent text-slate-700 hover:bg-slate-100 hover:text-red-700"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-md shrink-0 transition-colors ${
                    activeCategory === cat.key ? "bg-red-700 text-white" : "bg-slate-200 text-slate-700"
                  }`}>
                    {cat.icon}
                  </span>
                  {cat.label}
                </button>
              ))}
            </div>
            
            <div className="flex-1 p-8 overflow-y-auto bg-white max-h-120">
              <div className="grid grid-cols-3 gap-4">
                {activeServiceCategory?.items.map(item => (
                  <Link 
                    key={item.title} 
                    to={item.link}
                    onClick={() => setActiveDropdown(null)}
                    className="block p-4 border border-slate-200 rounded-lg bg-white transition-all hover:shadow-md hover:border-red-100"
                  >
                    <div className="font-semibold text-md text-slate-900 mb-1">{item.title}</div>
                    <div className="text-md text-slate-500 leading-relaxed">{item.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== INDUSTRY MEGA MENU (desktop) ===== */}
        {activeDropdown === "industry" && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-b border-slate-200 flex p-8 gap-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            <div 
              className="w-72 shrink-0 rounded-xl overflow-hidden min-h-70 flex items-end p-5 bg-cover bg-center relative group shadow-sm"
              style={{ backgroundImage: `linear-gradient(to top, rgba(15,23,42,0.95), rgba(15,23,42,0.2)), url('/industory.jpg')` }}
            >
              <div>
                <div className="text-lg font-bold text-white mb-1">Industry Solutions</div>
                <div className="text-xs text-slate-300">Blockchain-powered platforms across multiple business sectors</div>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-3 gap-4 align-content-start">
              {industryItems.map(item => (
                <Link 
                  key={item.title} 
                  to={item.link}
                  onClick={() => setActiveDropdown(null)}
                  className="block p-4 border border-slate-200 rounded-lg bg-white transition-all hover:shadow-md hover:border-red-100"
                >
                  <div className="font-semibold text-md text-slate-900 mb-1">{item.title}</div>
                  <div className="text-md text-slate-500 leading-relaxed">{item.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ===== MOBILE DRAWER ACCORDION ===== */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-x-0 bottom-0 top-20 bg-white z-99 overflow-y-auto border-t-2 border-red-700 animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center px-6 h-14 text-md font-medium text-black border-b border-slate-100">
            Home
          </Link>
          <Link to="/aboutus" onClick={() => setMobileOpen(false)} className="flex items-center px-6 h-14 text-md font-medium text-black border-b border-slate-100">
            About Us
          </Link>

          {/* ── Mobile Services Accordion Section ── */}
          <button
            onClick={() => toggleMobileSection("services")}
            className={`flex items-center justify-between w-full h-14 px-6 border-b border-slate-100 text-md font-semibold transition-colors ${
              mobileExpanded === "services" ? "bg-red-50 text-red-700" : "bg-white text-black"
            }`}
          >
            Services <Chevron open={mobileExpanded === "services"} />
          </button>

          {mobileExpanded === "services" && (
            <div className="bg-slate-50">
              {servicesMenu.categories.map(cat => {
                const isOpen = mobileCategoryExpanded === cat.key;
                return (
                  <div key={cat.key}>
                    <button
                      onClick={() => setMobileCategoryExpanded(isOpen ? null : cat.key)}
                      className={`flex items-center justify-between w-full py-3 px-6 border-b border-slate-200/60 text-xs font-semibold transition-all ${
                        isOpen ? "bg-red-50/60 text-red-700 border-l-4 border-l-red-700 pl-5" : "text-slate-700"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${isOpen ? "bg-red-700 text-white" : "bg-slate-300 text-slate-700"}`}>
                          {cat.icon}
                        </span>
                        {cat.label}
                      </span>
                      <Chevron open={isOpen} />
                    </button>

                    {isOpen && (
                      <div className="bg-white border-b border-slate-200">
                        {cat.items.map(item => (
                          <Link
                            key={item.title}
                            to={item.link}
                            onClick={() => setMobileOpen(false)}
                            className="flex flex-col justify-center px-8 py-3 border-b border-slate-50 last:border-none pl-12"
                          >
                            <div className="text-xs font-semibold text-slate-900 mb-0.5">{item.title}</div>
                            <div className="text-[11px] text-slate-400 leading-normal">{item.desc}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* ── Mobile Industry Accordion Section ── */}
          <button
            onClick={() => toggleMobileSection("industry")}
            className={`flex items-center justify-between w-full h-14 px-6 border-b border-slate-100 text-md font-semibold transition-colors ${
              mobileExpanded === "industry" ? "bg-red-50 text-red-700" : "bg-white text-black"
            }`}
          >
            Industry <Chevron open={mobileExpanded === "industry"} />
          </button>

          {mobileExpanded === "industry" && (
            <div className="bg-white border-b border-slate-100">
              {industryItems.map(item => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col justify-center px-8 py-3 border-b border-slate-100 last:border-b-0 pl-12"
                >
                  <div className="text-xs font-semibold text-slate-900 mb-0.5">{item.title}</div>
                  <div className="text-[11px] text-slate-400 leading-normal">{item.desc}</div>
                </Link>
              ))}
            </div>
          )}

          <Link to="/technologies" onClick={() => setMobileOpen(false)} className="flex items-center px-6 h-14 text-md font-medium text-black border-b border-slate-100">
            Technologies
          </Link>
          <Link to="/blogs" onClick={() => setMobileOpen(false)} className="flex items-center px-6 h-14 text-md font-medium text-black border-b border-slate-100">
            Blogs
          </Link>
          <Link to="/career" onClick={() => setMobileOpen(false)} className="flex items-center px-6 h-14 text-md font-medium text-black border-b border-slate-100">
            Career
          </Link>
          <Link to="/hire-us" onClick={() => setMobileOpen(false)} className="flex items-center px-6 h-14 text-md font-medium text-black border-b border-slate-100">
            Hire Us
          </Link>
          {/* <Link to="/internship" onClick={() => setMobileOpen(false)} className="flex items-center px-6 h-14 text-md font-medium text-black border-b border-slate-100">
            Internship
          </Link> */}
          <Link to="/payments" onClick={() => setMobileOpen(false)} className="flex items-center px-6 h-14 text-md font-medium text-black border-b border-slate-100">
            Payments
          </Link>

          <div className="p-6">
            <Link 
              to="/contact" 
              onClick={() => setMobileOpen(false)}
              className="block w-full bg-red-800 text-white text-center font-bold rounded-lg py-3.5 text-md tracking-wide shadow"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}