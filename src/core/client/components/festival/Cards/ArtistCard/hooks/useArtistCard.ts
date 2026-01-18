export interface ArtistCardProps {
    name: string;
    image: string;
    genre?: string;
    className?: string;
    span?: number;
}

export function useArtistCard(props: ArtistCardProps) {
    const models = {
        name: props.name,
        image: props.image,
        genre: props.genre,
        className: props.className,
        span: props.span || 1
    };

    const operations = {};

    return {
        models,
        operations
    };
}
