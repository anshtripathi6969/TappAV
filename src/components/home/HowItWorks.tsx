"use client";

import React, { useState, useEffect, useRef } from "react";
import { PhoneCall, PenTool, CheckCircle, Hammer, Smile, ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: 1,
        title: "Talk to our expert",
        description: "Schedule a free consultation with our audio-visual specialists to discuss your vision and requirements.",
        icon: PhoneCall,
        progress: 15,
        image: "/images/step-1-expert.png", // Placeholder
    },
    {
        id: 2,
        title: "Book Design Service",
        description: "Our team creates a custom design plan tailored to your room's acoustics and your aesthetic preferences.",
        icon: PenTool,
        progress: 35,
        image: "/images/step-2-design.png", // Placeholder
    },
    {
        id: 3,
        title: "Finalize Order",
        description: "Review the design and quote. Once approved, we secure your premium equipment.",
        icon: CheckCircle,
        progress: 50,
        image: "/images/step-3-order.png", // Placeholder
    },
    {
        id: 4,
        title: "Commence Install",
        description: "Our certified technicians handle the professional installation and calibration of your system.",
        icon: Hammer,
        progress: 80,
        image: "/images/step-4-install.png", // Placeholder
    },
    {
        id: 5,
        title: "Project Handover",
        description: "We walk you through your new system, ensuring you know exactly how to use it. Sit back and enjoy!",
        icon: Smile,
        progress: 100,
        image: "/images/step-5-handover.png", // Placeholder
    },
];

const HowItWorks = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const nextStep = () => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
    };

    const prevStep = () => {
        setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    };

    return (
        <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Your journey to the ultimate home theater experience, simplified.</p>
                </div>

                {/* Stepper */}
                <div className="flex justify-between items-center mb-16 relative hidden md:flex">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-accent -translate-y-1/2 z-0 transition-all duration-700 ease-in-out"
                        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                    ></div>

                    {steps.map((step, index) => (
                        <button
                            key={step.id}
                            onClick={() => setCurrentStep(index)}
                            className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 border-2 ${index <= currentStep ? "bg-accent border-accent text-white scale-110 shadow-[0_0_20px_rgba(37,99,235,0.5)]" : "bg-background border-white/20 text-gray-500 hover:border-accent/50"}`}
                        >
                            {index + 1}
                            {/* Label below step */}
                            <span className={`absolute -bottom-10 text-xs font-medium whitespace-nowrap transition-colors duration-300 ${index <= currentStep ? "text-white" : "text-gray-600"}`}>
                                {step.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Main Content Card */}
                <div className="bg-[#15171E] rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative min-h-[450px] flex flex-col">

                    {/* Background Grid Pattern (CSS-based) */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                    </div>

                    {/* Top Section: Content & Image */}
                    <div className="flex flex-col md:flex-row flex-grow relative z-10">
                        {/* Image Side (Left) */}
                        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#0F1115] to-[#1a1d26] relative flex items-center justify-center p-8 md:p-12 overflow-hidden group border-r border-white/5 min-h-[300px] md:min-h-0">
                            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="w-64 h-64 bg-accent/20 rounded-full blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>

                            {/* Large Animated Icon */}
                            <div className="relative z-10 transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-3">
                                {React.createElement(steps[currentStep].icon, {
                                    className: "w-32 h-32 md:w-40 md:h-40 text-white/90 drop-shadow-[0_0_40px_rgba(37,99,235,0.6)]"
                                })}
                            </div>

                            {/* Decorative floating elements */}
                            <div className="absolute top-10 right-10 w-2 h-2 md:w-3 md:h-3 rounded-full bg-accent animate-bounce shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                            <div className="absolute bottom-10 left-10 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/20 animate-pulse"></div>
                        </div>

                        {/* Content Side (Right) */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-accent text-xs md:text-sm font-bold tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20 shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                                        Step {currentStep + 1}
                                    </span>
                                    <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                    {steps[currentStep].title}
                                </h3>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg">
                                    {steps[currentStep].description}
                                </p>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center gap-4 mt-auto">
                                <button
                                    onClick={prevStep}
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-sm group"
                                >
                                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={nextStep}
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent/80 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-105 group"
                                >
                                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Progress Bar Strip - Statically Positioned */}
                    <div className="w-full bg-gradient-to-r from-accent to-blue-600 flex items-center px-6 md:px-12 py-4 justify-between z-30 relative shrink-0">
                        <div className="flex items-center gap-4 md:gap-6 text-white font-bold text-xl">
                            {/* Progress Ring SVG */}
                            <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center shrink-0">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="50%" cy="50%" r="22" stroke="rgba(255,255,255,0.2)" strokeWidth="4" fill="transparent" />
                                    <circle cx="50%" cy="50%" r="22" stroke="white" strokeWidth="4" fill="transparent" strokeDasharray={138} strokeDashoffset={138 - (138 * steps[currentStep].progress) / 100} className="transition-all duration-1000 ease-in-out" />
                                </svg>
                                <span className="absolute text-xs md:text-sm font-bold">{steps[currentStep].progress}%</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] md:text-xs uppercase text-white/60 tracking-wider font-semibold mb-0.5">Current Step</span>
                                <span className="text-lg md:text-xl tracking-tight leading-none">
                                    {steps[currentStep].title}
                                </span>
                            </div>
                        </div>

                        <div
                            onClick={nextStep}
                            className="hidden md:flex items-center gap-4 text-white/90 font-medium text-base cursor-pointer group hover:text-white transition-colors"
                        >
                            <div className="text-right">
                                <span className="block text-[10px] uppercase text-white/50 mb-0.5">Up Next</span>
                                <span className="text-sm">{steps[(currentStep + 1) % steps.length].title}</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
