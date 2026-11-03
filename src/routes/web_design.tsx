import SEO from "../components/SEO";
import { createFileRoute, Link } from '@tanstack/react-router'

import { 
  Laptop, 
  ShoppingCart, 
  Smartphone, 
  Search, 
  Gauge, 
  PenTool 
} from 'lucide-react'

export const Route = createFileRoute('/web_design')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full bg-[#f9f9f9] font-sans antialiased">
        <SEO title="Web Design | Zanthium Technosoft" />
      <style>{`
        :root {
          --primary: #c84e4eff;
          --secondary: #fb8f8fff;
          --accent: #ff6b6b;
          --dark: #333;
          --light: #f9f9f9;
          --gray: #777;
          --transition: all 0.3s ease;
        }
        
        .btn2 {
          display: inline-block;
          padding: 12px 28px;
          background: linear-gradient(to right, var(--primary), var(--secondary));
          color: white;
          border-radius: 30px;
          font-weight: 500;
          transition: var(--transition);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(78, 84, 200, 0.3);
        }
        
        .btn2:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(78, 84, 200, 0.4);
        }
        
        .btn2-accent {
          background: linear-gradient(to right, var(--accent), #ff8e8e);
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }
                
        /* Services */
        .services {
          padding: 60px 0;
          background: white;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-title h2 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 15px;
          font-weight: 700;
        }
        
        .section-title p {
          color: var(--gray);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .service-card {
          background: white;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: var(--transition);
          text-align: center;
          border: 1px solid #f0f0f0;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .service-icon-wrapper {
          width: 70px;
          height: 70px;
          background: linear-gradient(to right, var(--primary), var(--secondary));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        
        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #0f172a;
          font-weight: 600;
        }

        .service-card p {
          color: #556275;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        /* Portfolio */
        .portfolio {
          padding: 60px 0;
          background: var(--light);
        }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .portfolio-item {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          height: 280px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .portfolio-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
          display: block;
        }

        .portfolio-item:hover img {
          transform: scale(1.08);
        }

        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(51, 52, 56, 0.64),
            rgba(251, 143, 143, 0.74)
          );
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: var(--transition);
          padding: 20px;
          text-align: center;
          color: white;
        }

        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }

        /* Process Section */
        .process {
          padding: 60px 0;
          background: white;
        }

        .process-steps {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 25px;
          position: relative;
        }

        .process-steps::before {
          content: '';
          position: absolute;
          top: 40px;
          left: 8%;
          width: 84%;
          height: 2px;
          background: var(--secondary);
          z-index: 1;
        }

        .step {
          text-align: center;
          position: relative;
          z-index: 2;
          flex: 1;
          min-width: 0;
        }

        .step h3 {
          font-size: 1.25rem;
          margin-bottom: 10px;
          font-weight: 600;
          color: #0f172a;
        }

        .step p {
          color: #64748b;
          font-size: 0.9rem;
        }

        .step-number {
          width: 80px;
          height: 80px;
          background: white;
          border: 2px solid var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary);
          margin: 0 auto 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .portfolio-item {
            height: 260px;
          }
          .process-steps {
            gap: 20px;
          }
          .step-number {
            width: 70px;
            height: 70px;
            font-size: 1.3rem;
          }
        }

        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .portfolio-item {
            height: 240px;
          }
          .portfolio-overlay {
            opacity: 1;
          }
          .process-steps {
            flex-direction: column;
            gap: 40px;
            align-items: center;
          }
          .process-steps::before {
            display: none;
          }
          .step {
            width: 100%;
            max-width: 400px;
          }
          .step-number {
            width: 65px;
            height: 65px;
            font-size: 1.2rem;
          }
        }

        @media (max-width: 576px) {
          .portfolio-item {
            height: 220px;
            border-radius: 14px;
          }
          .portfolio-overlay h3 {
            font-size: 20px;
          }
          .portfolio-overlay p {
            font-size: 14px;
          }
          .step-number {
            width: 60px;
            height: 60px;
            font-size: 1.1rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-36 bg-gradient-to-br from-black via-[#0b1120]/90 to-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
            alt="Web Design Studio Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b1120]/70 to-red-900/10" />

        {/* Animated Glow Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] bg-red-500/20 blur-3xl rounded-full animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-[220px] sm:w-[320px] lg:w-[450px] h-[220px] sm:h-[320px] lg:h-[450px] bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
        </div>

        {/* Blueprint Grid Mesh Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Hero Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight sm:leading-tight lg:leading-[1.1] mb-5 sm:mb-6">
              Transform Your <span className="text-red-500 block sm:inline">Digital Presence</span> With Expert Web Design
            </h1>

            <p className="text-gray-300 text-md sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl lg:max-w-4xl mb-8 sm:mb-10 px-2">
              We create stunning, user-friendly websites that convert visitors into customers and help your business grow.
            </p>

            <div className="flex justify-center w-full">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-red-600 hover:bg-red-700 text-white text-md sm:text-base font-semibold transition-all duration-300 shadow-lg shadow-red-500/20 hover:scale-105"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>We offer a comprehensive range of web design and development services to meet your business needs.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon-wrapper">
                <Laptop size={28} />
              </div>
              <h3>Website Design</h3>
              <p>Custom, responsive websites designed with your brand and audience in mind. We focus on usability and aesthetics.</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <ShoppingCart size={28} />
              </div>
              <h3>E-Commerce Solutions</h3>
              <p>Complete online store development with secure payment processing, inventory management, and marketing tools.</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <Smartphone size={28} />
              </div>
              <h3>Mobile Responsive Design</h3>
              <p>Websites that look and function perfectly on all devices - desktops, tablets, and smartphones.</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <Search size={28} />
              </div>
              <h3>SEO Optimization</h3>
              <p>Search engine optimized websites that rank higher in search results and attract more organic traffic.</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <Gauge size={28} />
              </div>
              <h3>Website Maintenance</h3>
              <p>Ongoing support, updates, and maintenance to keep your website secure and performing at its best.</p>
            </div>

            <div className="service-card">
              <div className="service-icon-wrapper">
                <PenTool size={28} />
              </div>
              <h3>Content Creation</h3>
              <p>Engaging copy and visual content that tells your brand story and connects with your audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Showcase */}
      <section className="portfolio" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Our Portfolio</h2>
            <p>Take a look at some of our recent projects and see the quality of our work.</p>
          </div>

          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80" alt="Modern E-commerce Portal Development Showcase" />
              <div className="portfolio-overlay">
                <h3 className="text-white font-bold text-2xl mb-1">Modern E-commerce Store</h3>
                <p className="text-md text-gray-100">Fully responsive online shopping experience</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1715&q=80" alt="Corporate Business Website System Concept" />
              <div className="portfolio-overlay">
                <h3 className="text-white font-bold text-2xl mb-1">Corporate Business Website</h3>
                <p className="text-md text-gray-100">Professional design for financial consulting firm</p>
              </div>
            </div>

            <div className="portfolio-item">
              <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1712&q=80" alt="Premium Typography Tech Blog Platform Layout" />
              <div className="portfolio-overlay">
                <h3 className="text-white font-bold text-2xl mb-1">Technology Blog</h3>
                <p className="text-md text-gray-100">Content-focused design for tech enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Strategy Process Section */}
      <section className="process" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title">
            <h2>Our Process</h2>
            <p>We follow a structured approach to ensure your project is completed on time and exceeds expectations.</p>
          </div>

          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>We learn about your business and goals</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>We create a project roadmap</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Design</h3>
              <p>We craft visually appealing layouts</p>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Development</h3>
              <p>We build your website with code</p>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <h3>Launch</h3>
              <p>We deploy your website to the world</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}