export interface ExclusiveContent {
    id: string;
    title: string;
    type: string;
    thumbnailUrl: string;
}

export interface ExclusiveContentAd {
    mediaUrl: string;
}

export interface ExclusiveContentSectionProps {
    cardWidth?: string;
    multiCardWidth?: string;
    content?: ExclusiveContent[];
    ad?: ExclusiveContentAd;
}

export function useExclusiveContentSection(props: ExclusiveContentSectionProps) {
    const models = {
        content: props.content || [],
        ad: props.ad,
    };

    const operations = {};

    return {
        models,
        operations,
    };
}
