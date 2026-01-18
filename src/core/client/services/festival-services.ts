
import { makeGetLineUp } from "@/core/client/domain/use-cases/artists/GetLineUp";
import { makeGetArtistsByGenre } from "@/core/client/domain/use-cases/artists/GetArtistsByGenre";
import { makeGetHighlights } from "@/core/client/domain/use-cases/banners/GetHighlights";
import { makeGetAdsByPosition } from "@/core/client/domain/use-cases/banners/GetAdsByPosition";
import { makeGetAds } from "@/core/client/domain/use-cases/banners/GetAds";
import { makeGetFestivalCategories } from "@/core/client/domain/use-cases/categories/GetFestivalCategories";
import { makeGetExclusiveContent } from "@/core/client/domain/use-cases/exclusive-content/GetExclusiveContent";
import { makeGetLiveShows } from "@/core/client/domain/use-cases/shows/GetLiveShows";
import { makeGetYesterdayShows } from "@/core/client/domain/use-cases/shows/GetYesterdayShows";
import { makeGetWatchAgain } from "@/core/client/domain/use-cases/shows/GetWatchAgain";

export const festivalServices = {
    getLineUp: makeGetLineUp(),
    getArtistsByGenre: makeGetArtistsByGenre(),
    getHighlights: makeGetHighlights(),
    getAdsByPosition: makeGetAdsByPosition(),
    getAds: makeGetAds(),
    getFestivalCategories: makeGetFestivalCategories(),
    getExclusiveContent: makeGetExclusiveContent(),
    getLiveShows: makeGetLiveShows(),
    getYesterdayShows: makeGetYesterdayShows(),
    getWatchAgain: makeGetWatchAgain(),
};
