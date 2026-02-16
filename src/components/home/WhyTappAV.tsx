"use client";

import React, { useEffect, useRef } from "react";
import { ShieldCheck, Award, Wrench, Headphones } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <Headphones className="w-10 h-10 text-accent" />,
        title: "Expert Advice",
        description: "Consult with our AV specialists to find the perfect setup for your room.",
    },
    {
        icon: <Award className="w-10 h-10 text-accent" />,
        title: "Premium Brands",
        description: "Authorized dealer for the world's finest audio-visual manufacturers.",
    },
    {
        icon: <Wrench className="w-10 h-10 text-accent" />,
        title: "Installation Support",
        description: "Professional installation services available across the country.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-accent" />,
        title: "Warranty Assurance",
        description: "Full manufacturer warranty and lifetime technical support on all products.",
    },
];

const WhyTappAV = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const items = sectionRef.current?.querySelectorAll(".feature-item");

        if (items) {
            gsap.fromTo(
                items,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose TappAV?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We don&apos;t just sell equipment; we craft experiences. Discover the TappAV difference.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-item flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                        >
                            <div className="mb-6 p-4 rounded-full bg-accent/10 border border-accent/20">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyTappAV;
