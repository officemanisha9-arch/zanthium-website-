import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/web-graphic-designing')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
        <SEO title="Web Graphic Designing | Zanthium Technosoft" />
      {/* Dynamic injection for Poppins, Montserrat and FontAwesome icons */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Poppins:wght@400;500;600;700&display=swap" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <style>{`
        :root {
          --primary: #c20f0fff;
          --secondary: #cdbc4eff;
          --accent: #FF6B6B;
          --dark: #2F2E41;
          --light: #F8F9FA;
          --gray: #6C757D;
          --transition: all 0.3s ease;
        }
        
        .graphic-design-page {
          font-family: 'Poppins', sans-serif;
          line-height: 1.6;
          color: var(--dark);
          background-color: var(--light);
          overflow-x: hidden;
        }
        
        .graphic-design-page h1, 
        .graphic-design-page h2, 
        .graphic-design-page h3, 
        .graphic-design-page h4 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
        }
        
        .graphic-design-page a {
          text-decoration: none;
          color: inherit;
        }
        
        .graphic-design-page .container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .graphic-design-page .btn2 {
          display: inline-block;
          padding: 14px 32px;
          background: linear-gradient(to right, var(--primary), #aa0303ff);
          color: white;
          border-radius: 50px;
          font-weight: 600;
          transition: var(--transition);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(194, 15, 15, 0.3);
          font-size: 1rem;
        }
        
        .graphic-design-page .btn2:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(194, 15, 15, 0.4);
        }
        
        /* Hero Section */
        .graphic-design-page .hero {
          padding: 120px 0;
          background: linear-gradient(to right, rgba(194, 15, 15, 0.4), rgba(47, 46, 65, 0.75)), url('https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
          color: white;
          text-align: center;
        }
        
        .graphic-design-page .hero-content1 {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .graphic-design-page .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          line-height: 1.2;
          color: #ffffff;
        }
        
        .graphic-design-page .hero p {
          font-size: 1.2rem;
          margin-bottom: 35px;
          opacity: 0.95;
        }
        
        /* Services */
        .graphic-design-page .services {
          padding: 80px 0;
          background: white;
        }
        
        .graphic-design-page .section-title {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .graphic-design-page .section-title h2 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 15px;
        }
        
        .graphic-design-page .section-title p {
          color: var(--gray);
          max-width: 600px;
          margin: 0 auto;
        }
        
        .graphic-design-page .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .graphic-design-page .service-card {
          background: white;
          border-radius: 15px;
          padding: 40px 30px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.03);
        }
        
        .graphic-design-page .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .graphic-design-page .service-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 1.8rem;
        }
        
        .graphic-design-page .service-card h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: var(--dark);
        }
        
        .graphic-design-page .service-card p {
          color: var(--gray);
          font-size: 0.95rem;
          margin-bottom: 0;
        }
        
        /* Process */
        .graphic-design-page .process {
          padding: 80px 0;
          background: var(--light);
        }
        
        .graphic-design-page .process-steps {
          display: flex;
          justify-content: space-between;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          gap: 30px;
        }
        
        .graphic-design-page .process-steps::before {
          content: '';
          position: absolute;
          top: 40px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--secondary);
          z-index: 1;
          opacity: 0.5;
        }
        
        .graphic-design-page .step {
          text-align: center;
          position: relative;
          z-index: 2;
          flex: 1;
        }
        
        .graphic-design-page .step-number {
          width: 80px;
          height: 80px;
          background: white;
          border: 3px solid var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--primary);
          margin: 0 auto 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        
        .graphic-design-page .step h3 {
          margin-bottom: 10px;
          font-size: 1.25rem;
          color: var(--dark);
        }

        .graphic-design-page .step p {
          color: var(--gray);
          font-size: 0.9rem;
        }
        
        /* Responsive Framework */
        @media (max-width: 1200px) {
          .graphic-design-page .hero h1 { font-size: 3rem; }
        }
        
        @media (max-width: 992px) {
          .graphic-design-page .hero { padding: 90px 0; }
          .graphic-design-page .hero h1 { font-size: 2.6rem; }
          .graphic-design-page .services, .graphic-design-page .process { padding: 60px 0; }
          .graphic-design-page .process-steps::before { top: 35px; }
          .graphic-design-page .step-number { width: 70px; height: 70px; font-size: 1.4rem; }
        }
        
        @media (max-width: 768px) {
          .graphic-design-page .hero h1 { font-size: 2.2rem; }
          .graphic-design-page .hero p { font-size: 1.1rem; }
          .graphic-design-page .services-grid { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
          .graphic-design-page .process-steps { flex-direction: column; gap: 40px; }
          .graphic-design-page .process-steps::before { display: none; }
        }
        
        @media (max-width: 576px) {
          .graphic-design-page .hero { padding: 70px 0; }
          .graphic-design-page .hero h1 { font-size: 1.8rem; }
          .graphic-design-page .section-title h2 { font-size: 2rem; }
          .graphic-design-page .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="graphic-design-page mt-7">
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-content1">
            <h1>Transform Your Brand With Stunning Graphic Design</h1>
            <p>Professional graphic design services that help your business stand out and make a lasting impression.</p>
            <a href="/contact" className="btn2">Get Started Today</a>
          </div>
        </section>

        {/* Services */}
        <section className="services" id="services">
          <div className="container">
            <div className="section-title">
              <h2>Our Services</h2>
              <p>We offer a comprehensive range of graphic design services to meet your business needs.</p>
            </div>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-pencil-alt"></i>
                </div>
                <h3>Logo Design</h3>
                <p>Custom logo designs that capture your brand's essence and make a memorable impression.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <h3>Brand Identity</h3>
                <p>Complete brand identity packages including color palettes, typography, and style guides.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-ad"></i>
                </div>
                <h3>Marketing Materials</h3>
                <p>Brochures, flyers, business cards, and other print materials that convert.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-t-shirt"></i>
                </div>
                <h3>Merchandise Design</h3>
                <p>Custom designs for apparel, mugs, and other promotional products.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-share-alt"></i>
                </div>
                <h3>Social Media Graphics</h3>
                <p>Engaging visuals for all social platforms that increase reach and engagement.</p>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <h3>Illustration</h3>
                <p>Custom illustrations that tell your brand's story in a unique and compelling way.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="process" id="process">
          <div className="container">
            <div className="section-title">
              <h2>Our Design Process</h2>
              <p>We follow a structured approach to ensure your project is completed on time and exceeds expectations.</p>
            </div>
            
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Discovery</h3>
                <p>We learn about your business, goals, and design preferences</p>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <h3>Concept</h3>
                <p>We create initial design concepts for your review</p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <h3>Revision</h3>
                <p>We refine the design based on your feedback</p>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <h3>Delivery</h3>
                <p>We deliver final files in all required formats</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}