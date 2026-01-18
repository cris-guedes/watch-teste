"use client"

import * as React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { cn } from "@/lib/utils"
import { CarouselAdProps, useCarouselAd } from "./hooks/useCarouselAd"

export function CarouselAd(props: CarouselAdProps) {
    const { models } = useCarouselAd(props)

    return (
        <div className={cn("relative", models.className)}>
            <Swiper
                modules={models.swiperModules}
                {...models.swiperConfig}
                className="w-full"
            >
                {models.items.map((item, index) => (
                    <SwiperSlide key={index}>
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx global>{`
                .swiper-pagination {
                  position: relative !important;
                  bottom: 0 !important;
                  margin-top: 1.5rem !important;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  gap: 8px;
                }
                .swiper-pagination-bullet {
                  width: 6px !important;
                  height: 6px !important;
                  background: rgba(0, 0, 0, 0.1) !important;
                  opacity: 1 !important;
                  border-radius: 999px !important;
                  transition: all 0.3s ease;
                  margin: 0 !important;
                }
                .swiper-pagination-bullet-active {
                  width: 14px !important;
                  background: #ea580c !important; /* orange-600 */
                }
            `}</style>
        </div>
    )
}
