import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/system_integration')({
  component: RouteComponent,
})

import { 
  Plug, 
  Database, 
  Cloud, 
  ArrowRight
} from 'lucide-react'


function RouteComponent() {
  return (
    <div className="bg-white text-slate-800 antialiased min-h-screen font-sans selection:bg-red-600 selection:text-white mt-7">
        <SEO title="System Integration | Zanthium Technosoft" />
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Reddish Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(220, 38, 38, 0.85), rgba(185, 28, 28, 0.7)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80')` 
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            Seamless System Integration Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect your business applications, data, and processes with our expert integration services to streamline operations and boost productivity.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-900/20 active:scale-95">
            Explore Our Solutions
          </button>
        </div>
      </section>

      {/* 2. OUR INTEGRATION SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Integration Services
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We provide end-to-end system integration services that help businesses connect their software applications and data sources for improved efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {/* Card 1 - API Integration */}
          <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
              <Plug className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">API Integration</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-8">
              Seamlessly connect your applications through robust API integrations that enable real-time data exchange and functionality sharing.
            </p>
            <a href="#" className="mt-auto flex items-center text-red-600 font-semibold text-md hover:underline group">
              Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Card 2 - Data Integration */}
          <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Data Integration</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-8">
              Consolidate your data from multiple sources into a unified view for better analytics, reporting, and business intelligence.
            </p>
            <a href="#" className="mt-auto flex items-center text-red-600 font-semibold text-md hover:underline group">
              Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Card 3 - Cloud Integration */}
          <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
              <Cloud className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Cloud Integration</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-8">
              Connect your on-premise systems with cloud applications and services for a hybrid IT environment that maximizes flexibility.
            </p>
            <a href="#" className="mt-auto flex items-center text-red-600 font-semibold text-md hover:underline group">
              Learn more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. OUR INTEGRATION PROCESS */}
      <section className="bg-[#f1f8f3] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Our Integration Process
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We follow a structured approach to ensure successful system integration projects that deliver measurable results.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-red-500/30 hidden lg:block z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-center">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-red-600 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-white transition-transform group-hover:scale-110">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Discovery & Analysis</h3>
                <p className="text-slate-600 text-md leading-relaxed px-4">
                  We analyze your current systems, business processes, and integration requirements to develop a comprehensive strategy.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-red-600 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-white transition-transform group-hover:scale-110">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Solution Design</h3>
                <p className="text-slate-600 text-md leading-relaxed px-4">
                  Our architects design a tailored integration solution that addresses your specific needs and business objectives.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-red-600 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-white transition-transform group-hover:scale-110">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Implementation</h3>
                <p className="text-slate-600 text-md leading-relaxed px-4">
                  We develop and deploy the integration using industry-best practices and cutting-edge technologies.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-red-600 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-lg mb-6 border-4 border-white transition-transform group-hover:scale-110">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Testing & Quality Assurance</h3>
                <p className="text-slate-600 text-md leading-relaxed px-4">
                  Rigorous testing ensures that your integrated systems work flawlessly together and meet performance requirements.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>      
    </div>
  )
}