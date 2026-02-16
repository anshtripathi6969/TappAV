"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
    {
        id: 1,
        title: "Projectors",
        description: "Experience true 4K cinematic clarity",
        image: "/images/cat-projectors.png",
        link: "#projectors",
        colSpan: "md:col-span-2 md:row-span-2",
        height: "h-[600px]",
    },
    {
        id: 2,
        title: "Sound Systems",
        description: "Immersive Dolby Atmos",
        image: "/images/cat-audio.png",
        link: "#sound",
        colSpan: "md:col-span-1 md:row-span-1",
        height: "h-[288px]",
    },
    {
        id: 3,
        title: "AV Receivers",
        description: "Heart of home theater",
        image: "/images/cat-receivers.png",
        link: "#receivers",
        colSpan: "md:col-span-1 md:row-span-1",
        height: "h-[288px]",
    },
    {
        id: 4,
        title: "Accessories",
        description: "Premium cables & mounts",
        image: "/images/cat-accessories.png",
        link: "#accessories",
        colSpan: "md:col-span-2 md:row-span-1",
        height: "h-[288px]",
    },
];

const FeaturedCategories = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current?.children;
            if (cards) {
                gsap.fromTo(
                    cards,
                    { y: 100, opacity: 0, scale: 0.9 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                        },
                    }
                );
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-background relative">
            {/* Background glow for ambience */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block">Curated Collections</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Browse Categories
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Explore our curated selection of premium AV gear, designed to elevate your sensory experience.
                        </p>
                    </div>
                    <Link
                        href="/shop"
                        className="group flex items-center text-white pb-1 border-b border-white/30 hover:border-accent transition-colors"
                    >
                        <span className="mr-2 text-sm font-medium uppercase tracking-wide">View All</span>
                        <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent" />
                    </Link>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(288px,auto)]">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={cat.link}
                            onMouseEnter={() => setHoveredId(cat.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className={`group relative overflow-hidden rounded-3xl border border-white/10 ${cat.colSpan} ${cat.height}`}
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-60" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="transform transition-transform duration-500 ease-out group-hover:translate-y-[-10px]">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                        {cat.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-base opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        {cat.description}
                                    </p>
                                </div>

                                {/* Quick Action Button */}
                                <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all duration-300 ${hoveredId === cat.id ? 'opacity-100 scale-100 rotate-45' : 'opacity-0 scale-75'}`}>
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
