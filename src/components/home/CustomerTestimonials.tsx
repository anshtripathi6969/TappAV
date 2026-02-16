"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: "01",
        videoId: "6vw_5yyJYsA",
        name: "Anuj Singh",
        quote: "After enjoying my dream home theater, I want to thank Tanmay and his team for making it a reality. Tanmay is professional, knowledgeable and understands customer needs. Vikram Pawar and the team worked hard and kept me updated daily. They deserve 5 stars!"
    },
    {
        id: "02",
        videoId: "TXZ2JVHEVuM",
        name: "Happy Customer",
        quote: "TappAV is a top company for home automation and theater systems. They offer great flexibility in purchase decisions and are technically skilled. The team expertly guided us through the process, from planning to installation, ensuring a perfect system. We're very happy with the experience!"
    },
    {
        id: "03",
        videoId: "sXRSK-ccPmY",
        name: "Satisfied Client",
        quote: "TappAV excels in home theater solutions. Tanmay is very knowledgeable and provided the perfect solution, but his team surpassed expectations with their site visits and technical expertise. Special thanks to the installation crew for making my dream home theater a reality!"
    }
];

const CustomerTestimonials = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const nextSlide = () => {
        setIsPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIsPlaying(false);
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonial-header", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(contentRef.current, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Function to get high-res thumbnail
    const getThumbnail = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
                <div className="testimonial-header text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tight">
                        Hear From Our Customers
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div ref={contentRef} className="max-w-[1000px] mx-auto">
                    {/* Video Player Container */}
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black group mb-12">
                        {isPlaying ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${testimonials[currentIndex].videoId}?autoplay=1&rel=0`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            ></iframe>
                        ) : (
                            <>
                                <Image
                                    src={getThumbnail(testimonials[currentIndex].videoId)}
                                    alt="Video Thumbnail"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:bg-accent hover:border-accent group shadow-lg"
                                >
                                    <Play className="w-8 h-8 fill-current ml-1" />
                                </button>
                            </>
                        )}

                        {/* Navigation Arrows (Absolute to Video) */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300 border border-white/10 z-20"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-accent hover:scale-110 transition-all duration-300 border border-white/10 z-20"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Quote Carousel */}
                    <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/20 rotate-180" />
                        <Quote className="absolute bottom-8 right-8 w-12 h-12 text-accent/20" />

                        <div className="relative overflow-hidden min-h-[150px] flex items-center justify-center">
                            <div className="text-center px-4 md:px-12">
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-8 font-light">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <h4 className="text-lg font-bold text-black flex items-center justify-center gap-3">
                                    <span className="w-8 h-[1px] bg-accent" />
                                    {testimonials[currentIndex].name}
                                    <span className="w-8 h-[1px] bg-accent" />
                                </h4>
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-3 mt-8">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsPlaying(false);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-accent w-8" : "bg-gray-300 hover:bg-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerTestimonials;
