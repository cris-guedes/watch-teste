import { Camera } from "lucide-react";

export interface HeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
}

export function useHero(props: HeroProps) {
    const models = {
        title: props.title,
        subtitle: props.subtitle,
        backgroundImage: props.backgroundImage,
        ctaIcon: Camera,
    };

    const operations = {};

    return {
        models,
        operations,
    };
}
