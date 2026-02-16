"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import Button from "../ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: 1,
        name: "Epson Home Cinema 5050UB",
        description: "4K PRO-UHD Projector with Advanced HDR",
        price: "₹53,999",
        image: "/images/prod-epson-5050ub.png",
        rating: 5,
        slug: "epson-5050ub",
        tag: "Best Seller",
        tagColor: "bg-amber-500",
    },
    {
        id: 2,
        name: "KEF LS50 Wireless II",
        description: "Ultimate Wireless Hi-Fi Speakers",
        price: "₹259,255",
        image: "/images/prod-kef-ls50.png",
        rating: 5,
        slug: "kef-ls50-wireless-ii",
        tag: "Audiophile Choice",
        tagColor: "bg-accent",
    },
    {
        id: 3,
        name: "Denon AVR-X3800H",
        description: "9.4 Ch. 8K AV Receiver with HEOS",
        price: "₹46,000",
        image: "/images/prod-denon-avr.png",
        rating: 4,
        slug: "denon-avr-x3800h",
        tag: "New Arrival",
        tagColor: "bg-emerald-500",
    },
];

const FeaturedProducts = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading Animation
            gsap.fromTo(headingRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Cards Stagger Animation
            const cards = gridRef.current?.children;
            if (cards) {
                gsap.fromTo(cards,
                    { y: 100, opacity: 0, scale: 0.95 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 85%",
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-background relative border-t border-border">
            {/* Ambient Background */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
                <div ref={headingRef} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="text-accent text-sm font-bold tracking-widest uppercase block mb-3">
                            Best Sellers
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                            Featured Products
                        </h2>
                    </div>
                    <Link href="/shop" className="hidden md:block">
                        <Button variant="outline" className="border-border hover:bg-accent/5 text-foreground">
                            View All Products
                        </Button>
                    </Link>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-12 md:hidden flex justify-center">
                    <Link href="/shop">
                        <Button variant="outline" className="w-full">View All Products</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const ProductCard = ({ product }: { product: any }) => {
    return (
        <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative h-[300px] w-full p-8 flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-contain w-full h-full drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
                />

                {/* Floating Tags */}
                <div className="absolute top-4 left-4">
                    <span className={`${product.tagColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg`}>
                        {product.tag}
                    </span>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-red-500/20 hover:text-red-500 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0 border border-border">
                    <Heart className="w-5 h-5" />
                </button>

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-[2px]">
                    <Link href={`/product/${product.slug}`}>
                        <button className="w-12 h-12 rounded-full bg-background text-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-lg border border-border">
                            <Eye className="w-5 h-5" />
                        </button>
                    </Link>
                    <button className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < product.rating ? "text-amber-400 fill-amber-400" : "text-border"}`} />
                    ))}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-2 flex-grow">
                    {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-foreground">
                        {product.price}
                    </span>
                    <span className="text-xs text-accent uppercase font-semibold tracking-wider group-hover:underline cursor-pointer">
                        Add to Cart
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
