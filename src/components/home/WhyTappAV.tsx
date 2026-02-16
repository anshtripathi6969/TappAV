"use client";

import React, { useEffect, useRef } from "react";
import { ShieldCheck, Award, Wrench, Headphones } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <Headphones className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300" />,
        title: "Expert Advice",
        description: "Consult with our AV specialists to find the perfect setup for your room.",
        gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
        icon: <Award className="w-12 h-12 text-accent group-hover:rotate-12 transition-transform duration-300" />,
        title: "Premium Brands",
        description: "Authorized dealer for the world's finest audio-visual manufacturers.",
        gradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
        icon: <Wrench className="w-12 h-12 text-accent group-hover:translate-x-1 transition-transform duration-300" />,
        title: "Installation Support",
        description: "Professional installation services available across the country.",
        gradient: "from-orange-500/10 to-red-500/10"
    },
    {
        icon: <ShieldCheck className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300" />,
        title: "Warranty Assurance",
        description: "Full manufacturer warranty and lifetime technical support on all products.",
        gradient: "from-cyan-500/10 to-blue-500/10"
    },
];

const WhyTappAV = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize Tilt
        const tiltElements = document.querySelectorAll(".tilt-card");
        VanillaTilt.init(Array.from(tiltElements) as HTMLElement[], {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05
        });

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            tl.fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
            )
                .fromTo(".feature-card",
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "back.out(1.7)"
                    },
                    "-=0.5"
                );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
                <div className="text-center mb-20" ref={titleRef}>
                    <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">The TappAV Difference</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose TappAV?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        We don&apos;t just sell equipment; we craft experiences. Discover what sets us apart from the rest.
                    </p>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`tilt-card feature-card group relative p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden`}
                            data-tilt
                        >
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col items-center text-center h-full">
                                <div className="mb-8 p-5 rounded-2xl bg-background/80 border border-border shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTappAV;
