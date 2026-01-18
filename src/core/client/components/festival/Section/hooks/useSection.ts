import { ReactNode } from "react";

export interface SectionProps {
    title: string;
    subtitle?: string;
    href?: string;
    cta?: string;
    children: ReactNode;
}

export function useSection(props: SectionProps) {
    const models = {
        title: props.title,
        subtitle: props.subtitle,
        href: props.href,
        cta: props.cta,
        children: props.children,
    };

    const operations = {};

    return {
        models,
        operations,
    };
}
