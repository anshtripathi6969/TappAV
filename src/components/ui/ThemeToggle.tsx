"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Button from "@/components/ui/Button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // Placeholder to prevent layout shift
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Toggle Theme"
        >
            <div className="relative w-5 h-5 overflow-hidden">
                <Sun
                    className={`absolute inset-0 w-full h-full text-yellow-500 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${theme === 'dark' ? 'translate-y-10 rotate-90 opacity-0' : 'translate-y-0 rotate-0 opacity-100'
                        }`}
                />
                <Moon
                    className={`absolute inset-0 w-full h-full text-blue-400 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${theme === 'dark' ? 'translate-y-0 rotate-0 opacity-100' : '-translate-y-10 -rotate-90 opacity-0'
                        }`}
                />
            </div>
        </button>
    );
}
