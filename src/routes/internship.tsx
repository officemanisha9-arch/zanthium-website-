import { createFileRoute } from '@tanstack/react-router'
import { Award, Building, ChartBar, Code, Computer, ComputerIcon, Hand, LucideComputer } from 'lucide-react';
import { useState } from "react";
import SEO from "../components/SEO";
export const Route = createFileRoute('/internship')({
    component: RouteComponent,
})

function RouteComponent() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [duration, setDuration] = useState<"45d" | "6m">("45d");

    const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setStatus({ type: 'idle', message: '' });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Submitting application...' });

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://zanthiumtechnosoft.com/process_form1.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Application submitted successfully!' });
                form.reset();
                setTimeout(() => {
                    closeModal();
                }, 3000);
            } else {
                setStatus({ type: 'error', message: 'Failed to submit application. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'An error occurred. Please check your connection.' });
        }
    };
    return (
        <div className="bg-white py-12">
        <SEO title="Internship | Zanthium Technosoft" />
            <div className="relative py-12 px-4 sm:px-6 lg:px-8 lg:py-28 bg-zinc-50 border-b border-zinc-200 mt-5 overflow-hidden">
                <div
                    className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(169,4,4,0.06),transparent_70%)] pointer-events-none">
                </div>
                <div
                    className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none">
                </div>
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-red-500/5 rounded-full blur-[100px] pointer-events-none">
                </div>

                <div className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-left lg:text-left flex flex-col items-center lg:items-start">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 mb-6 backdrop-blur-md shadow-sm">
                            <i className="ti ti-school text-red-500 text-md animate-pulse" aria-hidden="true"></i>
                            <span className="tracking-wide">Industrial Training & Internship</span>
                        </div>

                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.15] mb-6 tracking-tight text-zinc-900">
                            Launch your career with<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-rose-500 to-amber-600">
                                industry-ready skills
                            </span>
                        </h1>

                        <p className="text-md sm:text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl mb-8 font-light">
                            Gain real-world experience in Full Stack, Blockchain, and AI development through hands-on projects and
                            expert mentorship.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full sm:w-auto mb-10">
                            <button onClick={openModal}
                                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-md font-semibold cursor-pointer border-none bg-[#a90404] text-white hover:bg-red-700 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5">
                                Apply Now ↗
                            </button>
                            <a href="#Roadmap"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-md font-semibold cursor-pointer bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 shadow-sm">
                                View Programs
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center">
                            <span
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border border-zinc-200 bg-white text-zinc-600 shadow-sm">
                                <i className="ti ti-map-pin text-[14px] text-red-500" aria-hidden="true"></i> In-person & remote
                            </span>
                            <span
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border border-zinc-200 bg-white text-zinc-600 shadow-sm">
                                <i className="ti ti-certificate text-[14px] text-red-500" aria-hidden="true"></i> Certification on
                                completion
                            </span>
                            <span
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border border-zinc-200 bg-white text-zinc-600 shadow-sm">
                                <i className="ti ti-users text-[14px] text-red-500" aria-hidden="true"></i> Expert mentors
                            </span>
                        </div>
                    </div>

                    <div
                        className="relative w-full max-w-md mx-auto aspect-[4/3] sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-zinc-200/80 shadow-2xl bg-white p-2 group">
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                        </div>
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                            alt="Zanthium Technosoft Collaborative Workspace"
                            className="w-full h-full object-cover rounded-xl transform group-hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                </div>
            </div>

            <div className="bg-white text-zinc-800 min-h-screen">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 ">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 md:mb-28">
                        <div
                            className="bg-zinc-50 border border-zinc-200/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 text-center hover:border-red-500/40 transition-all duration-300 group shadow-sm hover:shadow-md">
                            <div
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent leading-none group-hover:from-red-600 group-hover:to-rose-500 transition-all duration-300">
                                500+</div>
                            <div className="text-[10px] sm:text-xs md:text-md text-zinc-500 mt-3 font-medium tracking-wide uppercase">
                                Students trained</div>
                        </div>
                        <div
                            className="bg-zinc-50 border border-zinc-200/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 text-center hover:border-red-500/40 transition-all duration-300 group shadow-sm hover:shadow-md">
                            <div
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent leading-none group-hover:from-red-600 group-hover:to-rose-500 transition-all duration-300">
                                50+</div>
                            <div className="text-[10px] sm:text-xs md:text-md text-zinc-500 mt-3 font-medium tracking-wide uppercase">
                                Live projects</div>
                        </div>
                        <div
                            className="bg-zinc-50 border border-zinc-200/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 text-center hover:border-red-500/40 transition-all duration-300 group shadow-sm hover:shadow-md">
                            <div
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent leading-none group-hover:from-red-600 group-hover:to-rose-500 transition-all duration-300">
                                100%</div>
                            <div className="text-[10px] sm:text-xs md:text-md text-zinc-500 mt-3 font-medium tracking-wide uppercase">
                                Certification rate</div>
                        </div>
                        <div
                            className="bg-zinc-50 border border-zinc-200/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 text-center hover:border-red-500/40 transition-all duration-300 group shadow-sm hover:shadow-md">
                            <div
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent leading-none group-hover:from-red-600 group-hover:to-rose-500 transition-all duration-300">
                                45d</div>
                            <div className="text-[10px] sm:text-xs md:text-md text-zinc-500 mt-3 font-medium tracking-wide uppercase">
                                Fast-track option</div>
                        </div>
                    </div>

                    <div className="mb-20 md:mb-28">
                        <p className="text-[11px] tracking-[0.15em] uppercase text-red-600 font-bold mb-3">Programs</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-zinc-900 tracking-tight">Choose your
                            track</h2>
                        <p className="text-xs sm:text-md md:text-base text-zinc-600 mb-10 max-w-md font-light">Two duration options
                            designed for different goals and professional schedules.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <div
                                className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-zinc-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between">
                                <div>
                                    <div
                                        className="p-6 md:p-8 border-b border-zinc-100 bg-zinc-50/50 flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900">Fast Track</h3>
                                            <p className="text-xs text-zinc-500 mt-1">Core Foundations</p>
                                        </div>
                                        <span
                                            className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-white text-zinc-700 border border-zinc-200">45
                                            days</span>
                                    </div>
                                    <div className="p-6 md:p-8 space-y-4">
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-600"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            Development Environment Setup</div>
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-600"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            Core Stack Fundamentals</div>
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-600"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            Modular Application Design</div>
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-600"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            Functional MVP Architecture</div>
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-600"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            Evaluation & Verified Certification</div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="bg-gradient-to-b from-red-50/30 to-white border-2 border-red-500/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 relative group flex flex-col justify-between">
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_100%_0%,rgba(169,4,4,0.04),transparent_70%)] pointer-events-none">
                                </div>
                                <div>
                                    <div
                                        className="p-6 md:p-8 border-b border-red-100/60 bg-red-50/20 flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 flex items-center gap-2">
                                                Professional</h3>
                                            <p className="text-xs text-red-600/80 mt-1">Full Stack Mastery</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="text-[9px] sm:text-[10px] bg-red-50 text-red-600 border border-red-200 px-2 py-1 rounded-full font-bold tracking-wide uppercase hidden sm:inline-block">Popular</span>
                                            <span
                                                className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full bg-red-600 text-white shadow-sm">6
                                                months</span>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8 space-y-4 relative z-10">
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-700"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            Advanced Engineering Architectures</div>
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-700"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            Robust Protocols & Enterprise Frameworks</div>
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-700"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            DevOps, Automation & Secure Deployments</div>
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-700"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            Scalable Production Environments</div>
                                        <div className="flex items-center gap-3 text-xs sm:text-md text-zinc-700"><i
                                            className="ti ti-check text-[14px] text-emerald-600 bg-emerald-50 rounded-full p-1 shrink-0"></i>
                                            Technical Documentation & Direct Career Prep</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20 md:mb-28">
                        <p className="text-[11px] tracking-[0.15em] uppercase text-red-600 font-bold mb-3">Curriculum</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-zinc-900 tracking-tight">Technologies
                            you'll learn</h2>
                        <p className="text-xs sm:text-md md:text-base text-zinc-600 mb-10 max-w-md font-light">Three deep-dive
                            specializations — pick one or engineer across domains.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            <div
                                className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-zinc-300 transition-all duration-300 group hover:bg-white hover:shadow-md flex flex-col">
                                <div className="h-44 w-full overflow-hidden relative">
                                    <img src="https://www.shikshaalearn.com/uploads/courses_logo/full-stack-development.jpeg"
                                        alt="Full Stack Workspace"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div
                                        className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 text-red-600">
                                        <i className="ti ti-code text-[20px]"></i>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2">Full Stack Development</h4>
                                    <p className="text-xs sm:text-md text-zinc-600 leading-relaxed font-light mt-auto">HTML, CSS,
                                        JavaScript, React, Node.js, Express & distributed database infrastructures.</p>
                                </div>
                            </div>

                            <div
                                className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-zinc-300 transition-all duration-300 group hover:bg-white hover:shadow-md flex flex-col">
                                <div className="h-44 w-full overflow-hidden relative">
                                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/blockchain-technology-illustration-svg-download-png-3518859.png"
                                        alt="Web3 Protocol Network"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div
                                        className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 text-emerald-600">
                                        <i className="ti ti-link text-[20px]"></i>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2">Blockchain Development</h4>
                                    <p className="text-xs sm:text-md text-zinc-600 leading-relaxed font-light mt-auto">Web3 protocols,
                                        Solidity, robust smart contracts, secure NFTs & decentralized applications (DApps).</p>
                                </div>
                            </div>

                            <div
                                className="bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:border-zinc-300 transition-all duration-300 group hover:bg-white hover:shadow-md flex flex-col">
                                <div className="h-44 w-full overflow-hidden relative">
                                    <img src="https://masterofcode.com/wp-content/uploads/2026/04/AI-Chatbot-Development-Services-img.png"
                                        alt="AI Neural Networks"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-50/50 to-transparent"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div
                                        className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 text-purple-600">
                                        <i className="ti ti-robot text-[20px]"></i>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2">AI & Chatbot Development</h4>
                                    <p className="text-xs sm:text-md text-zinc-600 leading-relaxed font-light mt-auto">Python pipelines,
                                        OpenAI enterprise APIs, advanced machine learning & system automation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20 md:mb-28">
                        <p className="text-[11px] tracking-[0.15em] uppercase text-red-600 font-bold mb-3">Outcomes</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-zinc-900 tracking-tight">What you'll
                            gain</h2>
                        <p className="text-xs sm:text-md md:text-base text-zinc-600 mb-10 max-w-md font-light">Every intern leaves with
                            high-fidelity skills and functional proof of work.</p>

                        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-sm">
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:gap-y-8 md:divide-x divide-zinc-200">
                                <div className="text-center px-2 pt-6 sm:pt-0">
                                    <div
                                        className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mx-auto mb-4 text-red-600">
                                        <LucideComputer/>
                                    </div>
                                    <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Hands-on experience</h5>
                                    <p className="text-[11px] sm:text-xs text-zinc-500">Real projects, production code</p>
                                </div>
                                <div className="text-center px-2 pt-6 sm:pt-0">
                                    <div
                                        className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mx-auto mb-4 text-red-600">
                                        <Building />
                                    </div>
                                    <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Industry exposure</h5>
                                    <p className="text-[11px] sm:text-xs text-zinc-500">Work with core professionals</p>
                                </div>
                                <div className="text-center px-2 pt-6 sm:pt-0">
                                    <div
                                        className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mx-auto mb-4 text-red-600">
                                        <ChartBar />
                                    </div>
                                    <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Skill development</h5>
                                    <p className="text-[11px] sm:text-xs text-zinc-500">Structured strategic roadmap</p>
                                </div>
                                <div className="text-center px-2 pt-6 sm:pt-0">
                                    <div
                                        className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mx-auto mb-4 text-red-600">
                                        <Award />
                                    </div>
                                    <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Certificate</h5>
                                    <p className="text-[11px] sm:text-xs text-zinc-500">Internship completion certificate</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-20 md:mb-28" id="Roadmap">
                        <p className="text-[11px] tracking-[0.15em] uppercase text-red-600 font-bold mb-3">Roadmap</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 text-zinc-900 tracking-tight">Training
                            timeline</h2>
                        <p className="text-xs sm:text-md md:text-base text-zinc-600 mb-8 max-w-md font-light">Select a duration timeline
                            to compare specializations side-by-side.</p>

                        <div
                            className="flex justify-start items-center p-1 bg-zinc-100 rounded-xl w-full sm:w-fit mb-8 border border-zinc-200/60">
                            <button
                                onClick={() => setDuration("45d")}
                                className={`px-5 py-2.5 text-xs rounded-lg transition-all cursor-pointer ${duration === "45d"
                                        ? "bg-white text-zinc-900 shadow-sm font-bold"
                                        : "text-zinc-600 font-semibold"
                                    }`}
                            >
                                45-Day Fast Track
                            </button>

                            <button
                                onClick={() => setDuration("6m")}
                                className={`px-5 py-2.5 text-xs rounded-lg transition-all cursor-pointer ${duration === "6m"
                                        ? "bg-white text-zinc-900 shadow-sm font-bold"
                                        : "text-zinc-600 font-semibold"
                                    }`}
                            >
                                6-Month Professional Program
                            </button>
                        </div>
                        {duration === "45d" && (
                            <div id="content-45d" className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-300">

                                <div className="bg-white border border-zinc-200 rounded-2xl p-4 md:p-7 shadow-sm h-full">
                                    <h4
                                        className="text-base sm:text-lg font-semibold text-zinc-900 mb-6 border-b border-zinc-200 pb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500"></span> Full-Stack Fast Track
                                    </h4>
                                    <div className="space-y-6">
                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-20 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Days 1-5</div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Orientation & Setup</h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">HTML, CSS & JavaScript
                                                    Basics; VS Code, Git & Node.js environment optimization.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-20 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Days 6-20</div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Frontend Development
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">Responsive User
                                                    Interfaces, advanced JavaScript mechanics, Frameworks & React architecture core
                                                    workflow.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-20 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Days 21-35</div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Backend Development</h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">Node.js & Express server
                                                    routing, secure database design integration, and structured User Authentication
                                                    loops.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-20 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Days 36-45</div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Final Project &
                                                    Certification</h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">Build production-ready
                                                    Task Manager or E-Commerce Demo app ecosystem. Code peer-reviews, final
                                                    presentations.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-zinc-200 rounded-2xl p-4 md:p-7 shadow-sm h-full">
                                    <h4
                                        className="text-base sm:text-lg font-semibold text-zinc-900 mb-6 border-b border-zinc-200 pb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                        Block Chain Development (45-Day Plan)
                                    </h4>

                                    <div className="space-y-6">

                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-20 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Days 1-5
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Orientation & Setup
                                                </h5>
                                                <ul
                                                    className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed list-disc pl-4 space-y-1">
                                                    <li>Introduction to Blockchain & Web3, Cryptography Fundamentals</li>
                                                    <li>Tools Setup: MetaMask, Remix, Ganache,Smart Contracts Overview</li>

                                                </ul>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-20 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Days 6-25
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Core Development
                                                </h5>
                                                <ul
                                                    className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed list-disc pl-4 space-y-1">
                                                    <li>Solidity Basics: Smart Contract Coding</li>
                                                    <li>Token Development: ERC-20 & ERC-721</li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-20 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Days 26-35
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Advanced Features & AI Integration
                                                </h5>
                                                <ul
                                                    className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed list-disc pl-4 space-y-1">
                                                    <li>Blockchain Oracles & Chainlink Basics,IPFS & Decentralized Storage</li>
                                                    <li>AI on Blockchain: Use Cases & Overview,AI-Powered Smart Contracts (Basic)</li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-20 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Days 36-40
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Mini Projects
                                                </h5>
                                                <ul
                                                    className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed list-disc pl-4 space-y-1">
                                                    <li>Decentralized Voting App,Crypto Wallet Integration</li>
                                                    <li>NFT Minting Demo,AI Chatbot for Blockchain DApp</li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-20 h-6 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Days 41-45
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Evaluation & Certification
                                                </h5>
                                                <ul
                                                    className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed list-disc pl-4 space-y-1">
                                                    <li>Project Presentation,Technical Interview</li>
                                                    <li>Certificate Award</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {duration === "6m" && (
                            <div id="content-6m" className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-300 ">

                                <div className="bg-white border border-zinc-200 rounded-2xl p-4 md:p-7 shadow-sm h-full">
                                    <h4
                                        className="text-base sm:text-lg font-semibold text-zinc-900 mb-6 border-b border-zinc-200 pb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        Full-Stack Professional Program
                                    </h4>

                                    <div className="space-y-6">


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 1
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Foundation & Setup
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                                                    HTML, CSS & JavaScript Basics • VS Code, Git & GitHub • Agile Development Basics
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 2
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Frontend Development
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                                                    Responsive Web Design • React Basics & Components
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 3
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Advanced Frontend
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                                                    React Router • State Management • API Integration & UI Libraries
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 4
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Backend Development
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                                                    Node.js & Express.js • RESTful APIs Development
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 5
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Database & Authentication
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                                                    MongoDB / SQL Database • User Authentication & Authorization
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 6
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    AI & Chatbot Development
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                                                    Python & Machine Learning Basics • OpenAI API, NLP & Chatbot Integration
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 7
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Project Development
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                                                    Build Full Stack Project • Integrate AI Features
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 8
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Deployment & Optimization
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                                                    Deploy Web App (Cloud) • Performance Optimization & Security
                                                </p>
                                            </div>
                                        </div>


                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 9
                                            </div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">
                                                    Final Project & Presentation
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">
                                                    Final Project with AI Integration • Code Review & Presentation
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="bg-white border border-zinc-200 rounded-2xl p-4 md:p-7 shadow-sm h-full">
                                    <h4
                                        className="text-base sm:text-lg font-semibold text-zinc-900 mb-6 border-b border-zinc-200 pb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Blockchain Professional Program
                                    </h4>
                                    <div className="space-y-6">
                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 1</div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Core Blockchain
                                                    Foundation</h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">Distributed ledger
                                                    paradigms, consensus mechanisms, internal VM mechanics, deep-dive compilation intro
                                                    into Smart Contracts.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 2</div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Advanced Modules &
                                                    Tokens</h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">Advanced DeFi
                                                    architectures, custom token apps (ERC-20/ERC-721), fractional tokenomics mechanics,
                                                    and cross-chain bridging solutions.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 3</div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Industry-Grade Projects
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">Build algorithmic DeFi
                                                    Protocols, signature-verified Crypto Wallet Apps, custom NFT Marketplaces,
                                                    decentralized cloud node deployment infrastructure.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                                            <div
                                                className="w-16 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center text-[9px] sm:text-[10px] font-bold shrink-0 mt-0.5 uppercase tracking-wide">
                                                Phase 4</div>
                                            <div>
                                                <h5 className="text-xs sm:text-md font-semibold text-zinc-900 mb-1">Professional Protocols
                                                </h5>
                                                <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed">Technical documentation
                                                    & whitepapers formulation, audited Token Launch simulation models, active enterprise
                                                    career networking pipelines.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        )}
                    </div>

                    <div
                        className="bg-gradient-to-br from-zinc-50 via-white to-zinc-100 border border-zinc-200 rounded-3xl p-6 sm:p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
                        <div
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent">
                        </div>
                        <div
                            className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-red-500/5 rounded-full blur-[80px] pointer-events-none">
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-zinc-900 tracking-tight">Start your
                            internship journey today</h2>
                        <p className="text-xs sm:text-md md:text-base text-zinc-600 mb-10 max-w-2xl mx-auto font-light">Learn from
                            industry experts, engineer real-world scalable applications, earn your verified credentials, and step
                            into high-performance engineering tracks.</p>

                        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-10 w-full max-w-4xl mx-auto">
                            <a href="tel:+917055000550"
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-zinc-200 text-xs sm:text-md font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 shadow-sm w-full lg:w-auto justify-center transition-all duration-300">
                                <i className="ti ti-phone text-[18px] text-red-500" aria-hidden="true"></i> +917055000550
                            </a>
                            <a href="mailto:contact@zanthiumtechnosoft.com"
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-zinc-200 text-xs sm:text-md font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 shadow-sm w-full lg:w-auto justify-center transition-all duration-300">
                                <i className="ti ti-mail text-[18px] text-red-500" aria-hidden="true"></i>contact@zanthiumtechnosoft.com
                            </a>
                            <a href="https://zanthiumtechnosoft.com/"
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-zinc-200 text-xs sm:text-md font-medium text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 shadow-sm w-full lg:w-auto justify-center transition-all duration-300">
                                <i className="ti ti-world text-[18px] text-red-500" aria-hidden="true"></i>
                                https://zanthiumtechnosoft.com/
                            </a>
                        </div>

                        <button
                            className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-md sm:text-base font-bold cursor-pointer border-none bg-[#a90404] text-white hover:bg-red-700 shadow-md shadow-red-900/20 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                            onClick={openModal}>
                            Apply now ↗
                        </button>
                    </div>
                </div>
            </div>

            <div
                id="applyModal"
                className={`fixed inset-0 z-50 ${isModalOpen ? "flex" : "hidden"
                    } items-center justify-center p-4 bg-zinc-900/60 backdrop-blur-sm transition-opacity duration-300`}
            >
                <div
                    id="modalContent"
                    className={`bg-white w-full max-w-md rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden transform transition-all duration-300 ${isModalOpen
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0"
                        }`}
                >
                    <div className="flex flex-col p-6 gap-4">
                        <div className="px-6 py-4 bg-zinc-50 border-b border-zinc-100 flex justify-between items-center">
                            <h3 className="text-lg font-bold text-zinc-900">Application Form</h3>
                            <button onClick={closeModal}
                                className="text-zinc-400 hover:text-zinc-600 text-xl font-semibold cursor-pointer">&times;</button>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 pb-6">
                            <input type="hidden" name="source" value="Internship Application" />
                            <div>
                                <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1">Full
                                    Name</label>
                                <input type="text" name="name" required
                                    className="text-black w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-md focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="Your Name" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1">Email
                                    Address</label>
                                <input type="email" name="email" required
                                    className="text-black w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-md focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="name@example.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1">Phone
                                    Number</label>
                                <input type="tel" name="phone" required
                                    className="text-black w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-md focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="Your Phone Number" />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1">Message /
                                    Cover Letter</label>
                                <textarea name="message" required
                                    className="text-black w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-md focus:outline-none focus:border-red-500 transition-colors resize-none"
                                    placeholder="Tell us about your interest or preferred stack (Full Stack, AI, Blockchain)..."></textarea>
                            </div>

                            {status.type !== 'idle' && (
                                <div className={`text-md font-medium p-3 rounded-lg text-center ${status.type === 'error' ? 'bg-red-50 text-red-600' : status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button type="submit" disabled={status.type === 'loading'}
                                className="w-full py-3.5 rounded-xl text-md font-semibold bg-[#a90404] text-white hover:bg-red-700 shadow-md transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed">
                                {status.type === 'loading' ? 'Submitting...' : 'Submit Application'}
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};
