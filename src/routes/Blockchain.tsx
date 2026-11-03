import { createFileRoute } from '@tanstack/react-router'
import React, { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";

/* ─────────────────────────────────────────
   Particle Canvas Hook
───────────────────────────────────────── */
function useParticleCanvas(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas!.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.speedY *= -1;
      }
      draw() {
        ctx!.fillStyle = "rgba(0,194,255,0.5)";
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          if (dx * dx + dy * dy < 10000) {
            ctx!.strokeStyle = "rgba(0,194,255,0.1)";
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(particles[a].x, particles[a].y);
            ctx!.lineTo(particles[b].x, particles[b].y);
            ctx!.stroke();
          }
        }
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      connect();
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef]);
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const services = [
  {icon: "/blockchain/defi1.png", title: "Defi Development", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/solidity1.png", title: "Solidity Development", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/smartcont1.png", title: "Smart Contract Development", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/blockchain1.png", title: "Blockchain Consulting", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/dapp1.png", title: "TRON DApps Development", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/trx1.png", title: "TRON Token Development", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/web1.png", title: "Web Development", desc: "We help our customers launch a new online business in the shortest possible time including affiliate programs, e-mail monitoring, automatic reply, shopping cart and everything needed to be profitable when you put your business online." },
  {icon: "/blockchain/ieo2.png", title: "Software Development", desc: "We help our customers launch a new online business in the shortest possible time including affiliate programs, e-mail monitoring, automatic reply, shopping cart and everything needed to be profitable when you put your business online." },
  {icon: "/blockchain/mobileApp1.png", title: "Mobile Application", desc: "We work on almost all the platforms available and have done some very interesting and innovative projects in these areas. We have been working for a considerable period of time in the field of Web, Software and Applications." },
  {icon: "/blockchain/mlm1.png", title: "Cryptocurrency Software", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/coin1.png", title: "Coin Development", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/margintrading1.png", title: "Margin Trading", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/icodev1.png", title: "ICO Development", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/ico.png", title: "ICO Marketing", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
  {icon: "/blockchain/ieo3.png", title: "IEO Development", desc: "Provide Defi development services to rake in the benefits provided by the Fintech industry. Several advantages are rendered in the form of atomic swapping, lesser risk, over-collateralization, and high-level liquidity." },
];

const processCards = [
  {
    tag: "Our Team",
    title: "Our team Creates a block:",
    desc: "Every transaction is initiated and securely broadcast across a decentralized network of nodes. Each node independently verifies the transaction using predefined consensus mechanisms. Once validated, the transaction data is grouped into a block, ensuring authenticity and eliminating the risk of duplication or manipulation.",
    img: "https://www.shutterstock.com/image-photo/two-business-professionals-discussing-blockchain-600nw-2498303763.jpg",
  },
  {
    tag: "Linking",
    title: "We then Link blocks",
    desc: "Each block is cryptographically linked to the previous one using a unique hash value. This ensures that any alteration in data changes the hash instantly, making tampering easily detectable. This continuous linking forms a transparent and traceable chain of data movement.",
    img: "https://theblockchainassociation.org/api/media/file/BlockchainAssociationEvents-500x500.jpg",
  },
  {
    tag: "Adding Value",
    title: "Then we Add to the chain",
    desc: "Validated blocks are permanently added to the blockchain through a secure consensus process. This distributed validation ensures that every transaction is immutable, accurate, and resistant to fraud, creating a reliable digital ledger for all participants.",
    img: "https://static.vecteezy.com/system/resources/previews/069/802/443/non_2x/abstract-blockchain-technology-digital-background-vector.jpg",
  },
];

const bentoCards = [
  {
    span: 2,
    bg: "bg-gray-100",
    hoverBg: "hover:bg-[#920202]",
    tag: "PROCESS MANAGEMENT",
    tagColor: "text-gray-500 group-hover:text-gray-300",
    title: "Seamless execution across every stage of development.",
    titleColor: "text-gray-800 group-hover:text-white",
    desc: "A dedicated team oversees planning, development, testing, and deployment—ensuring transparency, efficiency, and smooth collaboration throughout the entire project lifecycle.",
    descColor: "text-gray-600 group-hover:text-gray-200",
  },
  {
    span: 1,
    bg: "bg-[#7829C1]",
    hoverBg: "",
    tag: "ESTABLISHED",
    tagColor: "text-[#D6A1F3]",
    title: "A trusted and well-established blockchain development company.",
    titleColor: "text-white",
    desc: "With a strong portfolio of successfully delivered projects, the company has built a reputation for reliability, consistency, and long-term client relationships.",
    descColor: "text-white/80",
  },
  {
    span: 1,
    bg: "bg-[#E94E2C]",
    hoverBg: "",
    tag: "PRIVACY",
    tagColor: "text-[#FCD2CB]",
    title: "Ensuring complete confidentiality and data protection.",
    titleColor: "text-white",
    desc: "Every client engagement is backed by strict privacy agreements and secure handling of sensitive information, ensuring trust and long-term partnerships.",
    descColor: "text-white/80",
  },
  {
    span: 1,
    bg: "bg-white border-2 border-gray-100",
    hoverBg: "hover:border-[#920202]",
    tag: "WORK ETHICS",
    tagColor: "text-gray-400 group-hover:text-[#920202]",
    title: "Discipline and integrity in every project.",
    titleColor: "text-gray-700 group-hover:text-gray-900",
    desc: "Strong work ethics, structured workflows, and accountability-driven execution help maintain high standards and deliver consistent results.",
    descColor: "text-gray-500 group-hover:text-gray-700",
  },
];

const extraIndustries = [
  {
    title: "Voting and Blockchain Solutions",
    desc: "Build secure and transparent voting systems that prevent duplication and tampering. Ensure accuracy and trust in electoral processes through decentralized verification.",
  },
  {
    title: "Supply Chain and Blockchain Solutions",
    desc: "Track goods in real time from origin to delivery. Improve transparency, reduce inefficiencies, and strengthen trust across suppliers, vendors, and customers.",
  },
];



/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
function BlockchainComponent() {
  const canvasRef = useRef(null);
  const [showExtra, setShowExtra] = useState(false);
  useParticleCanvas(canvasRef);

  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800 antialiased">
        <SEO title="Blockchain Development | Zanthium Technosoft" />

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20 lg:py-32"
        style={{ background: "#f0f9ff" }}
      >
        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        />

        {/* Animated blobs */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0,0); }
            50% { transform: translate(20px,-20px); }
          }
          .blob { position:absolute; border-radius:50%; filter:blur(100px); z-index:0; opacity:0.6; }
          .blob-1 { width:600px; height:600px; background:#fdf2e9; top:-100px; left:-150px; animation:float 10s infinite ease-in-out; }
          .blob-2 { width:500px; height:500px; background:#e0f2fe; bottom:-100px; right:-50px; animation:float 10s 2s infinite ease-in-out; }
          .blob-3 { width:300px; height:300px; background:#f5f3ff; top:20%; right:15%; animation:float 10s 4s infinite ease-in-out; }
          .clip-tag { clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%); }
        `}</style>
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div className="order-2 lg:order-1">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{
                  background: "linear-gradient(90deg, #ff9d00, #ee0909)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Looking for quick <br />
                <span style={{ color: "#e53e3e", WebkitTextFillColor: "#e53e3e" }}>Blockchain</span> solutions?
              </h1>

              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
                A trusted blockchain development partner in India. We deliver scalable solutions in smart contracts,
                DeFi, and enterprise networks to help you innovate.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#services" className="px-8 py-3.5 bg-[#e53e3e] text-white font-semibold rounded-full hover:bg-[#c53030] transition-all shadow-lg shadow-red-100">
                  Our Services
                </a>
                <a href="/contact" className="px-8 py-3.5 bg-[#f6ad55] text-white font-semibold rounded-full hover:bg-[#ed8936] transition-all shadow-lg shadow-orange-100">
                  Get Started Today
                </a>
              </div>
            </div>

            {/* Right: Image card */}
            <div className="order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-orange-100 rounded-[2rem] blur-xl opacity-75" />
                <div className="relative bg-white p-3 rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                  <img
                    src="/blockchain/h1.png"
                    alt="Blockchain Development"
                    className="w-full h-auto rounded-[1.8rem] object-cover"
                    style={{ maxHeight: 380 }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRODUCTION SECTION
      ══════════════════════════════════════ */}
      <section className="relative py-10 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
        {/* Dark overlay (no video in React preview — solid bg) */}
        <div className="absolute inset-0" style={{ background: "#000000" }} />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

            {/* Image */}
            <div className="relative max-w-lg sm:max-w-lg mx-auto w-full">
              <img
                src="/blockchain/eth.gif"
                alt="Blockchain developments"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="text-white">
              <h2 className="text-md sm:text-md font-extrabold uppercase tracking-[2px] text-red-600 mb-2">
                Leading Innovation
              </h2>
              <div className="h-1 w-14 sm:w-16 rounded mb-4" style={{ background: "linear-gradient(to right, #ffb803, #920202)" }} />

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
                Blockchain development company,{" "}
                <span style={{ color: "#ffb803" }}>Zanthium Technosoft</span>
              </h3>

              <p className="text-red-500 font-bold text-base sm:text-lg mb-4">
                Out of all blockchain development companies in India, Zanthium Technosoft has gained a favourite
                spot among all blockchain users.
              </p>

              <p className="text-md sm:text-base text-gray-300 leading-7 sm:leading-8 text-justify">
                In recent past, "blockchain" has been a quite popular word among all the developers and businesses.
                Mostly used to streamline operations, ensure security and safety and improve visibility of a brand.
                We, at Zanthium Technosoft, wish to resolve all your queries related to blockchain development. We
                excel in blockchain developments work from a very long time! The blockchain developments market have
                shown an immense growth in past few years and we are leading, due to our experts who are a prodigy
                in blockchain developments tasks! We make the whole blockchain developments work so smooth and
                flawless! We are a known blockchain development company in India.
              </p>
            </div>
          </div>

          {/* Additional content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 lg:mt-16">
            <div>
              <p className="text-md sm:text-base text-gray-300 leading-7 sm:leading-8 text-justify">
                Recently, it has benefited a lot of industry sectors because of how aptly, quickly, precisely and
                securely it enables data sharing. In tracking orders, accounts, payments, production or any form of
                data, blockchain network offers transparency. Our experts understand every bit of this concept and
                know how to get this in effective use for businesses and startups. Zanthium Technosoft is an expert
                in blockchain developments area and is ranked as top notch blockchain development company in India.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/blockchain/whydefi.png"
                alt="blockchain development company"
                className="w-4/5 h-auto rounded-xl"
              />
            </div>
          </div>

          <div className="mt-8">
            <p className="text-md sm:text-base text-gray-300 leading-7 sm:leading-8 text-justify mb-4">
              Unlike traditional databases which store records in a centralised fashion (i.e., records are stored at a
              single location), a blockchain is essentially a decentralised database which multiple participants
              manage; its DLT provides each node in the network with its own copy of the ledger. If there's
              inconsistency in any record, the advanced setup can identify it by verifying it against the other
              participants' copies of the record. This capability makes records in a blockchain virtually tamperproof
              and safe.
            </p>
            <p className="text-md sm:text-base text-gray-300 leading-7 sm:leading-8 text-justify">
              Blockchain's real-time updates provide a single source of truest of information for all the members who
              access it, meaning every detail is crucial and reliable.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          REPORT / BENTO SECTION
      ══════════════════════════════════════ */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

            {/* Left content */}
            <div className="lg:col-span-1 flex flex-col justify-center bg-white rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#920202] leading-tight mb-1">
                A report on
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-snug mb-2">
                Blockchain development companies in India
              </h3>
              <div className="h-1 w-16 rounded-full mb-3" style={{ background: "linear-gradient(to right, #dc2626, #7f1d1d)" }} />
              <p className="text-[#555] text-md sm:text-base md:text-lg leading-relaxed">
                There have been numerous firms working on blockchain development and blockchain business opportunities
                in India. Zanthium Technosoft leads them all, owing to certain qualities which it possesses.
              </p>
            </div>

            {/* Featured card */}
            <div className="lg:col-span-2 relative overflow-hidden rounded-2xl min-h-[320px] group">
              <img
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop"
                alt="Abstract blockchain"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0.2))" }} />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 md:p-10 text-white">
                <p className="text-md sm:text-md font-semibold text-[#ffb803] tracking-[3px] uppercase mb-3">
                  Top Performer
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight max-w-3xl mb-5">
                  Delivering high-quality blockchain solutions with consistent performance.
                </h3>
                <p className="text-md sm:text-base text-white/80 leading-relaxed max-w-2xl">
                  Through deep technical expertise and real-world implementation experience, the company consistently
                  outperforms competitors in delivering scalable and reliable blockchain applications across industries.
                </p>
              </div>
            </div>

            {/* Bento cards row */}
            {bentoCards.map((card, i) => (
              <div
                key={i}
                className={`${card.span === 2 ? "lg:col-span-2" : ""} ${card.bg} ${card.hoverBg} rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl`}
              >
                <div>
                  <p className={`text-md font-semibold tracking-widest mb-4 ${card.tagColor}`}>
                    {card.tag}
                  </p>
                  <p className={`text-xl font-semibold leading-relaxed mb-4 ${card.titleColor}`}>
                    {card.title}
                  </p>
                  <p className={`text-md ${card.descColor}`}>{card.desc}</p>
                </div>
              </div>
            ))}

            {/* Image card */}
            <div className="overflow-hidden rounded-2xl group transition-all duration-300 flex items-center justify-center bg-gray-100">
              <img
                src="/blockchain/img1.webp"
                alt="Timeline illustration"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ minHeight: 180 }}
              />
            </div>

            {/* Timelines card */}
            <div className="lg:col-span-2 bg-[#0D7174] rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl">
              <div>
                <p className="text-md font-semibold tracking-widest text-[#B4E5E6] mb-4">TIMELINES</p>
                <p className="text-xl font-semibold leading-relaxed text-white mb-4">
                  Delivering projects on time without compromising quality.
                </p>
                <p className="text-md text-white/80">
                  Efficient planning and execution ensure deadlines are consistently met, making the company a reliable
                  partner for time-sensitive blockchain solutions.
                </p>
              </div>
            </div>

            {/* Innovation card */}
            <div className="bg-[#B67808] rounded-2xl p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl">
              <div>
                <p className="text-md font-semibold tracking-widest text-[#FAE091] mb-4">INNOVATION</p>
                <p className="text-xl font-semibold leading-relaxed text-white mb-4">
                  Driving the future with continuous innovation.
                </p>
                <p className="text-md text-white/80">
                  By adopting the latest technologies and exploring new blockchain use cases, the company stays ahead
                  in delivering modern, future-ready solutions.
                </p>
              </div>
              <a href="#" className="inline-block text-md font-semibold tracking-wider text-white pb-1 border-b-2 border-transparent hover:border-[#ffb803]">
                READ MORE
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          USP SECTION
      ══════════════════════════════════════ */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

            <div className="flex items-center justify-center">
              <img
                src="/blockchain/blockchaindev.png"
                alt="blockchain development"
                className="w-full max-w-md rounded-xl"
              />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#920202] leading-snug mb-4 sm:mb-6">
                Zanthium Technosoft as a blockchain development company
              </h3>
              <p className="text-md sm:text-base text-gray-700 leading-7 sm:leading-8 text-justify mb-6">
                Zanthium Technosoft as a blockchain development company has done wonders in terms of creation and
                execution of projects. With thousands of blockchain business opportunities in India, Zanthium
                Technosoft is leading the arena as the best blockchain app development company. It has its USP as
                follows:
              </p>
              <ul className="space-y-3">
                {[
                  "It has an entire team onboard and has full fledged services as a blockchain development company!",
                  "It sticks to delivery time and adding on the final creative touch to the blockchain development process.",
                  "It is one of the leading blockchain companies in India",
                  "It is a one stop blockchain development company which is known for its excellence in creating world class results for all its clients!",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#ffb803] mr-2 mt-1">●</span>
                    <p className="text-md sm:text-base text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS SECTION
      ══════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#000000]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 sm:mb-12 max-w-5xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#920202] leading-tight">
              How Zanthium Technosoft helps in
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Blockchain developments work?
            </h3>
            <div
              className="h-1.5 w-full rounded mb-6"
              style={{ background: "linear-gradient(to right, #ffb803, #920202, transparent)" }}
            />
            <p className="text-[#ffb803] text-base sm:text-lg font-medium max-w-4xl leading-relaxed">
              Zanthium Technosoft empowers organizations to leverage blockchain technology for secure, transparent,
              and tamper-proof transactions. Our approach ensures data integrity, traceability, and trust across
              every digital interaction. Here's how our blockchain development process works:
            </p>
          </div>

          {/* Process cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {processCards.map((card) => (
              <div key={card.title} className="bg-white flex flex-col border-l-8 border-[#920202]">
                <div className="relative h-48 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                  <div
                    className="absolute bottom-0 left-0 bg-[#ffb803] text-black text-[10px] font-bold px-4 py-1 uppercase tracking-wider clip-tag"
                  >
                    {card.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#920202] mb-3 underline decoration-1 underline-offset-4">
                    {card.title}
                  </h4>
                  <p className="text-md text-gray-700 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Wide footer card */}
          <div className="bg-white border-l-8 border-[#920202] flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
              <img
                src="https://www.tbstat.com/wp/uploads/2023/08/20230602_BlocksInBlockchain_News.jpg"
                alt="Blockchain Security"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-10 md:w-2/3 relative">
              <div className="inline-block bg-[#ffb803] text-black text-[10px] font-bold px-4 py-1 uppercase tracking-wider mb-4 clip-tag">
                Security & Transparency
              </div>
              <h4 className="text-2xl font-bold text-[#920202] mb-4 underline decoration-1 underline-offset-8">
                Securing Every Block, Strengthening Every Transaction
              </h4>
              <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                Our blockchain solutions enhance security, improve operational transparency, and build trust across
                ecosystems. By ensuring every transaction is verifiable and immutable, we help businesses streamline
                processes while minimizing risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES SECTION
      ══════════════════════════════════════ */}
      <section className="py-10 sm:py-14 md:py-16 lg:py-20 bg-white" id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-md sm:text-md font-extrabold uppercase tracking-[3px] text-[#1a1a1a] mb-2">
              Our Services
            </h2>
            <div
              className="h-1 w-16 rounded mx-auto mb-4"
              style={{ background: "linear-gradient(to right, #dc2626, #7f1d1d)" }}
            />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#920202]">
              DSS Offer
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                 <img src={svc.icon} alt="" className='w-20 h-20' />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#1a1a1a] mb-3 text-center group-hover:text-[#920202] transition-colors">
                  {svc.title}
                </h4>
                <p className="text-md text-gray-600 text-center leading-6">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BUSINESS AREAS SECTION
      ══════════════════════════════════════ */}
      <section className="bg-white">
        <div className="py-6 text-center">
          <h2 className="text-2xl font-bold text-[#920202]">Blockchain Solutions Across Industries</h2>
        </div>

        {/* Hero with bg image */}
        <div className="relative min-h-[350px] flex items-center bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover opacity-50"
              alt="Blockchain Background"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, black, rgba(0,0,0,0.6), transparent)" }}
            />
          </div>

          <div className="container mx-auto px-6 sm:px-12 lg:px-20 pt-10 relative z-10">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Healthcare and Blockchain Solutions
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Secure, tamper-proof management of patient records and hospital data. Our blockchain solutions ensure
                data integrity, privacy, and seamless information sharing across healthcare ecosystems.
              </p>
            </div>
          </div>
        </div>

        {/* Split grid */}
        <div className="bg-[#000000] py-16">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700" />

              <div className="pr-0 md:pr-12">
                <h4 className="text-2xl font-bold text-white mb-4">Real Estate and Blockchain Solutions</h4>
                <p className="text-gray-400 mb-6 text-md leading-relaxed">
                  Maintain transparent and immutable records of land ownership and property transactions. Reduce
                  fraud, simplify verification, and streamline real estate operations.
                </p>
              </div>

              <div className="pl-0 md:pl-12">
                <h4 className="text-2xl font-bold text-white mb-4">Finance and Blockchain Solutions</h4>
                <p className="text-gray-400 mb-6 text-md leading-relaxed">
                  Enable faster, secure, and cost-efficient financial transactions. From global payments to fraud
                  prevention, blockchain enhances transparency while reducing dependency on intermediaries.
                </p>
              </div>

              {/* Show More cards */}
              {showExtra && extraIndustries.map((item, i) => (
                <div
                  key={i}
                  className={`${i % 2 === 0 ? "pr-0 md:pr-12" : "pl-0 md:pl-12"} border-t border-gray-800 pt-10`}
                >
                  <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-gray-400 mb-6 text-md leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-20 border-t border-gray-800 pt-10 text-center relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <button
                  onClick={() => setShowExtra(!showExtra)}
                  className="bg-white text-black text-[10px] uppercase font-black px-10 py-2 rounded-full border border-gray-700 hover:bg-[#ffb803] transition-colors"
                >
                  {showExtra ? "Show Less" : "Show More"}
                </button>
              </div>
              <p className="text-gray-300 text-md sm:text-md max-w-5xl mx-auto mt-4 leading-loose">
                Out of all blockchain development companies in India, Zanthium Technosoft has been doing wonderfully
                well! It is because of so many reasons that Zanthium Technosoft tops all the blockchain development
                companies in India! Zanthium Technosoft looks after everything from scratch! It researches and
                educates all its clients about how the blockchain technology affects the growth of any business.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─────────────────────────────────────────
   TanStack Router export (uncomment when using in your project)
───────────────────────────────────────── */
// import { createFileRoute } from '@tanstack/react-router'
// export const Route = createFileRoute('/Blockchain')({ component: BlockchainPage })
export const Route = createFileRoute('/Blockchain')({
  component: BlockchainComponent,
})