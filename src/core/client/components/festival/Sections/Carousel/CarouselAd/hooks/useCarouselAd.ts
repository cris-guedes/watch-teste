import { ReactNode } from "react";
import { Pagination, Autoplay } from 'swiper/modules';

export interface CarouselAdProps {
    items: ReactNode[];
    className?: string;
}

export function useCarouselAd(props: CarouselAdProps) {
    const models = {
        items: props.items,
        className: props.className,
        swiperModules: [Pagination, Autoplay],
        swiperConfig: {
            spaceBetween: 0,
            slidesPerView: 1,
            pagination: {
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: true,
        }
    };

    const operations = {};

    return {
        models,
        operations
    };
}
