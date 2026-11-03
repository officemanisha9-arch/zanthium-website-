import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import SEO from "../components/SEO";

export const Route = createFileRoute('/aboutus')({
  component: About,
})

// Declarative Counter Component for Performance
function StatCounter({ targetValue }: { targetValue: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // 1.5 seconds total
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const increment = targetValue / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
    </span>
  );
}

function About() {
  return (
    <div className="w-full bg-slate-50 font-sans text-slate-800 antialiased">
        <SEO title="About Us | Zanthium Technosoft" description="Learn about Zanthium Technosoft's mission to deliver reliable and innovative digital solutions." />
      
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden mt-7 bg-gradient-to-br from-[#0f0f0f] via-[#7f1d1d] to-[#920202] py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <h6 className="text-xs sm:text-md uppercase tracking-[3px] text-yellow-400 font-bold mb-3">
            Who We Are
          </h6>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight">
            Building Digital Excellence <span className="text-yellow-400">with <br /> Innovation</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-red-600 rounded mx-auto mt-6"></div>
        </div>
      </section>

      {/* Intro Overlay Card */}
      <section className="-mt-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border-t-4 border-red-900 text-center">
            <p className="text-gray-700 text-base sm:text-lg leading-8">
              Founded in 2018, <span className="text-red-600 font-semibold">Zanthium Technosoft Pvt Ltd</span> is a Uttarakhand-based software company delivering reliable and cost-effective digital solutions. We collaborate with businesses to design simple, scalable, and impactful technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Overview Section */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h6 className="text-md font-bold uppercase tracking-[2px] text-red-600 mb-3">
                About Company
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
                We Build Solutions That <span className="text-red-900">Actually Work</span>
              </h2>
              <p className="text-gray-600 leading-7 mb-4 text-[16px]">
                At Zanthium Technosoft, we work with our clients, not just for them. We understand that every business is unique—along with its challenges and goals. Our focus is on delivering innovative, tailored software solutions that align with your specific requirements, regardless of industry or location.
              </p>
              <p className="text-gray-600 leading-7 mb-4 text-[16px]">
                Our team of skilled professionals brings together diverse expertise in custom software development, web and mobile applications, and blockchain services. We combine technical excellence with creative problem-solving to build solutions that are both efficient and reliable.
              </p>
              <p className="text-gray-600 leading-7 text-[16px]">
                We believe in creating not just successful projects, but long-term partnerships. By leveraging modern and powerful technologies, our developers ensure that you receive scalable, future-ready, and high-quality digital solutions.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 border-2 border-red-900 rounded-xl translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
                className="relative rounded-xl shadow-2xl w-full" 
                alt="Our Workspace Development Team" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Statistics Grid Counter Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            
            <div className="group">
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0f172a] leading-none mb-3">
                <StatCounter targetValue={10562} />
              </h3>
              <p className="text-gray-500 text-md tracking-wide">Projects Completed</p>
              <div className="h-1 w-10 bg-red-600 mx-auto mt-3 group-hover:w-16 transition-all"></div>
            </div>

            <div className="group">
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0f172a] leading-none mb-3">
                <StatCounter targetValue={8700} />
              </h3>
              <p className="text-gray-500 text-md tracking-wide">Satisfied Clients</p>
              <div className="h-1 w-10 bg-red-600 mx-auto mt-3 group-hover:w-16 transition-all"></div>
            </div>

            <div className="group">
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0f172a] leading-none mb-3">
                <StatCounter targetValue={535} />
              </h3>
              <p className="text-gray-500 text-md tracking-wide">Awards Won</p>
              <div className="h-1 w-10 bg-red-600 mx-auto mt-3 group-hover:w-16 transition-all"></div>
            </div>

            <div className="group">
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0f172a] leading-none mb-3">
                <StatCounter targetValue={2126} />
              </h3>
              <p className="text-gray-500 text-md tracking-wide">Tickets Closed</p>
              <div className="h-1 w-10 bg-red-600 mx-auto mt-3 group-hover:w-16 transition-all"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative">
              <div className="absolute inset-0 border-2 border-red-900 rounded-xl -translate-x-4 -translate-y-4"></div>
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/012/792/806/small_2x/digital-transformation-technology-strategy-digitization-and-digitalization-of-business-processes-and-data-optimize-and-automate-operations-customer-service-management-internet-and-cloud-computing-free-photo.jpg"
                className="relative rounded-xl shadow-2xl w-full" 
                alt="Digital Enterprise Transformation Services" 
              />
            </div>

            <div>
              <h6 className="text-md font-bold uppercase tracking-[2px] text-red-600 mb-3">
                What We Do
              </h6>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
                Smart Tech for <span className="text-red-900">Smart Businesses</span>
              </h2>
              <p className="text-gray-600 leading-7 mb-4 text-[16px]">
                We offer services across web design and software development, creating customized solutions that are efficient, scalable, and cost-effective.
              </p>
              <p className="text-gray-600 leading-7 mb-6 text-[16px]">
                Our focus is on delivering the right technology that aligns with your business goals and helps you build a strong digital presence.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2 text-[16px]">
                  <span className="text-red-600 font-semibold ">✔</span>
                  Custom web and software development tailored to your requirements
                </li>
                <li className="flex items-start gap-2 text-[16px]">
                  <span className="text-red-600 font-semibold">✔</span>
                  Scalable and cost-effective solutions for businesses of all sizes
                </li>
                <li className="flex items-start gap-2 text-[16px]">
                  <span className="text-red-600 font-semibold">✔</span>
                  Modern technologies ensuring performance and reliability
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Feature Grid */}
      <section className="py-16 lg:py-24 bg-[#0a192f] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-gray-700/50">
            
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-700/50 bg-gradient-to-br from-[#112240] to-transparent">
              <h3 className="text-2xl text-white font-light mb-6">Innovation</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                We deliver innovative IT solutions and advanced software systems that help businesses stay ahead in the digital transformation era.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-b border-gray-700/50 md:border-r">
                <h6 className="text-[10px] uppercase tracking-[3px] text-gray-400 mb-3">Transparency</h6>
                <h4 className="text-lg text-white font-medium mb-4">Integrity</h4>
                <p className="text-gray-400 text-md mb-6 text-[16px]">
                  As a trusted software development company, we maintain complete transparency and honesty in every project we deliver.
                </p>
              </div>

              <div className="p-8 border-b border-gray-700/50">
                <h6 className="text-[10px] uppercase tracking-[3px] text-gray-400 mb-3">Quality Standards</h6>
                <h4 className="text-lg text-white font-medium mb-4">Excellence</h4>
                <p className="text-gray-400 text-md mb-6 text-[16px]">
                  We follow high-quality development standards to ensure reliable, secure, and high-performance digital solutions.
                </p>
              </div>

              <div className="p-8 border-b md:border-b-0 border-gray-700/50 md:border-r">
                <h6 className="text-[10px] uppercase tracking-[3px] text-gray-400 mb-3">Partnership</h6>
                <h4 className="text-lg text-white font-medium mb-4">Collaboration</h4>
                <p className="text-gray-400 text-md mb-6 text-[16px]">
                  We work closely with our clients to understand their business needs and deliver customized IT solutions that drive results.
                </p>
              </div>

              <div className="p-8">
                <h6 className="text-[10px] uppercase tracking-[3px] text-gray-400 mb-3">Growth</h6>
                <h4 className="text-lg text-white font-medium mb-4">Scalability</h4>
                <p className="text-gray-400 text-md mb-6 text-[16px]">
                  Our scalable software solutions are designed to grow with your business and support long-term success.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance & Quality Certifications Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h6 className="text-md font-bold uppercase tracking-[2px] text-red-600 mb-3">
            Certifications
          </h6>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Certified for <span className="text-red-900">Excellence</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our certifications reflect our commitment to quality, security, and delivering reliable software solutions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            <div className="group">
              <img src="/certificate/iaf.png" alt="IAF Certificate Logo" className="mx-auto h-32 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300" />
            </div>
            <div className="group">
              <img src="/certificate/iso.png" alt="ISO Certification Badge" className="mx-auto h-32 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300" />
            </div>
            <div className="group">
              <img src="/certificate/iso1.jpeg" alt="ISO Secondary Certification Badge" className="mx-auto h-32 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300" />
            </div>
            <div className="group">
              <img src="/certificate/cmmi.png" alt="CMMI Quality Compliance Logo" className="mx-auto h-32 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300" />
            </div>
            <div className="group">
              <img src="/certificate/cin.svg" alt="Corporate Identification CIN Badge" className="mx-auto h-32 object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner Section */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=80" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Careers Infrastructure Opportunities" 
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-light text-white text-center md:text-left">
            Find right opportunities for you
          </h2>
          <Link 
            to="/career" 
            className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-[2px] hover:bg-gray-200 transition-colors duration-300 shadow-xl text-center whitespace-nowrap"
          >
            Explore Careers
          </Link>
        </div>
      </section>

    </div>
  );
}