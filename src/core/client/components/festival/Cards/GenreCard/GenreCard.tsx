"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GenreCardProps, useGenreCard } from "./hooks/useGenreCard";

export function GenreCard(props: GenreCardProps) {
    const { models } = useGenreCard(props);

    return (
        <div className={cn(
            "group relative aspect-square overflow-hidden cursor-pointer border-none rounded-2xl p-6 flex flex-col justify-end transition-all duration-300",
            models.color,
            models.className
        )}>
            {/* Background "W" logo */}
            <span className="absolute top-2 right-2 text-white/10 text-8xl font-black select-none pointer-events-none transition-transform duration-700 group-hover:scale-110">W</span>

            {/* Larger decorative "W" for peek effect at bottom right */}
            <span className="absolute -bottom-10 -right-4 text-black/10 text-[10rem] font-black select-none pointer-events-none">W</span>

            <div className="relative z-10 flex flex-col items-start translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-2xl font-black text-white leading-tight tracking-tight">
                    {models.name}
                </h3>
                <p className="text-[11px] font-bold text-white/40 tracking-[0.2em] mt-0.5">
                    Festival
                </p>
            </div>

            {/* Glassy border effect */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all rounded-2xl" />
        </div>
    );
}
