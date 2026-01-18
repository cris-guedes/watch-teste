"use client";

import { useMemo } from "react";
import useSWR from "swr";
import { festivalServices } from "@/core/client/services/festival-services";
import { GetLineUp } from "@/core/client/domain/use-cases/artists/GetLineUp";
import { GetArtistsByGenre } from "@/core/client/domain/use-cases/artists/GetArtistsByGenre";
export const useArtists = () => {
    const getLineUp = (params?: Parameters<GetLineUp["execute"]>[0]) => {
        const { data, error, isLoading } = useSWR(
            ["lineup", params],
            () => festivalServices.getLineUp.execute(params),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    const getArtistsByGenre = (params: Parameters<GetArtistsByGenre["execute"]>[0]) => {
        const { data, error, isLoading } = useSWR(
            params.genre ? ["artists", params.genre] : null,
            () => festivalServices.getArtistsByGenre.execute(params),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    return useMemo(() => ({
        getLineUp,
        getArtistsByGenre,
    }), []);
};
