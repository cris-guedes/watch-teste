"use client";

import { useMemo } from "react";
import useSWR from "swr";
import { festivalServices } from "@/core/client/services/festival-services";
export const useCategories = () => {
    const getFestivalCategories = () => {
        const { data, error, isLoading } = useSWR(
            "categories",
            () => festivalServices.getFestivalCategories.execute(),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    return useMemo(() => ({
        getFestivalCategories,
    }), []);
};
