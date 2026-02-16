"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import Button from "../ui/Button";

const products = [
    {
        id: 1,
        name: "Epson Home Cinema 5050UB",
        description: "4K PRO-UHD Projector with Advanced HDR",
        price: "$2,999",
        image: "/images/prod-epson-5050ub.png", // Placeholder
        rating: 5,
        slug: "epson-5050ub",
    },
    {
        id: 2,
        name: "KEF LS50 Wireless II",
        description: "Ultimate Wireless Hi-Fi Speakers",
        price: "$2,499",
        image: "/images/prod-kef-ls50.png",
        rating: 5,
        slug: "kef-ls50-wireless-ii",
    },
    {
        id: 3,
        name: "Denon AVR-X3800H",
        description: "9.4 Ch. 8K AV Receiver with HEOS",
        price: "$1,699",
        image: "/images/prod-denon-avr.png",
        rating: 4,
        slug: "denon-avr-x3800h",
    },
];

const FeaturedProducts = () => {
    return (
        <section className="py-20 bg-background border-t border-white/5">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-accent text-sm font-medium tracking-widest uppercase block mb-2">
                            Best Sellers
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Featured Products
                        </h2>
                    </div>
                    <Link href="/shop" className="hidden md:block">
                        <Button variant="outline" size="sm">View All Products</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded">
                                    In Stock
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < product.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-600"}`} />
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-lg font-bold text-white">
                                        {product.price}
                                    </span>
                                    <Link href={`/product/${product.slug}`}>
                                        <Button size="sm" variant="secondary" className="group-hover:bg-accent group-hover:text-white group-hover:border-accent">View Details</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 md:hidden flex justify-center">
                    <Link href="/shop">
                        <Button variant="outline">View All Products</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
