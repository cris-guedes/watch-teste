"use client";

import React from "react";
import { Button } from "@/core/client/components/ui/Button";
import { ContentCarousel } from "../../Carousel";
import { GenreCard, CarouselAdCard } from "../../Carousel/ContentCarousel/Cards";
import { FestivalForYouSectionProps, useFestivalForYouSection } from "./hooks/useFestivalForYouSection";

export function FestivalForYouSection(props: FestivalForYouSectionProps) {
    const { models, operations } = useFestivalForYouSection(props);

    const items = [
        ...(models.categories.slice(0, 2).map((cat, idx) => (
            <GenreCard
                key={cat.id}
                name={cat.name}
                color={operations.getCategoryColor(idx)}
            />
        ))),
        ...(models.ad ? [
            <CarouselAdCard
                key="section-ad"
                imageUrl={models.ad.mediaUrl}
                span={2}
                aspectRatio="aspect-[2.1/1]"
            />
        ] : []),
        ...(models.categories.slice(2, 5).map((cat, idx) => (
            <GenreCard
                key={cat.id}
                name={cat.name}
                color={operations.getCategoryColor(idx + 2)}
            />
        ))),
    ];

    if (models.categories.length === 0 && !models.ad) return null;

    return (
        <section className="flex flex-col md:flex-row gap-8 items-start relative">
            <div className="w-full md:w-56 flex flex-col space-y-8 pt-2">
                <div className="space-y-3">
                    <h2 className="text-xl font-black text-white tracking-tighter leading-tight">Festival for you</h2>
                    <p className="text-[11px] text-white/40 font-black leading-relaxed tracking-widest max-w-[200px]">
                        Explore your favorite genres and discover new rhythms to love!
                    </p>
                </div>
                <Button className="bg-[#E96744] hover:bg-[#d1593c] h-10 px-8 text-[11px] font-black rounded-lg tracking-[0.15em] self-start shadow-lg shadow-orange-950/20">
                    See All
                </Button>
            </div>
            <div className="flex-1 min-w-0 -mr-[calc((100vw-100%)/2+1.5rem)]">
                <ContentCarousel
                    variant="portrait"
                    items={items}
                    cardWidth={props.cardWidth || "!w-[45vw] sm:!w-[30vw] md:!w-[20vw] lg:!w-[18vw]"}
                    multiCardWidth={props.multiCardWidth || "!w-[92vw] sm:!w-[62vw] md:!w-[42vw] lg:!w-[37.6vw]"}
                />
            </div>
        </section>
    );
}
