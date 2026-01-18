"use client";

import React from "react";
import { Section } from "../../SectionContainer";
import { ContentCarousel } from "../../Carousel";
import { ArtistCard, CarouselAdCard } from "../../Carousel/ContentCarousel/Cards";
import { LineUpSectionProps, useLineUpSection } from "./hooks/useLineUpSection";

export function LineUpSection(props: LineUpSectionProps) {
    const { models } = useLineUpSection(props);

    const items = [
        ...(models.lineup.slice(0, 4).map((artist) => (
            <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.imageUrl}
                genre={artist.genre}
            />
        ))),
        ...(models.ad ? [(
            <CarouselAdCard
                key="section-ad"
                imageUrl={models.ad.mediaUrl}
                span={2}
                aspectRatio="aspect-[6.33/4.2]"
            />
        )] : []),
        ...(models.lineup.slice(4, 6).map((artist) => (
            <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.imageUrl}
                genre={artist.genre}
            />
        )))
    ];

    if (models.lineup.length === 0 && !models.ad) return null;

    return (
        <Section title="Line Up">
            <ContentCarousel
                variant="portrait"
                items={items}
                cardWidth={props.cardWidth || "!w-[30vw] sm:!w-[20vw] md:!w-[14vw] lg:!w-[13.5vw]"}
                multiCardWidth={props.multiCardWidth || "!w-[62vw] sm:!w-[42vw] md:!w-[30vw] lg:!w-[28.5vw]"}
            />
        </Section>
    );
}
