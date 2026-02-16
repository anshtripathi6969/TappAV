"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../ui/Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            imageRef.current,
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
        )
            .fromTo(
                textRef.current?.children || [],
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
                "-=1"
            );
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div ref={imageRef} className="absolute inset-0 z-0">
                <Image
                    // Using a high-quality Unsplash image for Home Theater
                    src="/images/hero-bg.jpeg"
                    alt="Home Theater Experience"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative max-w-[1200px]">
                <div
                    ref={textRef}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6"
                >
                    <span className="text-accent font-medium tracking-widest uppercase text-sm md:text-base">

                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                        Experience Cinema <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            At Home
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Transform your living space with TappAV's premium audio-visual
                        solutions. Expertly curated for the ultimate immersive experience.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" icon>
                            Shop Projectors
                        </Button>
                        <Button variant="secondary" size="lg">
                            Book Consultation
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
