import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .cta-banner {
            min-height: auto !important;
            text-align: center;
            justify-content: center !important;
            padding: 32px 24px !important;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .cta-banner {
            flex-direction: column !important;
            text-align: center;
            justify-content: center !important;
            padding: 32px 24px !important;
          }
          .cta-title {
            font-size: 22px !important;
            line-height: 1.4;
          }
          .cta-subtitle {
            font-size: 15px !important;
            line-height: 1.6;
          }
        }

        @media (max-width: 576px) {
          .cta-banner {
            padding: 24px 16px !important;
          }
          .footer-main {
            padding: 40px 16px 24px !important;
          }
          .footer-bottom {
            padding: 16px !important;
          }
        }

        @media (max-width: 480px) {
          .cta-title {
            font-size: 18px !important;
          }
          .cta-subtitle {
            font-size: 14px !important;
          }
        }
      `}</style>

      {/* ===== CTA BANNER ===== */}
      <div
        className="cta-banner"
        style={{
          background: "#8b0000",
          padding: "40px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
          minHeight: 160,
        }}
      >
        <div className="cta-content" style={{  textAlign: "left" }}>
          <div
            className="cta-title"
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#fff",
              marginBottom: 8,
              lineHeight: 1.3
            }}
          >
            Ready to transform your business with our software solutions?
          </div>
          <div
            className="cta-subtitle"
            style={{
              fontSize: 16,
              color: "#f4a261",
              lineHeight: 1.5
            }}
          >
            Let's discuss how we can help you achieve your goals with our customized technology solutions.
          </div>
        </div>

        <a
          href="/contact"
          style={{
            background: "#fff",
            color: "#8b0000",
            border: "2px solid #fff",
            borderRadius: 4,
            padding: "14px 32px",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            whiteSpace: "nowrap",
            letterSpacing: 0.3,
            transition: "all 0.2s ease",
            textDecoration: "none"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.color = "#8b0000";
          }}
        >
          Get Free Consultation
        </a>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div
        className="footer-main"
        style={{ background: "#111", padding: "60px 48px 36px", color: "#ccc" }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.4fr",
            gap: 48,
            maxWidth: 1500,
            margin: "0 auto",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <img src="/logo.png" alt="Company Logo" style={{ width: 150, height: "auto" }} />
            </div>

            <p style={{ fontSize: 16, color: "#999", lineHeight: 1.7, marginBottom: 24, maxWidth: 300 }}>
              We provide innovative software solutions to help businesses grow and succeed in the digital age.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
              {[
                {link: "https://facebook.com/Zanthiumtechnosoftofficial", icon: Facebook, title: "Facebook" },
                {link:"https://twitter.com/TZanthium", icon: Twitter, title: "Twitter" },
                {link:"https://www.linkedin.com/in/zanthium-technosoft-776108192?original_referer=", icon: Linkedin, title: "LinkedIn" },
                {link:"https://instagram.com/zanthiumtechnosoftofficial", icon: Instagram, title: "Instagram" },
                {link:"https://youtube.com/@zanthiumtechnosoft", icon: Youtube, title: "YouTube" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.title}
                    href={s.link}
                    title={s.title}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: "#1a1a1a",
                      border: "1px solid #2a2a2a",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#aaa",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#e53e3e";
                      e.currentTarget.style.borderColor = "#e53e3e";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#1a1a1a";
                      e.currentTarget.style.borderColor = "#2a2a2a";
                      e.currentTarget.style.color = "#aaa";
                    }}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>

            {/* Certification badges */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { image: "/certificate/iaf.png" },
                { image: "/certificate/iso.png" },
                { image: "/certificate/iso1.png" },
                { image: "/certificate/cmmi.png" },
              ].map((badge, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={badge.image} alt="Certification Badge" style={{ width: 72, height: 72, objectFit: "contain", borderRadius: "50%" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — Our Services */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
              Our Services
            </h4>
            <div style={{ width: 40, height: 2, background: "#e53e3e", marginBottom: 20 }} />
            {[
              { name: "Web Development", path: "/web-development" },
              { name: "Software Solutions", path: "/software-development" },
              { name: "Mobile Apps", path: "/mobile-application" },
              { name: "Blockchain", path: "/blockchain" },
              { name: "Graphic Design", path: "/web-graphic-designing" },
              { name: "Internet Marketing", path: "/internet-marketing" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: "block",
                  color: "#aaa",
                  textDecoration: "none",
                  fontSize: 16,
                  padding: "8px 0",
                  borderBottom: "1px solid #1a1a1a",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#e53e3e"}
                onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
              Quick Links
            </h4>
            <div style={{ width: 40, height: 2, background: "#e53e3e", marginBottom: 20 }} />
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/aboutus" },
              { name: "Technologies", path: "/technologies" },
              { name: "Industry", path: "/Education" },
              { name: "Blogs", path: "/blogs" },
              { name: "Careers", path: "/career" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: "block",
                  color: "#aaa",
                  textDecoration: "none",
                  fontSize: 16,
                  padding: "8px 0",
                  borderBottom: "1px solid #1a1a1a",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#e53e3e"}
                onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Col 4 — Contact Info */}
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
              Contact Info
            </h4>
            <div style={{ width: 40, height: 2, background: "#e53e3e", marginBottom: 20 }} />

            <div style={{ display: "flex", gap: 12, marginBottom: 18, alignItems: "flex-start" }}>
              <span style={{ color: "#e53e3e", marginTop: 2, flexShrink: 0 }}><MapPin size={16} /></span>
              <p style={{ fontSize: 16, color: "#aaa", lineHeight: 1.6, margin: 0 }}>
                Building No. 28 & 29, In Front of Rudrapur City Railway Station, Rudrapur, Udham Singh Nagar, Uttarakhand, India–263153.
              </p>
            </div>

            <div style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "center" }}>
              <span style={{ color: "#e53e3e", flexShrink: 0 }}><Phone size={16} /></span>
              <a href="tel:+917055000550" style={{ fontSize: 16, color: "#aaa", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#e53e3e"}
                onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
              >
                +91-7055000550
              </a>
            </div>

            <div style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "center" }}>
              <span style={{ color: "#e53e3e", flexShrink: 0 }}><Mail size={16} /></span>
              <a href="mailto:contact@zanthiumtechnosoft.com" style={{ fontSize: 16, color: "#aaa", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#e53e3e"}
                onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
              >
                contact@zanthiumtechnosoft.com
              </a>
            </div>

            <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center" }}>
              <span style={{ color: "#e53e3e", flexShrink: 0 }}><Clock size={16} /></span>
              <span style={{ fontSize: 16, color: "#aaa" }}>Mon-Sat: 9:00 AM – 6:00 PM</span>
            </div>

            <a href="/Privacy-Policy" style={{ fontSize: 16, color: "#aaa", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#e53e3e"}
              onMouseLeave={e => e.currentTarget.style.color = "#aaa"}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div 
        className="footer-bottom"
        style={{
          background: "#0a0a0a",
          borderTop: "1px solid #1e1e1e",
          padding: "20px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <span style={{ fontSize: 16, color: "#888" }}>Visitor No:</span>
          <span style={{
            fontFamily: "monospace",
            fontSize: 15,
            fontWeight: 700,
            color: "#fff",
            background: "#161616",
            border: "1px solid #2a2a2a",
            borderRadius: 3,
            padding: "4px 12px",
            letterSpacing: 4,
          }}>
            <a href="https://hitwebcounter.com" target="_blank" className="inline-block">
            <img 
                src="https://hitwebcounter.com/counter/counter.php?page=8321795&amp;style=0006&amp;nbdigits=9&amp;type=page&amp;initCount=986544"
                alt="counter"
                className="max-w-full h-auto mx-auto"/>
            
        </a>
          </span>
        </div>

        <div style={{ fontSize: 14, color: "#666" }}>
          © 2026 Zanthium Technosoft Pvt. Ltd. All Rights Reserved.
        </div>
      </div>

      {/* ===== SCROLL TO TOP ===== */}
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "#e53e3e",
          border: "none",
          color: "#fff",
          fontSize: 18,
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(229,62,62,0.4)",
          display: showTop ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
          zIndex: 99,
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "#c0392b"; e.currentTarget.style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "#e53e3e"; e.currentTarget.style.transform = "scale(1)"; }}
        title="Back to top"
      >
        ↑
      </button>
    </div>
  );
}