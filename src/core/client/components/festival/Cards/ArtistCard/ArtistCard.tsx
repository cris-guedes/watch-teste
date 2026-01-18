"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card } from "@/core/client/components/ui/Card";
import { ArtistCardProps, useArtistCard } from "./hooks/useArtistCard";

export function ArtistCard(props: ArtistCardProps) {
    const { models } = useArtistCard(props);

    return (
        <Card className={cn(
            "group relative aspect-[3/4.2] overflow-hidden cursor-pointer bg-neutral-900 border-none rounded-2xl",
            models.className
        )}>
            {/* Image */}
            <Image
                src={models.image}
                alt={models.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 20vw, 15vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center text-center">
                <h3 className="text-sm font-black text-white tracking-tight leading-tight">
                    {models.name}
                </h3>
            </div>

            {/* Glassy border effect */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all rounded-2xl" />
        </Card>
    );
}
