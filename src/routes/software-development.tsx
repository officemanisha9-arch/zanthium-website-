import { createFileRoute } from '@tanstack/react-router';
import SEO from "../components/SEO";
import {
  Cloud,
  Database,
  Laptop,
  RefreshCcw,
  Settings,
  Smartphone,
} from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: "Web Application Development",
    desc: "Custom web applications built with modern technologies to help you achieve your business goals.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Scalable cloud-based software solutions that grow with your business and reduce infrastructure costs.",
  },
  {
    icon: Settings,
    title: "ERP & CRM Systems",
    desc: "Custom enterprise resource planning and customer relationship management systems tailored to your workflows.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    desc: "Custom database design and management solutions to organize and leverage your business data effectively.",
  },
  {
    icon: RefreshCcw,
    title: "Software Integration",
    desc: "Seamless integration of new software with your existing systems and third-party applications.",
  },
];

const processSteps = [
  { id: 1, title: 'Discovery', desc: 'We analyze your requirements and business objectives to create a comprehensive project plan.' },
  { id: 2, title: 'Design', desc: 'Our designers create intuitive user interfaces and experiences that align with your brand.' },
  { id: 3, title: 'Development', desc: 'Our developers write clean, efficient code using the latest technologies and best practices.' },
  { id: 4, title: 'Deployment', desc: 'We deploy the finished product and provide training and ongoing support as needed.' },
];

function ServicesSection() {
  return (
    <>
        <SEO title="Software Development | Zanthium Technosoft" />
    <section className="bg-[#f0f6ff] mt-7 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b4b] leading-tight mb-6">
            Custom Software Solutions for Your Business
          </h1>
          <p className="text-lg text-[#5a6b8a] mb-8 max-w-lg">
            We design and develop tailored software applications that solve 
            your unique business challenges, streamline operations, and drive growth.
          </p>
          
          <div className="flex gap-4">
            <a href="/contact" className="bg-[#a81414] hover:bg-[#8b1111] text-white font-semibold py-3 px-8 rounded transition duration-200">
              Start a Project
            </a>
            <button className="bg-[#a81414] hover:bg-[#8b1111] text-white font-semibold py-3 px-8 rounded transition duration-200">
              Our Services
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full flex justify-center">
          <img
  src="/soft_dev/Custom.png"
  alt="Custom Software Solutions"
  className="w-full max-w-xl rounded-2xl shadow-xl"
/>
        </div>
        
      </div>
    </section>
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-2">
          SOFTWARE DEVELOPMENT
        </h1>

        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
  key={index}
  className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full"
>
                <div className="mb-5">
                  <Icon size={48} className="text-red-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#1a2b4b]">
        Our Development Process
      </h2>

      <div className="w-20 h-1 bg-[#a81414] mx-auto mt-4 mb-6"></div>

      <p className="text-gray-600 max-w-2xl mx-auto">
        We follow a proven methodology to deliver reliable,
        scalable, and high-performing software solutions.
      </p>
    </div>

    <div className="relative">
      {/* Desktop Line */}
      <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-red-200"></div>

      <div className="grid md:grid-cols-4 gap-12">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className="relative text-center"
          >
            <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-[#a81414] text-white flex items-center justify-center text-xl font-bold shadow-lg">
              {step.id}
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </>
  );
}

export const Route = createFileRoute('/software-development')({
  component: ServicesSection,
});