import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({ component: App })
import {
    ChevronLeftSquare,
    Book,
    TerminalIcon,
    Rocket,
} from "lucide-react";

function App() {
    return (
        <div className="w-full bg-white font-sans text-slate-800 antialiased">
            <SEO title="Zanthium Technosoft | Custom Software Development Company" />

            {/* ========================================================= */}

            <section className="sticky top-0 z-0 w-full min-h-[50vh] overflow-hidden">
                <div className="relative w-full h-[60vh] sm:h-[80vh] lg:h-[90vh]">

                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover">
                        <source src="/video/bg3.mp4" type="video/mp4" />
                    </video>


                    <div className="absolute inset-0 bg-black/60 z-10"></div>


                    <div className="relative container mt-[75px] sm:mt-0 mx-auto z-20 flex flex-col items-start justify-center h-full px-4 sm:px-6 md:px-12 lg:px-[10%]">


                        <div className="relative bg-black/40 backdrop-blur-md p-6 sm:p-8 md:p-10 lg:p-12 max-w-2xl sm:max-w-3xl lg:max-w-4xl border-b-2 border-red-900/50">

                            <div className="relative">

                                <div className="absolute left-0 top-2 w-1 h-10 md:h-12 bg-red-700"></div>


                                <div className="pl-5 md:pl-8">
                                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                        Zanthium Technosoft
                                    </h1>

                                    <h2 className="text-xs sm:text-md md:text-base font-semibold text-red-600 leading-snug mt-4 uppercase tracking-wide">
                                        Empowering Growth Through Innovation: Custom Software, Seamless Design, and Smart Digital Solutions for a Global Future.
                                    </h2>

                                    <p className="text-gray-300 text-md sm:text-base md:text-lg mt-3 leading-relaxed max-w-lg">
                                        Advanced software made simple. After all, it is your information.
                                    </p>
                                </div>
                            </div>


                            <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-700"></div>
                        </div>


                        <div className="ml-0 sm:ml-20 mt-6">
                            <a href="/aboutus"
                                className="inline-block bg-red-700 text-white px-6 py-3 rounded-full text-md font-semibold border border-red-700 
                    hover:bg-white hover:text-red-900 
                    transition-all duration-300 ease-in-out">
                                Learn More
                            </a>
                        </div>

                    </div>
                </div>
            </section>


            {/* ========================================================= */}
            {/* SECTION 2: ABOUT OUR COMPANY & ACCREDITATIONS             */}
            {/* ========================================================= */}
            <section id="about-us" className="relative z-30 bg-white py-10 sm:py-14 md:py-16 lg:py-20 text-[#1a1a1a] overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">

                        <div className="order-2 lg:order-1">


                            <h2 className="text-xs sm:text-md md:text-base font-extrabold uppercase tracking-[2px] text-[#1a1a1a] mb-2">
                                About Our Company
                            </h2>

                            <div className="h-1 w-14 sm:w-16 bg-gradient-to-r from-red-600 to-red-900 rounded lg:mx-0 mb-4"></div>


                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-900 leading-snug sm:leading-tight mb-4 sm:mb-6">
                                Advanced software made simple.
                                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl text-[#1a1a1a] font-medium mt-2">
                                    After all, it is your information.
                                </span>
                            </h3>


                            <p className="text-md sm:text-base md:text-lg text-gray-700 leading-7 sm:leading-8 text-justify mb-4 sm:mb-5">
                                <span className="text-red-600 font-semibold">Zanthium Technosoft Pvt Ltd </span>
                                is a trusted leader in Enterprise software development, offering fully-integrated business management solutions for process-intensive industries, trading ecosystems, and digital transformation services.
                            </p>


                            <p className="text-md sm:text-base md:text-lg text-gray-700 leading-7 sm:leading-8 text-justify">
                                We empower businesses with cutting-edge technology solutions, blending best industry practices, intelligent automation, and real-time data management tools. Our platform supports everything from
                                <b> Supply Chain Management</b>, <b>ERP Systems</b>, and <b>CRM Integration</b>, to cloud-based software and Digital Marketing Solutions.
                            </p>
                        </div>


                        <div className="order-2 relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto w-full">


                            <div className="absolute inset-0 border-2 border-red-900 rounded-xl translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 z-0"></div>


                            <img
                                src="/team1.jpg"
                                alt="About Zanthium Technosoft"
                                className="relative z-10 w-full h-auto rounded-xl shadow-2xl transition duration-500 hover:-translate-y-2 hover:scale-[1.01]"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section id="certified-strip" className="relative z-30 bg-[#f0f1f1] py-10 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="mb-10 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a1a]">
                            Globally Certified for Excellence
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-red-900 to-red-600 rounded mx-auto mt-4 mb-3"></div>

                        <p className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto leading-7">
                            We adhere to internationally recognized standards, validated by leading certification bodies.
                            Our compliance reflects our commitment to quality, security, and operational excellence across all services.
                        </p>
                    </div>


                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">




                        <div className="flex flex-col items-center text-center group">
                            <div className="w-full h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center">
                                <img src="/certificate/iaf.png"
                                    className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition duration-300"
                                    alt="IAF" />
                            </div>
                            <p className="mt-2 text-xs sm:text-md text-gray-600 font-semibold">IAF</p>
                        </div>


                        <div className="flex flex-col items-center text-center group">
                            <a href="https://www.iafcertsearch.org/certification/u4Ytxzbtfa7P27sOftLMwHtg" target="_blank" className="w-full">
                                <div className="w-full h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center">
                                    <img src="/certificate/iso.png"
                                        className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition duration-300"
                                        alt="ISO" />
                                </div>
                            </a>
                            <p className="mt-2 text-xs sm:text-md text-gray-600 font-semibold">ISO 9001:2015</p>
                            <p className="text-[11px] text-red-600 mt-1 break-all">IN/96824795/8140</p>
                        </div>


                        <div className="flex flex-col items-center text-center group">
                            <a href="https://www.iafcertsearch.org/certification/sSqfyOH756g8aHzKkfunRVU6" target="_blank" className="w-full">
                                <div className="w-full h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center">
                                    <img src="/certificate/iso1.png"
                                        className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition duration-300"
                                        alt="ISO 27001" />
                                </div>
                            </a>
                            <p className="mt-2 text-xs sm:text-md text-gray-600 font-semibold">ISO 27001:2022</p>
                            <p className="text-[11px] text-red-600 mt-1 break-all">IN/95824802/6144</p>
                        </div>


                        <div className="flex flex-col items-center text-center group">
                            <a href="https://mqacertification.com/verify/?company_name=ZANTHIUM+TECHNOSOFT&certificate_number=CMMI%2F26M02461&submit=Search+Certificate#" target="_blank" className="w-full">
                                <div className="w-full h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center">
                                    <img src="/certificate/cmmi.png"
                                        className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition rounded-full bg-white p-2 duration-300"
                                        alt="CMMI" />
                                </div>
                            </a>
                            <p className="mt-2 text-xs sm:text-md text-gray-600 font-semibold">CMMI Level 5</p>
                            <p className="text-[11px] text-red-600 mt-1 break-all">CMMI/26M02461</p>
                        </div>


                        <div className="flex flex-col items-center text-center group">
                            <a href="/Tan-Registration-Number" target="_blank" className="w-full">
                                <div className="w-full h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center">
                                    <img src="/certificate/tan.svg"
                                        className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition duration-300"
                                        alt="TAN" />
                                </div>
                            </a>
                            <p className="mt-2 text-xs sm:text-md text-gray-600 font-semibold">TAN</p>
                            <p className="text-[11px] text-red-600 mt-1">MRTZ00475G</p>
                        </div>


                        <div className="flex flex-col items-center text-center group">
                            <a href="https://www.mca.gov.in/content/mca/global/en/mca/master-data/View-Companies-Directors-under-prosecution-V3.html" target="_blank" className="w-full">
                                <div className="w-full h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center">
                                    <img src="/certificate/cin.svg"
                                        className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition duration-300"
                                        alt="CIN" />
                                </div>
                            </a>
                            <p className="mt-2 text-xs sm:text-md text-gray-600 font-semibold">CIN</p>
                            <p className="text-[11px] text-red-600 mt-1 break-all">U72900UR2018PTC008386</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========================================================= */}
            {/* SECTION 3: SERVICES HUB & PARALLAX GLASMISM METRICS      */}
            {/* ========================================================= */}
            <section id="our-services" className="relative py-12 z-30 sm:py-16 lg:py-20 bg-white font-sans overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">




                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

                        <div className="bg-white rounded-3xl p-2  h-full flex flex-col justify-center">
                            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#1a1a1a] mb-2">
                                Our Amazing <br /> <span className="text-red-900">Services</span>
                            </h2>
                            <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-red-900 rounded md:mx-0 my-2"></div>
                            <p className="text-gray-600 text-base sm:text-lg leading-7">
                                We provide comprehensive software solutions tailored to your business needs with cutting-edge technology and exceptional support.
                            </p>
                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-sm border hover:shadow-lg transition flex flex-col xl:flex-row items-center gap-4 h-full">
                            <div className="flex-1 text-left">
                                <h4 className="text-lg sm:text-xl font-semibold text-[#0f172a] mb-2">
                                    Government Projects
                                </h4>
                                <p className="text-md text-gray-500">
                                    Providing industry-standard assistance for social impact initiatives and complex public sector challenges with 360-degree IT services.
                                </p>
                            </div>
                            <div className="w-24 h-24 flex-shrink-0">
                                <img src="/services/government-project.avif"
                                    className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>


                        <div className="bg-white p-5 rounded-3xl shadow-sm border hover:shadow-lg transition flex flex-col xl:flex-row items-center gap-4 h-full">
                            <div className="flex-1 text-left">
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">Real Estate Management</h4>
                                <p className="text-md text-gray-500">Advanced property management system tailored for real estate enterprises. Enables data-driven decisions through predictive analytics.</p>
                            </div>
                            <div className="w-24 h-24 flex-shrink-0">
                                <img src="/services/real-estate.jpg" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>




                        <div className="bg-white p-5 rounded-3xl shadow-sm border hover:shadow-lg transition flex flex-col xl:flex-row items-center gap-4 h-full">
                            <div className="flex-1 text-left">
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">CRM Solutions</h4>
                                <p className="text-md text-gray-500">Powerful CRM solutions to manage customer data and boost satisfaction. Streamline sales and marketing with cloud-based tools.</p>
                            </div>
                            <div className="w-24 h-24 flex-shrink-0">
                                <img src="/services/crm.png" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>



                        <div className="bg-white p-5 rounded-3xl shadow-sm border hover:shadow-lg transition flex flex-col xl:flex-row items-center gap-4 h-full">
                            <div className="flex-1 text-left">
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">Blockchain Software</h4>
                                <p className="text-md text-gray-500">Secure and scalable blockchain solutions for smart contracts, decentralized applications (dApps), and transparent data management with advanced encryption.</p>
                            </div>
                            <div className="w-24 h-24 flex-shrink-0">
                                <img src="/services/blockchain.jpg" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-3xl shadow-sm border hover:shadow-lg transition flex flex-col xl:flex-row items-center gap-4 h-full">
                            <div className="flex-1 text-left">
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">RD/FD Software</h4>
                                <p className="text-md text-gray-500">Manage deposits, interest calculations, and payouts efficiently. Ideal for credit societies and cooperative banks.</p>
                            </div>
                            <div className="w-24 h-24 flex-shrink-0">
                                <img src="/services/rd-fd.avif" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>


                        <div className="bg-white p-5 rounded-3xl shadow-sm border hover:shadow-lg transition flex flex-col xl:flex-row items-center gap-4 h-full">
                            <div className="flex-1 text-left">
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">Custom Development</h4>
                                <p className="text-md text-gray-500">Scalable and secure solutions for diagnostic centers, logistics, and education tailored to your specific needs.</p>
                            </div>
                            <div className="w-24 h-24 flex-shrink-0">
                                <img src="/services/custom.jpg" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>


                        <div className="bg-white p-5 rounded-3xl shadow-sm border hover:shadow-lg transition flex flex-col xl:flex-row items-center gap-4 h-full">
                            <div className="flex-1 text-left">
                                <h4 className="text-lg sm:text-xl font-semibold mb-2">Inventory Systems</h4>
                                <p className="text-md text-gray-500">Real-time stock visibility and warehouse automation. Track inventory levels and manage orders from one dashboard.</p>
                            </div>
                            <div className="w-24 h-24 flex-shrink-0">
                                <img src="/services/inventory.jpg" className="w-full h-full object-cover rounded-xl" />
                            </div>
                        </div>


                        <div className="rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-md 
                                    bg-gradient-to-br from-red-50 via-white to-red-100 border border-red-100 hover:shadow-lg transition">

                            <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                                Want To See More?
                            </h4>

                            <a href="/web-development"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
                                    bg-red-900 text-white text-md font-medium shadow 
                                    hover:bg-red-800 transition">
                                VIEW ALL SERVICES
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="relative z-30 counter-section py-12 sm:py-16 lg:py-24 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url('/Web slides/3.jpg')` }}>
                {/* Immersive Glassmorphic Metrics Strip Grid */}
                <div className="relative rounded-3xl overflow-hidden  py-12 px-6 w-full max-w-full">
                    <div />
                    <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { value: "10,562", label: "PROJECTS COMPLETED" },
                            { value: "8,700", label: "SATISFIED CLIENTS" },
                            { value: "535", label: "AWARDS WON" },
                            { value: "2,126", label: "TICKETS CLOSED" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center space-y-1">
                                <div className="text-2xl md:text-3xl font-black tracking-tight text-red-500">{stat.value}</div>
                                <div className="text-[10px] font-bold tracking-wider text-slate-300">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* ========================================================= */}
            {/* SECTION 4: PARTNERSHIP VALUE CARDS                        */}
            {/* ========================================================= */}
            <section id="services-modern" className="relative z-30 bg-white py-14 sm:py-16 lg:py-14 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">


                        <div>
                            <span className="block text-red-600 font-bold uppercase tracking-[3px] text-xs sm:text-md mb-3">
                                Our Expertise
                            </span>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f0f0f] leading-tight">
                                Why Partner With
                                <span className="text-red-900"> Zanthium?</span>
                            </h2>

                            <div className="h-1 w-20 bg-gradient-to-r from-red-900 to-red-600 rounded mt-5"></div>
                        </div>

                        <div>
                            <p className="text-gray-500 border-l-4 border-yellow-400 pl-5 text-base sm:text-lg leading-8">
                                We combine technical prowess with business intelligence to deliver
                                software that scales with your ambition.
                            </p>
                        </div>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                        <div className="group relative border border-gray-200 bg-white p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-red-900">
                            <div className="absolute top-0 left-0 h-full w-1 bg-red-900 group-hover:w-full transition-all duration-500 -z-0"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 border-2 border-yellow-400 flex items-center justify-center text-2xl text-black mb-6 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-red-900">
                                    <ChevronLeftSquare />
                                </div>

                                <h4 className="text-xl font-extrabold text-[#0f0f0f] mb-4 group-hover:text-white transition">
                                    Strategic Planning
                                </h4>

                                <p className="text-gray-600 leading-7 group-hover:text-white/80 transition">
                                    Creating high-level roadmaps that align your tech stack with long-term business goals.
                                </p>
                            </div>
                        </div>


                        <div className="group relative border border-gray-200 bg-white p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-red-900">
                            <div className="absolute top-0 left-0 h-full w-1 bg-red-900 group-hover:w-full transition-all duration-500 -z-0"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 border-2 border-yellow-400 flex items-center justify-center text-2xl text-black mb-6 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-red-900">
                                    <Book />
                                </div>

                                <h4 className="text-xl font-extrabold text-[#0f0f0f] mb-4 group-hover:text-white transition">
                                    Experimental Design
                                </h4>

                                <p className="text-gray-600 leading-7 group-hover:text-white/80 transition">
                                    Prototyping and UX research to ensure your product feels as good as it functions.
                                </p>
                            </div>
                        </div>


                        <div className="group relative border border-gray-200 bg-white p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-red-900">
                            <div className="absolute top-0 left-0 h-full w-1 bg-red-900 group-hover:w-full transition-all duration-500 -z-0"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 border-2 border-yellow-400 flex items-center justify-center text-2xl text-black mb-6 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-red-900">
                                    <TerminalIcon />
                                </div>

                                <h4 className="text-xl font-extrabold text-[#0f0f0f] mb-4 group-hover:text-white transition">
                                    Product Engineering
                                </h4>

                                <p className="text-gray-600 leading-7 group-hover:text-white/80 transition">
                                    Clean code and rigorous QA cycles to build high-performance enterprise applications.
                                </p>
                            </div>
                        </div>


                        <div className="group relative border border-gray-200 bg-white p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-red-900">
                            <div className="absolute top-0 left-0 h-full w-1 bg-red-900 group-hover:w-full transition-all duration-500 -z-0"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 border-2 border-yellow-400 flex items-center justify-center text-2xl text-black mb-6 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-red-900">
                                    <Rocket />
                                </div>

                                <h4 className="text-xl font-extrabold text-[#0f0f0f] mb-4 group-hover:text-white transition">
                                    Support & Scale
                                </h4>

                                <p className="text-gray-600 leading-7 group-hover:text-white/80 transition">
                                    Post-launch maintenance and optimization to ensure your software evolves with your company.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* SECTION 5: CAPABILITIES MATRIX GRID (WEB CRAFTSMANSHIP)    */}
            {/* ========================================================= */}
            <section id="capabilities" className="relative z-30 bg-white py-12 sm:py-16 lg:py-10 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">


                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-10 lg:mb-14">
                        <div className="lg:col-span-8">
                            <h6 className="text-xs sm:text-md font-bold uppercase tracking-[3px] text-red-600 mb-3">
                                Capabilities
                            </h6>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#0f0f0f] leading-tight">
                                Web <span className="text-red-900">Craftsmanship</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-4 lg:text-right">
                            <p className="text-gray-500 text-md sm:text-base max-w-md ml-auto">
                                Hover over tiles to explore our service domains.
                            </p>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-4 border border-gray-100 overflow-hidden">
                        <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-[#df8501]">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-red-900/40 transition-all duration-500"></div>

                            <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 leading-snug">
                                    Website Design & Development
                                </h4>

                                <div className="w-12 h-[2px] bg-white group-hover:w-24 transition-all duration-500 mb-5"></div>

                                <p className="text-white text-md sm:text-md leading-relaxed opacity-80 group-hover:opacity-100 transition duration-500">
                                    We craft modern, high-performance websites that are visually engaging, fast, and tailored to your business goals.
                                </p>
                            </div>
                        </div>


                        <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-black">
                            <img src="/sections/blog/3.jpg"
                                className="w-full h-full object-cover absolute inset-0 transition-all duration-700 group-hover:scale-105"
                                alt="Ecommerce" />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-red-900/40 transition-all duration-500"></div>

                            <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 leading-snug">
                                    E-Commerce Solutions
                                </h4>

                                <div className="w-12 h-[2px] bg-white group-hover:w-24 transition-all duration-500 mb-5"></div>

                                <p className="text-white text-md sm:text-md leading-relaxed opacity-80 group-hover:opacity-100 transition duration-500">
                                    Build powerful online stores with secure payments, inventory management, and seamless customer experiences.
                                </p>
                            </div>
                        </div>


                        <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-purple-700">
                            <div className="absolute inset-0 group-hover:bg-red-900/40 transition-all duration-500"></div>

                            <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 leading-snug">
                                    Responsive Design
                                </h4>

                                <div className="w-12 h-[2px] bg-white group-hover:w-24 transition-all duration-500 mb-5"></div>

                                <p className="text-white text-md sm:text-md leading-relaxed opacity-80 group-hover:opacity-100 transition duration-500">
                                    Deliver flawless user experiences across mobile, tablet, and desktop with fully responsive design systems.
                                </p>
                            </div>
                        </div>


                        <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-black">
                            <img src="/sections/blog/4.jpg"
                                className="w-full h-full object-cover absolute inset-0 transition-all duration-700 group-hover:scale-105"
                                alt="Mobile Apps" />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-red-900/40 transition-all duration-500"></div>

                            <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 leading-snug">
                                    Mobile Applications
                                </h4>

                                <div className="w-12 h-[2px] bg-white group-hover:w-24 transition-all duration-500 mb-5"></div>

                                <p className="text-white text-md sm:text-md leading-relaxed opacity-80 group-hover:opacity-100 transition duration-500">
                                    Custom iOS and Android applications designed to engage users and scale your digital presence.
                                </p>
                            </div>
                        </div>


                        <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-black">
                            <img src="/sections/blog/1.jpg"
                                className="w-full h-full object-cover absolute inset-0 transition-all duration-700 group-hover:scale-105"
                                alt="SEO" />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-red-900/40 transition-all duration-500"></div>

                            <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 leading-snug">
                                    Search Engine Optimization
                                </h4>

                                <div className="w-12 h-[2px] bg-white group-hover:w-24 transition-all duration-500 mb-5"></div>

                                <p className="text-white text-md sm:text-md leading-relaxed opacity-80 group-hover:opacity-100 transition duration-500">
                                    Improve your website’s visibility on search engines and attract high-quality organic traffic.
                                </p>
                            </div>
                        </div>


                        <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-red-900">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>

                            <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 leading-snug">
                                    Social Media Marketing
                                </h4>

                                <div className="w-12 h-[2px] bg-white group-hover:w-24 transition-all duration-500 mb-5"></div>

                                <p className="text-white text-md sm:text-md leading-relaxed opacity-80 group-hover:opacity-100 transition duration-500">
                                    Grow your brand with targeted campaigns, content strategies, and data-driven social media advertising.
                                </p>
                            </div>
                        </div>


                        <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-black">
                            <img src="/sections/blog/9.jpg"
                                className="w-full h-full object-cover absolute inset-0 transition-all duration-700 group-hover:scale-105"
                                alt="Digital Marketing" />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-red-900/40 transition-all duration-500"></div>

                            <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 leading-snug">
                                    Digital Marketing
                                </h4>

                                <div className="w-12 h-[2px] bg-white group-hover:w-24 transition-all duration-500 mb-5"></div>

                                <p className="text-white text-md sm:text-md leading-relaxed opacity-80 group-hover:opacity-100 transition duration-500">
                                    Run high-converting campaigns with Google Ads, Meta Ads, email marketing, and automation tools.
                                </p>
                            </div>
                        </div>


                        <div className="group relative min-h-[260px] sm:min-h-[300px] overflow-hidden bg-green-800">
                            <div className="absolute inset-0 group-hover:bg-red-900/40 transition-all duration-500"></div>

                            <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                                <h4 className="text-white text-xl sm:text-2xl font-bold uppercase tracking-wide mb-3 leading-snug">
                                    Online IVR Solutions
                                </h4>

                                <div className="w-12 h-[2px] bg-white group-hover:w-24 transition-all duration-500 mb-5"></div>

                                <p className="text-white text-md sm:text-md leading-relaxed opacity-80 group-hover:opacity-100 transition duration-500">
                                    Automate customer interactions with smart IVR systems using voice and keypad-based responses.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div >
    );
};
