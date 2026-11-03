import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/desktop_app')({
  component: RouteComponent,
})


import { 
  Zap, 
  Database, 
  Plug, 
  Shield, 
  Palette, 
  Cpu, 
  Check, 
  RefreshCw, 
  Layers, 
  Wrench,
  Monitor,
  Apple,
  Terminal
} from 'lucide-react'


function RouteComponent() {
  return (
    <div className="bg-slate-50 text-slate-800 mt-2 antialiased min-h-screen font-sans selection:bg-red-600 selection:text-white">
        <SEO title="Desktop App | Zanthium Technosoft" />
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Powerful Desktop Applications for Your Business
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We develop high-performance, native desktop applications that deliver exceptional 
            user experiences, offline functionality, and seamless system integration.
          </p>
          <div>
            <a href="/contact" className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-md transition duration-200 text-base shadow-sm">
              Start Your Project
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white">
            <img 
              src="/soft_dev/desktop.png" 
              alt="Wall-E figure macro shot representational graphic" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE DESKTOP APPLICATIONS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-3xl my-8 shadow-sm border border-slate-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Why Choose Desktop Applications?
          </h2>
          <div className="w-12 h-[3px] bg-red-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base">
            Desktop applications offer unique advantages for specific use cases and business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all h-full min-h-[280px]">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">High Performance</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Direct hardware access enables faster processing and better resource utilization than web applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all h-full min-h-[280px]">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Offline Functionality</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Work without internet connectivity with local data storage and processing capabilities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all h-full min-h-[280px]">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Plug className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">System Integration</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Seamlessly integrate with operating system features, hardware devices, and local file systems.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all h-full min-h-[280px]">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Enhanced Security</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Reduced attack surface compared to web applications with controlled execution environment.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all h-full min-h-[280px]">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Rich User Interface</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Leverage native UI components for responsive, familiar experiences with complex interaction patterns.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col items-center text-center group hover:border-red-100 transition-all h-full min-h-[280px]">
            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-5">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Hardware Access</h3>
            <p className="text-slate-600 text-md leading-relaxed">
              Direct access to peripherals, sensors, and specialized hardware devices for specialized applications.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR DESKTOP DEVELOPMENT SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Our Desktop Development Services
          </h2>
          <div className="w-12 h-[3px] bg-red-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base">
            Comprehensive solutions for building powerful desktop applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="bg-red-50 border border-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Windows Application Development</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Native Windows applications built with .NET, WPF, WinForms, and UWP for seamless integration with the Windows ecosystem.
            </p>
            <ul className="space-y-3 mt-auto">
              {['.NET Framework/Core', 'WPF/XAML UI', 'WinForms Legacy Systems', 'UWP Modern Apps', 'Windows API Integration'].map((item, idx) => (
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
              <Apple className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">macOS Application Development</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Elegant, native macOS applications built with Swift, Objective-C, and Apple's Cocoa framework following Apple's design guidelines.
            </p>
            <ul className="space-y-3 mt-auto">
              {['Swift/Objective-C', 'Cocoa Framework', 'AppKit & Catalyst', 'Mac App Store Deployment', 'macOS UI/UX Design'].map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
            <div className="bg-red-50 border border-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Linux Application Development</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Cross-platform or native Linux applications using GTK, Qt, and other frameworks tailored for various Linux distributions.
            </p>
            <ul className="space-y-3 mt-auto">
              {['GTK+ Applications', 'Qt Framework', 'Electron for Linux', 'Distribution Packaging', 'Systemd Integration'].map((item, idx) => (
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
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cross-Platform Development</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Build once, deploy everywhere with cross-platform frameworks that maintain native performance and look-and-feel.
            </p>
            <ul className="space-y-3 mt-auto">
              {['Electron Applications', 'Java Swing/JavaFX', 'Avalonia UI', 'Qt Framework', '.NET MAUI'].map((item, idx) => (
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
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Desktop to Web Integration</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Hybrid solutions that combine the power of desktop applications with the connectivity of web services.
            </p>
            <ul className="space-y-3 mt-auto">
              {['Cloud Synchronization', 'Web API Integration', 'Auto-Update Systems', 'Mixed Online/Offline', 'Desktop Web Hybrids'].map((item, idx) => (
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
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Maintenance & Support</h3>
            <p className="text-slate-500 text-md leading-relaxed mb-6">
              Ongoing maintenance, updates, and support services to keep your desktop applications running smoothly.
            </p>
            <ul className="space-y-3 mt-auto">
              {['Bug Fixes & Patches', 'OS Compatibility Updates', 'Feature Enhancements', 'Performance Optimization', 'Technical Support'].map((item, idx) => (
                <li key={idx} className="flex items-start text-md text-slate-700">
                  <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 4. CROSS-PLATFORM DESKTOP SOLUTIONS CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Cross-Platform Desktop Solutions
          </h2>
          <div className="w-12 h-[3px] bg-red-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base">
            We develop for all major desktop platforms using the most appropriate technologies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-100 rounded-xl p-6 text-center shadow-sm flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center mb-4 shadow-md">
              <Monitor className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Windows</h4>
            <p className="text-md text-slate-500 leading-relaxed">
              .NET, WPF, WinForms, UWP, and Win32 applications for all Windows versions.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-6 text-center shadow-sm flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center mb-4 shadow-md">
              <Apple className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">macOS</h4>
            <p className="text-md text-slate-500 leading-relaxed">
              Native Cocoa applications with Swift/Objective-C for the Mac ecosystem.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-6 text-center shadow-sm flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center mb-4 shadow-md">
              <Terminal className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Linux</h4>
            <p className="text-md text-slate-500 leading-relaxed">
              GTK, Qt, and other framework applications for various Linux distributions.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-6 text-center shadow-sm flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center mb-4 shadow-md">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 mb-2">Cross-Platform</h4>
            <p className="text-md text-slate-500 leading-relaxed">
              Electron, Java, .NET MAUI, and other multi-platform frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OUR DESKTOP DEVELOPMENT PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Our Desktop Development Process
          </h2>
          <div className="w-12 h-[3px] bg-red-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base">
            A structured approach to building successful desktop applications
          </p>
        </div>

        {/* Process Timeline Block */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-7 left-4 right-4 h-0.5 bg-red-600 hidden md:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10 text-center">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                1
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">Requirements Analysis</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We analyze your needs, target platform, and technical constraints to define project specifications.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                2
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">UI/UX Design</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We create intuitive, platform-appropriate interfaces that follow OS design guidelines.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                3
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">Architecture Planning</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We design robust application architecture considering performance, security, and scalability.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                4
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">Development</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We implement your application using agile methodologies with regular progress updates.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-700 text-white font-bold text-xl rounded-full flex items-center justify-center shadow-md mb-5 border-4 border-slate-50">
                5
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">Testing & Deployment</h3>
              <p className="text-slate-500 text-md leading-relaxed max-w-xs md:max-w-none px-4 md:px-2">
                We rigorously test across target platforms and handle deployment/packaging.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}