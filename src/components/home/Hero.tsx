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
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Initial Entrance Animation
            const tl = gsap.timeline();

            // Background Scale & Fade
            tl.fromTo(
                imageRef.current,
                { scale: 1.2, filter: "brightness(0.5)" },
                {
                    scale: 1,
                    filter: "brightness(1)",
                    duration: 2,
                    ease: "power3.out"
                }
            );

            // Staggered Text Reveal
            const textElements = textRef.current?.children;
            if (textElements) {
                tl.fromTo(
                    textElements,
                    { y: 100, opacity: 0, filter: "blur(10px)" },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 1.2,
                        stagger: 0.15,
                        ease: "power4.out"
                    },
                    "-=1.5"
                );
            }

            // 2. Parallax Scroll Effect
            gsap.to(imageRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // 3. Ambient Mouse Interaction (Subtle 3D Tilt)
            const handleMouseMove = (e: MouseEvent) => {
                if (!heroRef.current) return;
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;

                const xPos = (clientX / innerWidth - 0.5) * 20; // -10 to 10
                const yPos = (clientY / innerHeight - 0.5) * 20;

                // Move Text slightly opposite to mouse
                gsap.to(textRef.current, {
                    x: -xPos,
                    y: -yPos,
                    duration: 1,
                    ease: "power2.out",
                });

                // Move Background slightly with mouse (depth effect)
                gsap.to(imageRef.current, {
                    x: xPos * 0.5,
                    y: yPos * 0.5,
                    duration: 1.5,
                    ease: "power2.out",
                });
            };

            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden perspective-1000"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div ref={imageRef} className="relative w-[110%] h-[110%] -left-[5%] -top-[5%]">
                    <Image
                        src="/images/hero-bg.jpeg"
                        alt="Premium Home Cinema Experience"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background/90" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            </div>

            {/* Ambient Light Overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 z-1 pointer-events-none bg-radial-gradient from-accent/10 to-transparent opacity-50 mix-blend-overlay"
            />

            {/* Content Layer */}
            <div className="container mx-auto px-4 z-10 relative max-w-[1200px]">
                <div
                    ref={textRef}
                    className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8"
                >
                    <div className="overflow-hidden">
                        <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-sm md:text-base border border-accent/30 px-4 py-1.5 rounded-full bg-accent/10 backdrop-blur-md">
                            Premium Home Cinema
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
                        Experience Cinema <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 animate-gradient-x">
                            At Home
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                        Transform your living space with TappAV&apos;s premium audio-visual
                        solutions. Expertly curated for the ultimate immersive experience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <Button size="lg" icon className="shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow">
                            Shop Projectors
                        </Button>
                        <Button variant="secondary" size="lg" className="backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10">
                            Book Consultation
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10">
                <div className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                    <span className="text-[10px] uppercase tracking-widest text-white/70">Scroll</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-drop" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
