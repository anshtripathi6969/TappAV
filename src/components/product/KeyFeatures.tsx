"use client";

import React, { useEffect, useRef } from "react";
import { Maximize, Sun, Contrast, Monitor } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KeyFeatures = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Wait for elements to be available
        const ctx = gsap.context(() => {
            const items = containerRef.current?.querySelectorAll('.feature-item');
            if (items && items.length > 0) {
                gsap.fromTo(items,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 85%",
                        }
                    }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            icon: <Monitor className="w-8 h-8 text-accent" />,
            label: "4K PRO-UHD",
            sublabel: "Advanced Pixel-Shifting",
        },
        {
            icon: <Contrast className="w-8 h-8 text-accent" />,
            label: "HDR10 & HLG",
            sublabel: "High Dynamic Range",
        },
        {
            icon: <Sun className="w-8 h-8 text-accent" />,
            label: "2,600 Lumens",
            sublabel: "Color & White Brightness",
        },
        {
            icon: <Maximize className="w-8 h-8 text-accent" />,
            label: "3LCD Technology",
            sublabel: "No Rainbow Effect",
        },
    ];

    return (
        <section className="bg-secondary/30 border-y border-border py-12">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item flex flex-col items-center text-center space-y-3 group hover:scale-105 transition-transform duration-300">
                            <div className="p-3 rounded-full bg-card border border-border group-hover:bg-accent/10 transition-colors shadow-sm">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-foreground font-bold text-lg">{feature.label}</h3>
                                <p className="text-muted-foreground text-sm">{feature.sublabel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeatures;
