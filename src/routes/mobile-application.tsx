import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/mobile-application')({
  component: RouteComponent,
})

function RouteComponent() {

  useEffect(() => {
    // Tab switching
    const tabs = document.querySelectorAll('.service-tab')
    const contents = document.querySelectorAll('.tab-content')

    const handleTabClick = (tab: Element) => {
      tabs.forEach(btn => btn.classList.remove('active-tab'))
      contents.forEach(content => {
        content.classList.add('hidden')
        content.classList.remove('active-content')
      })
      tab.classList.add('active-tab')
      const target = document.getElementById((tab as HTMLElement).dataset.tab!)
      target?.classList.remove('hidden')
      target?.classList.add('active-content')
    }

    tabs.forEach(tab => tab.addEventListener('click', () => handleTabClick(tab)))

    // Stacked cards scroll effect
    const wraps = Array.from(document.querySelectorAll('.sc-wrap')) as HTMLElement[]
    const cards = wraps.map(w => w.querySelector('.sc-card') as HTMLElement)
    const N = wraps.length

    const SCALE_PER_LEVEL = 0.04
    const SHIFT_PER_LEVEL = 12
    const DIM_PER_LEVEL = 0.08

    function update() {
      const scrollY = window.scrollY
      const vh = window.innerHeight

      wraps.forEach((_, i) => {
        const card = cards[i]
        let stackDepth = 0
        for (let j = i + 1; j < N; j++) {
          const jScrolledIn = Math.max(0, scrollY - wraps[j].offsetTop)
          if (jScrolledIn > 0) {
            stackDepth += Math.min(jScrolledIn / vh, 1)
          }
        }
        const depth = stackDepth
        const scale = 1 - depth * SCALE_PER_LEVEL
        const translateY = -(depth * SHIFT_PER_LEVEL)
        const brightness = Math.max(1 - depth * DIM_PER_LEVEL, 0.6)
        card.style.transform = `translateY(${translateY}px) scale(${scale})`
        card.style.filter = `brightness(${brightness})`
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()

    return () => {
      tabs.forEach(tab => tab.removeEventListener('click', () => handleTabClick(tab)))
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <>
        <SEO title="Mobile Application | Zanthium Technosoft" />
      <style>{`
        .service-tab {
          background: #fff;
          color: #111827;
          border-right: 1px solid #e5e7eb;
        }
        .service-tab:last-child { border-right: none; }
        .service-tab:hover { background: #f8fafc; }
        .active-tab { background: #cc2f2f !important; color: white !important; }
        .tab-content { animation: fadeIn .4s ease; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media(max-width:768px) {
          .service-tab { font-size: 14px; padding: 18px 12px; }
        }
        .sc-wrap {
          height: 45vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: sticky;
          top: 50px;
        }
        .sc-card {
          width: min(860px, 88vw);
          background: #ffffff;
          border: 1.5px solid #e5e7eb;
          border-radius: 28px;
          box-shadow: 0 8px 40px rgba(0,0,0,.08), 0 2px 12px rgba(0,0,0,.04);
          padding: 52px 56px;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: transform 0.15s ease-out, filter 0.15s ease-out;
          will-change: transform, filter;
          transform-origin: top center;
        }
        .sc-num {
          display: block;
          font-size: 4rem;
          font-weight: 900;
          color: #000;
          line-height: 1;
          margin-bottom: 18px;
        }
        .sc-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #111827;
          margin: 0 0 14px;
        }
        .sc-body {
          font-size: 1.2rem;
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
          max-width: 540px;
        }
        @media (max-width: 640px) {
          .sc-card  { padding: 32px 24px; min-height: 280px; }
          .sc-num   { font-size: 2.8rem; }
          .sc-title { font-size: 1.25rem; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#992111] via-[#7a1717] to-[#d29f07] py-20 lg:py-28 text-white">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-400/20 blur-3xl rounded-full"></div>
        </div>

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-black leading-tight mb-6">
                Mobile App Development Services
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
                We craft high-performance mobile applications that deliver exceptional
                user experiences and drive business growth.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#992111] font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Get Started
              </a>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
              <img
                src="/mobile/top.png"
                alt="Mobile App Development"
                className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f3f3f3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-14">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 text-[#992111] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mobile Development Solutions
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
              Custom mobile applications tailored to your business goals and user needs.
            </p>
          </div>

          <div className="bg-white overflow-hidden shadow-sm border border-gray-200">

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-gray-200">
              <button className="service-tab active-tab px-6 py-6 text-base lg:text-xl font-semibold transition-all duration-300" data-tab="tab1">
                iOS App Development
              </button>
              <button className="service-tab px-6 py-6 text-base lg:text-xl font-semibold transition-all duration-300" data-tab="tab2">
                Android App Development
              </button>
              <button className="service-tab px-6 py-6 text-base lg:text-xl font-semibold transition-all duration-300" data-tab="tab3">
                Cross-Platform Apps
              </button>
              <button className="service-tab px-6 py-6 text-base lg:text-xl font-semibold transition-all duration-300" data-tab="tab4">
                Hybrid Mobile Apps
              </button>
              <button className="service-tab px-6 py-6 text-base lg:text-xl font-semibold transition-all duration-300" data-tab="tab5">
                Progressive Web Apps
              </button>
            </div>

            <div className="p-8 lg:p-16">

              {/* TAB 1 */}
              <div className="tab-content active-content" id="tab1">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                  <div>
                    <div className="bg-gray-100 overflow-hidden">
                      <img src="/mobile/11.png" alt="iOS Development" className="w-full h-[420px] object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">iOS App Development</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Premium native applications for iPhone and iPad that leverage the full power of Apple's ecosystem.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4 text-gray-700 text-lg">
                        <i className="fas fa-circle text-[8px] text-red-700 mt-3"></i>
                        Swift & Objective-C
                      </li>
                      <li className="flex items-start gap-4 text-gray-700 text-lg">
                        <i className="fas fa-circle text-[8px] text-red-700 mt-3"></i>
                        UIKit & SwiftUI
                      </li>
                      <li className="flex items-start gap-4 text-gray-700 text-lg">
                        <i className="fas fa-circle text-[8px] text-red-700 mt-3"></i>
                        Apple Watch & TV
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TAB 2 */}
              <div className="tab-content hidden" id="tab2">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                  <div>
                    <div className="bg-gray-100 overflow-hidden">
                      <img src="/mobile/12.png" alt="Android Development" className="w-full h-[420px] object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Android App Development</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      High-quality Android apps that perform seamlessly across all devices and screen sizes.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4 text-gray-700 text-lg">
                        <i className="fas fa-circle text-[8px] text-red-700 mt-3"></i>
                        Kotlin & Java
                      </li>
                      <li className="flex items-start gap-4 text-gray-700 text-lg">
                        <i className="fas fa-circle text-[8px] text-red-700 mt-3"></i>
                        Jetpack Components
                      </li>
                      <li className="flex items-start gap-4 text-gray-700 text-lg">
                        <i className="fas fa-circle text-[8px] text-red-700 mt-3"></i>
                        Material Design
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TAB 3 */}
              <div className="tab-content hidden" id="tab3">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                  <div>
                    <div className="bg-gray-100 overflow-hidden">
                      <img src="/mobile/13.png" alt="Cross Platform" className="w-full h-[420px] object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Cross-Platform Apps</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Single codebase solutions that run on both iOS and Android with native-like performance.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4 text-gray-700 text-lg">
                        <i className="fas fa-circle text-[8px] text-red-700 mt-3"></i>
                        Flutter
                      </li>
                      <li className="flex items-start gap-4 text-gray-700 text-lg">
                        <i className="fas fa-circle text-[8px] text-red-700 mt-3"></i>
                        React Native
                      </li>
                      <li className="flex items-start gap-4 text-gray-700 text-lg">
                        <i className="fas fa-circle text-[8px] text-red-700 mt-3"></i>
                        Xamarin
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TAB 4 */}
              <div className="tab-content hidden" id="tab4">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                  <div>
                    <div className="bg-gray-100 overflow-hidden">
                      <img src="/mobile/14.png" alt="Hybrid Mobile Apps" className="w-full h-[420px] object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Hybrid Mobile Apps</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Cost-effective solutions that combine web technologies with native capabilities.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-full">Ionic</span>
                      <span className="px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-full">Capacitor</span>
                      <span className="px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-full">Cordova</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TAB 5 */}
              <div className="tab-content hidden" id="tab5">
                <div className="grid lg:grid-cols-2 gap-14 items-center">
                  <div>
                    <div className="bg-gray-100 overflow-hidden">
                      <img src="/mobile/15.png" alt="Progressive Web Apps" className="w-full h-[420px] object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Progressive Web Apps</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Web applications that deliver app-like experiences with offline capabilities.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-full">Service Workers</span>
                      <span className="px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-full">Web App Manifest</span>
                      <span className="px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-full">Push Notifications</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process-section" className="relative" style={{ padding: '96px 0 0' }}>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/video/bg3.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20">

          <div className="container mb-10" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px 10px' }}>
            <h2
              className="text-white"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, marginBottom: '20px' }}
            >
              Our Mobile <span style={{ color: '#992111' }}>Development Process</span>
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <span style={{ width: '48px', height: '1px', background: '#992111', display: 'block' }}></span>
            </div>
            <p className="text-gray-200 mb-20" style={{ fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '600px' }}>
              A proven methodology to deliver high-quality mobile solutions
            </p>
          </div>

          <div style={{ position: 'relative' }}>

            <div className="sc-wrap">
              <div className="sc-card">
                <span className="sc-num">01</span>
                <h3 className="sc-title">Discovery & Planning</h3>
                <p className="sc-body">We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project plan.</p>
              </div>
            </div>

            <div className="sc-wrap">
              <div className="sc-card">
                <span className="sc-num">02</span>
                <h3 className="sc-title">UI/UX Design</h3>
                <p className="sc-body">Our designers create intuitive user interfaces and seamless user experiences tailored to your brand and user needs.</p>
              </div>
            </div>

            <div className="sc-wrap">
              <div className="sc-card">
                <span className="sc-num">03</span>
                <h3 className="sc-title">Development</h3>
                <p className="sc-body">Our expert developers build your app using industry best practices, with regular updates and quality checks.</p>
              </div>
            </div>

            <div className="sc-wrap">
              <div className="sc-card">
                <span className="sc-num">04</span>
                <h3 className="sc-title">Testing & QA</h3>
                <p className="sc-body">Rigorous testing across devices and scenarios ensures your app performs flawlessly in all conditions.</p>
              </div>
            </div>

            <div className="sc-wrap">
              <div className="sc-card">
                <span className="sc-num">05</span>
                <h3 className="sc-title">Deployment & Support</h3>
                <p className="sc-body">We handle app store submissions and provide ongoing maintenance and updates post-launch.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 text-[#992111] text-xs font-bold tracking-[0.2em] uppercase mb-5">
              Technology Stack
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Technologies We Use
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Modern frameworks and tools for building scalable mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition duration-500">
              <img src="/mobile/swift.png" alt="Swift" className="h-14 mx-auto mb-5 object-contain" />
              <h4 className="text-xl font-bold text-gray-900">Swift</h4>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition duration-500">
              <img src="/mobile/kotlin.png" alt="Kotlin" className="h-14 mx-auto mb-5 object-contain" />
              <h4 className="text-xl font-bold text-gray-900">Kotlin</h4>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition duration-500">
              <img src="/mobile/fluter.png" alt="Flutter" className="h-14 mx-auto mb-5 object-contain" />
              <h4 className="text-xl font-bold text-gray-900">Flutter</h4>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition duration-500">
              <img src="/mobile/React-native.png" alt="React Native" className="h-14 mx-auto mb-5 object-contain" />
              <h4 className="text-xl font-bold text-gray-900">React Native</h4>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}