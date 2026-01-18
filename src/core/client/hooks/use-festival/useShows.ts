"use client";

import { useMemo } from "react";
import useSWR from "swr";
import { festivalServices } from "@/core/client/services/festival-services";
export const useShows = () => {
    const getLiveShows = () => {
        const { data, error, isLoading } = useSWR(
            "shows-live",
            () => festivalServices.getLiveShows.execute(),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    const getYesterdayShows = () => {
        const { data, error, isLoading } = useSWR(
            "shows-yesterday",
            () => festivalServices.getYesterdayShows.execute(),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    const getWatchAgain = () => {
        const { data, error, isLoading } = useSWR(
            "shows-watch-again",
            () => festivalServices.getWatchAgain.execute(),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    return useMemo(() => ({
        getLiveShows,
        getYesterdaysShows: getYesterdayShows,
        getWatchAgain,
    }), []);
};
