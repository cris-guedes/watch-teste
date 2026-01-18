import { ReactNode } from "react";

export interface LineUpArtist {
    id: string;
    name: string;
    imageUrl: string;
    genre: string;
}

export interface LineUpAd {
    mediaUrl: string;
}

export interface LineUpSectionProps {
    cardWidth?: string;
    multiCardWidth?: string;
    lineup?: LineUpArtist[];
    ad?: LineUpAd;
}

export function useLineUpSection(props: LineUpSectionProps) {
    const models = {
        lineup: props.lineup || [],
        ad: props.ad,
    };

    const operations = {};

    return {
        models,
        operations,
    };
}
