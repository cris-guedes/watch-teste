"use client";

import React from "react";
import { Section } from "../../SectionContainer";
import { ContentCarousel } from "../../Carousel";
import { ShowCard } from "../../Carousel/ContentCarousel/Cards";
import { InLiveSectionProps, useInLiveSection } from "./hooks/useInLiveSection";

export function InLiveSection(props: InLiveSectionProps) {
    const { models } = useInLiveSection(props);

    if (models.shows.length === 0) return null;

    return (
        <Section title="In Live" href="/live">
            <ContentCarousel
                items={models.shows.map((show) => (
                    <ShowCard
                        key={show.id}
                        title={show.title}
                        artist={show.artistName}
                        image={show.thumbnailUrl}
                        isLive={show.isLive}
                        stageName={show.stageName}
                        date={show.date}
                    />
                ))}
                cardWidth={props.cardWidth || "!w-[75vw] sm:!w-[50vw] md:!w-[30vw] lg:!w-[28.5vw]"}
            />
        </Section>
    );
}
