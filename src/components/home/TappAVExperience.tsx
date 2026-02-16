"use client";

import React, { useRef, useEffect } from "react";
import { Check, X, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    { name: "Personalized Solutions", tapp: true, typical: true },
    { name: "Comprehensive Design", tapp: true, typical: true },
    { name: "Seamless Execution", tapp: true, typical: false },
    { name: "System Driven Function", tapp: true, typical: false },
    { name: "Special Service Desk for Repairs", tapp: true, typical: false },
    { name: "Skilled & Trained Team", tapp: true, typical: false },
];

const TappAVExperience = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(cardRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    }
                }
            );

            // Animate rows
            gsap.utils.toArray(".feature-row").forEach((row: any, i) => {
                gsap.fromTo(row,
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        delay: 0.2 + (i * 0.1),
                        scrollTrigger: {
                            trigger: cardRef.current,
                            start: "top 70%",
                        }
                    }
                );
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-[1000px] relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The TappAV Difference</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Elevating home entertainment standards beyond the ordinary. See why discerning clients choose us.
                    </p>
                </div>

                <div ref={cardRef} className="relative">
                    {/* Main Comparison Container */}
                    <div className="bg-[#15171E] border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
                        {/* Header Row */}
                        <div className="grid grid-cols-12 border-b border-white/5 bg-white/5 p-6 md:p-8 items-center cursor-default">
                            <div className="col-span-12 md:col-span-6 font-bold text-gray-400 uppercase tracking-widest text-sm mb-4 md:mb-0 hidden md:block">Features</div>

                            {/* Mobile Header Label */}
                            <div className="col-span-12 md:hidden text-center text-gray-500 text-sm mb-4">Comparison</div>

                            <div className="col-span-6 md:col-span-3 text-center relative">
                                <h3 className="text-white font-bold text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">TappAV</h3>
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                            </div>
                            <div className="col-span-6 md:col-span-3 text-center">
                                <h3 className="text-gray-500 font-bold text-lg md:text-xl">Typical AV</h3>
                            </div>
                        </div>

                        {/* Feature Rows */}
                        <div className="divide-y divide-white/5 relative">
                            {/* Decorative Highlight Column for TappAV */}
                            <div className="absolute top-0 bottom-0 left-[50%] md:left-[50%] w-[50%] md:w-[25%] bg-accent/5 border-x border-accent/10 pointer-events-none z-0 hidden md:block"></div>

                            {/* Mobile Highlight Overlay (Right side of grid) */}
                            <div className="absolute top-0 bottom-0 left-0 right-1/2 bg-transparent z-0 md:hidden"></div>
                            <div className="absolute top-0 bottom-0 right-0 left-1/2 bg-accent/5 z-0 md:hidden"></div>


                            {features.map((feature, index) => (
                                <div key={index} className="grid grid-cols-12 p-6 md:p-6 items-center hover:bg-white/5 transition-colors relative z-10 feature-row group">
                                    {/* Feature Name */}
                                    <div className="col-span-12 md:col-span-6 text-gray-300 font-medium text-lg mb-4 md:mb-0 text-center md:text-left group-hover:text-white transition-colors">
                                        {feature.name}
                                    </div>

                                    {/* TappAV Value */}
                                    <div className="col-span-6 md:col-span-3 flex justify-center items-center relative">
                                        {feature.tapp ? (
                                            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] scale-110">
                                                <Check className="w-6 h-6 stroke-[3]" />
                                            </div>
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                                                <X className="w-6 h-6" />
                                            </div>
                                        )}
                                        {/* Glow effect specific to TappAV column */}
                                        <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Typical AV Value */}
                                    <div className="col-span-6 md:col-span-3 flex justify-center items-center">
                                        {feature.typical ? (
                                            <div className="w-8 h-8 rounded-full bg-white/10 text-gray-400 flex items-center justify-center">
                                                <Check className="w-4 h-4" />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-white/5 text-gray-600 flex items-center justify-center">
                                                <X className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TappAVExperience;
