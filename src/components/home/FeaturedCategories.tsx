"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const categories = [
    {
        id: 1,
        title: "Projectors",
        description: "Experience true 4K cinematic clarity",
        image: "/images/cat-projectors.png",
        link: "#projectors",
        colSpan: "md:col-span-2",
    },
    {
        id: 2,
        title: "Sound Systems",
        description: "Immersive Dolby Atmos surround sound",
        image: "/images/cat-audio.png",
        link: "#sound",
        colSpan: "md:col-span-1",
    },
    {
        id: 3,
        title: "AV Receivers",
        description: "The heart of your home theater",
        image: "/images/cat-receivers.png",
        link: "#receivers",
        colSpan: "md:col-span-1",
    },
    {
        id: 4,
        title: "Accessories",
        description: "Cables, mounts, and acoustic treatment",
        image: "/images/cat-accessories.png",
        link: "#accessories",
        colSpan: "md:col-span-4",
    },
];

const FeaturedCategories = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = cardsRef.current?.children;

        if (cards) {
            gsap.fromTo(
                cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );
        }
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                            Browse Categories
                        </h2>
                        <p className="text-gray-400">
                            Explore our curated selection of premium AV gear.
                        </p>
                    </div>
                    <Link
                        href="/shop"
                        className="hidden md:flex items-center text-accent hover:text-white transition-colors"
                    >
                        View All Categories <MoveRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={cat.link}
                            className={`group relative overflow-hidden rounded-xl h-[300px] block ${cat.colSpan}`}
                        >
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-1 transform translate-y-0 group-hover:-translate-y-1 transition-transform">
                                    {cat.title}
                                </h3>
                                <p className="text-gray-300 text-sm transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                                    {cat.description}
                                </p>
                                <div className="absolute right-6 bottom-6 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    <MoveRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden flex justify-center">
                    <Link
                        href="/shop"
                        className="flex items-center text-accent hover:text-white transition-colors"
                    >
                        View All Categories <MoveRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
