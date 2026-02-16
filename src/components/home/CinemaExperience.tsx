"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const rooms = [
    {
        id: "01",
        title: "Cinema Room",
        image: "/images/cat-projectors.png", // Placeholder
        description: "Dedicated acoustic environments for the ultimate movie experience.",
        link: "#cinema"
    },
    {
        id: "02",
        title: "Media Room",
        image: "/images/cat-audio.png", // Placeholder
        description: "Versatile entertainment spaces for gaming, sports, and movies.",
        link: "#media"
    },
    {
        id: "03",
        title: "Living Room",
        image: "/images/hero-bg.jpeg", // Placeholder
        description: "Invisible technology integrated seamlessly into your lifestyle.",
        link: "#living"
    },
    {
        id: "04",
        title: "Guest Room",
        image: "/images/image4.png", // Placeholder
        description: "Premium comfort for your guests with intuitive control.",
        link: "#guest"
    },
    {
        id: "05",
        title: "Outdoor",
        image: "/images/outdoor.png", // Placeholder
        description: "Weather-proof entertainment for your patio and garden.",
        link: "#outdoor"
    },
    {
        id: "06",
        title: "Bedroom",
        image: "/images/bedroom.png", // Placeholder
        description: "Relaxing audio-visual setups for the perfect sanctuary.",
        link: "#bedroom"
    }
];

const CinemaExperience = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    // Responsive cards count
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        handleResize(); // Initial call
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (rooms.length - cardsToShow + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };

    const isEnd = currentIndex >= rooms.length - cardsToShow;
    const isStart = currentIndex === 0;

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(".cinema-header", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Slider Animation
            gsap.from(".cinema-card", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sliderRef.current,
                    start: "top 85%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

            {/* Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
                <div className="cinema-header text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Tapp<span className="text-accent">AV</span> Cinema Experience
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                        Take a look at some of the most enjoyed and best Calibrated home cinema spaces.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        disabled={isStart}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${isStart ? 'opacity-0 cursor-not-allowed' : 'opacity-100 hover:bg-accent hover:border-accent hover:scale-110'}`}
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={isEnd}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${isEnd ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-accent hover:border-accent hover:scale-110'}`}
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {/* Slider Track */}
                    <div className="overflow-hidden px-4 md:px-12 py-8 -mx-4 md:-mx-12">
                        <div
                            ref={sliderRef}
                            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                        >
                            {rooms.map((room) => (
                                <div
                                    key={room.id}
                                    className="w-full flex-shrink-0 px-3 md:px-4 cinema-card"
                                    style={{ width: `${100 / cardsToShow}%` }}
                                >
                                    <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden group/card cursor-pointer border border-white/5 hover:border-accent/50 transition-colors duration-500">
                                        <Image
                                            src={room.image}
                                            alt={room.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-60 transition-opacity duration-500" />

                                        {/* Card Content */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <div className="relative z-10 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center gap-4 mb-2 opacity-70 group-hover/card:opacity-100 transition-opacity">
                                                    <span className="text-xl font-mono font-bold text-accent">{room.id}</span>
                                                    <div className="h-[1px] w-12 bg-white/50" />
                                                </div>

                                                <div className="flex justify-between items-end">
                                                    <div>
                                                        <h3 className="text-3xl font-bold text-white mb-2 leading-none">
                                                            {room.title}
                                                        </h3>
                                                        <p className="text-gray-300 text-sm max-w-[200px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 h-0 group-hover/card:h-auto overflow-hidden">
                                                            {room.description}
                                                        </p>
                                                    </div>

                                                    <div className="w-12 h-12 rounded-none bg-accent flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
                                                        <ArrowRight className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default CinemaExperience;
