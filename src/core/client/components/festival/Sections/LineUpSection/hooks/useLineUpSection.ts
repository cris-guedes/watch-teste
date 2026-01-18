import { ReactNode } from "react";

export interface Artist {
    id: string;
    name: string;
    imageUrl: string;
    genre: string;
}

export interface Ad {
    mediaUrl: string;
}

export interface LineUpSectionProps {
    cardWidth?: string;
    multiCardWidth?: string;
    lineup?: Artist[];
    ad?: Ad;
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
