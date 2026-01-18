
export const resources = {
    highlights: {
        base: "/api/highlights",
    },
    lineup: {
        base: "/api/line-up",
    },
    categories: {
        base: "/api/categories",
    },
    shows: {
        live: "/api/shows/live",
        yesterday: "/api/shows/yesterday",
        watchAgain: "/api/shows/watch-again",
    },
    exclusive: {
        base: "/api/exclusive",
    },
    artists: {
        genre: (genre: string) => `/api/artists/genre/${genre}`,
    },
    banners: {
        ads: "/api/banners/ads",
    },
};
