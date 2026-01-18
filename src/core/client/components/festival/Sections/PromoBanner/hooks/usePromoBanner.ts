export interface Ad {
    id: string;
    title: string;
    mediaUrl: string;
}

export interface PromoBannerProps {
    ad?: Ad;
    alt?: string;
}

export function usePromoBanner(props: PromoBannerProps) {
    const models = {
        ad: props.ad,
        alt: props.alt || "Advertisement",
        repeatCount: 3,
    };

    const operations = {};

    return {
        models,
        operations,
    };
}
