import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/saas_development')({
  component: RouteComponent,
})

import { 
  Banknote, 
  RefreshCw, 
  Maximize2, 
  Wrench, 
  Globe, 
  TrendingUp, 
  Check, 
  Laptop, 
  Smartphone, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Headphones 
} from 'lucide-react'



function RouteComponent() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased mt-4 min-h-screen font-sans selection:bg-red-600 selection:text-white">
        <SEO title="Saas Development | Zanthium Technosoft" />
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Transform Your Vision Into Scalable SaaS Solutions
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We design, develop, and deploy cloud-based software that grows with your business, 
            delights your users, and drives recurring revenue.
          </p>
          <div>
            <a href="/contact" className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-md transition duration-200 text-base shadow-sm">
              Start Your Project
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          {/* Main Hero Image Placeholder - Styled matching the cropped image shadow */}
          <div className="w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <img 
              src="/soft_dev/saas.png" 
              alt="Person using a laptop and holding a credit card" 
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE SAAS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-3xl my-8 shadow-sm border border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Why Choose SaaS for Your Business?
          </h2>
          <div className="w-12 h-[3px] bg-red-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base">
            Software-as-a-Service offers numerous advantages over traditional software models
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Banknote className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Lower Upfront Costs</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              No large initial investment with subscription-based pricing and reduced infrastructure requirements.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Recurring Revenue</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Build predictable, recurring revenue streams with subscription models instead of one-time sales.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Maximize2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Automatic Scalability</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Easily scale your user base and features without significant infrastructure changes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Easy Maintenance</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Deliver updates and fixes seamlessly to all users simultaneously without manual installations.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Global Accessibility</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Users can access your software from anywhere with an internet connection on any device.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Data-Driven Insights</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Gather valuable usage analytics to inform product decisions and improve user experience.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR SAAS DEVELOPMENT SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Our SaaS Development Services
          </h2>
          <div className="w-12 h-[3px] bg-red-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base">
            End-to-end solutions to build, launch, and grow your software product
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="bg-red-50 border border-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">SaaS Product Development</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Custom web applications built with modern frameworks and cloud-native architectures.
            </p>
            <ul className="space-y-3 mt-auto">
              {['Responsive front-end development', 'RESTful API design', 'Cloud infrastructure setup', 'Database architecture', 'Third-party integrations'].map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="bg-red-50 border border-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Progressive Web Apps</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Cross-platform applications that work seamlessly across all devices and platforms.
            </p>
            <ul className="space-y-3 mt-auto">
              {['Offline functionality', 'App-like experience', 'Push notifications', 'Home screen installation', 'Cross-browser compatibility'].map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="bg-red-50 border border-amber-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Migration</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Move your existing applications to the cloud for improved scalability and reduced costs.
            </p>
            <ul className="space-y-3 mt-auto">
              {['Infrastructure assessment', 'Migration strategy', 'Data migration', 'Performance optimization', 'Security configuration'].map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="bg-red-50 border border-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">API Development & Integration</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Build robust APIs and integrate with third-party services to extend functionality.
            </p>
            <ul className="space-y-3 mt-auto">
              {['Custom API development', 'Third-party API integration', 'Webhook implementation', 'Documentation', 'Authentication systems'].map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="bg-red-50 border border-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Security & Compliance</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Implement enterprise-grade security practices and ensure regulatory compliance.
            </p>
            <ul className="space-y-3 mt-auto">
              {['Vulnerability assessment', 'Data encryption', 'Authentication & authorization', 'GDPR/CCPA compliance', 'Regular security audits'].map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="bg-red-50 border border-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Maintenance & Support</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Ongoing maintenance, updates, and support to keep your SaaS running smoothly.
            </p>
            <ul className="space-y-3 mt-auto">
              {['24/7 monitoring', 'Regular updates', 'Performance optimization', 'Bug fixes', 'Technical support'].map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. OUR SAAS DEVELOPMENT PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Our SaaS Development Process
          </h2>
          <div className="w-12 h-[3px] bg-red-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base">
            A structured approach to building successful software products
          </p>
        </div>

        {/* Process Timeline Block */}
        <div className="relative">
          {/* Horizontal Line across process steps (hidden on mobile, flex on desktop) */}
          <div className="absolute top-7 left-4 right-4 h-0.5 bg-red-600 hidden md:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10 text-center">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Discovery & Strategy</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We analyze your market, users, and goals to create a comprehensive product strategy.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">UI/UX Design</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We create intuitive, user-friendly interfaces that drive engagement and satisfaction.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Agile Development</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We build your product using iterative sprints with regular demos and feedback cycles.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                4
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Testing & QA</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We rigorously test your software to ensure reliability, security, and performance.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                5
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Deployment & Launch</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We deploy to production and manage the launch process to ensure a smooth rollout.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}