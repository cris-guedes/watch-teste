export interface ShowCardProps {
    title: string;
    image: string;
    artist: string;
    isLive?: boolean;
    stageName?: string;
    date?: string;
    className?: string;
    span?: number;
}

export function useShowCard(props: ShowCardProps) {
    const models = {
        title: props.title,
        image: props.image,
        artist: props.artist,
        isLive: props.isLive,
        stageName: props.stageName,
        date: props.date,
        className: props.className,
        span: props.span || 1
    };

    const operations = {};

    return {
        models,
        operations
    };
}
