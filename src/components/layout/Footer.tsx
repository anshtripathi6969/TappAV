"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                    }
                }
            );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-[#0b0d11] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Newsletter Section */}
            <div className="border-b border-white/5 bg-white/[0.02] backdrop-blur-sm">
                <div className="container mx-auto px-4 max-w-[1200px] py-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Join Our Exclusive Club</h3>
                            <p className="text-gray-400">Get the latest AV news, special offers, and expert tips.</p>
                        </div>
                        <div className="w-full md:w-auto flex-shrink-0">
                            <form className="flex flex-col sm:flex-row gap-4 w-full md:w-[500px]" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-grow bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-gray-600"
                                />
                                <Button className="shrink-0 flex items-center justify-center gap-2 px-8">
                                    Subscribe <Send className="w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div ref={contentRef} className="container mx-auto px-4 max-w-[1200px] py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-white inline-block">
                            Tapp<span className="text-accent">AV</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Crafting immersive audio-visual experiences for the modern home. From consultation to installation, we bring the cinema to you with uncompromising quality.
                        </p>
                        <div className="flex space-x-4 pt-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {["Projectors", "Screens", "Audio Systems", "Receivers", "Accessories"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-accent transition-colors flex items-center group">
                                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-[1px] bg-accent inline-block" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {["Consultations", "Installations", "Warranty", "FAQ", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-accent transition-colors flex items-center group">
                                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 h-[1px] bg-accent inline-block" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4 pl-0 lg:pl-8">
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-6 text-sm text-gray-400">
                            <li className="flex items-start space-x-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-white font-semibold mb-1">Visit Us</span>
                                    123 Cinema Lane, Tech Park,<br /> New York, NY 10001
                                </div>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-white font-semibold mb-1">Call Us</span>
                                    +1 (555) 123-4567
                                </div>
                            </li>
                            <li className="flex items-center space-x-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-white font-semibold mb-1">Email Us</span>
                                    hello@tappav.com
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} TappAV. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors relative group">
                            Privacy Policy
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors relative group">
                            Terms of Service
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors relative group">
                            Sitemap
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
