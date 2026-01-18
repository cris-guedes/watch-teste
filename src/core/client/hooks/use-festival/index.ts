"use client";

import { useMemo } from "react";
import { useArtists } from "./useArtists";
import { useBanners } from "./useBanners";
import { useCategories } from "./useCategories";
import { useExclusiveContent } from "./useExclusiveContent";
import { useShows } from "./useShows";

export const useFestival = () => {
    const artists = useArtists();
    const banners = useBanners();
    const categories = useCategories();
    const exclusive = useExclusiveContent();
    const shows = useShows();

    return useMemo(() => ({
        artists,
        banners,
        categories,
        exclusive,
        shows,
    }), [artists, banners, categories, exclusive, shows]);
};
