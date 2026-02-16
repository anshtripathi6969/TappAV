import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-secondary pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: About */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            Tapp<span className="text-accent">AV</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium audio-visual solutions for the modern home. We bring the cinema experience to your living room with expert installation and top-tier brands.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Shop */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Shop Categories</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    Projectors & Screens
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    Home Theater Audio
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    AV Receivers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    Cables & Accessories
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    Acoustic Treatment
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Support</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    Book a Consultation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    Installation Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    Warranty & Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-accent transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0" />
                                <span>
                                    123 Cinema Lane, <br />
                                    Tech Park, NY 10001
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span>hello@tappav.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} TappAV. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
