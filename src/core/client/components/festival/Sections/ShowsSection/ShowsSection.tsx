"use client";

import React from "react";
import { Section } from "../../Section";
import { ContentCarousel } from "../../Carousel";
import { ShowCard, ArtistCard, CarouselAdCard } from "../../Cards";
import { ShowsSectionProps, useShowsSection } from "./hooks/useShowsSection";

export function ShowsSection(props: ShowsSectionProps) {
    const { models } = useShowsSection(props);

    const hasData = (models.shows && models.shows.length > 0) || (models.artists && models.artists.length > 0);
    if (!hasData) return null;

    const dataItems = models.shows
        ? models.shows.map((show) => (
            models.variant === 'portrait' ? (
                <ArtistCard
                    key={show.id}
                    name={show.artistName}
                    image={show.thumbnailUrl}
                />
            ) : (
                <ShowCard
                    key={show.id}
                    title={show.title}
                    artist={show.artistName}
                    image={show.thumbnailUrl}
                />
            )
        ))
        : models.artists?.map((artist) => (
            <ArtistCard
                key={artist.id}
                name={artist.name}
                image={artist.imageUrl}
                genre={artist.genre}
            />
        )) || [];

    const items = [
        ...dataItems.slice(0, 2),
        ...(models.ad ? [
            <CarouselAdCard
                key="section-ad"
                imageUrl={models.ad.imageUrl}
                span={models.ad.span || 1}
                aspectRatio={models.ad.aspectRatio || "aspect-video"}
            />
        ] : []),
        ...dataItems.slice(2)
    ];

    return (
        <Section title={models.title} href={models.href}>
            <ContentCarousel
                variant={models.variant}
                items={items || []}
                cardWidth={props.cardWidth || (models.variant === 'portrait' ? "!w-[30vw] sm:!w-[20vw] md:!w-[14vw] lg:!w-[13.5vw]" : "!w-[75vw] sm:!w-[50vw] md:!w-[30vw] lg:!w-[28.5vw]")}
                multiCardWidth={props.multiCardWidth || (models.variant === 'portrait' ? "!w-[62vw] sm:!w-[42vw] md:!w-[30vw] lg:!w-[28.5vw]" : "!w-[92vw] sm:!w-[72vw] md:!w-[62vw] lg:!w-[59vw]")}
            />
        </Section>
    );
}
