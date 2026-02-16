import React from "react";
import Button from "../ui/Button";

const InstallationSupport = () => {
    return (
        <section className="py-20 bg-background border-t border-white/5">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="bg-gradient-to-br from-secondary to-black rounded-2xl p-6 md:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-bold text-white">Professional Installation & Support</h2>
                        <p className="text-gray-400 text-lg">
                            Don&apos;t worry about the setup. Our team of certified AV technicians can handle everything from mounting to calibration, ensuring your system performs exactly as intended.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-accent pt-2">
                            <span className="bg-accent/10 px-3 py-1 rounded-full border border-accent/20">Nationwide Coverage</span>
                            <span className="bg-accent/10 px-3 py-1 rounded-full border border-accent/20">Certified Calibrators</span>
                            <span className="bg-accent/10 px-3 py-1 rounded-full border border-accent/20">Extended Warranty Available</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 min-w-[200px]">
                        <Button size="lg">Book Installation</Button>
                        <Button variant="outline">Contact Support</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstallationSupport;
