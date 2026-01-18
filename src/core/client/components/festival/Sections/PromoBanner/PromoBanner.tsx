"use client";

import React from "react";
import { CarouselAd } from "../../Carousel";
import { PromoBannerProps, usePromoBanner } from "./hooks/usePromoBanner";

export function PromoBanner(props: PromoBannerProps) {
    const { models } = usePromoBanner(props);

    if (!models.ad) return null;

    const items = Array.from({ length: models.repeatCount }).map((_, i) => (
        <div key={i} className="w-full relative group cursor-pointer overflow-hidden aspect-[12/3]">
            <img
                src={models.ad!.mediaUrl}
                className="w-full h-full object-contain"
                alt={models.alt}
            />
        </div>
    ));

    return (
        <div className="w-full bg-white px-2 py-4">
            <CarouselAd
                className="w-full"
                items={items}
            />
        </div>
    );
}
