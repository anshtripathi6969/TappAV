"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Star, Check, Share2, Heart } from "lucide-react";
import gsap from "gsap";
import Button from "../ui/Button";

const ProductHero = () => {
    // Mock data for Epson 5050UB
    const product = {
        name: "Epson Home Cinema 5050UB",
        price: "$2,999.00",
        rating: 4.8,
        reviews: 124,
        description: "Experience the ultimate 4K home theater projection with the Epson Home Cinema 5050UB. Featuring advanced 3LCD technology and HDR support for stunning color and contrast.",
        images: [
            "/images/epson-5050ub-main.png",
            "/images/epson-5050ub-side.png",
        ]
    };

    const [mainImage, setMainImage] = useState(product.images[0]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".product-image", {
                scale: 0.95,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
            gsap.from(".product-info > *", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="pt-32 pb-12 bg-background data-[loaded=true]:opacity-100">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column: Image Gallery */}
                    <div className="space-y-4 product-image">
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                            <Image
                                src={mainImage}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Best Seller
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setMainImage(img)}
                                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${mainImage === img ? "border-accent" : "border-transparent hover:border-white/20"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.name} view ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                            {/* Placeholders for more thumbs */}
                            <div className="bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 text-xs">
                                +2 More
                            </div>
                            <div className="bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-gray-500 text-xs">
                                Video
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Product Info */}
                    <div className="flex flex-col product-info">
                        <div className="mb-2 flex items-center space-x-2">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-600"}`} />
                                ))}
                            </div>
                            <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            {product.name}
                        </h1>

                        <div className="text-3xl font-bold text-accent mb-6">{product.price}</div>

                        <p className="text-gray-300 leading-relaxed mb-8 border-b border-white/10 pb-8">
                            {product.description}
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>In Stock - Ships ready to install</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <Check className="w-5 h-5 text-green-500" />
                                <span>Free Professional Consultation Included</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button size="lg" className="flex-1">Add to Cart</Button>
                            <Button variant="secondary" size="lg" className="flex-1">Enquire Now</Button>
                        </div>

                        <div className="flex space-x-6 text-gray-400 text-sm">
                            <button className="flex items-center space-x-2 hover:text-white transition-colors">
                                <Heart className="w-4 h-4" />
                                <span>Add to Wishlist</span>
                            </button>
                            <button className="flex items-center space-x-2 hover:text-white transition-colors">
                                <Share2 className="w-4 h-4" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHero;
