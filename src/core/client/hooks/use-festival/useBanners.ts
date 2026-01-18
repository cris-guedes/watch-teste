"use client";

import { useMemo } from "react";
import useSWR from "swr";
import { festivalServices } from "@/core/client/services/festival-services";
import { GetAdsByPosition } from "@/core/client/domain/use-cases/banners/GetAdsByPosition";
import { GetAds } from "@/core/client/domain/use-cases/banners/GetAds";
export const useBanners = () => {
    const getHighlights = () => {
        const { data, error, isLoading } = useSWR(
            "highlights",
            () => festivalServices.getHighlights.execute(),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    const getAdsByPosition = (params: Parameters<GetAdsByPosition["execute"]>[0]) => {
        const { data, error, isLoading } = useSWR(
            ["ads-pos", params.position],
            () => festivalServices.getAdsByPosition.execute(params),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    const getAds = () => {
        const { data, error, isLoading } = useSWR(
            "all-ads",
            () => festivalServices.getAds.execute(),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    return useMemo(() => ({
        getHighlights,
        getAdsByPosition,
        getAds,
    }), []);
};
