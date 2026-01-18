"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CarouselAdCardProps } from "./hooks/useCarouselAdCard";

export function CarouselAdCard({ imageUrl, span = 1, aspectRatio = "aspect-video", className }: CarouselAdCardProps) {
    return (
        <div className={cn(
            "w-full h-full rounded-2xl overflow-hidden relative group cursor-pointer border border-white/5",
            aspectRatio,
            className
        )}>
            <img
                src={imageUrl}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Advertisement"
            />

            {/* Announcement Badge */}
            <div className="absolute top-4 right-4 z-20">
                <div className="bg-[#E96744] text-[10px] font-black text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-sm tracking-wider">
                    <span>Announcement</span>
                    <div className="w-3 h-3 rounded-full border border-white/40 flex items-center justify-center text-[8px] font-serif italic">i</div>
                </div>
            </div>

            {/* Glassy border effect */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all rounded-2xl" />
        </div>
    );
}
