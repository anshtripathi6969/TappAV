import React from "react";
import { MoveRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    icon = false,
    className = "",
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-accent text-white hover:bg-accent/90 focus:ring-accent shadow-md hover:shadow-lg hover:-translate-y-0.5",
        secondary:
            "bg-secondary text-foreground hover:bg-secondary/80 focus:ring-secondary border border-border",
        outline:
            "bg-transparent border border-border text-foreground hover:bg-secondary focus:ring-foreground",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const variantStyles = variants[variant];
    const sizeStyles = sizes[size];

    return (
        <button
            className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
            {...props}
        >
            {children}
            {icon && <MoveRight className="ml-2 h-4 w-4" />}
        </button>
    );
};

export default Button;
