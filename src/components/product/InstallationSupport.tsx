import React from "react";
import Button from "../ui/Button";

const InstallationSupport = () => {
    return (
        <section className="py-20 bg-background border-t border-border">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="bg-card rounded-2xl p-6 md:p-12 border border-border flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-bold text-foreground">Professional Installation & Support</h2>
                        <p className="text-muted-foreground text-lg">
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
                        <Button variant="outline" className="border-border text-foreground hover:bg-secondary">Contact Support</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstallationSupport;
