import { useState } from 'react';
import type { FormEvent } from 'react';
import SEO from "../components/SEO";
import { createFileRoute } from '@tanstack/react-router'
import { FileIcon, MapIcon, PhoneIcon } from 'lucide-react';

export const Route = createFileRoute('/contact')({
    component: RouteComponent,
})

function RouteComponent() {
    const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message: string }>({ type: 'idle', message: '' });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending message...' });

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://zanthiumtechnosoft.com/process_form1.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
                form.reset();
            } else {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'An error occurred. Please check your connection and try again.' });
        }
    };

    return (


        <main className="bg-white">
        <SEO title="Contact Us | Zanthium Technosoft" description="Get in touch with Zanthium Technosoft. We are ready to help you navigate your digital transformation journey." />


            <section className="hero-bg pt-40 pb-4 px-6">
                <div className="max-w-7xl mx-auto border-l-4 border-red-700 pl-8">
                    <h1 className="text-red-700    text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
                    <p className="text-red-500 font-medium uppercase tracking-widest mb-6">Let's build something amazing together</p>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                        Have a question or a project in mind? Our team is ready to help you navigate your digital transformation journey. Reach out today.
                    </p>
                </div>
            </section>


            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-gray-200 border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                            <span className="w-8 h-1 bg-red-700 mr-3"></span> Send a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="source" value="Contact Page" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-md font-bold text-gray-700 mb-2">Full Name</label>
                                    <input type="text" name="name" placeholder="John Doe" className="text-black w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 input-focus" required />
                                </div>
                                <div>
                                    <label className="block text-md font-bold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" name="email" placeholder="john@example.com" className="text-black w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 input-focus" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-md font-bold text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" name="phone" placeholder="+91 XXXX XXX XXX" className="text-black w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 input-focus" required />
                            </div>

                            <div>
                                <label className="block text-md font-bold text-gray-700 mb-2">Your Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    className="text-black w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/20"
                                    required
                                />
                            </div>

                            {status.type !== 'idle' && (
                                <div className={`p-4 rounded-xl text-md font-medium ${status.type === 'success' ? 'bg-green-50 text-green-800' : status.type === 'error' ? 'bg-red-50 text-red-800' : 'bg-blue-50 text-blue-800'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button type="submit" disabled={status.type === 'loading'} className="bg-red-700 hover:bg-red-800 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-600/50 z-btn w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
                                {status.type === 'loading' ? 'Sending...' : <>Send Now &nbsp; <i className="icon-envelop"></i></>}
                            </button>
                        </form>
                    </div>


                    <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border-8 border-white relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13962.456785976507!2d79.380311!3d28.9691655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecc4f0fe5c79d134!2sZanthium%20Technosoft%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1674403762469!5m2!1sen!2sin" width="100%" height="100%" frameBorder="0" allowFullScreen aria-hidden="false" tabIndex={0}
                        />
                    </div>
                </div>
            </section>


            <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">

                <div className="max-w-7xl mx-auto">


                    <div className="text-center mb-12 sm:mb-16">

                        <h2
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Our Presence
                        </h2>

                        <div className="w-20 h-1 bg-red-700 mx-auto rounded-full"></div>

                    </div>


                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">


                        <div
                            className="group bg-white rounded-[28px] p-6 sm:p-8 text-center flex flex-col items-center border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">


                            <div
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-50 text-red-700 flex items-center justify-center mb-6 text-2xl sm:text-3xl shadow-inner">
                                <FileIcon />

                            </div>


                            <h4
                                className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                Legal Identity
                            </h4>

                            <p
                                className="text-xs sm:text-md text-gray-500 uppercase font-semibold mb-4 tracking-[2px]">
                                Reg & CIN No.
                            </p>

                            <div
                                className="w-full bg-gray-100 rounded-xl px-4 py-3 overflow-x-auto">

                                <p
                                    className="text-md sm:text-base text-gray-700 font-mono whitespace-nowrap">
                                    U72900UR2018PTC008386
                                </p>

                            </div>

                        </div>


                        <div
                            className="group bg-white rounded-[28px] p-6 sm:p-8 text-center flex flex-col items-center border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">


                            <div
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-50 text-red-700 flex items-center justify-center mb-6 text-2xl sm:text-3xl shadow-inner">

                                <MapIcon />

                            </div>


                            <h4
                                className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                Head Office
                            </h4>

                            <p
                                className="text-gray-600 leading-relaxed text-md sm:text-base lg:text-lg">
                                Building No. 28 & 29, In Front of Railway Station,
                                Rudrapur, Uttarakhand, India - 263153
                            </p>

                        </div>


                        <div
                            className="group bg-white rounded-[28px] p-6 sm:p-8 text-center flex flex-col items-center border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 sm:col-span-2 xl:col-span-1">


                            <div
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-50 text-red-700 flex items-center justify-center mb-6 text-2xl sm:text-3xl shadow-inner">

                                <PhoneIcon />

                            </div>


                            <h4
                                className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                Get In Touch
                            </h4>

                            <div className="space-y-3">

                                <a href="tel:+919411555557"
                                    className="block text-red-700 font-bold text-lg sm:text-sm hover:text-red-800 transition break-all">
                                    +91-9411555557
                                </a>
                                 <a href="tel:+919045111145"
                                    className="block text-red-700 font-bold text-lg sm:text-sm hover:text-red-800 transition break-all">
                                    +91-9045111145
                                </a>
                                 <a href="tel:+919520065555"
                                    className="block text-red-700 font-bold text-lg sm:text-sm hover:text-red-800 transition break-all">
                                    +91-9520065555
                                </a>
                                <a href="tel:+917055000550"
                                    className="block text-red-700 font-bold text-lg sm:text-sm hover:text-red-800 transition break-all">
                                    +91-7055000550
                                </a>

                                <a href="mailto:contact@zanthiumtechnosoft.com"
                                    className="block text-gray-600 hover:text-red-700 transition text-md sm:text-base break-all">

                                    contact@zanthiumtechnosoft.com

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};
