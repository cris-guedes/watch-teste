"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/core/client/components/ui/Card";
import { ShowCardProps, useShowCard } from "./hooks/useShowCard";

export function ShowCard(props: ShowCardProps) {
    const { models } = useShowCard(props);

    return (
        <Card className={cn(
            "group relative overflow-hidden cursor-pointer bg-neutral-800/50 border-none rounded-xl flex flex-col",
            models.className
        )}>
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={models.image}
                    alt={models.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Glassy border effect on image only */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 group-hover:ring-white/10 transition-all" />
            </div>

            {/* Detailed Footer */}
            <div className="p-4 bg-neutral-900/40 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black text-orange-600/90 tracking-widest">
                        {models.artist}
                    </span>

                    {models.isLive && (
                        <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                            <span className="text-[10px] font-black text-red-600 tracking-tighter">Live</span>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold text-white tracking-widest">
                    <span className="opacity-90">{models.stageName || "Main Stage"}</span>
                    <span className="opacity-40">{models.date || "dd.mm.aa - 00:00 h"}</span>
                </div>
            </div>
        </Card>
    );
}
