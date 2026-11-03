import { createFileRoute } from '@tanstack/react-router'
import { Check, GraduationCap, HandHelpingIcon, PuzzleIcon, Shield } from 'lucide-react';
import SEO from "../components/SEO";
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/Education')({
  component: RouteComponent,
})

function RouteComponent() {

  const [openFaq, setOpenFaq] = useState(0);
    
  const faqs = [
    {
      question: "How does blockchain verify educational credentials?",
      answer:
        "Institutions issue digital credentials with cryptographic signatures stored on blockchain. Employers can instantly verify authenticity by checking the signature against the immutable blockchain record, eliminating manual verification processes.",
    },
    {
      question: "Is student data stored on the blockchain?",
      answer:
        "No, sensitive student data is not stored on-chain. Only cryptographic hashes (digital fingerprints) of credentials are stored on the blockchain, while the actual credentials are stored securely off-chain with access controlled by the student.",
    },
    {
      question: "How does this work with our existing student information system?",
      answer:
        "We provide API integrations that connect your SIS (like Banner, PeopleSoft, or custom systems) to our blockchain credentialing platform. The integration automatically issues verifiable credentials as students complete requirements.",
    },
    {
      question: "What about privacy regulations like FERPA?",
      answer:
        "Our solutions are designed with privacy-by-design principles. Students control their credentials and choose what to share with whom. Only verification data, not personal information, is stored on the blockchain, ensuring FERPA and GDPR compliance.",
    },
  ];
  return (
    <div>
        <SEO title="Education | Zanthium Technosoft" />
      

      {/* Hero */}
      <section className="flex min-h-[400px] items-center justify-center bg-white px-4 pb-16 pt-28 font-sans">
        <div className="max-w-6xl text-center">

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-[#1a1a1a] uppercase leading-tight">
            Blockchain in <br />
            <span className="text-[#801b1b]">Education & E-Learning</span>
          </h1>

          <div className="mx-auto my-8 h-1.5 w-24 rounded-full bg-[#f4b41a]"></div>

          <p className="mx-auto max-w-4xl text-lg md:text-xl leading-relaxed text-[#333333]">
            Secure credentials, verify skills,{' '}
            <span className="relative inline-block font-bold text-[#801b1b]">
              enable lifelong learning portfolios
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#f4b41a]"></span>
            </span>
            , and create tokenized education ecosystems with tamper-proof blockchain solutions.
          </p>

        </div>
      </section>

      {/* Intro CTA */}
      <section className="bg-[#121212] px-6 py-20 font-sans text-white">
        <div className="mx-auto container text-center">

          <h2 className="mb-8 text-3xl font-bold text-white leading-tight tracking-tight md:text-5xl">
            Ready to Transform Education with <br />
            <span className="text-[#ffb800]">Blockchain?</span>
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-base leading-relaxed text-[#cccccc] md:text-xl">
            We help universities, schools, training providers,{' '}
            <span className="font-semibold text-[#e63946]">and edtech platforms issue</span>{' '}
            verifiable credentials, protect IP, and create new learning economies.
          </p>

          <div className="flex justify-center">
            <a
              href="/contact"
              className="group flex items-center gap-3 rounded-sm bg-[#ffb800] px-8 py-4 text-md font-black uppercase tracking-widest text-black transition-all hover:bg-[#e5a500]"
            >
              <i className="fa-solid fa-phone me-3"></i>
              Talk to Experts
            </a>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section id="tech-services" className="bg-[#f5f5f5] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black uppercase text-[#1a1a1a] tracking-[-1px]">
              Our Blockchain Services for Education
            </h2>
            <div className="w-24 h-[5px] bg-gradient-to-r from-[#800000] to-[#d90429] mx-auto mt-5 mb-5"></div>
            <p className="max-w-3xl mx-auto text-[#666] text-[16px]  leading-7">
              From verifiable credentials to decentralized learning marketplaces, our solutions help educational
              institutions thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Card 1 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center">
                <img src="/indusry/verified.jpg" alt="NFT Marketplace" className="max-h-[145px] w-full object-cover  opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Verifiable Credentials</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Issue tamper-proof digital diplomas, certificates, and badges that learners can own and share with employers instantly.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  {['W3C Verifiable Credentials standard', 'QR code verification system', 'Employer verification portal'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center">
                <img src="/indusry/dsp.png" alt="Streaming" className="max-h-[145px] w-full object-cover  opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Decentralized Learning Records</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Secure lifelong learning portfolios that track skills, competencies, and achievements across institutions.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  {['Interoperable with existing LMS', 'Learner-owned data storage', 'Selective disclosure capabilities'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center">
                <img src="/indusry/ip.png" alt="Audit" className="max-h-[145px] w-full object-cover  opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Academic IP Protection</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Timestamp research, protect copyright, and establish proof of authorship with immutable blockchain records.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  {['Timestamping of research materials', 'Citation tracking and attribution', 'Royalty distribution for educational content'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center">
                <img src="/indusry/Tokenized-Edu.png" alt="Tokenized" className="max-h-[145px] w-full object-cover  opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Tokenized Education Ecosystems</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Create incentive systems with educational tokens for achievements, participation, and content creation.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  {['Skill-based token rewards', 'Micro-credentialing systems', 'DAO-based governance for institutions'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-[#b10000]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center">
                <img src="/indusry/market-place.avif" alt="Metaverse" className="max-h-[145px] w-full object-cover  opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Education Marketplaces</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Peer-to-peer learning platforms where educators can monetize content and learners access verified courses.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#b10000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  {['Smart contract-based payments', 'Content licensing and royalty systems', 'Review and reputation systems'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-bold">
                      <span className="w-[6px] h-[6px] rounded-full bg-white mt-[5px]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group border border-[#d9d9d9] bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
              <div className="h-[145px] border-b border-[#e5e5e5] flex items-center justify-center">
                <img src="/indusry/exam.jpg" alt="Ticketing" className="max-h-[145px] w-full object-cover  opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" />
              </div>
              <div className="p-6 min-h-[205px]">
                <h3 className="text-[17px] font-extrabold text-[#800000] mb-4 leading-snug">Secure Examination Systems</h3>
                <p className="text-[16px]  text-[#555] leading-7">
                  Tamper-proof digital exam systems with identity verification and immutable result records.
                </p>
              </div>
              <div className="bg-[#111] group-hover:bg-[#a40000] transition-all duration-500 px-6 py-5">
                <ul className="space-y-3">
                  {['Biometric authentication', 'Encrypted question banks', 'Immutable result storage'].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[11px] uppercase tracking-[0.7px] text-[#bdbdbd] group-hover:text-white font-medium">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#ffb803] mt-[5px]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits-redesign" className="bg-gray-50 py-12 md:py-16 lg:py-20 border-y border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-[#800000] font-extrabold leading-tight mb-5 text-3xl sm:text-4xl lg:text-5xl">
                Transform Education with Blockchain
              </h2>
              <p className="text-gray-700 leading-relaxed border-l-4 border-[#FFD700] pl-4 sm:pl-5 mb-8 text-base sm:text-lg">
                Eliminate credential fraud, streamline verification processes, and create new educational economies with secure, verifiable systems.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                {[
                  'Instant verification of credentials and achievements',
                  'Reduced administrative costs for institutions',
                  'Learner-owned educational identities',
                  'Global interoperability between institutions',
                ].map((text) => (
                  <li key={text} className="group flex items-start text-black font-medium text-base sm:text-lg leading-relaxed">
                    <span className="flex-shrink-0 w-7 h-7 bg-black text-[#FFD700] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#800000]">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative p-3 sm:p-5 md:p-8 z-0 group max-w-[700px] mx-auto">
                <div className="absolute top-0 right-0 w-[85%] h-[85%] bg-[#800000] opacity-10 rounded-sm z-[-1]"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 sm:w-10 sm:h-10 border-l-4 border-b-4 border-[#FFD700] z-20"></div>
                <img
                  src="/indusry/Edu-blockchain.jpg"
                  alt="Blockchain Protection"
                  className="relative z-10 w-full rounded-sm object-cover h-[240px] sm:h-[320px] md:h-[400px] lg:h-[450px] shadow-[] transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-[10px_10px_0px_#800000]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-14 sm:py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">

            {/* Left Content */}
            <div className="w-full lg:w-5/12">
              <div className="lg:sticky lg:top-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-4">
                  Our Implementation{' '}
                  <span className="text-[#800000]">Process</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                  A structured approach to deploying blockchain solutions in educational environments.
                </p>
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 group">
                  <img
                    src="/indusry/Blockchain-Technology-min.gif"
                    alt="Our Process"
                    className="w-full object-cover h-[240px] sm:h-[320px] md:h-[420px] lg:h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="w-full lg:w-7/12 relative">
              <div className="hidden md:block absolute left-[27px] top-4 bottom-4 w-[2px] bg-gray-100"></div>
              <div className="space-y-10 sm:space-y-12">

                {[
                  { num: 1, title: 'Needs Assessment & Use Case Definition', body: 'Stakeholder workshops, process mapping, and identification of blockchain opportunities.' },
                  { num: 2, title: 'System Architecture Design', body: 'Blockchain selection, integration planning with existing systems, and compliance review.' },
                  { num: 3, title: 'Development & Integration', body: 'Smart contracts, user interfaces, and integration with SIS/LMS systems.' },
                  { num: 4, title: 'Testing & Pilot Implementation', body: 'Security audits, user acceptance testing, and controlled pilot programs.' },
                  { num: 5, title: 'Full Deployment & Support', body: 'Institution-wide rollout, training, and ongoing maintenance and support.' },
                ].map(({ num, title, body }) => (
                  <div key={num} className="relative flex items-start gap-4 sm:gap-6 group">
                    <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-gray-50 flex items-center justify-center text-lg sm:text-xl font-black shadow-sm bg-white text-[#800000] transition-all duration-300 group-hover:!bg-[#800000] group-hover:!text-white group-hover:border-[#FFD700]">
                      {num}
                    </div>
                    <div className="pt-1 sm:pt-2">
                      <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-[#800000] transition-colors">
                        {title}
                      </h5>
                      <p className="text-gray-600 leading-relaxed text-md sm:text-base">{body}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us-pillars" className="bg-white py-12 lg:py-20 relative">
        <div className="container mx-auto px-4">

          <div className="border-l-[8px] border-[#800000] pl-8 mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black uppercase mb-3">
              Why Choose Us for Education Blockchain
            </h2>
            <p className="text-xl text-gray-500 max-w-xl">
              We combine technical expertise with deep understanding of educational systems and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <GraduationCap/>, title: 'Education Expertise', body: 'Deep understanding of educational systems, accreditation, and administrative processes.' },
              { icon: <Shield/>, title: 'Privacy-First', body: 'Solutions designed with FERPA, GDPR, and other educational privacy regulations in mind.' },
              { icon: <PuzzleIcon/>, title: 'Seamless Integration', body: 'Compatible with popular LMS, SIS, and existing educational technology stacks.' },
              { icon: <HandHelpingIcon/>, title: 'Cost-Effective', body: 'Reduce verification costs and administrative overhead while improving services.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="group relative p-10 bg-white border border-gray-100 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-5 hover:border-[#800000] overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-0 bg-[#800000] transition-all duration-500 ease-in-out group-hover:h-full -z-10"></div>
                <div className="w-20 h-20 rounded-full bg-black text-[#ffbc03] flex items-center justify-center text-[1.8rem] mb-7.5 transition-all duration-300 ease-in-out group-hover:bg-yellow-500 group-hover:text-black group-hover:transform-[rotateY(360deg)]">
                  {icon}
                </div>
                <h6 className="font-extrabold text-2xl text-[#800000] mb-4 transition-colors duration-400 group-hover:text-[#ffbc03]">{title}</h6>
                <p className="text-gray-600 text-[16px] leading-relaxed transition-colors duration-400 group-hover:text-white/90">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative bg-[#000] py-14 sm:py-16 lg:py-20 overflow-hidden font-sans">

        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">

            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 md:grid-cols-3 border border-purple-500/30 rounded-xl overflow-hidden">
                {['Ethereum', 'Hyperledger', 'Polkadot', 'IPFS', 'Verifiable Credentials', 'DID'].map((tech, i) => (
                  <div
                    key={tech}
                    className={`aspect-[1.3/1] sm:aspect-video flex items-center justify-center border-gray-500/60 p-4 sm:p-6 md:p-8 hover:bg-purple-700/40 transition-all duration-300 cursor-pointer group
                      ${i % 3 !== 2 ? 'border-r' : ''}
                      ${i < 3 ? 'border-b' : ''}
                    `}
                  >
                    <span className="text-white/90 text-md sm:text-lg md:text-xl font-bold tracking-tight text-center break-words group-hover:scale-105 transition-transform duration-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-5/12 text-center lg:text-left">
              <h2 className="text-white font-black leading-[1.05] tracking-tight mb-5 text-4xl sm:text-5xl md:text-6xl">
                Technology Stack
              </h2>
              <p className="text-white/80 leading-relaxed text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
                Ethereum, Hyperledger, Polkadot; IPFS/Filecoin; Verifiable Credentials (W3C); LMS integrations (Moodle, Canvas, Blackboard); and identity solutions (DID, Sovrin).
              </p>
            </div>

          </div>
        </div>

        <div className="absolute top-1/2 -left-20 w-40 sm:w-56 lg:w-64 h-40 sm:h-56 lg:h-64 bg-purple-600/20 rounded-full blur-[100px] sm:blur-[120px]"></div>

      </section>

      {/* FAQ */}
      <section id="faq-redesign" className="relative bg-white py-16 overflow-hidden">

        <div className="hidden lg:block absolute left-0 top-24 z-0 select-none">
          <span className="[writing-mode:vertical-rl] text-orientation-mixed font-black text-gray-100 text-8xl">
            SUPPORT_CENTER
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">

          <div className="mb-16 text-center">
            <h2 className="text-gray-900 font-black uppercase tracking-tighter text-4xl mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[#800000] font-semibold border-b-4 border-[#FFD700] inline-block pb-1">
              Common questions about blockchain in education answered.
            </p>
          </div>

          <div className="container mx-auto px-0 sm:px-6 lg:px-8">
              <div className="space-y-4">
  {faqs.map((faq, index) => (
    <div key={index} className="faq-item overflow-hidden shadow-sm">
      <button
        onClick={() =>
          setOpenFaq(openFaq === index ? -1 : index)
        }
        className={`w-full flex items-center justify-between p-6 text-left font-bold text-lg transition-all duration-300 border-l-[5px]
        ${
          openFaq === index
            ? "bg-gradient-to-r from-[#800000] to-red-700 text-white border-[#FFD700]"
            : "bg-gray-50 text-gray-900 border-black hover:bg-gray-100"
        }`}
      >
        <span>{faq.question}</span>

        <span
          className={`font-mono text-2xl transition-transform duration-300 ${
            openFaq === index ? "text-white" : "text-[#FFD700]"
          }`}
        >
          {openFaq === index ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 bg-white border border-t-0 border-gray-100 ${
          openFaq === index
            ? "max-h-[500px] py-8 px-8"
            : "max-h-0 py-0 px-8"
        }`}
      >
        <div className="text-gray-600 text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  ))}
</div>
          </div>

        </div>
      </section>

    </div>
  )
}