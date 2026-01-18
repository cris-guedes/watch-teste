
import { BannerRepository } from '@/core/server/domain/interfaces/repositories/banner.repository';
import { BannerRecord } from '@/core/server/domain/entities';

const banners: BannerRecord[] = [
    { id: 'b1', type: 'HERO', title: 'Avril Lavigne', subtitle: 'Live now at Main Stage', mediaUrl: '/assets/in-live/stage-world.png', link: '/show/1', position: 'TOP' },
    { id: 'b2', type: 'AD', title: 'Heineken', mediaUrl: '/assets/ads/heineken.png', link: 'https://heineken.com', position: 'INTERSTITIAL_1' },
    { id: 'b3', type: 'AD', title: 'Coca-Cola', mediaUrl: '/assets/ads/coca-cola.png', link: 'https://coke.com', position: 'BOTTOM' },
    { id: 'b4', type: 'AD', title: 'Tesla', mediaUrl: '/assets/ads/tesla.png', link: 'https://tesla.com', position: 'SIDE_1' },
    { id: 'b5', type: 'AD', title: 'Apple AirPods Pro', mediaUrl: '/assets/ads/apple.png', link: 'https://apple.com', position: 'SIDE_2' },
    { id: 'b6', type: 'AD', title: 'Nike Air Max', mediaUrl: '/assets/ads/nike.png', link: 'https://nike.com', position: 'SIDE_3' },
];

export class InMemoryBannerRepository implements BannerRepository {
    async findByType(type: 'HERO' | 'AD'): Promise<BannerRecord[]> {
        return banners.filter(b => b.type === type);
    }
    async findByPosition(position: string): Promise<BannerRecord[]> {
        return banners.filter(b => b.position === position);
    }
}
