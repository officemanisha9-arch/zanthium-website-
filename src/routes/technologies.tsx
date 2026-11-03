import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const categories = [
  { id: "frameworks", label: "Frameworks" },
  { id: "programming", label: "Programming Languages" },
  { id: "database", label: "Databases" },
  { id: "mobile", label: "Mobile Technologies" },
  { id: "cms", label: "CMS Platforms" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "ui", label: "UI Technologies" },
];

type TechItem = {
  name: string;
  desc: string;
  tags: { label: string; color: "green" | "yellow" }[];
  logo: string;
};

const techData: Record<string, TechItem[]> = {
  frameworks: [
    {
      name: "ASP.NET",
      desc: "Microsoft's framework for building web applications and services with .NET. We use ASP.NET to create secure, scalable enterprise solutions.",
      tags: [{ label: "Backend", color: "green" }, { label: "Microsoft", color: "yellow" }],
      logo: "/tech18.jpg",
    },
    {
      name: "AngularJS",
      desc: "JavaScript framework for building dynamic single-page applications. We use AngularJS to create responsive, interactive web interfaces.",
      tags: [{ label: "Frontend", color: "green" }, { label: "Google", color: "yellow" }],
      logo: "/tech13.jpg",
    },
    {
      name: "React",
      desc: "A declarative, efficient, and flexible JavaScript library for building user interfaces. We use React to create fast, modern, and scalable web applications.",
      tags: [{ label: "Frontend", color: "green" }, { label: "Facebook", color: "yellow" }],
      logo: "/react.jpg",
    },
    {
      name: "Node.js",
      desc: "A JavaScript runtime built on Chrome's V8 engine. We use Node.js to build scalable network applications and server-side solutions.",
      tags: [{ label: "Backend", color: "green" }, { label: "JavaScript Runtime", color: "yellow" }],
      logo: "/nodejs-logo.svg",
    },
    {
      name: "CakePHP",
      desc: "Rapid development PHP framework following MVC pattern. We use CakePHP to build maintainable web applications quickly.",
      tags: [{ label: "Backend", color: "green" }, { label: "Open Source", color: "yellow" }],
      logo: "/tech15.jpg",
    },
    {
      name: "jQuery",
      desc: "Fast, small JavaScript library simplifying HTML document traversal and manipulation. We use jQuery to enhance interactivity and simplify AJAX calls.",
      tags: [{ label: "Frontend", color: "green" }, { label: "JS Library", color: "yellow" }],
      logo: "/tech_1.png",
    },
  ],
  programming: [
    {
      name: "Java",
      desc: "Object-oriented programming language for building platform-independent applications. We use Java for enterprise solutions and Android development.",
      tags: [{ label: "General Purpose", color: "green" }, { label: "Oracle", color: "yellow" }],
      logo: "/tech19.jpg",
    },
    {
      name: "PHP",
      desc: "Server-side scripting language for web development. We use PHP to build dynamic websites and web applications with frameworks like Laravel and CodeIgniter.",
      tags: [{ label: "Web", color: "green" }, { label: "Open Source", color: "yellow" }],
      logo: "/tech6.jpg",
    },
    {
      name: "JavaScript",
      desc: "The programming language of the web. We use JavaScript for both frontend and backend development (with Node.js) to create interactive web applications.",
      tags: [{ label: "Web", color: "green" }, { label: "Full Stack", color: "yellow" }],
      logo: "https://scand.com/wp-content/uploads/2021/04/JavaScript.jpg",
    },
    {
      name: "Python",
      desc: "Versatile programming language used for web development, data analysis, artificial intelligence, automation, and more. We utilize frameworks like Django and Flask for robust applications.",
      tags: [{ label: "AI & Data", color: "green" }, { label: "Web", color: "yellow" }],
      logo: "/tech17.jpg",
    },
  ],
  database: [
    {
      name: "Microsoft SQL Server",
      desc: "Relational database management system from Microsoft. We use SQL Server for enterprise data storage with high performance and security.",
      tags: [{ label: "RDBMS", color: "green" }, { label: "Microsoft", color: "yellow" }],
      logo: "/tech12.jpg",
    },
    {
      name: "MySQL",
      desc: "Open-source relational database system. We use MySQL for web applications requiring reliable, scalable data storage.",
      tags: [{ label: "RDBMS", color: "green" }, { label: "Open Source", color: "yellow" }],
      logo: "/tech2.jpg",
    },
    {
      name: "MongoDB",
      desc: "A document-oriented NoSQL database. We use MongoDB for applications requiring flexible, scalable data storage with Node.js applications.",
      tags: [{ label: "NoSQL", color: "green" }, { label: "Document Database", color: "yellow" }],
      logo: "https://ahex.co/wp-content/uploads/2022/06/mongodb-logo.png",
    },
  ],
  mobile: [
    {
      name: "Android",
      desc: "Mobile operating system based on Linux. We develop native Android apps using Java and Kotlin for optimal performance.",
      tags: [{ label: "Mobile", color: "green" }, { label: "Google", color: "yellow" }],
      logo: "/tech11.jpg",
    },
    {
      name: "iOS",
      desc: "Mobile operating system for Apple devices. We build native iOS applications using Swift and Objective-C.",
      tags: [{ label: "Mobile", color: "green" }, { label: "Apple", color: "yellow" }],
      logo: "/tech14.jpg",
    },
    {
      name: "React Native",
      desc: "A framework for building native mobile apps using React. We use React Native to create cross-platform mobile applications with a single codebase.",
      tags: [{ label: "Mobile", color: "green" }, { label: "Cross-platform", color: "yellow" }],
      logo: "/ReactNative.jpg",
    },
  ],
  cms: [
    {
      name: "Joomla",
      desc: "Popular open-source CMS for building websites and online applications. We create custom Joomla templates and extensions.",
      tags: [{ label: "CMS", color: "green" }, { label: "Open Source", color: "yellow" }],
      logo: "/tech5.jpg",
    },
    {
      name: "WordPress",
      desc: "World's most popular CMS. We develop custom WordPress themes and plugins for blogs, business sites, and e-commerce.",
      tags: [{ label: "CMS", color: "green" }, { label: "Open Source", color: "yellow" }],
      logo: "/tech3.jpg",
    },
    {
      name: "Drupal",
      desc: "Flexible open-source CMS for complex websites. We use Drupal for large-scale, content-rich websites requiring custom functionality.",
      tags: [{ label: "CMS", color: "green" }, { label: "Enterprise", color: "yellow" }],
      logo: "/tech7.jpg",
    },
  ],
  ecommerce: [
    {
      name: "Magento",
      desc: "Powerful e-commerce platform. We develop custom Magento solutions for online stores with complex requirements.",
      tags: [{ label: "E-Commerce", color: "green" }, { label: "Adobe", color: "yellow" }],
      logo: "/tech10.jpg",
    },
    {
      name: "OpenCart",
      desc: "Free open-source e-commerce platform. We build OpenCart stores with custom themes and extensions.",
      tags: [{ label: "E-Commerce", color: "green" }, { label: "Open Source", color: "yellow" }],
      logo: "/tech16.jpg",
    },
  ],
  ui: [
    {
      name: "Adobe Flash",
      desc: "Multimedia platform for animations and rich internet applications. We create interactive Flash content when required.",
      tags: [{ label: "Multimedia", color: "green" }, { label: "Adobe", color: "yellow" }],
      logo: "/tech8.jpg",
    },
    {
      name: "Silverlight",
      desc: "Application framework for rich internet applications. We develop Silverlight applications for specific enterprise needs.",
      tags: [{ label: "RIA", color: "green" }, { label: "Microsoft", color: "yellow" }],
      logo: "/tech4.jpg",
    },
    {
      name: "Dojo Toolkit",
      desc: "JavaScript toolkit for rapid web development. We use Dojo for building cross-platform web applications.",
      tags: [{ label: "JavaScript", color: "green" }, { label: "Toolkit", color: "yellow" }],
      logo: "/tech20.jpg",
    },
  ],
};

/* ─────────────────────────────────────────
   TechCard Component
───────────────────────────────────────── */
function TechCard({ tech }: { tech: TechItem }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col min-h-[280px]">
      <div className="p-5 flex-1">
        <div className="flex flex-col sm:flex-row items-center gap-4 h-full">

          <div className="w-full sm:w-1/3 flex justify-center items-center py-2">
            <img
              src={tech.logo}
              alt={tech.name}
              className="rounded-lg max-h-20 w-auto object-contain"
            />
          </div>

          <div className="w-full sm:w-2/3 text-center sm:text-left flex flex-col h-full">
            <h5 className="text-lg font-semibold text-gray-800 mb-2 min-h-[56px]">
              {tech.name}
            </h5>

            <p className="text-md text-gray-600 mb-3 leading-relaxed flex-grow">
              {tech.desc}
            </p>

            <div className="flex flex-wrap gap-2 justify-center sm:justify-start mt-auto">
              {tech.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    tag.color === "green"
                      ? "bg-green-600 text-white"
                      : "bg-yellow-400 text-gray-900"
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Section Component
───────────────────────────────────────── */
type TechSectionProps = {
  id: string;
  title: string;
  items: TechItem[];
};

function TechSection({ id, title, items }: TechSectionProps) {
  return (
    <div id={id} className="mb-12 pt-3 scroll-mt-24">
      <h3 className="text-2xl font-bold text-gray-800 pb-3 mb-6 border-b-4 border-[#971405] inline-block">
        {title}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {items.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
function Technologies() {
  const [activeSection, setActiveSection] = useState("frameworks");
  const contentRef = useRef(null);

  // Scroll spy
  useEffect(() => {
    function handleScroll() {
      const offsets = categories.map(({ id }) => {
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      }).filter((o): o is {id: string, top: number} => o !== null);

      const visible = offsets.filter((o) => o.top <= 120);
      if (visible.length > 0) {
        setActiveSection(visible[visible.length - 1].id);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  return (
    <div className="w-full font-sans antialiased">
        <SEO title="Technologies | Zanthium Technosoft" />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease forwards; }
      `}</style>

      <section
        id="inner_pages_block"
        className="py-20 animate-fadeIn"
        style={{ background: "linear-gradient(135deg, #f9fafb 0%, #dbeafe 100%)" }}
      >
        <div className="container mx-auto px-4 max-w-7xl">

          {/* ── Header ── */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-5 text-gray-800">
              Technologies We Use
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-3">
              We leverage cutting-edge technologies to build powerful, scalable solutions for your business
            </p>
            <div className="mx-auto bg-green-600 h-1 w-24 rounded border-0" />
          </div>

          {/* ── Body ── */}
          <div className="flex flex-col lg:flex-row gap-6 mt-12">

            {/* ── Sidebar ── */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:sticky lg:top-20">
                <div className="bg-[#971405] px-5 py-4">
                  <h5 className="text-lg text-white font-semibold">Categories</h5>
                </div>
                <div className="divide-y divide-gray-100">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => scrollTo(cat.id)}
                      className={`
                        w-full text-left block px-5 py-3 text-md font-medium
                        transition-all duration-300 hover:translate-x-1
                        ${activeSection === cat.id
                          ? "bg-[#971405] text-white"
                          : "text-gray-700 hover:bg-[#971405] hover:text-white"
                        }
                      `}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Main Content ── */}
            <div ref={contentRef} className="w-full lg:w-3/4">
              {categories.map((cat) => (
                <TechSection
                  key={cat.id}
                  id={cat.id}
                  title={cat.label}
                  items={techData[cat.id]}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────
   TanStack Router export (uncomment in your project)
───────────────────────────────────────── */
export const Route = createFileRoute('/technologies')({ component: Technologies })