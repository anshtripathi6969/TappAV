"use client";

import React, { useEffect, useRef } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ConsultationBanner = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.to(sectionRef.current, {
                backgroundPosition: "50% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Content Reveal
            gsap.fromTo(contentRef.current?.children || [],
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            // Floating Particles Animation
            const particles = particlesRef.current?.children;
            if (particles) {
                Array.from(particles).forEach((particle, i) => {
                    gsap.to(particle, {
                        y: -100 - Math.random() * 100,
                        x: Math.random() * 50 - 25,
                        rotation: Math.random() * 360,
                        duration: 3 + Math.random() * 4,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: i * 0.2,
                    });
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-32 relative overflow-hidden flex items-center justify-center min-h-[500px]"
            style={{
                background: "linear-gradient(135deg, #0F1115 0%, #1a1d26 50%, #0F1115 100%)",
                backgroundSize: "200% 200%"
            }}
        >
            {/* Animated Glow Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[60px]" />
            </div>

            {/* Floating Particles */}
            <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/5 rounded-full blur-[1px]"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                        }}
                    />
                ))}
            </div>

            <div ref={contentRef} className="container mx-auto px-4 max-w-[1000px] relative z-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-accent/30 transform rotate-3 hover:rotate-6 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                    Ready to Build Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        Dream Home Theater?
                    </span>
                </h2>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    Our experts are ready to help you design the perfect audio-visual experience tailored to your space and budget.
                </p>

                <Link href="/contact">
                    <Button
                        size="lg"
                        className="bg-white hover:bg-gray-100 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 border-none font-bold text-lg px-10 py-5 text-black"
                        style={{ color: "#000000" }}
                    >
                        Book Free Consultation
                    </Button>
                </Link>

                <p className="mt-6 text-sm text-gray-500">
                    No commitment required. 100% Free Consultation.
                </p>
            </div>
        </section>
    );
};

export default ConsultationBanner;
