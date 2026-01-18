export interface InLiveShow {
    id: string;
    title: string;
    artistName: string;
    thumbnailUrl: string;
    isLive?: boolean;
    stageName?: string;
    date?: string;
}

export interface InLiveSectionProps {
    cardWidth?: string;
    shows?: InLiveShow[];
}

export function useInLiveSection(props: InLiveSectionProps) {
    const models = {
        shows: props.shows || [],
    };

    const operations = {};

    return {
        models,
        operations,
    };
}
