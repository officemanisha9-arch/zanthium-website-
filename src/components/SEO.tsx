import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description = "Zanthium Technosoft is a premier software development company in India offering cutting-edge solutions in web development, mobile apps, blockchain, and more", 
  keywords = "government project, government software development company, e-governance solutions provider, government IT services company, govtech company, Top IT Company, Software Development, Blockchain, MLM Software, Game development company, top IT services companies, IT companies in India, Software development company in Rudrapur, Software company in Rudrapur, IT company in Rudrapur, Website development company in Rudrapur, Web development company in Uttarakhand, Mobile app development company in Uttarakhand, Custom software development company, Blockchain development company in India, Fintech software development company, Trading platform development company, Custom web application development, Business website development, E-commerce website development, React JS development company, Node JS development company, API development and integration services, Android and iOS app development, React Native app development, Blockchain application development, Smart contract development services, Crypto wallet development, Cryptocurrency exchange development, NFT marketplace development, DApp development company, Forex trading platform development, Stock trading software development, Investment platform development, Payment gateway integration services, Fintech mobile app development, AI chatbot development services, Website developer in Rudrapur, Software development services in Rudrapur, Mobile app developer in Rudrapur, IT services company in Rudrapur, Web development company near Rudrapur, Software company in Udham Singh Nagar, Software company in Uttarakhand",
  type = "website"
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph (Facebook/LinkedIn) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
