import React from "react";

const SpecsTable = () => {
    const specs = [
        { label: "Resolution", value: "4K PRO-UHD (3840 x 2160)" },
        { label: "Brightness", value: "2,600 Lumens (Color & White)" },
        { label: "Contrast Ratio", value: "1,000,000:1" },
        { label: "Technology", value: "3LCD, 3-Chip Technology" },
        { label: "Light Source", value: "Lamp (Approx. 5,000 hours Eco)" },
        { label: "HDMI Ports", value: "2x HDMI 2.0 (HDCP 2.2)" },
        { label: "Lens Shift", value: "Vertical: ±96.3%, Horizontal: ±47.1%" },
        { label: "Throw Ratio", value: "1.35 – 2.84" },
        { label: "Dimensions", value: "20.5\" x 17.7\" x 6.7\" (W x D x H)" },
        { label: "Weight", value: "24.7 lbs" },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-[1000px]">
                <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Technical Specifications</h2>

                <div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg">
                    <table className="w-full text-left border-collapse">
                        <tbody>
                            {specs.map((spec, index) => (
                                <tr
                                    key={index}
                                    className={`border-b border-border hover:bg-secondary/50 transition-colors ${index % 2 === 0 ? "bg-secondary/30" : "bg-card"
                                        }`}
                                >
                                    <th className="py-4 px-6 md:px-12 font-medium text-muted-foreground w-1/3 md:w-1/4">
                                        {spec.label}
                                    </th>
                                    <td className="py-4 px-6 md:px-12 text-foreground font-semibold">
                                        {spec.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default SpecsTable;
