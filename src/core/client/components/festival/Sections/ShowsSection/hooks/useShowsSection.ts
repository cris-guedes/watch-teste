export interface ShowsSectionShow {
    id: string;
    title: string;
    artistName: string;
    thumbnailUrl: string;
}

export interface Artist {
    id: string;
    name: string;
    imageUrl: string;
    genre: string;
}

export interface ShowsSectionProps {
    title: string;
    href?: string;
    shows?: ShowsSectionShow[];
    artists?: Artist[];
    itemClassName?: string;
    variant?: 'default' | 'portrait';
    ad?: {
        imageUrl: string;
        span?: number;
        aspectRatio?: string;
    };
    cardWidth?: string;
    multiCardWidth?: string;
}

export function useShowsSection(props: ShowsSectionProps) {
    const models = {
        title: props.title,
        href: props.href,
        shows: props.shows,
        artists: props.artists,
        itemClassName: props.itemClassName,
        variant: props.variant || 'default',
        ad: props.ad,
    };

    const operations = {};

    return {
        models,
        operations,
    };
}
