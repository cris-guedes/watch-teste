"use client";

import * as React from "react";
import { Button as BaseButton } from "../base-ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon, Loader2 } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "../base-ui/button";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    icon?: LucideIcon;
    iconPosition?: "left" | "right";
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, icon: Icon, iconPosition = "left", loading = false, children, disabled, ...props }, ref) => {
        return (
            <BaseButton
                className={cn(
                    "rounded-[10px] font-bold transition-all active:scale-[0.98]",
                    variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
                    className
                )}
                variant={variant}
                size={size}
                disabled={disabled || loading}
                ref={ref}
                {...props}
            >
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {!loading && Icon && iconPosition === "left" && <Icon className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />}
                {children}
                {!loading && Icon && iconPosition === "right" && <Icon className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />}
            </BaseButton>
        );
    }
);
Button.displayName = "Button";

export { Button };
