"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
    {
        id: 1,
        title: "Thinking of a Home Theater? Start With These 5 Essentials!",
        excerpt: "Turn your living room into a true home cinema. In this guide, we explore the fundamental components you need to create an immersive audio-visual experience that rivals the multiplex.",
        image: "/images/hero-bg.jpeg", // Placeholder
        link: "https://tappav.com/thinking-of-a-home-theater-start-with-these-5-essentials/",
        readTime: "6 minute read",
        category: "Blogs"
    },
    {
        id: 2,
        title: "Hisense PX3 Pro Review: Is This the New King of UST Projectors?",
        excerpt: "The Hisense PX3 Pro is a premium 4K Ultra Short Throw laser projector with 3000 ANSI lumens brightness, Dolby Vision, and vivid BT.2020 color. In this review, we explore its design, key features, and how it stacks up against the competition.",
        image: "/images/prod-epson-5050ub.png", // Placeholder
        link: "https://tappav.com/hisense-px3-pro-review-is-this-the-new-king-of-ust-projectors/",
        readTime: "4 minute read",
        category: "Blogs"
    }
];

const HomeCinemaGuide = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Blog Items Animation
            const items = contentRef.current?.children;
            if (items) {
                Array.from(items).forEach((item, index) => {
                    gsap.from(item, {
                        x: index % 2 === 0 ? -50 : 50,
                        opacity: 0,
                        duration: 1,
                        delay: index * 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 80%",
                        }
                    });
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none opacity-30" />

            <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
                <div ref={titleRef} className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Home Cinema Guide
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Expert insights, reviews, and guides to help you build your dream setup.
                    </p>
                </div>

                <div ref={contentRef} className="space-y-24">
                    {blogs.map((blog, index) => (
                        <div
                            key={blog.id}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative group">
                                <Link href={blog.link} target="_blank" className="block relative aspect-video rounded-3xl overflow-hidden border border-border hover:border-accent/50 transition-colors duration-500">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                    {/* Tag Overlay */}
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                        <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                                            {blog.category}
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight hover:text-accent transition-colors duration-300">
                                    <Link href={blog.link} target="_blank">
                                        {blog.title}
                                    </Link>
                                </h3>

                                <p className="text-muted-foreground text-lg leading-relaxed line-clamp-4">
                                    {blog.excerpt}
                                </p>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                                        {blog.readTime}..
                                    </span>

                                    <div className="flex gap-4">
                                        <span className="px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:bg-accent/5 transition-colors cursor-default">
                                            Blogs
                                        </span>
                                    </div>
                                </div>

                                <Link
                                    href={blog.link}
                                    target="_blank"
                                    className="inline-flex items-center text-accent font-bold hover:text-white transition-colors group/link pt-2"
                                >
                                    Read More
                                    <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="mt-20 text-center">
                    <Link href="https://tappav.com/blogs" target="_blank">
                        <Button
                            size="lg"
                            className="bg-[#FCD34D] text-black hover:bg-[#FCD34D]/90 border-none px-12 py-6 text-lg font-bold shadow-[0_0_20px_rgba(252,211,77,0.3)] hover:shadow-[0_0_30px_rgba(252,211,77,0.5)] transform hover:scale-105 transition-all duration-300"
                        >
                            Load More
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeCinemaGuide;
