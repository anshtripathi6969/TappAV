import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import KeyFeatures from "@/components/product/KeyFeatures";
import ProductDescription from "@/components/product/ProductDescription";
import SpecsTable from "@/components/product/SpecsTable";
import InstallationSupport from "@/components/product/InstallationSupport";

export default function ProductPage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen bg-background flex flex-col overflow-x-hidden">
            <Navbar />
            <ProductHero />
            <KeyFeatures />
            <ProductDescription />
            <SpecsTable />
            <InstallationSupport />
            <Footer />
        </main>
    );
}
