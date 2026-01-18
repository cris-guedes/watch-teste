import { ReactNode } from "react";
import { FreeMode } from 'swiper/modules';

export interface ContentCarouselProps {
    items: ReactNode[];
    className?: string;
    itemClassName?: string;
    variant?: 'default' | 'portrait' | 'wide';
    cardWidth?: string;
    multiCardWidth?: string;
}

export function useContentCarousel(props: ContentCarouselProps) {
    const models = {
        items: props.items,
        className: props.className,
        itemClassName: props.itemClassName,
        variant: props.variant || 'default',
        cardWidth: props.cardWidth,
        multiCardWidth: props.multiCardWidth,
        swiperModules: [FreeMode],
        swiperConfig: {
            spaceBetween: 16,
            slidesPerView: 'auto' as const,
            freeMode: {
                enabled: true,
                sticky: false,
            },
            loop: true,
            breakpoints: {
                768: { spaceBetween: 20 },
                1024: { spaceBetween: 24 },
            },
        }
    };

    const operations = {
        getSlideWidth: (item: any) => {
            const span = (item as any)?.props?.span || 1;

            if (span === 2) {
                return models.multiCardWidth;
            }

            return models.cardWidth;
        }
    };

    return {
        models,
        operations
    };
}
