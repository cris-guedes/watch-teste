
import { BannerRecord } from '@/core/server/domain/entities';

export interface BannerRepository {
    findByType(type: 'HERO' | 'AD'): Promise<BannerRecord[]>;
    findByPosition(position: string): Promise<BannerRecord[]>;
}
