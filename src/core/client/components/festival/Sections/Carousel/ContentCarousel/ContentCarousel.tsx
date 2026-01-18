"use client"

import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { cn } from "@/lib/utils"
import { ContentCarouselProps, useContentCarousel } from "./hooks/useContentCarousel"

export function ContentCarousel(props: ContentCarouselProps) {
    const { models, operations } = useContentCarousel(props)

    return (
        <div className={cn("w-full relative", models.className)}>
            <Swiper
                modules={models.swiperModules}
                {...models.swiperConfig}
                className="w-full"
            >
                {models.items.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className={cn(
                            "!h-auto",
                            operations.getSlideWidth(item),
                            models.itemClassName
                        )}
                    >
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
