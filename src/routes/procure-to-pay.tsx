import { createFileRoute } from '@tanstack/react-router'
import { ChartBar, CircleDollarSign, Eye, FileText, HandshakeIcon, List, ListOrdered, LockKeyhole, LucideCornerRightUp, LucideEqualApproximately, PieChart, RefreshCw, Search, SearchCheck, ShieldCheck, Workflow, Zap } from 'lucide-react';
import SEO from "../components/SEO";

export const Route = createFileRoute('/procure-to-pay')({
  component: ProcureToPayPage,
})



// ─── Data ────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: 1,
    icon: <Search/>,
    title: "Requisition",
    desc: "Create purchase requests with smart contracts that automatically enforce compliance rules and budget constraints.",
  },
  {
    num: 2,
    icon: <LucideEqualApproximately/>,
    title: "Approval",
    desc: "Streamline approval workflows with blockchain-based verification that eliminates delays and reduces fraud.",
  },
  {
    num: 3,
    icon: <ListOrdered/>,
    title: "Purchase",
    desc: "Execute orders with immutable records that provide full audit trails and real-time tracking capabilities.",
  },
  {
    num: 4,
    icon: <List/>,
    title: "Invoice",
    desc: "Automate invoice matching and processing with smart contracts that reduce errors and processing time.",
  },
  {
    num: 5,
    icon: <LucideCornerRightUp/>,
    title: "Payment",
    desc: "Execute secure, transparent payments with cryptocurrency or traditional methods through blockchain settlement.",
  },
];

const BENEFITS = [
  {
    icon: <LockKeyhole/>,
    title: "Enhanced Security",
    desc: "Blockchain's immutable ledger prevents fraud and unauthorized changes to procurement records with cryptographic protection.",
  },
  {
    icon: <Eye/>,
    title: "Complete Transparency",
    desc: "All stakeholders have access to the same verified information in real-time, reducing disputes and errors significantly.",
  },
  {
    icon: <Zap />,
    title: "Faster Processing",
    desc: "Automate manual processes with smart contracts, reducing procurement cycle times by up to 70%.",
  },
  {
   icon: <CircleDollarSign />,
    title: "Cost Reduction",
    desc: "Lower processing costs, better contract compliance, and reduced fraud lead to significant savings of 30–50%.",
  },
  {
    icon: <ChartBar/>,
    title: "Better Analytics",
    desc: "Access real-time data and insights through customizable dashboards for improved decision-making.",
  },
  {
    icon: <HandshakeIcon/>,
    title: "Supplier Collaboration",
    desc: "Improve relationships with suppliers through transparent processes and timely payments with smart contracts.",
  },
];

const FEATURES = [
  {
  icon: <FileText />,
  title: "Smart Contract Management",
  desc: "Create, execute, and manage procurement contracts with self-executing smart contracts that automate compliance and terms enforcement.",
},
{
  icon: <Workflow />,
  title: "Automated Workflows",
  desc: "Design custom approval workflows that route requests to the right stakeholders based on predefined rules and conditions.",
},
{
  icon: <SearchCheck />,
  title: "Supplier Verification",
  desc: "Verify supplier credentials and performance history through decentralized identity management and blockchain-based verification.",
},
{
  icon: <PieChart />,
  title: "Spend Analytics",
  desc: "Gain deep insights into your spending patterns with real-time analytics and customizable dashboards for data-driven decisions.",
},
{
  icon: <RefreshCw />,
  title: "Integration Capabilities",
  desc: "Seamlessly connect with your existing ERP, accounting, and inventory management systems through our robust API.",
},
{
  icon: <ShieldCheck />,
  title: "Immutable Audit Trail",
  desc: "Maintain a permanent, tamper-proof record of all procurement activities for compliance, reporting, and transparency.",
}
];

// ─── Sub-components ───────────────────────────────────────────────────────────


function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-3xl font-extrabold text-[#0b1e3d] tracking-tight">{title}</h2>
      <div className="w-12 h-1 bg-red-600 rounded mx-auto mt-3" />
      <p className="text-slate-500 mt-5 max-w-xl mx-auto leading-relaxed text-md">
        {subtitle}
      </p>
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative flex items-center justify-center py-24 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0b1e3d 0%, #0f3460 50%, #0d4f5c 100%)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(0,180,160,0.12) 0%, transparent 65%)",
        }}
      />
      <div className="relative z-10 bg-[rgba(5,15,35,0.75)] border border-white/10 rounded-2xl px-16 py-14 max-w-2xl text-center">
        <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight">
          Next-Gen Blockchain
          <br />
          Procure-to-Pay Solutions
        </h1>
        <p className="text-slate-400 mt-5 leading-relaxed">
          Transform your procurement process with our cutting-edge blockchain technology for
          unprecedented transparency, security, and efficiency.
        </p>
        
      </div>
    </section>
  );
}

function ProcessSteps() {
  return (
    <section className="py-20 px-6 bg-white">
      <SectionHeader
        title="Streamlined Procure-to-Pay Process"
        subtitle="Our blockchain-powered solution revolutionizes each step of the procurement lifecycle with smart contracts and immutable records."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="relative bg-white border border-slate-200 border-t-4 border-t-red-500 rounded-xl pt-8 pb-6 px-5 text-center"
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-600 text-white rounded-full text-xs font-bold flex items-center justify-center">
              {step.num}
            </span>
            <div className="text-3xl text-red-500 mb-3 flex items-center justify-center">{step.icon}</div>
            <h3 className="font-bold text-[#0b1e3d] mb-2">{step.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-20 px-6 bg-slate-100">
      <SectionHeader
        title="Why Choose Our Solution"
        subtitle="Discover the transformative advantages of blockchain-powered procurement for your business."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            className="bg-white border border-slate-200 border-l-4 border-l-red-500 rounded-xl p-6 flex gap-4 items-start"
          >
            <span className="text-2xl text-red-500 mt-0.5 shrink-0">{b.icon}</span>
            <div>
              <h3 className="font-bold text-[#0b1e3d] text-md mb-2">{b.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlatformFeatures() {
  return (
    <section className="py-20 px-6 bg-white">
      <SectionHeader
        title="Powerful Platform Features"
        subtitle="Our comprehensive procure-to-pay solution includes everything you need for efficient procurement management."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="bg-white border border-slate-200 rounded-xl p-7 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl text-red-500 mb-4">{f.icon}</div>
            <h3 className="font-bold text-[#0b1e3d] mb-2">{f.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">{f.desc}</p>
            <a href="#" className="text-red-600 font-semibold text-xs hover:underline">
              Explore feature →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTAFooter() {
  return (
    <section
      className="text-center py-20 px-6 text-white"
      style={{
        background: "linear-gradient(135deg, #0b1e3d 0%, #0f3460 100%)",
      }}
    >
      <h2 className="text-3xl font-extrabold tracking-tight">
        Ready to Transform Your Procurement?
      </h2>
      <p className="text-slate-400 mt-3 text-md mb-10">
        Join hundreds of enterprises already using blockchain to streamline their procure-to-pay process.
      </p>
      <a href="/contact" className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold px-9 py-3.5 rounded-lg text-base transition-colors">
        Get Started Today
      </a>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function ProcureToPayPage() {
  return (
    <div className="min-h-screen">
        <SEO title="Procure To Pay | Zanthium Technosoft" />
      <Hero />
      <ProcessSteps />
      <WhyChoose />
      <PlatformFeatures />
      <CTAFooter />
    </div>
  );
}