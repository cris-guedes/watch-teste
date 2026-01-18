"use client";

import { useMemo } from "react";
import useSWR from "swr";
import { festivalServices } from "@/core/client/services/festival-services";
export const useExclusiveContent = () => {
    const getExclusiveContent = () => {
        const { data, error, isLoading } = useSWR(
            "exclusive-content",
            () => festivalServices.getExclusiveContent.execute(),
            { revalidateOnFocus: false, shouldRetryOnError: false }
        );

        return { data, error, isLoading };
    };

    return useMemo(() => ({
        getExclusiveContent,
    }), []);
};
