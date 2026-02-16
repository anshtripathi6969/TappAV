import React from "react";
import Button from "../ui/Button";

const ConsultationBanner = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-accent to-blue-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/10 blur-3xl"></div>

            <div className="container mx-auto px-4 max-w-[1200px] relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to Build Your Dream Home Theater?
                </h2>
                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Our experts are ready to help you design the perfect audio-visual experience tailored to your space and budget.
                </p>
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 hover:text-accent shadow-xl border-none">
                    Book Free Consultation
                </Button>
            </div>
        </section>
    );
};

export default ConsultationBanner;
