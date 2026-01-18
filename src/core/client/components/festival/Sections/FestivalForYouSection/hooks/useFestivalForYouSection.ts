export interface Category {
    id: string;
    name: string;
}

export interface FestivalForYouAd {
    mediaUrl: string;
}

export interface FestivalForYouSectionProps {
    cardWidth?: string;
    multiCardWidth?: string;
    categories?: Category[];
    ad?: FestivalForYouAd;
}

export function useFestivalForYouSection(props: FestivalForYouSectionProps) {
    const models = {
        categories: props.categories || [],
        ad: props.ad,
        colors: ["bg-blue-700", "bg-green-700", "bg-purple-700", "bg-orange-700", "bg-pink-700"],
    };

    const operations = {
        getCategoryColor: (index: number) => {
            return models.colors[index % models.colors.length];
        }
    };

    return {
        models,
        operations,
    };
}
