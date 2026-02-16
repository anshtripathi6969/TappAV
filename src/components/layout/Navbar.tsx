"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import Button from "../ui/Button";

import { ThemeToggle } from "@/components/ui/ThemeToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "#shop" },
        { name: "Brands", href: "#brands" },
        { name: "Solutions", href: "#solutions" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm"
                : "bg-transparent py-4 md:py-6"
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className={`text-2xl font-bold tracking-tighter transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
                        Tapp<span className="text-accent">AV</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors relative group ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="hidden md:block">
                            <ThemeToggle />
                        </div>
                        <button className={`transition-colors relative ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}>
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] text-white">
                                0
                            </span>
                        </button>
                        <Button size="sm">Book Consultation</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            className={`focus:outline-none transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ top: "0", paddingTop: "80px" }} // Full screen overlay with padding for header
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-medium text-foreground hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button size="lg" onClick={() => setIsOpen(false)}>
                        Book Consultation
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
