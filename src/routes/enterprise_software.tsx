import { createFileRoute } from '@tanstack/react-router'
import { Building2, ChartArea, Database, Factory, HeartPulse, Landmark, Link2, Shield, ShoppingBag, SwitchCamera } from 'lucide-react';
import { useState } from 'react';
import SEO from "../components/SEO";

export const Route = createFileRoute('/enterprise_software')({
  component: WebDevelopmentPage,
})



// Define the shape of our data
interface IndustryService {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function WebDevelopmentPage() {

    const capabilities = [
  { icon: Database, title: "Centralized Data Management", desc: "Consolidate all your enterprise data into a single source of truth with robust access controls and security." },
  { icon: Link2, title: "Process Automation", desc: "Automate complex business processes to reduce manual work and minimize errors across departments." },
  { icon: ChartArea, title: "Advanced Analytics", desc: "Gain actionable insights with real-time dashboards and predictive analytics tailored to your industry." },
  { icon: Shield, title: "Enterprise-grade Security", desc: "Protect sensitive data with military-grade encryption, compliance frameworks, and access controls." },
  { icon: Building2, title: "Scalable Architecture", desc: "Grow without limits with a platform designed to handle increasing users, data, and transaction volumes." },
  { icon: SwitchCamera, title: "Seamless Integration", desc: "Connect with your existing systems through our comprehensive API and integration capabilities." },
];
const tabData: Record<string, { title: string; desc1: string; desc2: string; image: string }> = {
  ERP: {
    title: "Enterprise Resource Planning",
    desc1: "Integrate all core business processes into a unified system. Our ERP solution provides real-time visibility across finance, manufacturing, supply chain, and operations.",
    desc2: "Streamline workflows, reduce operational costs, and improve decision-making with accurate, up-to-date information across your organization.",
    image: "/soft_dev/ERP.png" 
  },
  CRM: {
    title: "Customer Relationship Management",
    desc1: "Manage customer interactions, sales pipelines, and marketing campaigns in one centralized platform. Our CRM helps you build stronger customer relationships and drive revenue growth.",
    desc2: "Track customer interactions across multiple channels, automate sales processes, and deliver personalized experiences at scale.",
    image: "/soft_dev/CRM.png"
  },
  "HUMAN RESOURCES": {
    title: "Human Capital Management",
    desc1: "Manage your workforce effectively with our comprehensive HR suite. From recruitment and onboarding to performance management and payroll, we've got you covered.",
    desc2: "Simplify HR processes, improve employee engagement, and make data-driven decisions about your most valuable asset—your people.",
    image: "/soft_dev/HCM.png"
  },
  "SUPPLY CHAIN": {
    title: "Supply Chain Management",
    desc1: "Optimize your supply chain from procurement to delivery. Our SCM solution provides end-to-end visibility, predictive analytics, and automation capabilities.",
    desc2: "Reduce costs, minimize risks, and improve efficiency across your entire supply chain network with real-time tracking and intelligent insights.",       
    image: "/soft_dev/SRM.png"
  },
  "BUSINESS INTELLIGENCE": {
    title: "Business Intelligence",
    desc1: "Transform data into actionable insights with our powerful BI platform. Create interactive dashboards, generate detailed reports, and uncover trends that drive strategic decisions.",
    desc2: "Connect to multiple data sources, leverage advanced analytics, and share insights across your organization with ease.",
    image: "/soft_dev/B.png"
  }
};

const industries: IndustryService[] = [
  {
    icon: <Landmark />,
    title: 'Financial Services',
    description: 'Compliance-ready enterprise software for banking and financial institutions.',
  },
  {
    icon: <HeartPulse />,
    title: 'Healthcare',
    description: 'Digital healthcare management systems for modern medical organizations.',
  },
  {
    icon: <Factory />,
    title: 'Manufacturing',
    description: 'Smart production and supply chain optimization platforms for manufacturers.',
  },
  {
    icon: <ShoppingBag />,
    title: 'Retail',
    description: 'Omnichannel retail and inventory management software for modern commerce.',
  },
];

const tabs = Object.keys(tabData);
const [activeTab, setActiveTab] = useState(tabs[0]);
  const content = tabData[activeTab];
  return (
    <div className="bg-white py-12 mt-10">
        <SEO title="Enterprise Software | Zanthium Technosoft" />
      <section className="bg-slate-50 pb-16 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Enterprise Software for <span className="text-red-600">Modern Businesses</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Streamline operations, enhance productivity, and drive growth with enterprise-grade solutions tailored for modern organizations.
        </p>
        <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded shadow-md transition">
          Schedule a Demo
        </a>
      </div>
      <div className="flex-1">
        <img src="/soft_dev/Enterprise.png" alt="Meeting" className="rounded-2xl shadow-2xl w-full" />
      </div>
    </div>
  </section>

  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-2">Powerful Enterprise Capabilities</h2>
      <div className="w-20 h-1 bg-[#a81414] mx-auto mb-16"></div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {capabilities.map((item, idx) => {
  const Icon = item.icon;

  return (
    <div
  key={idx}
  className="bg-white p-8 border-l-4 border-[#a81414] shadow-md rounded-r-lg hover:shadow-lg transition-all duration-300 h-full flex flex-col min-h-[280px]"
>
  <div className="mb-4">
    <Icon size={42} className="text-[#a81414]" />
  </div>

  <h3 className="text-xl font-bold mb-3 text-slate-900 min-h-[60px] flex items-center">
    {item.title}
  </h3>

  <p className="text-gray-600 leading-relaxed flex-grow">
    {item.desc}
  </p>
</div>
  );
})}
      </div>
    </div>
  </section>
  
  <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-slate-900 mb-2">Comprehensive Enterprise Solutions</h2>
      <div className="w-24 h-1 bg-[#a81414] mb-10"></div>
      
      {/* Navigation */}
      <div className="flex flex-wrap gap-8 mb-12 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-xs font-bold tracking-wider transition-colors border-b-2 ${
              activeTab === tab 
                ? 'text-[#a81414] border-[#a81414]' 
                : 'text-gray-500 border-transparent hover:text-[#a81414]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">{content.title}</h3>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            {content.desc1}
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            {content.desc2}
          </p>
        </div>
        <div className="md:w-1/2">
          <img 
            src={content.image} 
            alt={content.title} 
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Industry-Specific <span className="text-[#a81414]">Enterprise Solutions</span>
        </h2>
        <p className="text-gray-600 mb-16">Custom enterprise platforms tailored for diverse business industries.</p>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl transition-transform hover:shadow-xl"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-[#a81414] text-white flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              {/* Title and Description */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-md leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}