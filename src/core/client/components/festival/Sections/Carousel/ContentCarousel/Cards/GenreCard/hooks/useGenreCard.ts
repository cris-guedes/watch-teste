export interface GenreCardProps {
    name: string;
    description?: string;
    className?: string;
    span?: number;
    color?: string;
}

export function useGenreCard(props: GenreCardProps) {
    const models = {
        name: props.name,
        description: props.description,
        className: props.className,
        color: props.color || "bg-blue-600",
        span: props.span || 1
    };

    const operations = {};

    return {
        models,
        operations
    };
}
