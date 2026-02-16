import React from "react";

const ProductDescription = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-[800px]">
                <h2 className="text-3xl font-bold text-foreground mb-8 border-l-4 border-accent pl-4">
                    The Ultimate Home Cinema Experience
                </h2>

                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground space-y-8">
                    <p>
                        The Epson Home Cinema 5050UB 4K PRO-UHD projector delivers an amazing 4K home theater experience for the DIY enthusiast. Capable of displaying an astonishing 2,600 lumens for both color and white brightness – along with proprietary processors for resolution enhancement, color, and image processing – the Home Cinema 5050UB produces incredible brightness, color accuracy, and image detail to faithfully display all your favorite content the way it was meant to be seen.
                    </p>

                    <h3 className="text-2xl font-semibold text-foreground mt-12 mb-4">Ideally Suited For</h3>
                    <ul className="list-disc pl-6 space-y-2 marker:text-accent">
                        <li>Dedicated Home Theater Rooms with controlled lighting</li>
                        <li>Large screens up to 150 inches</li>
                        <li>4K UHD Movies, Sports, and Gaming</li>
                        <li>Users demanding color accuracy (100% DCI-P3 coverage)</li>
                    </ul>

                    <h3 className="text-2xl font-semibold text-foreground mt-12 mb-4">Installation flexibility</h3>
                    <p>
                        The wide lens shift range of ±96.3% vertical and ±47.1% horizontal, along with a 2.1x zoom, offers exceptional installation flexibility. Whether strictly ceiling mounted or on a shelf in the back of the room, the 5050UB adapts to your space, not the other way around.
                    </p>

                    <h3 className="text-2xl font-semibold text-foreground mt-12 mb-4">Gaming on the Big Screen</h3>
                    <p>
                        With low input lag and vibrant HDR support, gaming becomes larger than life. Immerse yourself in the action with a screen size that fills your field of view, revealing details you&apos;ve never seen before on a standard TV.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductDescription;
