"use client";

import React from "react";
import { Section } from "../../Section";
import { ContentCarousel } from "../../Carousel";
import { CarouselAdCard } from "../../Cards";
import { ExclusiveContentSectionProps, useExclusiveContentSection } from "./hooks/useExclusiveContentSection";

export function ExclusiveContentSection(props: ExclusiveContentSectionProps) {
    const { models } = useExclusiveContentSection(props);

    const items = [
        ...(models.content.map(content => (
            <div key={content.id} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                <img src={content.thumbnailUrl} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={content.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex justify-between items-end">
                        <div>
                            <h4 className="text-3xl font-black text-white leading-none mb-1">{content.title}</h4>
                            <p className="text-base font-bold text-white/60">{content.type}</p>
                        </div>
                        {/* Styled "W" Logo */}
                        <div className="opacity-20 mb-[-10px] mr-[-10px]">
                            <svg width="80" height="80" viewBox="0 0 100 100" fill="white">
                                <path d="M10 20 L35 80 L50 45 L65 80 L90 20 L75 20 L60 60 L50 35 L40 60 L25 20 Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
        ))),
        ...(models.ad ? [(
            <CarouselAdCard
                key="section-ad"
                imageUrl={models.ad.mediaUrl}
                span={1}
                aspectRatio="aspect-video"
                className="rounded-xl"
            />
        )] : [])
    ];

    if (models.content.length === 0 && !models.ad) return null;

    return (
        <Section title="Exclusive Content">
            <ContentCarousel
                variant="wide"
                items={items}
                cardWidth={props.cardWidth || "!w-[85vw] sm:!w-[60vw] md:!w-[38vw] lg:!w-[34vw]"}
                multiCardWidth={props.multiCardWidth || "!w-[96vw] sm:!w-[88vw] md:!w-[78vw] lg:!w-[71vw]"}
            />
        </Section>
    );
}
