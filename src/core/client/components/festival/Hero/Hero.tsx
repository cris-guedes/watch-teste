"use client";

import Image from "next/image";
import { Button } from "@/core/client/components/ui/Button";
import { Maximize, Settings, LayoutGrid, Volume2 } from "lucide-react";
import { HeroProps, useHero } from "./hooks/useHero";

export function Hero(props: HeroProps) {
    const { models } = useHero(props);

    return (
        <section className="relative h-[85vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 transition-transform duration-1000">
                <Image
                    src={models.backgroundImage}
                    alt={models.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative h-full max-w-7xl mx-auto px-12 w-full flex flex-col justify-between py-24 md:py-32">
                {/* Header: Title & Subtitle */}
                <div className="animate-in fade-in slide-in-from-top-8 duration-1000">
                    <div className="space-y-1">
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                            {models.title}
                        </h1>
                        {models.subtitle && (
                            <p className="text-[10px] md:text-[11px] text-white/50 font-black tracking-[0.15em] flex items-center gap-2">
                                <span>Live</span>
                                <span className="w-1 h-1 bg-white/40 rounded-full" />
                                <span>Sunset</span>
                                <span className="w-1 h-1 bg-white/40 rounded-full" />
                                <span>Singer Camera</span>
                            </p>
                        )}
                    </div>
                </div>

                {/* Footer: CTA & Controls */}
                <div className="flex items-end justify-between animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white border-none h-11 px-8 text-[11px] font-black tracking-widest rounded-full shadow-2xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95" icon={models.ctaIcon}>
                            Chose your camera
                        </Button>
                    </div>

                    {/* Floating Controls */}
                    <div className="flex items-center gap-6 text-white/60">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-all hover:text-white">
                            <LayoutGrid className="w-6 h-6" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-all hover:text-white">
                            <Maximize className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-all hover:text-white">
                            <Volume2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-white/10 rounded-full transition-all hover:text-white">
                            <Settings className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
