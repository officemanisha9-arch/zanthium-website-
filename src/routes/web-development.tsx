import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'

const services = [
  {
    title: "E-Commerce Solution",
    description: "Open your online store! Zanthium's E-Shop is a solution that offers a \"one-stop solution\" that integrates all your e-commerce and marketing tools in one easy to use \"all-in-one\" online system.",
    details: "We help businesses launch profitable online ventures quickly and efficiently. Our comprehensive e-commerce development services include everything you need to succeed—affiliate program setup, email marketing automation, auto-responders, secure shopping cart systems, and full online store integration. With extensive experience in payment gateway services, we offer seamless payment gateway integration with leading providers across the globe.",
    image: "/web_dev/1.png" // Replace with your image paths
  },
  {
    title: "Web Application",
    description: "We can program your ideas! From simplest web applications to all-encompassing custom business solutions, our experts can solve your problems in the most simple and cost-effective manner.",
    details: "web application solutions for a variety of industries. Our flagship product, E-Admin, is a robust web-based ERP system specifically designed for universities and educational institutions, streamlining operations from admissions to examinations. For corporate needs, our iBusiness application serves as a fully customizable enterprise ERP tool, supporting multiple levels of business management and operational efficiency.",
    image: "/web_dev/2.png"
  },
   {
  title: "CMS Customization",
  description: "Take Control over your content. With CMS it becomes much easier for users to create, edit, and publish the content on a web site.",
  details: "Zanthium's CONTENT is a service for customizing the following CMS packages:",
  features: [
    "WordPress", "MAMBO, Joomla", "Flash template", "Photoshop templates",
    "Shopify", "Webflow", "TYPO3"
  ],
  footerText: "We help you with complete control of your website in the most easiest and cost-effective and safe manner.",
  image: "/web_dev/3.png" // Use your image
},
    {
      title: "Custom Web Development",
      description: "Just what you need! We appreciate your imagination and we believe that technology should not be a hindrance in developing your idea.",
      details: "Best of the web 2.0 designs, blogs that feel as if you are writing in your own personal journal, we can develop exactly how you want the design to look like. We use a number of software such as Photoshop, Flash, Dreamweaver and others for the development of the front-end of the web design products. We also use HTML, JavaScript, ASP, PHP, Perl and others for development purposes.",
    
      image: "/web_dev/4.png"
    },
    {
      title: "Open Source Solution",
      description: "Cost-Effective, simple and fast! Alternative to commercial software, Open-Source solutions are cost-effective and a good developer can develop some very good application using them.",
      details: "Our talented team of developers know open-source software to their core and can develop excellent products, that are reliable, secure and work in most efficient manners. Our open-source expertise include, but are not limited to: PHP, MySQL, JAVA, ObjectiveC, Drupal, Joomla among others.",
      
      image: "/web_dev/5.png"
    },
    {
      title: "API Integration",
      description: "Seamlessly connect your applications with powerful APIs to unlock automation, scalability, and efficiency.",
      details: "Our API integration services enable smooth communication between different software systems, applications, and third-party platforms. We specialize in integrating REST, SOAP, GraphQL, and custom APIs to ensure real-time data exchange and improved functionality. Whether it’s payment gateways, CRM, ERP, social media, or cloud services, we help you unify systems for better performance and business growth.",
   
      image: "/web_dev/6.png"
    }
];

 function WebDevelopmentPage() {
  return (<>
        <SEO title="Web Development | Zanthium Technosoft" />
      <div className="text-center mt-25 py-5 bg-red-600 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-white border-b-4 border-red-600 inline-block">
        WEB DEVELOPMENT
      </h1>
      </div>
    <div className="max-w-7xl mx-auto px-4">

      {services.map((service, index) => (
  <div
    key={index}
    className={`flex flex-col md:flex-row gap-8 items-center py-12 ${
      index % 2 !== 0 ? "md:flex-row-reverse" : ""
    }`}
  >
    <div className="md:w-1/2">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
        
        {service.title}
      </h2>

      <p className="text-red-900 font-medium mb-4">
        {service.description}
      </p>

      <p className="text-gray-600 mb-4 text-[16px]">
        {service.details}
      </p>

      {service.features && (
        <div className="grid grid-cols-2 gap-3 mb-4">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-gray-700"
            >
              <span className="text-red-600">✔</span>
              {feature}
            </div>
          ))}
        </div>
      )}

      {service.footerText && (
        <p className="text-gray-600 italic">
          {service.footerText}
        </p>
      )}
    </div>

    <div className="md:w-1/2 flex justify-center">
     
        <img
          src={service.image}
          alt={service.title}
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      
    </div>
  </div>
))}
    </div>
    </>
  );
}

export const Route = createFileRoute('/web-development')({
  component: WebDevelopmentPage,
})