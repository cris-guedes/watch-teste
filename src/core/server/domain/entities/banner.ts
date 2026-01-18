
export interface BannerRecord {
    id: string;
    type: 'HERO' | 'AD';
    title: string;
    subtitle?: string;
    mediaUrl: string;
    link: string;
    position: string;
}

export interface BannerView {
    id: string;
    type: string;
    title: string;
    subtitle: string;
    mediaUrl: string;
    link: string;
}

export class BannerMapper {
    static toView(banner: BannerRecord): BannerView {
        return {
            id: banner.id,
            type: banner.type,
            title: banner.title,
            subtitle: banner.subtitle || '',
            mediaUrl: banner.mediaUrl,
            link: banner.link
        };
    }
}
